import {GIT_LOGO, ILLA_LOGO} from "@/pages/home/svg";
import {LanguageSelect} from "@/pages/home/language-select";

export function Nav() {

  return <div  className="inline-flex w-full justify-center  flex-row pt-10" >
    <div className="inline-flex flex-row absolute left-0  items-center pl-10 ">
      <ILLA_LOGO />
      <GIT_LOGO/>
      <LanguageSelect/>
    </div>
    <div className="inline-flex flex-row items-center text-base text-[#1d2129] font-medium gap-2 h-12 px-10 rounded-full justify-center bg-white">
      <LanguageSelect />
      <span className="px-4">doc</span>
      <span className="px-4">blog</span>
    </div>




  </div>

}
