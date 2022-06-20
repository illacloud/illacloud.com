import { BasicLayout } from '@/layouts/BasicLayout'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { IconContainer } from '@/components/home/common'
import { useTranslation } from 'next-i18next'

let tabs = {
  'Tailwind CLI': '/docs/installation',
  'Using PostCSS': '/docs/installation/using-postcss',
  'Framework Guides': '/docs/installation/framework-guides',
  'Play CDN': '/docs/installation/play-cdn',
}

let readNext = [
  {
    title: 'Test',
    href: 'https://google.com',
    body: () => <p>Test</p>,
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/avatars/owen_chen.png').default,
      dark: require('@/img/avatars/owen_chen.png').default,
    },
  },
]

export function InstallationLayout({ children }) {
  let router = useRouter()
  const { t } = useTranslation("navs")

  return (
    <BasicLayout>
      <header id="header" className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
            Installation
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
            Get started with ILLA
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">Description</p>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">End Message</p>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">{t("left_side.overview")}</p>
        </div>
      </header>
    </BasicLayout>
  )
}
