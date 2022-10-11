export const SocialButton = (props) => {
  const { icon, text } = props
  return (
    <div className="flex px-[8px] py-[5px] gap-[8px]">
      {icon}
      <span className="text-white-01">{text}</span>
    </div>
  )
}
