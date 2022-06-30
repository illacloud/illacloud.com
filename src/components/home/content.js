import NextLink from 'next/link'
import { WaysIcon } from '@/img/home/svg'

function renderItem(icon, title, des, href) {
  return (
    <a className="sm:w-1/2 " href="/">
      <NextLink href={href ?? '/'}>
        <div className="bg-white/[0.12] w-full sm:w-auto flex flex-col items-start justify-center p-[16px] sm:p-[32px] mt-[16px] mr-4  rounded-[32px]">
          {icon}
          <div className="text-[16px] mt-[12px] mb-[8px]">{title}</div>
          <div className="text-[12px]">{des}</div>
        </div>
      </NextLink>
    </a>
  )
}

const waysData = [
  {
    icon: <WaysIcon />,
    title: 'ILLA cloud',
    des: 'Try one-click deployment in ILLA Cloud and enjoy the easiest deployment experience',
    href: '/',
  },
  {
    icon: <WaysIcon />,
    title: 'ILLA cloud',
    des: 'Try one-click deployment in ILLA Cloud and enjoy the easiest deployment experience',
    href: '/',
  },
  {
    icon: <WaysIcon />,
    title: 'ILLA cloud',
    des: 'Try one-click deployment in ILLA Cloud and enjoy the easiest deployment experience',
    href: '/',
  },
  {
    icon: <WaysIcon />,
    title: 'ILLA cloud',
    des: 'Try one-click deployment in ILLA Cloud and enjoy the easiest deployment experience',
    href: '/',
  },
]

export function Content() {
  return (
    <div className="w-full">
      {/*page 01*/}
      <div className="flex sm:h-screen py-[40px] flex-col sm:flex-row items-center bg-black justify-center text-[28px] sm:text-[48px] font-bold text-white px-[48px] sm:px-0">
        <div>
          <div className="leading-[29px] sm:leading-[58px]">
            A
            <span className="text-[#000000] bg-[#d4fcca] px-[8px] sm:px-[16px] ml-[8px] sm:ml-[16px] rounded-full ">
              Fully
            </span>
          </div>
          <span className="leading-[29px] sm:leading-[58px] ">responsive UI library</span>
          <div className="text-[16px] opacity-90 w-full sm:w-[520px] mt-[8px] font-normal">
            We have built dozens of components in ILLA Builder to meet the needs of developers in
            different scenarios.Developers can drag and drop to boost their productivity, which
            greatly saves the time on building internal tools.
          </div>
          <div className="text-[16px] text-[#bca6f7] opacity-90 mt-[8px]  font-normal">
            View all components 👍 →
          </div>
        </div>
        <img
          style={{ objectFit: 'cover' }}
          src={require('../../img/home/4.png').default}
          className="rounded-[40px] w-[279px] h-[279px] sm:w-[558px] sm:h-[740px] object-none mt-[20px] sm:mt-0 sm:ml-[42px]"
          alt={'video'}
        />
      </div>
      {/*page 02*/}
      <div className="flex sm:h-screen py-[40px] flex-col sm:flex-row items-center bg-black justify-center text-[28px] sm:text-[48px] font-bold text-white px-[48px] sm:px-0">
        <div>
          <div className="leading-[29px] sm:leading-[58px]">Integrate with</div>
          <span className="text-[#000000] bg-[#fbded5] px-[8px] sm:px-[16px] mr-[8px] sm:mr-[16px] rounded-full ">
            Any
          </span>
          <span className="leading-[29px] sm:leading-[58px] ">data source</span>
          <div className="text-[16px] opacity-90 w-full sm:w-[520px] mt-[8px] font-normal">
            ILLA can to connect to the mainstream databases or any data that can be connected
            through APIs and add actions to chain to user events.It tightly integrates the data
            obtained from the back-end with the front-end components, allowing developers to write
            simple data calls to achieve massive information interaction.
          </div>
          <div className="text-[16px] text-[#bca6f7] opacity-90 mt-[8px]  font-normal">
            View our native integrations Day 😀 →
          </div>
        </div>
        <img
          style={{ objectFit: 'cover' }}
          src={require('../../img/home/4.png').default}
          className="rounded-[40px] w-[279px] h-[279px] sm:w-[558px] sm:h-[740px] object-none mt-[20px] sm:mt-0 sm:ml-[42px]"
          alt={'video'}
        />
      </div>
      {/*page 03*/}
      <div className="flex sm:h-screen py-[40px] flex-col sm:flex-row items-center bg-black justify-center text-[28px] sm:text-[48px] font-bold text-white px-[48px] sm:px-0">
        <div>
          <div className="leading-[29px] sm:leading-[58px]">
            Built for
            <span className="text-[#000000] bg-[#fdf1c0] px-[8px] sm:px-[16px] ml-[4px] rounded-full ">
              Developers
            </span>
          </div>
          <div className="text-[16px] opacity-90 w-full sm:w-[520px] mt-[8px] font-normal">
            {`We offer developers a high degree of freedom to implement richer functionality through JavaScript, wrapping JS statements with {{Template Syntax}} to place at any string type variable spaces for more variety in the output.`}
          </div>
          <div className="text-[16px] text-[#bca6f7] opacity-90 mt-[8px]  font-normal">
            Write JavaScript in ILLA 😋 →
          </div>
        </div>
        <img
          style={{ objectFit: 'cover' }}
          src={require('../../img/home/4.png').default}
          className="rounded-[40px] w-[279px] h-[279px] sm:w-[558px] sm:h-[740px] object-none mt-[20px] sm:mt-0 sm:ml-[42px]"
          alt={'video'}
        />
      </div>
      {/*page 04*/}
      <div className="flex sm:h-screen py-[40px] flex-col sm:flex-row items-center bg-black justify-center text-[28px] sm:text-[48px] font-bold text-white px-[48px] sm:px-0">
        <div>
          <div className="leading-[29px] sm:leading-[58px]">Real-Time</div>
          <span className="text-[#000000] bg-[#d4fcca] px-[8px] sm:px-[16px] rounded-full ">
            Collaboration
          </span>
          <div className="text-[16px] opacity-90 w-full sm:w-[520px] mt-[8px] font-normal">
            ILLA turns imagination into real codes and designs. Developers can work simultaneously
            in ILLA Builder by sharing links. They can co-edit and communicate with other developers
            in real-time to give timely feedback, which will greatly improve development efficiency.
          </div>
          <div className="text-[16px] text-[#bca6f7] opacity-90 mt-[8px]  font-normal">
            Write JavaScript in ILLA 🤠 →
          </div>
        </div>
        <img
          style={{ objectFit: 'cover' }}
          src={require('../../img/home/4.png').default}
          className="rounded-[40px] w-[279px] h-[279px] sm:w-[558px] sm:h-[740px] object-none mt-[20px] sm:mt-0 sm:ml-[42px]"
          alt={'video'}
        />
      </div>
      {/*page 05*/}
      <div className="w-full flex justify-center">
        <div className="flex sm:h-screen py-[40px] flex-col w-full  sm:w-3/5  justify-center sm:items-center text-[28px] sm:text-[48px] font-bold text-white px-[48px] sm:px-0 rounded-b-[40px] sm:rounded-b-[80px]">
          <div className="leading-[29px] w-full sm:leading-[58px] ">Flexible Deployment</div>
          <div className="text-[16px] opacity-90 w-full sm:w-full mt-[8px] font-normal opacity-90">
            ILLA provides two ways to deploy. Developers can use the ILLA Cloud to quickly start
            building their apps on any device. We also provide ILLA CLI for free with better
            security to ensure data safety.
          </div>
          <div className="mt-[16px] flex flex-wrap sm:justify-between ">
            {waysData.map((item) => renderItem(item.icon, item.title, item.des, item.href))}
          </div>
        </div>
      </div>
    </div>
  )
}
