import Head from 'next/head'
import { Nav } from '@/components/home/nav'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useRef, useState } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import { useTranslation } from 'next-i18next'
import { Content } from '@/components/home/content'
import { Footer } from '@/components/home/home-footer'
import { AppState, getBgSize, getCoverPosition } from '@/components/home/utils'
import { Title } from '@/components/home/title'

// const Modal = ({ isOpen, onClose }) => {
//   let modalRoot
//   if (typeof document != 'undefined') {
//     modalRoot = document.getElementById('modal')
//   }
//
//   if (!isOpen || !modalRoot) return null
//   return ReactDOM.createPortal(
//     <div className="modal">
//       <Player menuExpand closeMenu={onClose} />
//     </div>,
//     modalRoot,
//   )
// }

const Home = () => {
  const titleRef = useRef(null)
  const [buttonColorChange, setButtonColorChange] = useState(false)
  const [navColorChange, setNavColorChange] = useState(false)
  const { width, height } = useWindowSize()
  const { y } = useWindowScroll()
  const { t } = useTranslation('home')
  const [playMaskShow, setPlayMaskShow] = useState(false)
  const [modalVisible, setModalVisible] = useState()

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    AppState.h = height
    AppState.w = width
  }, [width, height])

  useEffect(() => {
    const _position = getCoverPosition(y) - getBgSize(y) / 2 + 200
    const _size = getBgSize(y)
    setNavColorChange(
      Math.pow(width / 2 - 100, 2) +
        Math.pow(getCoverPosition(0) - y + 200, 2) <
        Math.pow(_size / 2, 2),
    )
    setButtonColorChange(
      y > 0 && _position < titleRef.current?.getBoundingClientRect().bottom,
    )
  }, [y])

  const containerRef = useRef(null)

  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="ILLA Cloud - Accelerate your internal tools development."
        />
        <meta
          key="og:title"
          property="og:title"
          content="ILLA Cloud - Accelerate your internal tools development."
        />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta
          name="keywords"
          content="illa,illacloud,illa cloud,艾拉云,艾拉云科,艾拉"
        />
      </Head>
      <Nav showButton={showButton} />
      <div
        className="bg-gray-01  w-full overflow-y-scroll sm:rounded-b-[80px] z-[2]"
        ref={containerRef}
      >
        {/*Global site tag (gtag.js) - Google Analytics */}
        {/*<Script*/}
        {/*  strategy="beforeInteractive"*/}
        {/*  src="https://www.googletagmanager.com/gtag/js?id=G-4VKRNGN7GE"*/}
        {/*/>*/}
        {/*<Script strategy="beforeInteractive" id="google-analytics">*/}
        {/*  {`*/}
        {/*  window.dataLayer = window.dataLayer || [];*/}
        {/*  function gtag(){window.dataLayer.push(arguments);}*/}
        {/*  gtag('js', new Date());*/}
        {/*  gtag('config', 'G-4VKRNGN7GE');*/}
        {/*`}*/}
        {/*</Script>*/}
        {/*<Script>*/}
        {/*  {`(function (d, t) {*/}
        {/*    var BASE_URL = "https://app.chatwoot.com";*/}
        {/*    var g = d.createElement(t), s = d.getElementsByTagName(t)[0];*/}
        {/*    g.src = BASE_URL + "/packs/js/sdk.js";*/}
        {/*    g.defer = true;*/}
        {/*    g.async = true;*/}
        {/*    s.parentNode.insertBefore(g, s);*/}
        {/*    g.onload = function () {*/}
        {/*      window.chatwootSDK.run({*/}
        {/*        websiteToken: 'ECxzx85niyQqKpnUytwMjpUM',*/}
        {/*        baseUrl: BASE_URL*/}
        {/*      })*/}
        {/*    }*/}
        {/*  })(document, "script");`}*/}
        {/*</Script>*/}
        <Title />
        <Content />
      </div>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home', 'navs'])),
  },
})

export default Home
