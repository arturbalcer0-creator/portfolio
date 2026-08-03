import { useEffect, useState } from 'react'
import { smoothScrollTo } from '../lib/scroll'

const menuItems = [
  { label: 'Главная', href: '/' },
  { label: 'Вычислительные ресурсы', href: '/flavour-case/' },
  { label: 'SSH-ключ', href: '/ssh-key-case/' },
  { label: 'О себе', href: '/about/' },
]

function PillButton({
  visible,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & { visible: boolean }) {
  return (
    <button
      {...props}
      className={`t-body-tight pointer-events-auto whitespace-nowrap rounded-[var(--radius-full)] bg-[var(--white)] px-[20px] py-[12px] text-[color:var(--black-50)] shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-[16px] opacity-0'
      } ${className ?? ''}`}
    />
  )
}

/** Fixed header — centered name (desktop only), menu + back-to-top pills that hide on scroll-down. */
export function Header() {
  const [pillsVisible, setPillsVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY

      // The footer is a full-height block now — force the pills back on once the user
      // has scrolled halfway through it, since hide-on-scroll-down would otherwise strand
      // them with no way to reach "Меню"/"В начало" deep inside it.
      const footer = document.querySelector('footer')
      const scrolledIntoFooter = footer ? -footer.getBoundingClientRect().top : -Infinity
      const pastFooterHalfway =
        !!footer && scrolledIntoFooter > 0 && scrolledIntoFooter / footer.getBoundingClientRect().height >= 0.5

      if (pastFooterHalfway || y < 10 || delta < -4) setPillsVisible(true)
      else if (delta > 4) setPillsVisible(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Title lives outside the z-50 pill row: nesting a mix-blend-mode element inside
       *  a z-indexed ancestor puts it in its own compositing layer, which breaks blending
       *  against the rest of the page (verified in-browser — text on white sections went invisible).
       *  Transform is inline (not a Tailwind translate utility) so the centering translate and the
       *  hide-on-scroll offset can combine into one value. */}
      <p
        className={`t-body-tight pointer-events-none fixed left-1/2 top-[64px] z-50 hidden whitespace-nowrap text-[color:var(--white)] mix-blend-difference transition-all duration-300 lg:block ${
          pillsVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: `translate(-50%, ${pillsVisible ? '0' : '-16px'})` }}
      >
        Артур Бальцер
      </p>

      {/* Row is capped at 1268px on desktop so the pills stay a fixed distance apart
       *  instead of drifting to the viewport edges on very wide screens; mobile is untouched. */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
        <div className="flex w-full items-center justify-between px-[32px] pb-[32px] pt-[64px] lg:max-w-[1268px]">
          <PillButton visible={pillsVisible} onClick={() => setMenuOpen(true)}>
            Меню
          </PillButton>

          <PillButton visible={pillsVisible} onClick={() => smoothScrollTo(0)}>
            В начало
          </PillButton>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setMenuOpen(false)}>
          <div className="mx-auto flex w-full lg:max-w-[1268px]">
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative ml-[32px] mt-[64px] flex w-[280px] flex-col gap-[20px] rounded-[var(--radius-lg)] bg-[var(--white)] p-[24px] pt-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Закрыть меню"
                className="absolute right-[16px] top-[16px] flex size-[32px] items-center justify-center rounded-full bg-[var(--black-04)] text-[color:var(--black-50)]"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="t-body-tight text-[color:var(--black-50)] transition-colors hover:text-[color:var(--ink)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
