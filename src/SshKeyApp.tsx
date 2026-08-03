import { useEffect } from 'react'
import { nbsp } from './lib/typo'
import { Header } from './components/Header'
import { Footer } from './sections/Footer'
import { TableOfContents, type TocSection } from './components/TableOfContents'
import { SshHero } from './sections/ssh-key/Hero'
import { SshContext } from './sections/ssh-key/Context'
import { SshProblems } from './sections/ssh-key/Problems'
import { SshAnalysis } from './sections/ssh-key/Analysis'
import { SshSolutions } from './sections/ssh-key/Solutions'
import { SshOutcome } from './sections/ssh-key/Outcome'

const sections: TocSection[] = [
  { id: 'hero', label: 'SSH-ключ', dark: true },
  { id: 'context', label: 'Контекст', dark: false },
  { id: 'problems', label: 'Проблемы', dark: false },
  { id: 'analysis', label: 'Анализ ситуации', dark: false },
  { id: 'solutions', label: 'Поиск решений', dark: true },
  { id: 'outcome', label: 'Итоги', dark: false },
]

export function SshKeyApp() {
  // Kill hanging prepositions site-wide, same as the flavour-case (see src/App.tsx).
  useEffect(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const tag = node.parentElement?.tagName
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') {
          return NodeFilter.FILTER_REJECT
        }
        return node.nodeValue && /\S/.test(node.nodeValue)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT
      },
    })
    const nodes: Text[] = []
    while (walker.nextNode()) nodes.push(walker.currentNode as Text)
    for (const n of nodes) {
      const next = nbsp(n.nodeValue as string)
      if (next !== n.nodeValue) n.nodeValue = next
    }
  }, [])

  return (
    <div className="relative w-full overflow-x-clip bg-[var(--white)]">
      <Header />
      <TableOfContents sections={sections} />
      <main className="w-full">
        <SshHero />
        <SshContext />
        <SshProblems />
        <SshAnalysis />
        <SshSolutions />
        <SshOutcome />
      </main>
      <Footer otherCase={{ title: 'Вычислительные ресурсы', href: '/flavour-case/' }} />
    </div>
  )
}
