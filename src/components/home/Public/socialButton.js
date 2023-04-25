export const SocialButton = (props) => {
  const { icon, text, href, onClick, whiteTheme } = props
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
      <span className={`${whiteTheme ? 'text-garyBlue-02' : 'text-white-01'} hidden xs:inline-block`}>{text}</span>
    </a>
  )
}
