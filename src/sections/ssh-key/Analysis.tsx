import { asset } from '../../lib/asset'
function Chip({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-1 flex-col gap-[24px] rounded-[var(--radius-lg)] bg-[var(--black-04)] p-[30px]">
      <p className="t-label-16 text-[color:var(--black-80)]">{label}</p>
      <p className="t-body text-[color:var(--black)]">{text}</p>
    </div>
  )
}

export function SshAnalysis() {
  return (
    <section id="analysis" className="flex w-full flex-col items-center gap-[40px] px-[16px] py-[80px] lg:gap-[64px] lg:px-[30px]">
      <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.01em] text-[color:var(--ink)] lg:text-[64px]">
        Анализ ситуации
      </h2>

      <div className="flex w-full max-w-content flex-col gap-[12px]">
        <div className="flex flex-col items-center gap-[24px] rounded-[var(--radius-lg)] bg-[var(--black-04)] p-[16px] lg:flex-row lg:justify-between lg:p-[30px]">
          <img
            src={asset('/assets/ssh-analysis-mock.png')}
            alt="Мокап контрола выбора SSH-ключа"
            className="w-full max-w-[420px] rounded-[var(--radius-sm)] lg:max-w-[504px]"
          />
          <div className="flex flex-col gap-[16px] lg:h-full lg:w-[474px] lg:justify-between lg:self-stretch">
            <div className="flex flex-col gap-[16px] lg:gap-[27px]">
              <p className="t-label-16 text-[color:var(--black-80)]">Текущий флоу</p>
              <p className="text-[16px] font-medium leading-[1.4] text-[color:var(--black)] lg:text-[32px] lg:font-semibold lg:leading-[1.15]">
                Старый флоу пользователя просто отправляли на внешнюю форму создания ключа, где нужно было
                самостоятельно выполнить ряд технических действий.
              </p>
            </div>
            <p className="t-body text-[color:var(--black)]">
              Вместо того, чтобы помочь пользователю создать SSH-ключ, интерфейс отправлял его в другой
              раздел системы и «выдёргивал» из флоу создания виртуальной машины.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] lg:flex-row">
          <Chip
            label="Создание ключа"
            text="Основная масса жалоб шла от одной группы — людей без технического бэкграунда, которые не понимали, что такое SSH-ключ и как его создать."
          />
          <Chip
            label="Генерация ключа"
            text="Пользователи хотели бы видеть генерацию ключа. В нашем сервисе мы не давали такого функционала, так как это было не так секьюрно."
          />
        </div>
      </div>
    </section>
  )
}
