import type { CSSProperties } from 'react'
import { asset } from '../../lib/asset'

type Box = { width: string; height: string; left: string; top: string; centered?: boolean }
type Crop = { width: string; height: string; left: string; top: string }

/** Crop window into the shared hand-drawn illustration sheet (home-illustrations.png) —
 *  box/crop percentages copied straight from Figma so both illustrations stay pixel-exact. */
function SpriteIllustration({ box, crop, rounded }: { box: Box; crop: Crop; rounded?: boolean }) {
  const boxStyle: CSSProperties = {
    width: box.width,
    height: box.height,
    left: box.left,
    top: box.top,
    transform: box.centered ? 'translateX(-50%)' : undefined,
  }
  const cropStyle: CSSProperties = { width: crop.width, height: crop.height, left: crop.left, top: crop.top }
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${rounded ? 'rounded-[20px]' : ''}`}
      style={boxStyle}
    >
      <img src={asset('/assets/home-illustrations.png')} alt="" className="absolute max-w-none" style={cropStyle} />
    </div>
  )
}

function MockupIllustration({ box, src, bordered }: { box: Box; src: string; bordered?: boolean }) {
  const boxStyle: CSSProperties = { width: box.width, height: box.height, left: box.left, top: box.top }
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden rounded-[4px] ${bordered ? 'border border-solid border-[rgba(0,0,0,0.04)]' : ''}`}
      style={boxStyle}
    >
      <img src={src} alt="" className="size-full object-cover" />
    </div>
  )
}

function CaseCard({
  href,
  title,
  ready,
  badgeIcon,
  badgeLabel,
  illustration,
}: {
  href?: string
  title: string
  ready: boolean
  badgeIcon: string
  badgeLabel: string
  illustration: React.ReactNode
}) {
  const card = (
    <div className="flex h-[369px] w-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-[var(--black-04)] p-[8px]">
      <div
        className={`relative min-h-px flex-1 overflow-hidden rounded-[24px] bg-[var(--white)] ${ready ? 'transition-colors duration-200 group-hover:bg-[var(--black-04)]' : ''}`}
      >
        {illustration}

        <div className="absolute left-[8px] top-[8px] flex size-[40px] items-center justify-center overflow-hidden rounded-[var(--radius-full)] bg-[var(--black-04)]">
          <img src={badgeIcon} alt="" className="size-[24px] object-contain" />
        </div>

        {ready ? (
          <>
            <div className="absolute right-[52px] top-[8px] flex h-[40px] items-center justify-center whitespace-nowrap rounded-[var(--radius-full)] bg-[var(--black-04)] px-[16px] text-[12px] font-medium text-black">
              {badgeLabel}
            </div>
            <img
              src={asset('/assets/home-arrow-out-dark.svg')}
              alt=""
              className="absolute right-[8px] top-[8px] size-[40px]"
            />
          </>
        ) : (
          <div className="absolute left-[52px] top-[8px] flex h-[40px] items-center justify-center whitespace-nowrap rounded-[var(--radius-full)] bg-[var(--black-04)] px-[16px] text-[12px] font-medium text-[color:var(--black-50)]">
            {badgeLabel}
          </div>
        )}
      </div>
      <div className="flex w-full flex-col px-[20px] py-[8px]">
        <p className={`text-[20px] font-medium ${ready ? 'text-black' : 'text-[color:var(--black-40)]'}`}>{title}</p>
      </div>
    </div>
  )

  return ready ? (
    <a href={href} className="group block w-full lg:flex-1">
      {card}
    </a>
  ) : (
    <div className="w-full lg:flex-1">{card}</div>
  )
}

const cloudLogo = asset('/assets/cloud-logo.svg')
const rtLogo = asset('/assets/about-rostelecom-logo.svg')

const cases = [
  [
    {
      href: '/flavour-case/',
      title: 'Вычислительные ресурсы',
      ready: true,
      badgeIcon: cloudLogo,
      badgeLabel: 'продуктовый кейс',
      illustration: (
        <SpriteIllustration
          box={{ width: '63.51%', height: '103.24%', left: '50%', top: '-3.24%', centered: true }}
          crop={{ width: '219.76%', height: '151.1%', left: '-6.53%', top: '-25.71%' }}
        />
      ),
    },
    {
      href: '/ssh-key-case/',
      title: 'SSH-ключ',
      ready: true,
      badgeIcon: cloudLogo,
      badgeLabel: 'продуктовый кейс',
      illustration: (
        <SpriteIllustration
          box={{ width: '62.93%', height: '91.91%', left: '50%', top: '13.59%', centered: true }}
          crop={{ width: '221.78%', height: '169.72%', left: '-114.57%', top: '-24.3%' }}
          rounded
        />
      ),
    },
  ],
  [
    {
      title: 'Контейнерная безопасность',
      ready: false,
      badgeIcon: cloudLogo,
      badgeLabel: 'to be done',
      illustration: (
        <MockupIllustration
          box={{ width: '89.58%', height: '108.41%', left: '5.21%', top: '19.42%' }}
          src={asset('/assets/home-card-container-security.png')}
        />
      ),
    },
    {
      title: 'Система учёта финансов',
      ready: false,
      badgeIcon: rtLogo,
      badgeLabel: 'to be done',
      illustration: (
        <MockupIllustration
          box={{ width: '93.44%', height: '88.03%', left: '3.28%', top: '19.42%' }}
          src={asset('/assets/home-card-finance.png')}
          bordered
        />
      ),
    },
  ],
  [
    {
      title: 'Электронный документооборот',
      ready: false,
      badgeIcon: rtLogo,
      badgeLabel: 'to be done',
      illustration: (
        <MockupIllustration
          box={{ width: '88.42%', height: '97.73%', left: '5.79%', top: '19.42%' }}
          src={asset('/assets/home-card-docflow.png')}
        />
      ),
    },
    {
      title: 'Биллинговая система',
      ready: false,
      badgeIcon: rtLogo,
      badgeLabel: 'to be done',
      illustration: (
        <MockupIllustration
          box={{ width: '82.82%', height: '102.91%', left: '8.49%', top: '17.15%' }}
          src={asset('/assets/home-card-billing.png')}
        />
      ),
    },
  ],
]

export function HomeCases() {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      {cases.map((row, i) => (
        <div key={i} className="flex flex-col gap-[12px] lg:flex-row lg:items-center">
          {row.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      ))}
    </div>
  )
}
