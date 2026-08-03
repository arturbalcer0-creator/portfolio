function Stat({ value, desc }: { value: string; desc: string }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-[4px] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--black-04)] px-[20px] py-[48px] text-center">
      <p className="text-[56px] font-semibold leading-[1.1] text-[color:var(--black)] lg:text-[80px]">
        {value}
      </p>
      <p className="t-body text-[color:var(--black-80)]">{desc}</p>
    </div>
  )
}

export function SshOutcome() {
  return (
    <section id="outcome" className="flex w-full flex-col items-center gap-[40px] px-[16px] pb-[160px] pt-[80px] lg:gap-[64px] lg:px-[30px]">
      <h2 className="t-heading-44 text-center text-[color:var(--ink)]">Итоги</h2>
      <div className="flex w-full max-w-content flex-col gap-[12px] lg:flex-row lg:items-stretch">
        <Stat value="300%" desc="на столько снизилось количество обращений по поводу SSH-ключей" />
        <Stat value="↓XX" desc="в десятки раз снизилось количество жалоб на этот блок в UX-фидбеке" />
        <Stat value="0" desc="столько проблем возникло у пользователей с созданием/генерацией SSH-ключа" />
      </div>
    </section>
  )
}
