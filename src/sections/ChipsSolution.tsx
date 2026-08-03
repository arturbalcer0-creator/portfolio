export function ChipsSolution() {
  return (
    <section id="chips" className="flex w-full items-center justify-center p-[16px] lg:p-[30px]">
      <div className="flex w-full items-center justify-center rounded-[var(--radius-lg)] bg-[var(--green-700)] px-[16px] py-[48px] lg:h-[519px] lg:rounded-[var(--radius-2xl)] lg:px-[140px] lg:py-0">
        <div className="flex w-full max-w-content flex-col items-center justify-center gap-[32px] lg:flex-row lg:gap-[64px]">
          {/* Phone — raw screenshot with exact Figma crop + soft shadow */}
          <div
            className="relative w-[240px] max-w-full shrink-0 overflow-hidden rounded-[var(--radius-lg)] shadow-[0px_18px_18px_0px_rgba(0,0,0,0.09),0px_5px_10px_0px_rgba(0,0,0,0.1)] lg:w-[372px]"
            style={{ aspectRatio: '372 / 657' }}
          >
            <img
              src="/assets/ozon-raw.png"
              alt="Чипсы — фильтры в мобильном приложении"
              className="absolute left-[0.13%] top-[-7.4%] w-full"
              style={{ height: '122.96%' }}
            />
          </div>

          <div className="flex flex-col gap-[16px] lg:w-[443px]">
            <p className="t-body-20 text-[color:var(--white)]">
              Альтернативным вариантом карточек стали «чипсы». На них я наткнулся в Озоне, когда ресёрчил
              решения в смежных сервисах.
            </p>
            <p className="t-body-20 text-[color:var(--white)]">
              Чипсы мне показались хорошей альтернативой, так как можно было бы заложить в них нужный мне
              функционал и решить все проблемы, с которыми ко мне пришли.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
