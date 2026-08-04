import { asset } from '../../lib/asset'
import { ContactPills } from '../../components/ContactPills'

export function HomeIntro() {
  return (
    <div className="flex w-full flex-col items-start gap-[24px] lg:flex-row lg:items-start lg:justify-between">
      <div className="flex w-full flex-col items-start gap-[16px] lg:w-[570px] lg:gap-[24px]">
        <p className="text-[24px] font-medium leading-[1.3] text-black lg:text-[32px] lg:leading-[normal]">
          Привет! Меня зовут Артур, я продуктовый дизайнер. Сейчас работаю в{' '}
          <span className="inline-flex items-center gap-[4px] align-middle">
            <img src={asset('/assets/cloud-logo.svg')} alt="" className="inline-block size-[27px] lg:size-[36px]" />
            <span className="text-[#1cba6c] underline decoration-solid [text-underline-position:from-font]">
              Cloud.ru
            </span>
          </span>
        </p>
        <p className="text-[24px] font-medium leading-[1.3] text-black lg:text-[32px] lg:leading-[normal]">
          <a
            href="/about/"
            className="text-[#1cba6c] underline decoration-solid [text-underline-position:from-font]"
          >
            Здесь
          </a>{' '}
          я подробнее рассказал о себе
        </p>
      </div>
      <ContactPills className="flex flex-row flex-wrap items-start gap-[8px] self-end lg:flex-col" />
    </div>
  )
}
