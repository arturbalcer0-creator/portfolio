function Shot({ src, ratio }: { src: string; ratio: string }) {
  return <img src={src} alt="" className="w-full rounded-[var(--radius-sm)]" style={{ aspectRatio: ratio }} />
}

export function SearchSolutions() {
  return (
    <section id="search" className="flex w-full flex-col items-center px-[16px] py-[80px] lg:px-[30px] lg:py-[160px]">
      <div className="flex w-full max-w-content flex-col gap-[64px]">
        <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.01em] text-[color:var(--ink)] lg:text-[64px]">
          Поиск решений
        </h2>

        <div className="flex flex-col gap-[24px] lg:flex-row lg:items-start">
          {/* Competitor grid — single column in reading order on mobile, two columns on desktop */}
          <div className="flex shrink-0 flex-col gap-[4px] lg:flex-row">
            <div className="flex flex-col gap-[4px] lg:w-[306px]">
              <Shot src="/assets/comp-1.png" ratio="306 / 131" />
              <Shot src="/assets/comp-2.png" ratio="306 / 289" />
            </div>
            <div className="flex flex-col gap-[4px] lg:w-[306px]">
              <Shot src="/assets/comp-3.png" ratio="306 / 181" />
              <Shot src="/assets/comp-4.png" ratio="306 / 240" />
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-1 flex-col">
            <p className="t-body-20 text-[color:var(--ink-80)]">
              После анализа бизнесовых и пользовательских проблем я пошёл изучать аналогичные решения
              конкурентов (показал только РФ, зарубежные выглядят слишком экстравагантно).
            </p>
            <p className="t-body-20 text-[color:var(--ink-80)]">
              Все решения — <span className="text-[color:var(--green-700)]">карточки флейвора</span>. Оно
              красивое, но когда флейворов ±100-150, карточки становятся нечитаемыми.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
