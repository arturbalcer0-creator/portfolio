function ProtoCard({ img, caption }: { img: string; caption: string }) {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden rounded-[var(--radius-xl)] bg-[var(--black-04)] p-[8px]">
      <div
        className="flex w-full items-center overflow-hidden rounded-[var(--radius-media)] bg-[var(--white)]"
        style={{ aspectRatio: '518 / 320' }}
      >
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="flex w-full flex-col p-[20px]">
        <p className="t-body-20 text-center text-[color:var(--ink-80)]">{caption}</p>
      </div>
    </div>
  )
}

export function Prototypes() {
  return (
    <section
      id="prototypes"
      className="flex w-full flex-col items-center gap-[32px] px-[16px] pb-[80px] pt-[80px] lg:px-[30px] lg:pb-[160px] lg:pt-[120px]"
    >
      <p className="t-body-20 max-w-[440px] text-center text-[color:var(--ink-80)]">
        Результатом поиска решений стали 3 кликабельных прототипа, с которыми я пошёл на немодерируемое
        юзабилити тестирование.
      </p>

      <div className="flex w-full max-w-content flex-col items-center gap-[12px]">
        <div className="flex w-full flex-col gap-[12px] lg:flex-row">
          <div className="flex flex-1">
            <ProtoCard img="/assets/proto-cards.png" caption="«Карточки» — самый распространённый вариант" />
          </div>
          <div className="flex flex-1">
            <ProtoCard img="/assets/proto-chips.png" caption="«Чипсы» — альтернатива карточкам" />
          </div>
        </div>
        <div className="w-full lg:w-[534px]">
          <ProtoCard img="/assets/proto-current.png" caption="Текущий вариант" />
        </div>
      </div>

      <div className="flex w-full max-w-content flex-col items-center gap-[2px]">
        <img
          src="/assets/proto-drafts.png"
          alt="Страница с драфтами прототипов"
          className="w-full rounded-[var(--radius-lg)]"
        />
        <p className="t-caption-14-relaxed text-center text-[color:var(--black-50)]">
          Страница с драфтами прототипами
        </p>
      </div>
    </section>
  )
}
