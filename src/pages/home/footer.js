import { DiscordIcon, GitHubIconGray, ILLA_LOGO, TwitterIcon } from '@/pages/home/svg'

function renderItem(title, items) {
  return (
    <div className="w-1/2  sm:w-1/5  h-[212px]   flex flex-col items-start justify-center rounded-[32px]">
      <div className="text-[16px] text-[#1d2129] font-semibold mb-[16px]">{title}</div>
      <div className="flex flex-col text-[14px] font-normal ">
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

export function Footer() {
  return (
    <div className="flex flex-wrap items-center px-[20px] py-[80px]">
      <div className="mr-[20px] w-full sm:w-1/6 flex sm:flex-col items-baseline justify-between">
        <ILLA_LOGO />
        <span className="text-[#1d2129] grow-1 text-[12px]">Creat with ❤️ by ILLA</span>
      </div>
      {waysData.map((item) => renderItem(item.title, item.items))}
      <div className="w-full sm:w-1/5 sm:h-[212px] flex flex-row sm:flex-col items-start justify-center rounded-[32px]">
        <div className="text-[16px] text-[#1d2129] font-semibold mb-[16px] hidden sm:block">
          comunity
        </div>
        {comunity?.map((item) => (
          <span className="mx-[10px] sm:mb-[12px]">{item.icon}</span>
        ))}
      </div>
      <span className="text-[#a9aeb8] w-full text-center mt-[20px] text-[12px]">© ILLA, Inc.</span>
    </div>
  )
}
