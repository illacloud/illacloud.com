import {useState} from "react";

export function LanguageSelect() {
  let [setting, setSetting] = useState("English")


  return (
    <div className="flex items-center justify-between bg-amber-100 ">
      <select
        id="theme"
        value={setting}
        onChange={(e) => setSetting(e.target.value)}
        className="  inset-0 w-full h-full "
      >
        <option key={"English"} value={"English"}>English</option>
        <option key={"Chinese"} value={"Chinese"}>Chinese</option>
      </select>

    </div>
  )
}
