function ProblemCard({ num, title, text }: { num: string; title: string; text: string }) {
  return (
    <div className="flex flex-1 flex-col gap-[74px] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--black)] px-[24px] pb-[32px] pt-[20px] lg:px-[32px]">
      <p className="t-heading-44 text-[color:var(--white-80)]">{num}</p>
      <div className="flex flex-col gap-[12px] text-[color:var(--white)]">
        <p className="t-heading-32">{title}</p>
        <p className="t-body-tight">{text}</p>
      </div>
    </div>
  )
}

export function SshProblems() {
  return (
    <section id="problems" className="flex w-full flex-col items-center gap-[40px] px-[16px] py-[80px] lg:gap-[64px] lg:px-[30px]">
      <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.01em] text-[color:var(--ink)] lg:text-[64px]">
        Проблемы
      </h2>
      <div className="flex w-full max-w-content flex-col gap-[12px] lg:flex-row">
        <ProblemCard
          num="01"
          title="Трудности в создании ключа"
          text="Исследования показали, что есть трудности при создании SSH-ключа. Это выливалось в постоянный поток обращений в техподдержку и негативный фидбек."
        />
        <ProblemCard
          num="02"
          title="Документация"
          text="Существовавшая документация не решала эту проблему: она объясняет шаги, но не помогает тому, кто не понимает сам концепт."
        />
      </div>
    </section>
  )
}
