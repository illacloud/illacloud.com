import Head from 'next/head'
import { AppBackground } from '@/components/home/bg'
import { Nav } from '@/components/home/nav'
import { Title } from '@/components/home/title'
import { Content } from '@/components/home/content'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRef, useState, useEffect } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import { Footer } from '@/components/home/home-footer'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { PlayIcon } from '@/img/home/svg'
import * as ReactDOM from 'react-dom'
import { Player } from '@/components/home/player'

const Modal = ({ isOpen, onClose }) => {
  let modalRoot
  if (typeof document != 'undefined') {
    modalRoot = document.getElementById('modal')
  }

  if (!isOpen || !modalRoot) return null
  return ReactDOM.createPortal(
    <div className="modal">
      <Player menuExpand closeMenu={onClose} />
    </div>,
    modalRoot
  )
}

const Home = () => {
  const titleRef = useRef(null)
  const [buttonColorChange, setButtonColorChange] = useState(false)
  const [navColorChange, setNavColorChange] = useState(false)
  const { width, height } = useWindowSize()
  const { y } = useWindowScroll()
  const _target = useRef(null)
  const { t } = useTranslation('home')
  const [playMaskShow, setPlayMaskShow] = useState(false)

  useEffect(() => {
    document.body.style.overflow = playMaskShow ? 'hidden' : 'auto'
    ReactDOM.createPortal(<Player />, document.body)
  }, [playMaskShow])

  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="ILLA - Help developers build Business Tools more efficiently."
        />
        <meta
          key="og:title"
          property="og:title"
          content="ILLA - Help developers build Business Tools more efficiently."
        />
        <title>{t('slogan-1')}</title>
      </Head>
      <div>
        <div className="h-screen w-full flex flex-col items-center justify-start sm:items-center bg-[#ffffff] sm:bg-[#fafafa] ">
          <div id="modal" className="fixed  top-0 left-0 w-full z-50 " />
          <Nav
            navColorChange={navColorChange}
            cloudButtonColorChange={y > height * 1.5 + 80 - 40}
          />
          <Title ref={titleRef} buttonColorChange={buttonColorChange} />
          <div className="grow sm:grow-0  flex items-center justify-center block sm:hidden">
            <img
              style={{ objectFit: 'cover' }}
              src={require('../img/home/video-placeholder.png').default}
              className="rounded-full h-[200px] w-[200px]  "
              alt={'video'}
            />
            <span
              className="absolute  bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center"
              onClick={() => {
                setPlayMaskShow(true)
              }}
            >
              <PlayIcon />
            </span>
            <Modal isOpen={playMaskShow} onClose={() => setPlayMaskShow(false)} />
          </div>
        </div>
        <div className={clsx('w-full h-[calc(50vh+80px+50px)]  flex flex-col hidden sm:flex ')}>
          <div className="grow bg-[#fafafa]" />
          <div className="bg-black w-full block h-[80px]" />
        </div>
        <AppBackground
          changeButtonColor={(position, w, top) => {
            if (
              Math.pow(width / 2 - 40, 2) + Math.pow(top + 200, 2) <= Math.pow(w / 2, 2) &&
              !_target.current
            ) {
              _target.current = w
            }

            console.log('setNavColorChange', _target.current)
            setNavColorChange(_target.current && _target.current < w)
            setButtonColorChange(
              y > 0 && position < titleRef.current?.getBoundingClientRect().bottom
            )
          }}
        />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home', 'navs'])),
  },
})

export default Home
