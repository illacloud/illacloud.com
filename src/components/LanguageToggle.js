import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import create from 'zustand'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import Router from 'next/router'

const languages = [
  {
    value: 'zh-CN',
    label: '简体中文'
  },
  {
    value: 'en-US',
    label: 'English'
  }
]

const useDefaultLanguage = create((set) => ({
  curLanguage: 'en-US',
  setCurLanguage: (curLanguage) => set({ curLanguage }),
}))

function useLanguage() {
  let { curLanguage, setCurLanguage } = useDefaultLanguage()

  useIsomorphicLayoutEffect(() => {
    const pathname = location.pathname
    const cnReg = /\/zh-CN\//
    const urlLanguage = () => {
      if (cnReg.test(pathname)) {
        return 'zh-CN'
      } else {
        return 'en-US'
      }
    }
    Router.push(location.pathname.replace(urlLanguage(), curLanguage))
  }, [curLanguage])

  return [curLanguage, setCurLanguage]
}

export function LanguageToggle({ panelClassName = 'mt-4' }) {
  const [curLanguage, setCurLanguage] = useLanguage()

  let languageLabel = ''
  switch (curLanguage) {
    case 'en-US':
      languageLabel = 'English'
      break
    case 'zh-CN':
      languageLabel = '简体中文'
      break
  }

  return (
    <Listbox value={curLanguage} onChange={setCurLanguage}>
      <Listbox.Label className="sr-only">Language</Listbox.Label>
      <Listbox.Button type="button" className="mr-6">
        <span className='text-slate-700 text-sm font-semibold hover:text-sky-500'>{languageLabel}</span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          'absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300',
          panelClassName
        )}>
        {languages.map(({ value, label }) => (
          <Listbox.Option key={value} value={value} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  'py-1 px-2 flex items-center cursor-pointer',
                  selected && 'text-sky-500',
                  active && 'bg-slate-50 dark:bg-slate-600/30'
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