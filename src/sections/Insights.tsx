type Insight = { tag: string; title: string }

function InsightCard({ tag, title }: Insight) {
  return (
    <div className="flex flex-1 flex-col gap-[32px] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--black)] p-[32px] lg:h-full">
      <p className="t-label-16 text-[color:var(--white-80)]">{tag}</p>
      <p className="t-heading-32 text-[color:var(--white)]">{title}</p>
    </div>
  )
}

const rows: Insight[][] = [
  [
    { tag: 'Инсайт №1', title: 'Респондентам визуально карточки понравились больше' },
    {
      tag: 'Инсайт №2',
      title:
        'После работы с прототипом, респонденты выбрали «Чипсы», как более удобный вариант выбора флейвора',
    },
  ],
  [
    {
      tag: 'Инсайт №3',
      title:
        'Медианное время прохождения задания в «Чипсах» минимум на 40% меньше, чем в остальных вариантах',
    },
    {
      tag: 'Инсайт №4',
      title: 'В «Карточках» и «Чипсах» респондентам понятны какие значения доступны, а какие нет',
    },
  ],
]

export function Insights() {
  return (
    <section
      id="insights"
      className="flex w-full flex-col items-center px-[16px] pb-[80px] lg:px-[30px] lg:pb-[160px]"
    >
      <div className="flex w-full max-w-content flex-col gap-[12px]">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-col gap-[12px] lg:h-[320px] lg:flex-row">
            {row.map((c) => (
              <InsightCard key={c.tag} {...c} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
