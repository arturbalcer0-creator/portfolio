import { asset } from '../lib/asset'
function MetricBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      <p className="t-heading-24">{title}</p>
      <ul className="t-body list-disc pl-[30px]">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

export function Outcome() {
  return (
    <section
      id="outcome"
      className="flex w-full items-center justify-center p-[16px] lg:p-[30px]"
    >
      <div className="flex w-full justify-center rounded-[var(--radius-lg)] bg-[var(--green-700)] px-[16px] py-[48px] lg:rounded-[var(--radius-2xl)] lg:px-[60px] lg:py-[80px]">
        <div className="flex w-full max-w-content flex-col gap-[32px] text-[color:var(--white)] lg:grid lg:grid-cols-2 lg:gap-x-[39px] lg:gap-y-[46px]">
          <h2 className="t-display-64 lg:col-start-1 lg:row-start-1">Итоги</h2>

          {/* Result */}
          <div className="flex flex-col lg:col-start-1 lg:row-start-2">
            <div
              className="flex w-full items-center overflow-hidden rounded-[var(--radius-media)] bg-[var(--white)]"
              style={{ aspectRatio: '520 / 320' }}
            >
              <img src={asset('/assets/result-chips.png')} alt="Финальный вариант — «Чипсы»" className="w-full" />
            </div>
            <p className="t-body mt-[20px] text-center">В конечном итоге был выбран вариант «Чипсы»</p>
          </div>

          {/* Metrics */}
          <div className="flex flex-col gap-[32px] lg:col-start-2 lg:row-start-2">
          <MetricBlock
            title="Чего удалось достичь:"
            items={[
              'Сократили время выбора выбора вычислительного ресурса в 3 раза',
              'Практически все пользователи отметили, что им понятны какие значения им доступны, какие заблокированы и какие доступные сочетания у них есть с текущими параметрами',
            ]}
          />
          <MetricBlock
            title="Рефлексия"
            items={[
              'Контрол оказался нетривиальным по формату, поэтому первое знакомство требовало 1–2 «пробных» кликов — но дальше пользователи ориентировались в нём заметно быстрее, что подтверждалось и поведенческими метриками',
            ]}
          />
          </div>
        </div>
      </div>
    </section>
  )
}
