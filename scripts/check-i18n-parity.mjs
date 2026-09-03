import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const SOURCE_DIRS = ['basics', 'aircraft', 'game', 'blog', 'support']
const SOURCE_ROOT_FILES = ['index.md', 'about.md', 'faq.md', 'feedback.md', 'privacy-policy.md']
const LOCALES = ['zh', 'zh-tw', 'ja', 'ru', 'de', 'es', 'fr', 'ko']

function walkMarkdownFiles(relDir) {
  const absDir = path.join(ROOT, relDir)
  if (!fs.existsSync(absDir)) return []

  const files = []
  const stack = [relDir]

  while (stack.length > 0) {
    const currentRel = stack.pop()
    const currentAbs = path.join(ROOT, currentRel)
    const entries = fs.readdirSync(currentAbs, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue
      const nextRel = path.join(currentRel, entry.name)
      if (entry.isDirectory()) {
        stack.push(nextRel)
      } else if (entry.isFile() && nextRel.endsWith('.md')) {
        files.push(nextRel)
      }
    }
  }

  return files
}

const sourceFiles = [
  ...SOURCE_ROOT_FILES.filter((file) => fs.existsSync(path.join(ROOT, file))),
  ...SOURCE_DIRS.flatMap((dir) => walkMarkdownFiles(dir))
].sort()

const missing = []

for (const sourceFile of sourceFiles) {
  for (const locale of LOCALES) {
    const localizedFile = path.join(locale, sourceFile)
    if (!fs.existsSync(path.join(ROOT, localizedFile))) {
      missing.push({ locale, sourceFile, localizedFile })
    }
  }
}

if (missing.length > 0) {
  console.error('i18n parity check failed. Missing localized pages:')
  for (const item of missing) {
    console.error(`- [${item.locale}] missing: ${item.localizedFile} (source: ${item.sourceFile})`)
  }
  process.exit(1)
}

console.log(`i18n parity check passed. Verified ${sourceFiles.length} source pages across locales: ${LOCALES.join(', ')}`)
