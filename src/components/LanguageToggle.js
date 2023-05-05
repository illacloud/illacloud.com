import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Language from '@/img/home/language_white.svg'
import Link from 'next/link';

const finalLanguages = {
  "en-US": "English",
  "zh-CN": "简体中文",
  "ko-KR": "한국인",
  "ja-JP": "日本語",
  "af-ZA": "Afrikaans",
  "cs-CZ": "čeština",
  "de-DE": "Deutsch",
  "da-DK": "dansk",
  "el-GR": "ελληνικά",
  "es-ES": "español",
  "fi-FI": "suomi",
  "fr-FR": "français",
  "it-IT": "italiano",
  "nl-NL": "Nederlands",
  "no-NO": "norsk",
  "pl-PL": "polski",
  "pt-PT": "português",
  "ro-RO": "română",
  "ru-RU": "русский",
  "sv-SE": "svenska",
  "uk-UA": "українська"
}


const languages = Object.keys(finalLanguages).map((key) => ({
  value: key,
  label: finalLanguages[key],
}))

export function LanguageToggle({ panelClassName = 'mt-4' }) {
  const router = useRouter()
  const curLanguage = router.locale




  return (
    <Listbox
      value={curLanguage}
      onChange={(value) => {
        router.push(router.asPath, undefined, { locale: value })
      }}
    >
      {({ open }) => (<>
        <Listbox.Label className="sr-only">Language</Listbox.Label>
        <Listbox.Button type="button" className="mr-6">
          <span className="text-slate-700 text-sm font-semibold hover:text-sky-500">
            {finalLanguages[curLanguage || "en-US"]}
          </span>
        </Listbox.Button>
        {open && <>
          <Listbox.Options
            className={clsx(
              'absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 max-h-[135px] overflow-y-scroll',
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
          <Link href="https://crowdin.com/project/illacloud-website" legacyBehavior>
            <a className='absolute z-50 top-[170px] right-0 bg-white ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 max-h-[135px] overflow-y-scroll' target='_blank'>
              <span className="text-grayBlue-03 text-sm font-semibold hover:text-sky-500 flex items-center justify-center gap-[4px]">
                <img src={Language} alt='language' />By Crowdin</span></a>
          </Link>
        </>}
      </>
      )}
    </Listbox >
  )
}
