import { asset } from '../lib/asset'

const pillClass =
  'flex h-[40px] shrink-0 items-center justify-center gap-[4px] whitespace-nowrap rounded-[var(--radius-full)] bg-[#f5f5f5] py-[11px] pl-[7px] pr-[11px] transition-opacity hover:opacity-80'

/** Gmail glyph composited on its own white circle, matching the Figma icon (which is otherwise transparent). */
function GmailIcon() {
  return (
    <div className="relative size-[24px] shrink-0">
      <div className="absolute inset-[6.25%] rounded-full bg-white" />
      <img
        src={asset('/assets/contact-gmail-icon.svg')}
        alt=""
        className="absolute bottom-1/4 left-[15.63%] right-[15.63%] top-[21.88%]"
      />
    </div>
  )
}

export function ContactPills({ className }: { className?: string }) {
  return (
    <div className={className}>
      <a href="https://t.me/artur_balcer" target="_blank" rel="noopener noreferrer" className={pillClass}>
        <img src={asset('/assets/contact-telegram.svg')} alt="" className="size-[24px] shrink-0" />
        <span className="text-[12px] font-medium text-black">telegram</span>
      </a>
      <a href="mailto:arturbalcer0@gmail.com" className={pillClass}>
        <GmailIcon />
        <span className="text-[12px] font-medium text-black">почта</span>
      </a>
    </div>
  )
}
