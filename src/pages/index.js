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
import { AppState, getBgSize, getCoverPosition } from '@/components/home/utils'
import Script from 'next/script'
import { SubscribeModal } from '@/components/home/Subscribe'

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
  const { t } = useTranslation('home')
  const [playMaskShow, setPlayMaskShow] = useState(false)
  const [modalVisible, setModalVisible] = useState()

  useEffect(() => {
    AppState.h = height
    AppState.w = width
  }, [width, height])

  useEffect(() => {
    const _position = getCoverPosition(y) - getBgSize(y) / 2 + 200
    const _size = getBgSize(y)
    setNavColorChange(
      Math.pow(width / 2 - 100, 2) + Math.pow(getCoverPosition(0) - y + 200, 2) <
        Math.pow(_size / 2, 2)
    )
    setButtonColorChange(y > 0 && _position < titleRef.current?.getBoundingClientRect().bottom)
  }, [y])

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
      <div className={'bg-[#ffffff] sm:bg-[#fafafa] '}>
        {/*Global site tag (gtag.js) - Google Analytics */}
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4VKRNGN7GE"
        />
        <Script strategy="beforeInteractive" id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4VKRNGN7GE');
        `}
        </Script>
        <div className="h-screen w-full flex overflow-scroll scrollbar-hide flex-col items-center justify-start sm:items-center ">
          <div id="modal" className="fixed  top-0 left-0 w-full z-50 " />
          <SubscribeModal visible={modalVisible} onClose={() => setModalVisible(false)} />
          <Nav
            navColorChange={navColorChange}
            cloudButtonColorChange={y > height * 1.5 + 80 - 40}
            onSubscribe={() => setModalVisible(true)}
          />
          <Title
            ref={titleRef}
            buttonColorChange={buttonColorChange}
            onSubscribe={() => setModalVisible(true)}
          />
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
        <div
          style={{ zIndex: 35 }}
          className="w-full h-[400px] absolute justify-center  top-[calc(100vh-150px)]  hidden sm:flex "
        >
          <img
            style={{ objectFit: 'cover' }}
            src={require('../img/home/video-placeholder.png').default}
            className=" w-[400px] h-[400px]   rounded-full pointer-events-auto"
            alt={'video'}
          />
          <div className="absolute top-0 rounded-full w-[400px] h-[400px] rounded-full flex justify-center items-center">
            <span
              className="bg-white rounded-full w-[120px] h-[120px] flex items-center justify-center cursor-pointer"
              onClick={() => {
                setPlayMaskShow(true)
              }}
            >
              <PlayIcon />
            </span>
          </div>
        </div>
        <AppBackground />
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
