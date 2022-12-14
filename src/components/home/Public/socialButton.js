export const SocialButton = (props) => {
  const { icon, text, href, onClick } = props
  return (
    <a
      className="flex px-[8px] py-[5px] gap-[8px]"
      href={href}
      target="__blank"
      onClick={() => {
        onClick && onClick()
      }}
    >
      {icon}
      <span className="text-white-01 hidden xs:inline-block">{text}</span>
    </a>
  )
}
