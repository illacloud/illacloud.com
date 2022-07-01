import { DiscordIcon, GitHubIconGray, ILLA_LOGO, TwitterIcon } from '@/img/home/svg'
import { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use'
import clsx from 'clsx'

function renderItem(title, items) {
  return (
    <div className="w-1/2  sm:w-1/5  flex flex-col items-start  justify-center mt-[32px] sm:mt-0 ">
      <div className="text-[16px] text-[#1d2129] font-semibold mb-[16px]">{title}</div>
      <div className="flex flex-col text-[14px]  font-normal ">
        {items?.map((item) => (
          <span className="mb-[12px]">{item}</span>
        ))}
      </div>
    </div>
  )
}

const waysData = [
  {
    title: 'Product',
    items: ['ILLA Builder', 'ILLA cloud', 'ILLA design'],
  },
  {
    title: 'Resources',
    items: ['Postgres', 'Redis', 'Rest API'],
  },
  {
    title: 'company',
    items: ['Blog', 'Careers', 'About uS'],
  },
]

const comunity = [
  {
    icon: <TwitterIcon />,
    href: '/',
  },
  {
    icon: <DiscordIcon />,
    href: '/',
  },
  {
    icon: <GitHubIconGray />,
    href: '/',
  },
]

const HEIGHT = 580

export function Footer({ noHome = false }) {
  const { y } = useWindowScroll()
  const ref = useRef(null)
  const flag = useRef(false)
  const [height, setHeight] = useState(10)

  useEffect(() => {
    if (y - (window.innerHeight * 5.5 + 130) <= HEIGHT && !flag.current) {
      setHeight(y + 10 - (window.innerHeight * 5.5 + 130))
    }
  }, [y])

  useEffect(() => {
    if (height >= HEIGHT) {
      flag.current = true
    }
  }, [height])

  return (
    <>
      <div
        ref={ref}
        style={{ height: noHome ? HEIGHT : height }}
        className=" flex-col items-center justify-center  overflow-y-hidden  px-[120px]  w-full hidden sm:flex"
      >
        <div className="flex w-full grow ">
          <div className="mr-[20px]  w-full sm:w-1/6 flex sm:flex-col  justify-center">
            <ILLA_LOGO />
            <span className="text-[#1d2129] grow-1 text-[12px] mt-[16px]">
              Creat with ❤️ by ILLA
            </span>
          </div>
          {waysData.map((item) => renderItem(item.title, item.items))}
          <div className="w-full sm:w-1/5  flex flex-row sm:flex-col items-start justify-center rounded-[32px]">
            <div className="text-[16px] text-[#1d2129] font-semibold mb-[16px] hidden sm:block">
              comunity
            </div>
            {comunity?.map((item) => (
              <span className="mx-[10px] sm:mb-[12px]">{item.icon}</span>
            ))}
          </div>
        </div>
        <span className="text-[#a9aeb8] w-full text-center mt-[20px] h-[48px]  text-[16px] mb-[40px]">
          © ILLA, Inc.
        </span>
      </div>
      <div className="flex flex-wrap items-center px-[20px] py-[40px] w-full sm:hidden">
        <div className="mr-[20px] w-full sm:w-1/6 flex sm:flex-col items-baseline justify-between">
          <ILLA_LOGO />
          <span className="text-[#a9aeb8] grow-1 text-[12px]">Creat with ❤️ by ILLA</span>
        </div>
        {waysData.map((item) => renderItem(item.title, item.items))}
        <div className="w-full sm:w-1/5 sm:h-[212px] flex flex-row sm:flex-col items-start justify-center rounded-[32px] mt-[32px]">
          {comunity?.map((item) => (
            <span className="mx-[10px] sm:mb-[12px]">{item.icon}</span>
          ))}
        </div>
        <span className="text-[#a9aeb8] w-full text-center mt-[20px] text-[12px]">
          © ILLA, Inc.
        </span>
      </div>
    </>
  )
}
