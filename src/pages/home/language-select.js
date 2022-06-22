import {useState} from "react";
import { SelectIconBlack} from "@/pages/home/svg";

export function LanguageSelect() {
  let [setting, setSetting] = useState("English")
  const options = ["English","Chinese"]
  const [expandPanel,setExpandPanel] = useState(false)

  return (
    <div className="flex  flex-col text-black bg-transparent items-center w-[108px] h-[48px] cursor-pointer  justify-between ">
      <div className="text-[16px] h-full w-full flex flex-row items-center justify-between px-[16px]" onClick={()=>{
        setExpandPanel(()=>!expandPanel)
      }}>{setting} <SelectIconBlack/> </div>
      <div className='bg-white top-[48px] flex flex-col items-center justify-center w-[108px] text-[#000000] rounded-[8px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)]' style={{height:`${expandPanel ? 96 : 0}px `, transition:'height 200ms' , position:"absolute",  overflowY:"hidden"}}>
        {options.map((value)=><div className='leading-[40px] ' onClick={()=>{
          setSetting(value)
          setExpandPanel(()=>!expandPanel)
        }}>{value}</div>)}
      </div>
    </div>
  )
}
