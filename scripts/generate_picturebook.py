#!/usr/bin/env python3
"""Shared reference-bound launcher. Does not perform image quality review."""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
REFERENCE = 'assets/characters/teumsae-v1.png'
GUIDE = 'context/characters/README.md'

def prepare(root, scene, output):
    ref = root / REFERENCE
    guide = root / GUIDE
    if not ref.is_file() or ref.read_bytes()[:8] != b'\x89PNG\r\n\x1a\n':
        raise ValueError('Required character reference PNG is missing/invalid; no text-only fallback')
    text = guide.read_text()
    if not all(name in text for name in ('두몽', '리루', '코핀')):
        raise ValueError('Character guide is missing the current cast')
    target = (root / output).resolve()
    if target.parent != (root / 'assets').resolve() or target.suffix != '.png':
        raise ValueError('Output must be a PNG directly in assets/')
    prompt = f'''Create ONE finished Korean picturebook using the built-in image generation tool.
MANDATORY IDENTITY REFERENCE: {ref.resolve()}
The image attached to this request is the character model sheet, not merely inspiration.
For image_gen, pass this exact path as referenced_image_paths. For an equivalent tool,
use its actual image-reference input. If unavailable, STOP and report reference unsupported;
never silently generate text-only or substitute generic mascots.
Use Dumong/두몽, Riru/리루, Kopin/코핀 as the recurring leading actors.
Humans may appear only as necessary supporting figures. Companies and models use signs,
not invented branded robot protagonists. Each zone must give the team purposeful action,
physical interaction and a reaction/helping beat, not spectators in a row.
Preserve especially Riru's SHORT leaf ears and FLAT paddle tail with TWO cream bands;
Kopin's cream WINDOW shell and CUBE-tipped antennae; Dumong's wide horizontal nose.
When a scene below conflicts with these rules, redesign the staging, preserve the news facts.
Do not invent witness accounts or imply fictional experiments independently prove news claims.
Character guide and action direction (authoritative):
{text}
Scene/news specification:
{scene}
Save/copy the result from THIS tool call to {target}.
Do not pick the latest image from other sessions. No visual/OCR/QC review or quality retries.
Return the saved path or an explicit generation error. No publish or messaging operations.
'''
    return {
        'prompt': prompt,
        'reference': str(ref.resolve()),
        'reference_sha256': hashlib.sha256(ref.read_bytes()).hexdigest(),
        'guide_sha256': hashlib.sha256(text.encode()).hexdigest(),
        'output': str(target),
        'command': ['codex', 'exec', '-s', 'workspace-write', '--skip-git-repo-check',
                    '-C', str(root.resolve()), '--image', str(ref.resolve()), '-',],
    }

def main():
    p = argparse.ArgumentParser()
    p.add_argument('--scene', type=Path, required=True)
    p.add_argument('--output', required=True)
    p.add_argument('--request', type=Path, required=True, help='Persist exact request and input hashes')
    p.add_argument('--dry-run', action='store_true')
    a = p.parse_args()
    request = prepare(ROOT, a.scene.read_text(), a.output)
    a.request.parent.mkdir(parents=True, exist_ok=True)
    a.request.write_text(json.dumps(request, ensure_ascii=False, indent=2))
    if a.dry_run:
        print('READY: reference attached; request saved; generation not run')
        return
    target = Path(request['output'])
    if target.exists():
        raise SystemExit('Output exists; choose a new explicit revision path, never silently reuse')
    result = subprocess.run(request['command'], input=request['prompt'], text=True, timeout=480)
    if result.returncode:
        raise SystemExit(result.returncode)
    if not target.is_file() or target.stat().st_size < 10000:
        raise SystemExit('Generation did not save the requested output; no unrelated-image fallback')
    print(target)

if __name__ == '__main__':
    main()
