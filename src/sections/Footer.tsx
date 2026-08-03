import { asset } from '../lib/asset'
const contacts = [
  { label: 'Telegram', href: '#' },
  { label: 'Почта', href: '#' },
]

function CaseCard({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      className="flex h-[369px] w-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-[var(--white-12)] p-[8px] transition-opacity hover:opacity-90 lg:flex-1"
    >
      <div className="relative min-h-px flex-1 overflow-hidden rounded-[24px] bg-[var(--black)]">
        <img src={asset('/assets/arrow-out.svg')} alt="" className="absolute right-[8px] top-[8px] size-[40px]" />
      </div>
      <div className="px-[20px] py-[8px]">
        <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.03em] text-[color:var(--white)]">
          {title}
        </p>
      </div>
    </a>
  )
}

/** Shared across both cases — `otherCase` is the one case card that differs (the other links back to this page). */
export function Footer({ otherCase }: { otherCase: { title: string; href: string } }) {
  const cases = [otherCase, { title: 'О себе', href: '#' }]

  return (
    <footer className="w-full bg-[var(--black)] px-[16px] py-[24px] lg:px-[30px] lg:py-[65px]">
      <div className="mx-auto flex w-full max-w-content flex-col gap-[24px] lg:gap-[130px]">
        {/* На главную + контакты */}
        <div className="flex flex-col gap-[24px] lg:flex-row lg:items-center lg:justify-between">
          <a href="/" className="flex w-fit items-center gap-[12px]">
            <img src={asset('/assets/arrow-left.svg')} alt="" className="h-[21px] w-[59px]" />
            <span className="t-body-tight tracking-[-0.03em] text-[color:var(--white)]">На главную</span>
          </a>
          <div className="flex flex-wrap items-center gap-[24px]">
            <span className="t-body-tight tracking-[-0.03em] text-[color:var(--white)]">
              Связаться со мной:
            </span>
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="t-body-tight tracking-[-0.03em] text-[color:var(--green-400)] transition-opacity hover:opacity-80"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* Можно ещё посмотреть */}
        <div className="flex flex-col gap-[12px] lg:flex-row lg:items-start">
          <p className="t-body-tight tracking-[-0.03em] text-[color:var(--white)] lg:w-[352px] lg:shrink-0">
            Можно ещё посмотреть
          </p>
          <div className="flex flex-1 flex-col gap-[12px] lg:flex-row">
            {cases.map((c) => (
              <CaseCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
