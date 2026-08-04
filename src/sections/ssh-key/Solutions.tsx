import { asset } from '../../lib/asset'
function PainSolution({
  painsLabel,
  pains,
  solutionLabel,
  solution,
}: {
  painsLabel: string
  pains: string[]
  solutionLabel: string
  solution: string
}) {
  return (
    <div className="flex flex-col gap-[32px] lg:w-[443px] lg:shrink-0">
      <div className="flex flex-col gap-[8px]">
        <p className="t-body text-[color:var(--white-50)]">{painsLabel}</p>
        <ul className="t-body list-disc pl-[30px]">
          {pains.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="t-body text-[color:var(--white-50)]">{solutionLabel}</p>
        <p className="t-body">{solution}</p>
      </div>
    </div>
  )
}

export function SshSolutions() {
  return (
    <section id="solutions" className="flex w-full flex-col items-center pt-[80px]">
      <h2 className="mb-[40px] text-center text-[40px] font-semibold leading-[1.1] tracking-[-0.01em] text-[color:var(--ink)] lg:mb-[30px] lg:text-[64px]">
        Поиск решений
      </h2>

      {/* Problem 1 — no key generation for non-technical users, solved via hackathon script */}
      <div className="w-full px-[16px] lg:px-[30px]">
        <div className="flex w-full flex-col items-center rounded-[var(--radius-lg)] bg-[var(--black)] px-[16px] py-[48px] text-[color:var(--white)] lg:rounded-[var(--radius-2xl)] lg:px-[140px] lg:py-[100px]">
          <div className="flex w-full max-w-content flex-col items-center gap-[32px] lg:flex-row lg:gap-[24px]">
            <PainSolution
              painsLabel="Боли"
              pains={['Отсутствие генерации ключа', 'Сложности у пользователей без технического бекграунда']}
              solutionLabel="Решение"
              solution="Мы решили провести онлайн-хакатон с разработчиками, где тестировали несколько вариантов решения боли. По итогам хакатона, мы вынесли главный артефакт — скрипт, который умеет безопасно генерировать SSH-ключ через браузер и автоматически скачивает его пользователю на компьютер."
            />
            <div className="flex flex-1 flex-col">
              <img
                src={asset('/assets/ssh-solution1-mock.png')}
                alt="Внешний вид старого контрола"
                className="w-full rounded-[var(--radius-lg)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Problem 2 — user pulled out of the VM creation flow, solved via modal */}
      <div className="mt-[24px] w-full px-[16px] pb-[80px] lg:mt-[30px] lg:px-[30px] lg:pb-[160px]">
        <div className="flex w-full flex-col items-center rounded-[var(--radius-lg)] bg-[var(--green-700)] px-[16px] py-[48px] text-[color:var(--white)] lg:rounded-[var(--radius-2xl)] lg:px-[140px] lg:py-[100px]">
          <div className="flex w-full max-w-content flex-col items-center gap-[32px] lg:flex-row lg:gap-[24px]">
            <PainSolution
              painsLabel="Боли"
              pains={[
                '«Выдёргивание» пользователя из флоу создания виртуальной машины',
                'Отсутствие документации и/или её недостаточность',
              ]}
              solutionLabel="Решение"
              solution="Сделал модальное окно создания SSH-ключа, которое появляется поверх формы создания ВМ. Пользователь всё ещё остаётся в контексте и при этом документация у него всегда под рукой."
            />
            <div className="flex flex-1 flex-col">
              <div className="w-full overflow-hidden rounded-[var(--radius-lg)] bg-[#f5f5f5] p-[16px] lg:p-[38px]">
                <img src={asset('/assets/ssh-vm-modal.png')} alt="" className="w-full rounded-[12px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
