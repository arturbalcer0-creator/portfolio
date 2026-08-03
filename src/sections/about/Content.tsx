import { asset } from '../../lib/asset'
import { ContactPills } from '../../components/ContactPills'

const experience = [
  { icon: null, name: 'Фриланс', period: '2020 — 2022г' },
  { icon: asset('/assets/about-rostelecom-logo.svg'), name: 'Ростелеком', period: '2022 — 2024г' },
  { icon: asset('/assets/cloud-logo.svg'), name: 'Cloud.ru', period: '2024 — н.в.' },
]

const team = [
  {
    title: 'Продуктовая команда',
    paragraphs: [
      'В своей работе я тесно взаимодействую со всей продуктовой командой: продактом, аналитиками, разработчиками.',
      'К любой команде могу найти подход, настроить процессы и привести к светлому будущему',
    ],
  },
  {
    title: 'Дизайн-команда',
    paragraphs: [
      'Люблю делиться опытом, давать и получать обратную связь, помогать советом и тд.',
      'Считаю, что сильное комьюнити начинается с нас самих и пытаюсь активно учавствовать в жизни команды',
    ],
  },
]

const research = [
  'Так как в большинстве моих команд не было отдельного ресёрчера, этим всегда занимался я сам (кроме очень больших исследований, конечно).',
  'В своей работе всегда стараюсь опираться не на «чутьё», а на чёткие данные.',
  'Умею вести исследование от изучения проблематики, до подготовки полноценного отчёта для команды и руководства.',
]

const stack = [
  {
    icons: [asset('/assets/about-figma-icon.svg')],
    title: 'Figma',
    desc: 'Мой основной инструмент. Люблю чистоту и порядок как на макетах, так и в файлах в целом',
  },
  {
    icons: [asset('/assets/about-confluence-icon.svg'), asset('/assets/about-jira-icon.svg')],
    title: 'Jira + Confluense',
    desc: 'Трек задач, изучение документации, эпики, отслеживание задач и планирование спринтов',
  },
  {
    icons: [asset('/assets/about-claude-icon.png'), asset('/assets/about-chatgpt-icon.png')],
    title: 'Claude + ChatGPT',
    desc: 'ИИ мой полноценный рабочий инструмент, который требует знаний и опыта работы с ним',
  },
  {
    icons: [asset('/assets/about-pathway-icon.png')],
    title: 'Pathway',
    desc: 'Пользуюсь им, если надо проверить гипотезу, провести количественное исследование',
  },
]

function IconBadge({ src }: { src: string }) {
  return (
    <div className="flex size-[44px] shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--black-04)]">
      <img src={src} alt="" className="size-[24px] object-contain" />
    </div>
  )
}

function ExperienceRow({ icon, name, period }: { icon: string | null; name: string; period: string }) {
  return (
    <div className="flex items-center gap-[10px] border-b border-solid border-[var(--black-20)] py-[12px] first:border-t">
      <div className={`flex flex-1 items-center gap-[4px] ${icon ? '' : 'pl-[36px]'}`}>
        {icon && <img src={icon} alt="" className="size-[32px]" />}
        <p className="t-body flex-1 text-[color:var(--ink)]">{name}</p>
      </div>
      <p className="t-body flex-1 text-right text-[color:var(--ink)]">{period}</p>
    </div>
  )
}

function TeamCard({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className="flex flex-1 flex-col gap-[16px] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--black-04)] p-[20px]">
      <p className="t-heading-24 text-[color:var(--black)]">{title}</p>
      <div className="flex flex-col gap-[12px]">
        {paragraphs.map((p) => (
          <p key={p} className="t-body text-[color:var(--black-80)]">
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}

function StackCard({ icons, title, desc }: { icons: string[]; title: string; desc: string }) {
  return (
    <div className="flex flex-1 flex-col gap-[60px] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--black-04)] p-[20px]">
      <div className="flex gap-[4px]">
        {icons.map((icon) => (
          <IconBadge key={icon} src={icon} />
        ))}
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className="t-heading-24 text-[color:var(--black)]">{title}</p>
        <p className="t-body text-[color:var(--black-80)]">{desc}</p>
      </div>
    </div>
  )
}

export function AboutContent() {
  return (
    <section className="flex w-full flex-col items-center px-[16px] py-[80px] lg:px-[30px] lg:py-[160px]">
      <div className="flex w-full max-w-content flex-col gap-[64px] lg:gap-[92px]">
        {/* Intro */}
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            {/* Desktop: matches Figma's exact line breaks */}
            <p className="hidden text-[64px] font-semibold leading-[1.1] tracking-[-0.01em] text-[color:var(--ink)] lg:block">
              Привет! Меня зовут Артур, <br />
              я продуктовый дизайнер <br />
              и на данный момент работаю
            </p>
            <div className="hidden items-center gap-[24px] lg:flex">
              <p className="text-[64px] font-semibold leading-[1.1] tracking-[-0.01em] text-[color:var(--ink)]">
                в
              </p>
              <div className="flex items-center gap-[12px]">
                <img src={asset('/assets/cloud-logo.svg')} alt="" className="size-[83px]" />
                <p className="text-[64px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#21c072]">
                  Cloud.ru
                </p>
              </div>
            </div>

            {/* Mobile: natural wrap */}
            <p className="text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-[color:var(--ink)] lg:hidden">
              Привет! Меня зовут Артур, я продуктовый дизайнер и на данный момент работаю в{' '}
              <span className="inline-flex items-center gap-[6px]">
                <img src={asset('/assets/cloud-logo.svg')} alt="" className="inline-block size-[28px]" />
                <span className="text-[#21c072]">Cloud.ru</span>
              </span>
            </p>
          </div>
          <ContactPills className="flex flex-row flex-wrap items-start gap-[8px]" />
        </div>

        {/* Опыт */}
        <div className="flex flex-col gap-[24px]">
          <p className="t-heading-44 text-[color:var(--ink)]">Опыт</p>
          <div className="flex flex-col gap-[24px] lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-[24px]">
              <p className="t-body text-[color:var(--ink)]">
                Я продуктовый дизайнер с четырёхлетним коммерческим опытом проектирования сложных
                enterprise-систем и продуктовых интерфейсов.
              </p>
              <p className="t-body text-[color:var(--ink)]">
                Веду проекты от исследования до реализации в кросс-функциональных командах с
                продакт-менеджерами и аналитиками.
              </p>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              {experience.map((e) => (
                <ExperienceRow key={e.name} {...e} />
              ))}
            </div>
          </div>
        </div>

        {/* Опыт работы в команде */}
        <div className="flex flex-col gap-[24px]">
          <p className="t-heading-44 text-[color:var(--ink)]">Опыт работы в команде</p>
          <div className="flex flex-col gap-[12px] lg:flex-row">
            {team.map((t) => (
              <TeamCard key={t.title} {...t} />
            ))}
          </div>
        </div>

        {/* Опыт в исследованиях */}
        <div className="flex flex-col gap-[24px]">
          <p className="t-heading-44 text-[color:var(--ink)]">Опыт в исследованиях</p>
          <div className="flex flex-col gap-[12px]">
            {research.map((p) => (
              <p key={p} className="t-body text-[color:var(--ink)]">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Рабочий стек */}
        <div className="flex flex-col gap-[24px]">
          <p className="t-heading-44 text-[color:var(--ink)]">Рабочий стек</p>
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[12px] lg:flex-row">
              <StackCard {...stack[0]} />
              <StackCard {...stack[1]} />
            </div>
            <div className="flex flex-col gap-[12px] lg:flex-row">
              <StackCard {...stack[2]} />
              <StackCard {...stack[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
