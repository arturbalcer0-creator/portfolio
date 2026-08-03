function ProblemRow({
  num,
  title,
  text,
  img,
}: {
  num: string
  title: string
  text: string
  img: string
}) {
  return (
    <div className="flex w-full max-w-content flex-col gap-[24px] text-[color:var(--white)] lg:flex-row lg:items-start">
      <div className="flex shrink-0 flex-col justify-center gap-[32px] lg:w-[443px]">
        <div className="flex flex-col">
          <p className="t-body-20-tight">{num}</p>
          <p className="t-heading-44">{title}</p>
        </div>
        <p className="t-body-20">{text}</p>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-[10px]">
        <img src={img} alt="Внешний вид старого контрола" className="w-full rounded-[var(--radius-lg)]" />
        <p className="t-caption-14-relaxed text-center text-[color:var(--white-50)]">
          Внешний вид старого контрола
        </p>
      </div>
    </div>
  )
}

export function Problems() {
  return (
    <section id="problems" className="relative w-full">
      {/* Проблема №1 — Бизнес */}
      <div className="flex w-full flex-col items-center overflow-hidden rounded-[var(--radius-lg)] bg-[var(--green-700)] px-[16px] py-[64px] lg:rounded-[var(--radius-2xl)] lg:px-[140px] lg:py-[100px]">
        <ProblemRow
          num="Проблема №1"
          title="Бизнес"
          text="Действовавший на тот момент контрол показывал не максимально возможные ресурсы, которые облако может предоставить в принципе, а только доступные «здесь и сейчас» (после вычета уже занятых мощностей). Из-за этого у клиента складывалось впечатление, что выбор конфигураций у нас сильно ограничен, хотя на деле это было не так."
          img="/assets/problem1-control.png"
        />
      </div>

      {/* Проблема №2 — Пользователь (overlaps card #1) */}
      <div className="relative z-10 -mt-[64px] flex w-full flex-col items-center overflow-hidden rounded-[var(--radius-lg)] bg-[var(--black)] px-[16px] py-[64px] lg:-mt-[115px] lg:rounded-[var(--radius-2xl)] lg:px-[140px] lg:py-[100px]">
        <ProblemRow
          num="Проблема №2"
          title="Пользователь"
          text="Старый контрол не показывал, какие сочетания CPU и RAM вообще доступны. Пользователь мог решить, что можно ввести произвольное значение в поле CPU и в поле RAM — а по факту так сделать было нельзя."
          img="/assets/problem2-control.png"
        />
      </div>
    </section>
  )
}
