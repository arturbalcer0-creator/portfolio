import { asset } from '../../lib/asset'
function Dot() {
  return <div className="size-[4px] rounded-[var(--radius-md)] bg-[var(--white-24)]" />
}

function Meta({ size }: { size: 'lg' | 'sm' }) {
  const text = size === 'lg' ? 'text-[20px]' : 'text-[16px]'
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-[8px]">
      <a
        href="https://cloud.ru/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[4px] transition-opacity hover:opacity-80"
      >
        <img src={asset('/assets/cloud-logo.svg')} alt="Cloud.ru" className="size-[24px]" />
        <span className={`${text} whitespace-nowrap font-medium text-[color:var(--green-400)]`}>
          Cloud.ru
        </span>
      </a>
      <Dot />
      <span className={`${text} whitespace-nowrap font-medium text-[color:var(--white-50)]`}>
        Виртуальные машины (IaaS)
      </span>
      <Dot />
      <span className={`${text} whitespace-nowrap font-medium text-[color:var(--white-50)]`}>
        2024 – н.в.
      </span>
    </div>
  )
}

/** Cover illustration — pre-cropped export from Figma (already avatar-radius clipped). */
function Cover({ className }: { className: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[var(--radius-avatar)] ${className}`}>
      <img src={asset('/assets/ssh-hero-cover.png')} alt="" className="size-full object-cover" />
    </div>
  )
}

export function SshHero() {
  return (
    <>
      {/* Desktop */}
      <section id="hero" className="hidden w-full p-[30px] lg:block">
        <div className="relative h-[893px] w-full overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--black)]">
          <div className="absolute left-1/2 top-[157px] flex w-[816px] -translate-x-1/2 flex-col items-center gap-[14px]">
            <div className="flex w-full flex-col items-start gap-[24px]">
              <h1 className="t-title-64 w-full text-center text-[color:var(--white)]">SSH-ключ</h1>
              <Meta size="lg" />
            </div>
            <Cover className="h-[472px] w-[428px]" />
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="w-full p-[16px] lg:hidden">
        <div className="flex w-full flex-col items-center gap-[24px] rounded-[var(--radius-lg)] bg-[var(--black)] px-[16px] py-[157px]">
          <div className="flex w-full flex-col items-start gap-[24px]">
            <h1 className="w-full text-center text-[32px] font-medium leading-[1.1] text-[color:var(--white)]">
              SSH-ключ
            </h1>
            <Meta size="sm" />
          </div>
          <Cover className="h-[254px] w-[230px]" />
        </div>
      </section>
    </>
  )
}
