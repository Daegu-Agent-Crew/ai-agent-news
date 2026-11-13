"""Build a public, tracked-files-only daily news/picture-book index."""
import json, re, subprocess
from pathlib import Path
from datetime import datetime, timezone
ROOT = Path(__file__).resolve().parents[1]

def build():
    tracked = subprocess.check_output(['git', 'ls-files'], cwd=ROOT, text=True).splitlines()
    days = {}
    def day(date):
        return days.setdefault(date, dict(date=date, news=[], images=[], briefings=[]))
    for name in tracked:
        path = ROOT / name
        if not path.is_file():
            continue
        match = re.search(r'(\d{4}-\d{2}-\d{2})', path.name)
        if not match:
            continue
        date = match[1]
        if name.startswith('context/records/') and name.endswith('.md'):
            body = path.read_text()
            def meta(key):
                m = re.search(r'\*\*' + re.escape(key) + r'\*\*\s*:\s*(.*)', body)
                return m[1].strip() if m else ''
            collected = meta('수집일')[:10]
            if re.fullmatch(r'\d{4}-\d{2}-\d{2}', collected): date = collected
            title = re.search(r'^#\s+(.+)', body, re.M)
            summary = re.search(r'^## 핵심 요약\s*\n(.*?)(?=^## |\Z)', body, re.M | re.S)
            text = re.sub(r'(?m)^>\s*|\*\*', '', summary[1]).strip() if summary else ''
            day(date)['news'].append(dict(title=title[1] if title else path.stem, summary=text[:1400], category=meta('카테고리'), source=meta('소스'), url=meta('원문 URL'), path=name, slug=path.stem))
        elif name.startswith('assets/') and re.match(r'(news-digest|briefing)-\d{4}-\d{2}-\d{2}.*\.(png|jpg|webp)$', path.name):
            day(date)['images'].append(dict(path=name, label=('저녁 브리핑' if path.name.startswith('briefing') else '아침 그림책') + (' · 수정본' if re.search(r'\d{2}-(?:morning|soft)', path.name) else '')))
        elif name.startswith('context/briefings/') and name.endswith('.md'):
            day(date)['briefings'].append(name)
    result = dict(updatedAt=datetime.now(timezone.utc).isoformat(), days=sorted(days.values(), key=lambda d:d['date'], reverse=True))
    (ROOT/'archive-data.json').write_text(json.dumps(result, ensure_ascii=False), encoding='utf-8')
    print(f"{len(days)} days, {sum(len(d['news']) for d in days.values())} news, {sum(len(d['images']) for d in days.values())} images")
    return result
if __name__ == '__main__': build()
