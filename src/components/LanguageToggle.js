import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const languages = [
  {
    value: 'en-US',
    label: 'English',
  },
  {
    value: 'zh-CN',
    label: '简体中文',
  },
  // todo 文档待补充翻译, 先不显示label
  // {
  //   value: 'ja-JP',
  //   label: '日本語',
  // },
  // {
  //   value: 'ko-KR',
  //   label: '한국인'
  // }
]

export function LanguageToggle({ panelClassName = 'mt-4' }) {
  const router = useRouter()
  const curLanguage = router.locale

  const findLanguage = languages.find(value => {
    return router.locale === value.value
  })?.label


  return (
    <Listbox
      value={curLanguage}
      onChange={(value) => {
        router.push(router.asPath, undefined, { locale: value })
      }}
    >
      <Listbox.Label className="sr-only">Language</Listbox.Label>
      <Listbox.Button type="button" className="mr-6">
        <span className="text-slate-700 text-sm font-semibold hover:text-sky-500">
          {findLanguage ?? "English"}
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          'absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300',
          panelClassName,
        )}
      >
        {languages.map(({ value, label }) => (
          <Listbox.Option key={value} value={value} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  'lg:py-1 lg:px-2 py-2 px-3 flex items-center cursor-pointer',
                  selected && 'text-sky-500',
                  active && 'bg-slate-50 dark:bg-slate-600/30',
                )}
              >
                {label}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
