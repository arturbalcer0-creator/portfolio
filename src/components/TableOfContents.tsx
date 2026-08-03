import { useEffect, useState } from 'react'
import { smoothScrollTo } from '../lib/scroll'

export type TocSection = { id: string; label: string; dark: boolean }

const defaultSections: TocSection[] = [
  { id: 'hero', label: 'Вычислительные ресурсы', dark: true },
  { id: 'context', label: 'Контекст', dark: false },
  { id: 'problems', label: 'Проблемы', dark: true },
  { id: 'search', label: 'Поиск решений', dark: false },
  { id: 'chips', label: 'Решение — Чипсы', dark: true },
  { id: 'prototypes', label: 'Прототипы', dark: false },
  { id: 'research', label: 'Исследование', dark: false },
  { id: 'insights', label: 'Инсайты', dark: true },
  { id: 'outcome', label: 'Итоги', dark: true },
]

export function TableOfContents({ sections = defaultSections }: { sections?: TocSection[] }) {
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - 32)
  }

  // Colour the bars to contrast with the section currently behind the (vertically centered) nav.
  const activeDark = sections.find((s) => s.id === active)?.dark ?? false
  const barColor = activeDark ? 'bg-[var(--white)]' : 'bg-[var(--ink)]'
  // Inactive bars: 12% on dark sections, 24% on light ones.
  const inactiveOpacity = activeDark ? 'opacity-[0.12]' : 'opacity-[0.24]'

  return (
    <nav
      aria-label="Навигация по кейсу"
      className="group fixed right-[32px] top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-[12px] rounded-[20px] p-[12px] transition-colors duration-300 hover:bg-[rgba(20,20,20,0.92)] hover:backdrop-blur-md lg:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id
        return (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            className="flex items-center justify-end gap-[12px]"
            title={s.label}
          >
            <span className="max-h-0 max-w-0 overflow-hidden whitespace-nowrap text-[14px] font-medium leading-[24px] text-[color:var(--white-80)] opacity-0 transition-all duration-300 group-hover:max-h-[24px] group-hover:max-w-[220px] group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={`h-[3px] shrink-0 rounded-full transition-all duration-300 group-hover:!bg-[var(--white)] ${barColor} ${
                isActive
                  ? 'w-[28px] opacity-100'
                  : `w-[16px] ${inactiveOpacity} group-hover:w-[22px] group-hover:opacity-70`
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
