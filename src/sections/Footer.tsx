import { asset } from '../lib/asset'
const contacts = [
  { label: 'Telegram', href: 'https://t.me/artur_balcer' },
  { label: 'Почта', href: 'mailto:arturbalcer0@gmail.com' },
]

/** Hero-block illustration for each active case, reused in its footer card. */
const illustrationByHref: Record<string, string> = {
  '/flavour-case/': asset('/assets/home-footer-flavour.png'),
  '/ssh-key-case/': asset('/assets/ssh-hero-cover.png'),
  '/about/': asset('/assets/about-hero-illustration.png'),
}

function CaseCard({ title, href }: { title: string; href: string }) {
  const illustration = illustrationByHref[href]
  return (
    <a
      href={href}
      className="flex h-[369px] w-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-[var(--white-12)] p-[8px] transition-opacity hover:opacity-90 lg:flex-1"
    >
      <div className="relative min-h-px flex-1 overflow-hidden rounded-[24px] bg-[var(--black)]">
        {illustration && (
          <img src={illustration} alt="" className="absolute inset-0 size-full object-cover" />
        )}
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

/** Shared across all pages. Case pages pass `otherCase` (the other case card, paired with a link to "О себе").
 *  The about page itself passes `cases` directly (both case studies, since "О себе" would just link to itself).
 *  Only active (shipped) cases ever appear here — there's no entry for the "to be done" home cards. */
export function Footer({
  otherCase,
  cases: casesProp,
}: {
  otherCase?: { title: string; href: string }
  cases?: { title: string; href: string }[]
}) {
  const cases = casesProp ?? [otherCase!, { title: 'О себе', href: '/about/' }]

  return (
    <footer className="flex min-h-screen w-full flex-col justify-center bg-[var(--black)] px-[16px] py-[24px] lg:px-[30px] lg:py-[65px]">
      <div className="mx-auto flex w-full max-w-content flex-col gap-[24px] lg:gap-[60px]">
        {/* На главную + контакты */}
        <div className="flex flex-col gap-[24px] lg:flex-row lg:items-center lg:justify-between">
          <a href="/" className="flex w-fit items-center gap-[12px]">
            <img src={asset('/assets/arrow-left.svg')} alt="" className="h-[21px] w-[59px]" />
            <span className="t-body-tight tracking-[-0.03em] text-[color:var(--white)]">На главную</span>
          </a>
          <div className="flex flex-wrap items-center gap-[24px]">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="t-body-tight tracking-[-0.03em] text-[color:var(--green-400)] transition-opacity hover:opacity-80"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* Можно ещё посмотреть */}
        <div className="flex flex-col gap-[12px] lg:flex-row lg:items-start">
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
