import { Discord } from '@/img/public/whiteDiscord'
import { Github } from '@/img/public/whiteGithub'
import { NavPC } from './navPc'
import { NavMobile } from './navMobile'

const tabsList = [
  {
    title: 'swag.title',
    href: '#swag',
  },
  {
    title: 'contribute-method.title.all',
    href: '#contribute',
  },
  {
    title: 'event.title',
    href: '#event',
  },
]

const leftButtonGroup = [
  {
    icon: <Discord />,
    title: 'discord',
    href: 'https://discord.com/invite/illacloud',
  },
  {
    icon: <Github />,
    title: 'Github',
    href: 'https://github.com/illacloud/illa-builder',
  },
]

export const Nav = ({ activeKey, setActiveKey }) => {
  return (
    <>
      <NavPC leftButtonGroup={leftButtonGroup} tabsList={tabsList} />
      <NavMobile
        activeKey={activeKey}
        setActiveKey={setActiveKey}
        leftButtonGroup={leftButtonGroup}
        tabsList={tabsList}
      />
    </>
  )
}
