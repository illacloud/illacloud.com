import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import Link from 'next/link'
import { IllaLogo } from '@/img/public/illa-logo'
import { CloseIcon, MenuIcon, MenuWhiteIcon } from '@/img/home/svg'
import { useState } from 'react'
import Menu from '@/components/comm/Nav/Components/MobileMenu'
import { sendTagEvent } from '@/utils/gtag'

const NavMobile = (props) => {
  const { whiteTheme = false } = props
  const [menuExpand, setMenuExpand] = useState(false)

  return (
    <>
      <div className="justify-between  px-[20px] w-full h-[64px] flex items-center xl:hidden">
        <Link legacyBehavior href="/">
          <a className="flex items-center w-[42.5px] h-[20px]">
            {whiteTheme ? <IllaLogo /> : <IllaLogoWhiteIcon />}
          </a>
        </Link>
        <span
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_menu_unfold_mob_click',
              value: 'unfold',
            })
            setMenuExpand(() => !menuExpand)
          }}
        >
          {menuExpand ? (
            <CloseIcon />
          ) : whiteTheme ? (
            <MenuIcon />
          ) : (
            <MenuWhiteIcon />
          )}
        </span>
      </div>
      <Menu
        menuExpand={menuExpand}
        closeMenu={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_fold_mob_click',
            value: 'fold',
          })
          setMenuExpand(false)
        }}
      />
    </>
  )
}

export default NavMobile
