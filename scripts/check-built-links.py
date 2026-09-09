from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote,urljoin
import json
root=Path(__file__).resolve().parents[1]/'.vitepress/dist'; pages={};problems=[]
class Page(HTMLParser):
 def __init__(self):super().__init__();self.ids=set();self.links=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.add(a['id'])
  if tag=='a' and a.get('href'):self.links.append(('href',a['href']))
  if tag in ['img','script'] and a.get('src'):self.links.append(('src',a['src']))
for p in root.rglob('*.html'):
 h=Page();h.feed(p.read_text());pages[p.relative_to(root).as_posix()]=h
if not pages:
 raise SystemExit('No built pages found. Run npm run docs:build first.')
for name,h in pages.items():
 for kind,ref in h.links:
  u=urlsplit(urljoin('https://local/'+name,ref))
  if u.netloc!='local' or u.scheme not in ['http','https']:continue
  path=unquote(u.path).lstrip('/');candidates=[path,path+'index.html' if (not path or path.endswith('/')) else path+'.html',path.rstrip('/')+'/index.html']
  target=next((x for x in candidates if (root/x).is_file()),None)
  if not target:problems.append([name,ref,'missing path']);continue
  if kind=='href' and u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:problems.append([name,ref,'missing anchor'])
print(json.dumps({'pages':len(pages),'problems':problems},ensure_ascii=False,indent=2))

if problems: raise SystemExit(1)
