import { useEffect } from 'react'
import { nbsp } from './lib/typo'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Context } from './sections/Context'
import { Problems } from './sections/Problems'
import { SearchSolutions } from './sections/SearchSolutions'
import { ChipsSolution } from './sections/ChipsSolution'
import { Prototypes } from './sections/Prototypes'
import { Research } from './sections/Research'
import { Insights } from './sections/Insights'
import { Outcome } from './sections/Outcome'
import { Footer } from './sections/Footer'
import { TableOfContents, defaultSections } from './components/TableOfContents'

export default function App() {
  // Kill hanging prepositions site-wide: once the (static) content is mounted,
  // bind short prepositions/conjunctions to the next word with a non-breaking space.
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
      <Header sections={defaultSections} />
      <TableOfContents />
      <main className="w-full">
        <Hero />
        <Context />
        <Problems />
        <SearchSolutions />
        <ChipsSolution />
        <Prototypes />
        <Research />
        <Insights />
        <Outcome />
      </main>
      <Footer otherCase={{ title: 'Кейс SSH-ключей', href: '/ssh-key-case/' }} />
    </div>
  )
}
