const TRACK = 470 // px — inner chart width in the Figma card, used to derive bar percentages

function pct(px: number) {
  return `${((px / TRACK) * 100).toFixed(1)}%`
}

type BarData = { label: string; value: string; w: number; hi?: boolean }

function Bar({ label, value, w, hi }: BarData) {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <div className="t-label-16 flex items-center justify-between text-[color:var(--white-80)]">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-[12px] w-full overflow-hidden rounded-[var(--radius-md)] bg-[var(--white-12)]">
        <div
          className="h-[12px] rounded-[var(--radius-md)]"
          style={{ width: pct(w), background: hi ? 'var(--green-neon-40)' : 'var(--white-30)' }}
        />
      </div>
    </div>
  )
}

function InsightCard({ tag, title, bars, note }: { tag: string; title: string; bars?: BarData[]; note?: string }) {
  return (
    <div className="flex flex-1 flex-col gap-[40px] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--black)] p-[32px] lg:h-full lg:justify-between lg:gap-0">
      <div className="flex flex-col gap-[32px]">
        <p className="t-label-16 text-[color:var(--white-80)]">{tag}</p>
        <p className="t-heading-32 text-[color:var(--white)]">{title}</p>
      </div>
      {bars && (
        <div className="flex flex-col gap-[20px]">
          {bars.map((b) => (
            <Bar key={b.label} {...b} />
          ))}
        </div>
      )}
      {note && <p className="t-label-16 text-[color:var(--white-80)]">{note}</p>}
    </div>
  )
}

const row1: { tag: string; title: string; bars: BarData[] }[] = [
  {
    tag: 'Инсайт №1',
    title: 'Респондентам визуально карточки понравились больше',
    bars: [
      { label: 'Чипсы', value: '40%', w: 202 },
      { label: 'Карточки', value: '57%', w: 294, hi: true },
      { label: 'Текущий вариант', value: '3%', w: 18 },
    ],
  },
  {
    tag: 'Инсайт №2',
    title: 'После работы с прототипом, респонденты выбрали «Чипсы», как более удобный вариант выбора флейвора',
    bars: [
      { label: 'Чипсы', value: '68%', w: 339, hi: true },
      { label: 'Карточки', value: '32%', w: 131 },
      { label: 'Текущий вариант', value: '0%', w: 4 },
    ],
  },
]

const row2 = [
  {
    tag: 'Инсайт №3',
    title: 'Медианное время прохождения задания в «Чипсах» минимум на 40% меньше, чем в остальных вариантах',
    bars: [
      { label: 'Чипсы', value: '16 с', w: 204, hi: true },
      { label: 'Карточки', value: '24 с', w: 263 },
      { label: 'Текущий вариант', value: '44 с', w: 470 },
    ] as BarData[],
  },
]

export function Insights() {
  return (
    <section
      id="insights"
      className="flex w-full flex-col items-center gap-[12px] px-[16px] pb-[80px] lg:px-[30px] lg:pb-[160px]"
    >
      <div className="flex w-full max-w-content flex-col gap-[12px]">
        <div className="flex flex-col gap-[12px] lg:h-[507px] lg:flex-row">
          {row1.map((c) => (
            <InsightCard key={c.tag} {...c} />
          ))}
        </div>
        <div className="flex flex-col gap-[12px] lg:h-[507px] lg:flex-row">
          <InsightCard {...row2[0]} />
          <InsightCard
            tag="Инсайт №4"
            title="В «Карточках» и «Чипсах» респондентам понятны какие значения доступны, а какие нет"
            note="Вывод сделан на основе открытых вопросов"
          />
        </div>
      </div>
    </section>
  )
}
