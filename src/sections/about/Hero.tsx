import { asset } from '../../lib/asset'

export function AboutHero() {
  return (
    <>
      {/* Desktop */}
      <section id="hero" className="hidden w-full p-[30px] lg:block">
        <div className="relative h-[893px] w-full overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--black)]">
          <div className="absolute left-1/2 top-[157px] flex w-[816px] -translate-x-1/2 flex-col items-center gap-[48px]">
            <h1 className="t-title-64 w-full text-center text-[color:var(--white)]">О себе</h1>
            <img
              src={asset('/assets/about-hero-illustration.png')}
              alt=""
              className="size-[428px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="w-full p-[16px] lg:hidden">
        <div className="flex w-full flex-col items-center gap-[24px] rounded-[var(--radius-lg)] bg-[var(--black)] px-[16px] py-[64px]">
          <h1 className="w-full text-center text-[32px] font-medium leading-[1.1] text-[color:var(--white)]">
            О себе
          </h1>
          <img
            src={asset('/assets/about-hero-illustration.png')}
            alt=""
            className="size-[230px] object-cover"
          />
        </div>
      </section>
    </>
  )
}
