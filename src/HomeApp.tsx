import { useEffect } from 'react'
import { nbsp } from './lib/typo'
import { HomeIntro } from './sections/home/Intro'
import { HomeCases } from './sections/home/Cases'

export function HomeApp() {
  // Kill hanging prepositions site-wide, same as the other pages (see src/App.tsx).
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
      <main className="flex w-full flex-col items-center gap-[64px] px-[16px] py-[48px] lg:gap-[180px] lg:px-[30px] lg:py-[100px]">
        <div className="flex w-full max-w-content flex-col items-start">
          <HomeIntro />
        </div>
        <div className="flex w-full max-w-content flex-col items-start">
          <HomeCases />
        </div>
      </main>
    </div>
  )
}
