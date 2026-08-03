const items = ['Кейсы', 'О себе', 'Контакты']

/** Fixed pill navbar — desktop only (the mobile mockup has no navbar).
 *  Pinned at the same offset it sits in the hero card: 30px section padding + 24px. */
export function Navbar() {
  return (
    <nav className="hidden lg:flex fixed top-[54px] left-1/2 z-50 h-[61px] -translate-x-1/2 items-center rounded-[var(--radius-2xl)] bg-[var(--white)] p-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
      <div className="aspect-square h-full rounded-[var(--radius-full)] bg-[var(--green-500)]" />
      {items.map((t) => (
        <a
          key={t}
          href="#"
          className="t-body-20-tight flex h-full items-center px-[24px] text-[color:var(--black-50)] transition-colors hover:text-[color:var(--black-80)]"
        >
          {t}
        </a>
      ))}
    </nav>
  )
}
