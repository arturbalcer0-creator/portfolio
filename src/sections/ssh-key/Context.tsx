import { asset } from '../../lib/asset'
function Def({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <p className="t-body text-[color:var(--ink-40)]">{label}</p>
      <p className="t-body text-[color:var(--ink-80)]">{value}</p>
    </div>
  )
}

function ProcessCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="flex flex-1 flex-col items-center overflow-hidden rounded-[var(--radius-xl)] bg-[var(--black-04)] p-[8px]">
      <img src={img} alt="" className="w-full rounded-[var(--radius-media)]" style={{ aspectRatio: '336 / 191' }} />
      <div className="flex w-full flex-col gap-[8px] p-[20px]">
        <p className="t-heading-24 text-[color:var(--black)]">{title}</p>
        <p className="t-body text-[color:var(--ink-80)]">{desc}</p>
      </div>
    </div>
  )
}

function Step({ title, items, last }: { title: string; items: string[]; last?: boolean }) {
  return (
    <div className="flex flex-1 flex-col gap-[12px]">
      <p className="t-heading-18 text-[color:var(--black)]">{title}</p>
      <div className="hidden w-full items-center gap-[10px] lg:flex">
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
  { title: 'Изучение проблем', items: ['Общение с пользователями'] },
  { title: 'Подготовка', items: ['Анализ конкурентов', 'Поиск решений'] },
  { title: 'Разработка', items: ['Подготовка и передача макетов в прод'] },
  { title: 'Метрики', items: ['Изучение метрик после выхода в прод'] },
]

export function SshContext() {
  return (
    <section id="context" className="flex w-full flex-col items-center px-[16px] py-[80px] lg:px-[30px] lg:py-[160px]">
      <div className="flex w-full max-w-content flex-col gap-[40px] lg:gap-[64px]">
        <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.01em] text-[color:var(--ink)] lg:text-[64px]">
          Контекст
        </h2>

        <div className="flex flex-col gap-[32px]">
          {/* Definitions */}
          <div className="flex flex-col gap-[12px] lg:flex-row">
            <div className="flex flex-1 flex-col gap-[12px]">
              <Def label="Роль" value="Продуктовый дизайнер" />
              <Def
                label="Цель"
                value="Сократить количество обращений в поддержку с вопросами/проблемами, связанными с SSH-ключом"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[12px]">
              <Def label="Команда" value="Продакт, аналитик, фронтендер (3), бекендер" />
              <Def label="Инструменты" value="Figma, Pathway, Claude+ChatGPT" />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-[2px]">
            <p className="t-body text-[color:var(--ink-40)]">Описание</p>
            <p className="t-body text-[color:var(--ink-80)]">
              SSH-ключ — это пара цифровых «ключей» для безопасного доступа к серверу или виртуальной
              машине: приватная часть остаётся у пользователя на компьютере, публичная — хранится на
              сервере. Раньше в продукте пользователю нужно было создать эту пару самостоятельно и вручную
              загрузить публичную часть в систему.
            </p>
          </div>

          {/* Process */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[12px] lg:flex-row">
              <ProcessCard
                img={asset('/assets/ssh-proc-key.png')}
                title="SSH-ключ"
                desc="Ключевая пара «Публичный ключ» + «Приватный ключ»"
              />
              <ProcessCard
                img={asset('/assets/ssh-proc-public.png')}
                title="Публичный ключ"
                desc="Часть, которая хранится на нашей стороне"
              />
              <ProcessCard
                img={asset('/assets/ssh-proc-private.png')}
                title="Приватный ключ"
                desc="Часть, которая должна храниться у пользователя"
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
