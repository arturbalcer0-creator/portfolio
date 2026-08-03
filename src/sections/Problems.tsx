function ProblemCard({
  bg,
  z,
  num,
  title,
  text,
  img,
}: {
  bg: string
  z: string
  num: string
  title: string
  text: string
  img: string
}) {
  return (
    <div
      className={`sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden px-[16px] py-[24px] lg:px-[140px] lg:py-[80px] ${bg} ${z}`}
    >
      <div className="flex max-h-full w-full max-w-content flex-col gap-[24px] text-[color:var(--white)] lg:flex-row lg:items-center lg:gap-[40px]">
        <div className="flex shrink-0 flex-col gap-[24px] lg:w-[443px] lg:gap-[32px]">
          <div className="flex flex-col">
            <p className="t-body-20-tight">{num}</p>
            <p className="t-heading-44">{title}</p>
          </div>
          <p className="t-body-20">{text}</p>
        </div>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-[10px]">
          <img
            src={img}
            alt="Внешний вид старого контрола"
            className="max-h-[32svh] w-full rounded-[var(--radius-lg)] object-contain lg:max-h-[70svh]"
          />
          <p className="t-caption-14-relaxed text-center text-[color:var(--white-50)]">
            Внешний вид старого контрола
          </p>
        </div>
      </div>
    </div>
  )
}

export function Problems() {
  return (
    // Sticky-stacking cards: each card pins full-screen and holds; the next slides
    // over it and holds too. Spacers provide the "hold" scroll distance; the black
    // section background matches card #2 so no white gap shows on exit.
    <section id="problems" className="relative w-full bg-[var(--black)]">
      <ProblemCard
        bg="bg-[var(--green-700)]"
        z="z-[1]"
        num="Проблема №1"
        title="Бизнес"
        text="Действовавший на тот момент контрол показывал не максимально возможные ресурсы, которые облако может предоставить в принципе, а только доступные «здесь и сейчас» (после вычета уже занятых мощностей). Из-за этого у клиента складывалось впечатление, что выбор конфигураций у нас сильно ограничен, хотя на деле это было не так."
        img="/assets/problem1-control.png"
      />
      <div className="h-[100svh]" aria-hidden />
      <ProblemCard
        bg="bg-[var(--black)]"
        z="z-[2]"
        num="Проблема №2"
        title="Пользователь"
        text="Старый контрол не показывал, какие сочетания CPU и RAM вообще доступны. Пользователь мог решить, что можно ввести произвольное значение в поле CPU и в поле RAM — а по факту так сделать было нельзя."
        img="/assets/problem2-control.png"
      />
      <div className="h-[100svh]" aria-hidden />
    </section>
  )
}
