import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { WaysIcon } from '@/pages/home/svg'

function renderItem(icon, title, des, href) {
  return (
    <NextLink href={href ?? '/'}>
      <a href="/">
        <div className="bg-white/[0.12] w-full h-[212px] flex flex-col  items-start justify-center px-[16px] rounded-[32px]">
          {icon}
          <div className="text-[24px]">{title}</div>
          <div className="text-[16px]">{des}</div>
        </div>
      </a>
    </NextLink>
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
  const [innerHeight, setInnerHeight] = useState()
  useEffect(() => {
    if (window) {
      setInnerHeight(window.innerHeight)
    }
    console.log('innerHeight', innerHeight)
  }, [])

  return (
    <div className="w-full">
      {/*page 01*/}
      <div
        style={{ height: innerHeight }}
        className="flex flex-col sm:flex-row items-center bg-black justify-center text-[28px] sm:text-[48px] font-bold text-white px-[48px] sm:px-0"
      >
        <div>
          <div className="leading-[29px] sm: leading-[58px]">
            A
            <span className="text-[#000000] bg-[#d4fcca] px-[16px] ml-[16px] rounded-full ">
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
          src={require('./images/4.png').default}
          className="rounded-[40px] w-[279px] h-[279px] sm:w-[558px] sm:h-[740px] object-none mt-[20px] sm:mt-0"
          alt={'video'}
        />
      </div>
      {/*page 02*/}
      <div
        style={{ height: innerHeight }}
        className="flex items-center bg-black justify-center text-[48px] font-bold text-white"
      >
        <div>
          Integrate with
          <div className="leading-[58px] ">
            <span className="text-[#000000] bg-[#fbded5] px-[16px] rounded-full ">Any</span>
            <span className="leading-[58px] ">data source</span>
          </div>
          <div className="text-[16px] opacity-90 w-[520px] font-normal pt-[16px]">
            ILLA can to connect to the mainstream databases or any data that can be connected
            through APIs and add actions to chain to user events.It tightly integrates the data
            obtained from the back-end with the front-end components, allowing developers to write
            simple data calls to achieve massive information interaction.
          </div>
          <div className="text-[16px] text-[#bca6f7] opacity-90  font-normal">
            View our native integrations Day 😀 →
          </div>
        </div>
        <img
          src={require('./images/2.png').default}
          className="rounded-[40px] ml-[42px] h-[740px] w-[558px] object-none"
          alt={'video'}
        />
      </div>
      {/*page 03*/}
      <div
        style={{ height: innerHeight }}
        className="flex items-center bg-black justify-center text-[48px] font-bold text-white"
      >
        <div>
          <div className="leading-[58px] ">
            Built for
            <span className="text-[#000000] bg-[#fdf1c0] px-[16px] ml-[16px] rounded-full ">
              Developers
            </span>
          </div>
          <div className="text-[16px] opacity-90 w-[520px] font-normal pt-[16px]">
            {`We offer developers a high degree of freedom to implement richer functionality through JavaScript, wrapping JS
          statements with {{Template Syntax}} to place at any string type variable spaces for more variety in the`}
            output.
          </div>
          <div className="text-[16px] text-[#bca6f7] opacity-90  font-normal">
            Write JavaScript in ILLA 😋 →
          </div>
        </div>
        <img
          src={require('./images/1.png').default}
          className="rounded-[40px] ml-[42px] h-[740px] w-[558px] object-none"
          alt={'video'}
        />
      </div>
      {/*page 04*/}
      <div
        style={{ height: innerHeight }}
        className="flex items-center bg-black justify-center text-[48px] font-bold text-white"
      >
        <div>
          <div className="leading-[58px] ">Real-Time</div>
          <span className="text-[#000000] bg-[#d4fcca] px-[16px] rounded-full ">Collaboration</span>
          <div className="text-[16px] opacity-90 w-[520px] font-normal">
            ILLA turns imagination into real codes and designs. Developers can work simultaneously
            in ILLA Builder by sharing links. They can co-edit and communicate with other developers
            in real-time to give timely feedback, which will greatly improve development efficiency.
          </div>
          <div className="text-[16px] text-[#bca6f7] opacity-90  font-normal">
            Write JavaScript in ILLA 🤠 →
          </div>
        </div>
        <img
          src={require('./images/3.png').default}
          className="rounded-[40px] ml-[42px] h-[740px] w-[558px] object-none"
          alt={'video'}
        />
      </div>
      {/*page 05*/}
      <div
        style={{ height: innerHeight }}
        className="flex flex-col items-center bg-black justify-center text-[48px] font-bold text-white rounded-b-[80px]"
      >
        <div className="leading-[58px] w-[1040px]  ">Flexible Deployment</div>
        <div className="text-[16px] opacity-90 w-[1040px] mt-[16.5px] font-normal">
          ILLA provides two ways to deploy. Developers can use the ILLA Cloud to quickly start
          building their apps on any device. We also provide ILLA CLI for free with better security
          to ensure data safety.
        </div>
        <div
          style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(2, 50%)' }}
          className="w-[1040px] mt-[40px]"
        >
          {waysData.map((item) => renderItem(item.icon, item.title, item.des, item.href))}
        </div>
      </div>
    </div>
  )
}
