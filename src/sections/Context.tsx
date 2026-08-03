function Def({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <p className="t-body-20 text-[color:var(--ink-40)]">{label}</p>
      <p className="t-body-20 text-[color:var(--ink-80)]">{value}</p>
    </div>
  )
}

function DefList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <p className="t-body-20 text-[color:var(--ink-40)]">{label}</p>
      <ul className="t-body-20 list-disc pl-[30px] text-[color:var(--ink-80)]">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

function TermCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="flex flex-1 flex-col items-center overflow-hidden rounded-[var(--radius-xl)] bg-[var(--black-04)] p-[8px]">
      <img src={img} alt="" className="w-full rounded-[var(--radius-media)]" style={{ aspectRatio: '672 / 382' }} />
      <div className="flex w-full flex-col gap-[8px] p-[20px]">
        <p className="t-heading-24 text-[color:var(--black)]">{title}</p>
        <p className="t-body-20 text-[color:var(--ink-80)]">{desc}</p>
      </div>
    </div>
  )
}

function Step({ title, items, last }: { title: string; items: string[]; last?: boolean }) {
  return (
    <div className="flex flex-1 flex-col gap-[12px]">
      <p className="t-heading-18 text-[color:var(--black)]">{title}</p>
      <div className="flex w-full items-center gap-[10px]">
        <div className="size-[20px] shrink-0 rounded-[var(--radius-md)] border-[3px] border-solid border-[var(--black)]" />
        {!last && <div className="h-[2px] min-w-px flex-1 bg-[var(--black-20)]" />}
      </div>
      <ul className="t-caption-14 list-disc pl-[21px] text-[color:var(--black)]">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

const steps = [
  { title: 'Изучение проблем', items: ['Общение с бизнесом', 'Общение с пользователями'] },
  { title: 'Анализ конкурентов', items: ['Рынка РФ', 'Мировой рынок', 'Изучение решений в смежных сервисах'] },
  { title: 'Исследование', items: ['Подготовка прототипов', 'Проведение u-теста', 'Анализ результатов'] },
  { title: 'Разработка', items: ['Подготовка и передача макетов в прод'] },
  { title: 'Метрики', items: ['Изучение метрик после выхода в прод'] },
]

export function Context() {
  return (
    <section id="context" className="flex w-full flex-col items-center px-[16px] py-[80px] lg:px-[30px] lg:py-[160px]">
      <div className="flex w-full max-w-content flex-col gap-[64px]">
        <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.01em] text-[color:var(--ink)] lg:text-[64px]">
          Контекст
        </h2>

        <div className="flex flex-col gap-[32px]">
          {/* Definitions */}
          <div className="flex flex-col gap-[12px] lg:flex-row">
            <div className="flex flex-1 flex-col gap-[12px]">
              <Def label="Роль" value="Продуктовый дизайнер" />
              <DefList
                label="Цель"
                items={[
                  'Ускорить выбор вычислительных ресурсов',
                  'Сделать выбор вычислительных ресурсов понятнее',
                ]}
              />
            </div>
            <div className="flex flex-1 flex-col gap-[12px]">
              <Def label="Команда" value="Продакт, аналитик, фронтендер (3), бекендер" />
              <Def label="Инструменты" value="Figma, Pathway, Claude+ChatGPT" />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-[2px]">
            <p className="t-body-20 text-[color:var(--ink-40)]">Описание</p>
            <p className="t-body-20 text-[color:var(--ink-80)]">
              У каждой <span className="text-[color:var(--green-700)]">виртуальной машины</span> (дальше
              ВМ), как и у обычного компьютера, есть процессор и оперативная память. Чтобы настроить
              виртуальный сервер, пользователь выбирает конфигурацию — конкретное сочетание CPU и RAM из
              заранее подготовленного набора вариантов флейворов.
            </p>
          </div>

          {/* Process */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[12px] lg:flex-row">
              <TermCard img="/assets/proc-vcpu.png" title="vCPU" desc="Виртуальный аналог процессора в ВМ" />
              <TermCard img="/assets/proc-ram.png" title="RAM" desc="Оперативная память. Аналог RAM в компьютере" />
              <TermCard
                img="/assets/proc-flavour.png"
                title="Flavour"
                desc="Заранее подготовленное сочетание vCPU и RAM"
              />
            </div>

            <div className="flex w-full flex-col items-center gap-[24px] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--black-04)] px-[32px] py-[44px]">
              <p className="t-heading-24 text-[color:var(--black)]">Процесс работы</p>
              <div className="flex w-full flex-col gap-[24px] lg:flex-row lg:gap-[10px]">
                {steps.map((s, i) => (
                  <Step key={s.title} title={s.title} items={s.items} last={i === steps.length - 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
