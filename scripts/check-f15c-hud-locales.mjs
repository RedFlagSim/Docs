import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Structural parity supplements check-i18n-parity, which only checks file existence.
// Translated prose still needs human review; HUD readouts and anchor IDs are invariant.
const root = fileURLToPath(new URL('../', import.meta.url))
const locales = ['', 'zh', 'zh-tw', 'ja', 'ko', 'de', 'fr', 'es', 'ru']
const page = 'aircraft/f15c/hud-operation.md'
const read = locale => fs.readFileSync(path.join(root, locale, page), 'utf8')
const collect = (text, pattern) => [...text.matchAll(pattern)].map(match => match[1])
const anchors = text => collect(text, /<a id="([^"]+)"/g)
const images = text => collect(text, /(?:src="|\]\()(\/assets\/[^"\)]+)/g)
const navigation = text => collect(text, /<a href="#([^"]+)"/g)
const literals = text => [...new Set(collect(text, /`([^`]+)`/g))].sort()
const source = read('')
const expectedIds = anchors(source)
const expectedImages = images(source)
const sourceSections = source.split(/(?=<a id="hud-)/)
const expectedLiterals = new Map(sourceSections.map(section => [anchors(section)[0], literals(section)]))
const built = process.argv.includes('--built')

for (const locale of locales) {
  const label = locale || 'en'
  const text = read(locale)
  const ids = anchors(text)
  assert.deepEqual(ids, expectedIds, `${label}: missing or reordered sections`)
  assert.equal(new Set(ids).size, ids.length, `${label}: duplicate anchors`)
  assert.deepEqual(images(text), expectedImages, `${label}: missing or reordered images`)
  assert.deepEqual(navigation(text), navigation(source), `${label}: changed chapter/numbered index`)
  assert.deepEqual(collect(text, /^(#{1,4}) /gm), collect(source, /^(#{1,4}) /gm), `${label}: heading hierarchy`)
  for (const target of collect(text, /(?:href="#|\]\(#)([^"\)]+)/g)) {
    assert.ok(ids.includes(target), `${label}: broken link #${target}`)
  }
  for (const image of expectedImages) {
    assert.ok(fs.statSync(path.join(root, image)).size > 0, `${label}: missing asset ${image}`)
  }
  for (const section of text.split(/(?=<a id="hud-)/)) {
    const id = anchors(section)[0]
    for (const literal of expectedLiterals.get(id)) {
      assert.ok(literals(section).includes(literal), `${label}: changed HUD readout ${literal} in ${id}`)
    }
    assert.ok(section.split('\n').some(line => line.length > 20 && !/^(?:\s*<|#|!|\[)/.test(line)) || images(section).length > 0, `${label}: empty section ${id}`)
  }
  assert.doesNotMatch(text, /full translation will|traduction complète sera|traducción completa se|vollständige Übersetzung folgt|完整翻譯.*後續/i, `${label}: translation placeholder`)
  if (built) {
    const file = path.join(root, '.vitepress/dist', locale, 'Docs', page.replace(/\.md$/, '.html'))
    const html = fs.readFileSync(file, 'utf8')
    for (const id of ids) assert.ok(html.includes(`id="${id}"`), `${label}: missing rendered anchor ${id}`)
    assert.doesNotMatch(html, /\*\*(?:[^<\n]{1,180})\*\*/, `${label}: unrendered emphasis`)
    const renderedImages = collect(html, /<img[^>]+src="([^"]+)"/g)
    const assetName = image => path.basename(image).replace(/\.[^.]+(?=\.[^.]+$)/, '')
    assert.deepEqual(renderedImages.map(assetName), expectedImages.map(image => path.basename(image)), `${label}: rendered image order`)
    for (const image of renderedImages) {
      const asset = path.join(root, '.vitepress/dist', image)
      assert.ok(fs.statSync(asset).size > 0, `${label}: missing built asset ${image}`)
      const original = expectedImages.find(candidate => path.basename(candidate) === assetName(image))
      assert.ok(fs.readFileSync(asset).equals(fs.readFileSync(path.join(root, original))), `${label}: changed image contents ${image}`)
    }
  }
  console.log(`${label}: ${ids.length} anchors, ${expectedImages.length} images, indices and HUD readouts OK${built ? ' (built HTML checked)' : ''}`)
}
