function StageCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="flex h-auto flex-1 flex-col gap-[48px] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--black-02)] px-[20px] pb-[24px] pt-[12px] lg:h-full lg:gap-[74px] lg:px-[32px] lg:pb-[32px] lg:pt-[24px]">
      <p className="t-heading-44 text-[color:var(--black-40)]">{n}</p>
      <div className="flex flex-col gap-[12px] text-[color:var(--black-80)]">
        <p className="t-heading-32">{title}</p>
        <p className="t-body-tight">{desc}</p>
      </div>
    </div>
  )
}

const stages = [
  {
    n: '01',
    title: 'Сравнение вариантов',
    desc: 'Одновременно показал все 3 варианта и спросил какой из них лучше. По сути оценивался визуал.',
  },
  {
    n: '02',
    title: 'Usability-тестирование',
    desc: 'Дал «потрогать» каждый вариант. Задание для каждого варианта было одно.',
  },
  {
    n: '03',
    title: 'Повтор сравнения',
    desc: 'Снова спросил какой вариант лучше. На этот раз респонденты оценивали визуал и удобность.',
  },
  {
    n: '04',
    title: 'Открытые вопросы',
    desc: 'Просил развернуть свои ответы, чтобы точнее понять что хорошо, а что плохо',
  },
]

export function Research() {
  return (
    <section
      id="research"
      className="flex w-full flex-col items-center gap-[40px] px-[16px] pb-[80px] pt-[80px] lg:gap-[64px] lg:px-[30px] lg:pb-[160px]"
    >
      <h2 className="text-center text-[40px] font-semibold leading-[1.1] tracking-[-0.01em] text-[color:var(--ink)] lg:text-[64px]">
        Исследование и результаты
      </h2>

      <div className="flex w-full max-w-content flex-col gap-[13px]">
        <div className="flex flex-col gap-[13px] lg:h-[262px] lg:flex-row">
          <StageCard {...stages[0]} />
          <StageCard {...stages[1]} />
        </div>
        <div className="flex flex-col gap-[13px] lg:h-[262px] lg:flex-row">
          <StageCard {...stages[2]} />
          <StageCard {...stages[3]} />
        </div>
      </div>
    </section>
  )
}
