import { ILLA_LOGO } from '@/pages/home/svg'
import {useEffect, useState} from "react";
import {useWindowScroll} from "react-use";

function renderItem(title, items) {
  return (
    <div className="w-full h-[212px] flex flex-col items-start justify-center px-[16px] rounded-[32px]">
      <div className="text-[16px] text-[#1d2129]">{title}</div>
      <div className="flex flex-col text-[14px]">
        {items?.map((item) => (
          <span>{item}</span>
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
    title: 'Product',
    items: ['ILLA Builder', 'ILLA cloud', 'ILLA design'],
  },
  {
    title: 'Product',
    items: ['ILLA Builder', 'ILLA cloud', 'ILLA design'],
  },
  {
    title: 'Product',
    items: ['ILLA Builder', 'ILLA cloud', 'ILLA design'],
  },
]

export function Footer() {

  const {y} = useWindowScroll()
  useEffect(()=>{
    if (y-5411 < 785){
      setHeight(10+y-5411 )
    }
  },[y])

  const [height,setHeight]= useState(10)
  return (
    <div style={{height:height}} className="w-full  flex items-center overflow-y-hidden">
      <div className='w-full flex items-center  px-[120px] transition-all'>
      <div  className="mr-[40px] w-full">
        <ILLA_LOGO />
        <span className="text-[#1d2129] w-full text-[12px]">Creat with ❤️ by ILLA</span>
      </div>
      {waysData.map((item) => renderItem(item.title, item.items))}
      </div>
    </div>
  )
}
