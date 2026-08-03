import { useEffect } from 'react'
import { nbsp } from './lib/typo'
import { Header } from './components/Header'
import { Footer } from './sections/Footer'
import { AboutHero } from './sections/about/Hero'
import { AboutContent } from './sections/about/Content'

export function AboutApp() {
  // Kill hanging prepositions site-wide, same as the case pages (see src/App.tsx).
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
      <main className="w-full">
        <AboutHero />
        <AboutContent />
      </main>
      <Footer
        cases={[
          { title: 'Вычислительные ресурсы', href: '/flavour-case/' },
          { title: 'Кейс SSH-ключей', href: '/ssh-key-case/' },
        ]}
      />
    </div>
  )
}
