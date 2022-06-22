import {useEffect, useState} from "react";


export function Content() {

  const [innerHeight, setInnerHeight] = useState()
  useEffect(() => {
    if (window) {
      setInnerHeight(window.innerHeight)
    }
    console.log("innerHeight", innerHeight)
  }, [])


  return <div>
    {/*page 01*/}
    <div style={{height: innerHeight}} className='flex items-center justify-around text-[48px] font-bold text-white'>
      <div>
        <div className='leading-[58px] '>A<span
          className='text-[#000000] bg-[#d4fcca] px-[16px] ml-[16px] rounded-full '>Fully</span>
        </div>
        <span className='leading-[58px] '>responsive UI library</span>
        <div className='text-[16px] opacity-90 w-[520px] font-normal'>
          We have built dozens of components in ILLA Builder to meet the needs of developers in different
          scenarios.Developers can drag and drop to boost their productivity, which greatly saves the time on building
          internal tools.
        </div>
        <div className='text-[16px] text-[#bca6f7] opacity-90  font-normal'>View all components 👍 →</div>
      </div>
      <img  src={require('./4.png').default} className='rounded-[40px] h-[740px] w-[558px] object-none'   alt={"video"}/>
    </div>
    {/*page 02*/}
    <div style={{height: innerHeight}} className='flex items-center justify-center text-[48px] font-bold text-white'>
      <div>
        Integrate with
        <div className='leading-[58px] '><span
          className='text-[#000000] bg-[#fbded5] px-[16px] rounded-full '>Any</span>
          <span className='leading-[58px] '>data source</span>
        </div>
        <div className='text-[16px] opacity-90 w-[520px] font-normal pt-[16px]'>
          ILLA can to connect to the mainstream databases or any data that can be connected through APIs and add actions
          to chain to user events.It tightly integrates the data obtained from the back-end with the front-end
          components, allowing developers to write simple data calls to achieve massive information interaction.
        </div>
        <div className='text-[16px] text-[#bca6f7] opacity-90  font-normal'>View our native integrations Day 😀 →</div>
      </div>
      <img  src={require('./2.png').default} className='rounded-[40px] ml-[42px] h-[740px] w-[558px] object-none'   alt={"video"}/>
    </div>
    {/*page 03*/}
    <div style={{height: innerHeight}} className='flex items-center justify-center text-[48px] font-bold text-white'>
      <div>
        <div className='leading-[58px] '>Built for<span
          className='text-[#000000] bg-[#fdf1c0] px-[16px] ml-[16px] rounded-full '>Developers</span>
        </div>
        <div className='text-[16px] opacity-90 w-[520px] font-normal pt-[16px]'>
          {`We offer developers a high degree of freedom to implement richer functionality through JavaScript, wrapping JS
          statements with {{Template Syntax}} to place at any string type variable spaces for more variety in the`}
          output.
        </div>
        <div className='text-[16px] text-[#bca6f7] opacity-90  font-normal'>Write JavaScript in ILLA 😋 →</div>
      </div>
      <img src={require('./1.png').default} className='rounded-[40px] ml-[42px] h-[740px] w-[558px] object-none'    alt={"video"}/>
    </div>
    {/*page 04*/}
    <div style={{height: innerHeight}} className='flex items-center justify-center text-[48px] font-bold text-white'>
      <div>
        <div className='leading-[58px] '>Real-Time</div>
        <span className='text-[#000000] bg-[#d4fcca] px-[16px] rounded-full '>Collaboration</span>
        <div className='text-[16px] opacity-90 w-[520px] font-normal'>
          ILLA turns imagination into real codes and designs. Developers can work simultaneously in ILLA Builder by
          sharing links. They can co-edit and communicate with other developers in real-time to give timely feedback,
          which will greatly improve development efficiency.
        </div>
        <div className='text-[16px] text-[#bca6f7] opacity-90  font-normal'>Write JavaScript in ILLA 🤠 →</div>
      </div>
      <img  src={require('./3.png').default}className='rounded-[40px] ml-[42px] h-[740px] w-[558px] object-none'   alt={"video"}/>

    </div>
  </div>
}
