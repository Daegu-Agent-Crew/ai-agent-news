'use strict';
const $=id=>document.getElementById(id);
const labels={model:'모델',tool:'도구',industry:'산업',framework:'프레임워크',research:'연구'};
let days=[],selected='';
function node(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n}
function link(text,url){const a=node('a',text);a.href=url;return a}
function safeURL(url){try{const u=new URL(url);return ['https:','http:'].includes(u.protocol)?u.href:''}catch{return ''}}
function matching(n){return (!$('category').value||n.category===$('category').value)&&(! $('search').value||`${n.title} ${n.summary} ${n.source}`.toLowerCase().includes($('search').value.toLowerCase()))}
function choose(date){selected=date;$('date').value=date;const u=new URL(location.href);u.searchParams.set('date',date);history.replaceState(null,'',u);render()}
function render(){
 const filtered=days.filter(d=>!$('search').value&&!$('category').value||d.news.some(matching));
 $('days').replaceChildren();
 filtered.forEach(d=>{const b=node('button',d.date);b.append(node('small',`뉴스 ${d.news.length} · 그림책 ${d.images.length}`));if(d.date===selected)b.setAttribute('aria-current','date');b.onclick=()=>choose(d.date);$('days').append(b)});
 const edition=$('edition');edition.replaceChildren();const d=days.find(d=>d.date===selected);
 if(!d){edition.append(node('p','이 날짜에는 저장된 기록이 없습니다. 다른 날짜를 선택하세요.','empty'));return}
 const head=node('div',undefined,'edition-head');head.append(node('h2',`${d.date}의 AI 소식`));const share=node('button','날짜 링크 복사');share.onclick=async()=>{try{await navigator.clipboard.writeText(location.href);share.textContent='복사했습니다'}catch{$('status').textContent=`이 주소를 복사하세요: ${location.href}`}};head.append(share);edition.append(head);
 const books=node('div',undefined,'books');d.images.forEach(i=>{const f=node('figure',undefined,'book');const b=node('button');b.setAttribute('aria-label',`${i.label} 확대`);const img=node('img');img.src=i.path;img.alt=`${d.date} ${i.label}`;img.loading='lazy';img.onerror=()=>{b.replaceChildren(node('p','이미지를 불러오지 못했습니다. 원본 링크를 이용하세요.'));b.disabled=true};b.append(img);b.onclick=()=>{$('large').src=i.path;$('viewer').showModal()};const cap=node('figcaption');cap.append(node('span',i.label),link('원본 열기 ↗',i.path));f.append(b,cap);books.append(f)});edition.append(books);
 if(!d.images.length)edition.append(node('p','그림책 준비 중 · 업로드 후 이 페이지에 자동으로 표시됩니다.','empty'));
 d.briefings.forEach(p=>edition.append(link('저녁 브리핑 읽기 ↗','https://github.com/Daegu-Agent-Crew/ai-agent-news/blob/main/'+p)));
 edition.append(node('h2',`오늘의 뉴스 · ${d.news.filter(matching).length}건`));const grid=node('div',undefined,'news-grid');
 d.news.filter(matching).forEach(n=>{const a=node('article',undefined,'news');a.append(node('span',`${labels[n.category]||n.category||'뉴스'} · ${n.source}`,'tag'),node('h3',n.title),node('p',n.summary));const links=node('div',undefined,'links');links.append(link('상세 읽기',`index.html#/news/${encodeURIComponent(n.slug)}`));const original=safeURL(n.url);if(original){const l=link('원문 ↗',original);l.target='_blank';l.rel='noopener noreferrer';links.append(l)}links.append(link('기록 관리','https://github.com/Daegu-Agent-Crew/ai-agent-news/blob/main/'+n.path));a.append(links);grid.append(a)});edition.append(grid);
 if(!grid.children.length)grid.append(node('p','조건에 맞는 뉴스가 없습니다. 검색어나 분야를 바꿔보세요.','empty'));
 $('status').textContent=filtered.length?'':'검색 결과가 없습니다.';
}
$('close').onclick=()=>$('viewer').close();$('viewer').onclick=e=>{if(e.target===$('viewer'))$('viewer').close()};
$('date').onchange=()=>choose($('date').value);$('latest').onclick=()=>{ $('search').value='';$('category').value='';if(days.length)choose(days[0].date)};
for(const id of ['search','category'])$(id).addEventListener('input',()=>{const found=days.filter(d=>d.news.some(matching));if(found.length&&!found.some(d=>d.date===selected))choose(found[0].date);else render()});
fetch('archive-data.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error(r.status);return r.json()}).then(data=>{days=data.days;$('stats').textContent=`${days.length}일의 기록 · 뉴스 ${days.reduce((s,d)=>s+d.news.length,0)}건 · 그림책 ${days.reduce((s,d)=>s+d.images.length,0)}장`;if(days.length){$('date').min=days.at(-1).date;$('date').max=days[0].date;choose(new URL(location.href).searchParams.get('date')||days[0].date)}else $('edition').textContent='아직 저장된 기록이 없습니다.'}).catch(()=>{$('stats').textContent='보관함을 불러오지 못했습니다.';$('edition').append(node('p','잠시 후 새로고침해 주세요. GitHub에서 원본 기록을 확인할 수도 있습니다.','empty'))});
