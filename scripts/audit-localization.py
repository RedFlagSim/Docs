"""Audit page coverage and structural parity; differences require editorial review.
Run: python3 scripts/audit-localization.py > /tmp/localization-audit.json
"""
from pathlib import Path
import json,re,sys
ROOT=Path(__file__).resolve().parents[1]
LOCALES=['zh','zh-tw','ja','ko','ru','de','es','fr']
files=sorted({*filter(lambda p:p.exists(),[ROOT/n for n in ['index.md','about.md','faq.md','feedback.md','privacy-policy.md','api-examples.md','markdown-examples.md']]),*(p for d in ['Docs','basics','aircraft','game','blog','support'] for p in (ROOT/d).rglob('*.md'))})
placeholder=re.compile(r'本頁暫無|本页暂无|Эта страница пока недоступна|not yet available|Diese Seite ist|Cette page n.est pas|Esta página (?:aún|todavía)|このページ(?:は|の)|이 페이지(?:는|의)',re.I)
def stats(s):
 return {'headings':len(re.findall(r'^#{1,6} ',s,re.M)), 'images': sorted(set(re.findall(r'/assets/[^\s\)\"\'<>]+',s))), 'anchors':sorted(set(a or b for a,b in re.findall(r'<a id="([^"]+)"|\{#([^}]+)\}',s))), 'tables':len(re.findall(r'^\|',s,re.M))}
report={'sourcePages':len(files),'locales':{},'note':'Structural differences are review candidates, not proof of mistranslation. Matching structure does not prove semantic equivalence. Internal private notes and asset README files excluded.'}
for loc in LOCALES:
 result={'missing':[],'placeholders':[],'identicalEnglish':[],'differences':[]}
 for p in files:
  rel=p.relative_to(ROOT);q=ROOT/loc/rel
  if not q.exists():result['missing'].append(str(rel));continue
  a=p.read_text();b=q.read_text()
  if len(b)<1200 and placeholder.search(b):result['placeholders'].append(str(rel));continue
  if a.strip()==b.strip() and '<WebsiteHome />' not in a:result['identicalEnglish'].append(str(rel))
  sa=stats(a);sb=stats(b);diff={}
  for k in sa:
   if sa[k]!=sb[k]:
    if k in ['images','anchors']:diff[k]={'missing':sorted(set(sa[k])-set(sb[k])),'extra':sorted(set(sb[k])-set(sa[k]))}
    else:diff[k]={'en':sa[k],'localized':sb[k]}
  if str(rel)=='basics/tac-editor.md' and loc=='zh' and diff.get('anchors')=={'missing':[], 'extra':['牛眼与-geofence']}:
   del diff['anchors']  # Preserve the previously published Chinese anchor.
  if diff:result['differences'].append({'page':str(rel),'changes':diff})
 report['locales'][loc]=result
if '--check' in sys.argv:
 failures={loc:r for loc,r in report['locales'].items() if any(r.values())}
 if failures:
  print(json.dumps(failures,ensure_ascii=False,indent=2));sys.exit(1)
 print(f"Localization integrity passed: {len(files)} pages × 9 languages; no missing pages, placeholders, English copies, or structural/asset drift.")
else:
 print(json.dumps(report,ensure_ascii=False,indent=2))
