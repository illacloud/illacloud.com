import { useRef, useState } from "react"
import { SelectIcon, SelectIconBlack } from "@/img/home/svg"
import { useClickAway } from "react-use"
import NextLink from "next/link"
import { useTranslation } from "next-i18next"

export const ProductSelect = ({ buttonColorChange }) => {
  const { t } = useTranslation("home")
  const options = [
    { id: "illa-builder-nav", label: "ILLA Builder", value: "https://github.com/illa-family/illa-builder" },
    { id: "illa-design-nav", label: "ILLA Design", value: "https://github.com/illa-family/illa-design" },
  ]
  const [expandPanel, setExpandPanel] = useState(false)

  const ref = useRef(null)

  useClickAway(ref, () => {
    setExpandPanel(false)
  })

  return (
    <div
      ref={ref}
      className="flex flex-col relative  bg-transparent  items-center h-[48px] cursor-pointer  justify-between "
    >
      <div
        className="text-[16px] h-full w-full flex flex-row items-center justify-between px-[16px]"
        onClick={() => {
          setExpandPanel(() => !expandPanel)
        }}
      >
        <span className="mr-[8px]">{t("nav.product")}</span>
        {buttonColorChange ? <SelectIcon /> : <SelectIconBlack />}
      </div>
      <div
        className="bg-white text-[14px] transition-height duration-200 absolute top-[48px] flex flex-col items-center justify-center w-[121px] text-[#000000] rounded-[8px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)]"
        style={{
          height: `${expandPanel ? 96 : 0}px `,
          overflowY: "hidden",
        }}
      >
        {options.map((option) => (
          <NextLink key={option.label} href={option.value}>
            <div
              id={option.id}
              className="leading-[40px] text-center w-full hover:bg-[#f2f3f5]"
              onClick={() => {
                setExpandPanel(() => !expandPanel)
              }}
            >
              {option.label}
            </div>
          </NextLink>
        ))}
      </div>
    </div>
  )
}
