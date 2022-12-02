export const SocialButton = (props) => {
  const { icon, text, href, onClick } = props
  return (
    <div
      className="flex px-[8px] py-[5px] gap-[8px] cursor-pointer"
      onClick={() => {
        onClick && onClick()
        window.open(href, '__blank')
      }}
    >
      {icon}
      <span className="text-white-01 hidden xs:inline-block">{text}</span>
    </div>
  )
}
