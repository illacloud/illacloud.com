import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { SelectIcon, SelectIconBlack } from '@/img/home/svg'
import clsx from 'clsx'
import { sendTagEvent } from '@/utils/gtag'

export const ProductSelect = ({ buttonColorChange = true }) => {
  const { t } = useTranslation('home')
  const router = useRouter()
  const options = [
    {
      label: 'ILLA Builder',
      value: 'https://github.com/illacloud/illa-builder',
      tagCategory: 'homepage_menu_product_builder_click',
      openNewPage: true
    },
    {
      label: 'ILLA Design',
      value: 'https://github.com/illacloud/illa-design',
      tagCategory: 'homepage_menu_product_design_click',
      openNewPage: true
    },
    {
      label: t('nav.integrations'),
      value: `/${router.locale}/integrations`,
      tagCategory: 'homepage_menu_product_integration_click',
      target: 'Integrations'
    },
    {
      label: t('nav.components'),
      value: `/${router.locale}/components`,
      tagCategory: 'homepage_menu_product_component_click',
      target: 'Components'
    },
  ]
  const [expandPanel, setExpandPanel] = useState(false)

  const ref = useRef(null)

  useClickAway(ref, () => {
    setExpandPanel(false)
  })

  return (
    <div
      ref={ref}
      className="flex flex-col relative  bg-transparent  items-center h-[48px] cursor-pointer  justify-between "
    >
      <div
        className="text-[16px] h-full w-full flex flex-row items-center justify-between px-[16px]"
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_product_click',
            label: t('nav.product'),
          })
          setExpandPanel(() => !expandPanel)
        }}
      >
        <span className="mr-[8px]">{t('nav.product')}</span>
        {buttonColorChange ? <SelectIcon /> : <SelectIconBlack />}
      </div>
      <div
        className={clsx(
          'text-[14px] transition-height duration-200 absolute top-[48px] flex flex-col items-center justify-center w-[121px] rounded-[8px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)] overflow-y-hidden',
          {
            'bg-gray-02 text-white-01': buttonColorChange,
            'bg-white text-gray-01': !buttonColorChange,
          },
        )}
        style={{
          height: `${expandPanel ? 192 : 0}px `,
        }}
      >
        {options.map((option) => (
          <a
            href={option.value.replace('/en-US', '')}
            target={option.openNewPage ? '_blank' : '_self'}
            className="w-full"
            key={option.label}
          >
            <div
              className={clsx(
                'h-[40px] leading-[40px] text-center w-full hover:bg-white-09',
                {
                  'hover:bg-white-09': buttonColorChange,
                  'hover:bg-garyBlue-09': !buttonColorChange,
                },
              )}
              onClick={() => {
                sendTagEvent({
                  action: 'click',
                  category: option.tagCategory,
                  label: option.target || option.label,
                  value: option.value,
                })
                setExpandPanel(() => !expandPanel)
              }}
            >
              {option.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
