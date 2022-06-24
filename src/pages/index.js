import Head from 'next/head'
import { AppBackground } from '@/pages/home/bg'
import { Nav } from '@/pages/home/nav'
import { Title } from '@/pages/home/title'
import { Content } from '@/pages/home/content'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRef, useState } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import { Footer } from '@/pages/home/footer'
import { isMobile } from '@/pages/utils'

const Home = () => {
  const titleRef = useRef(null)
  const [buttonColorChange, setButtonColorChange] = useState(false)
  const [navColorChange, setNavColorChange] = useState(false)
  const { width, height } = useWindowSize()
  const { y } = useWindowScroll()
  const _target = useRef(null)

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
        <title>ILLA - Help developers build Business Tools more efficiently.</title>
      </Head>
      <div className="overflow-hidden  w-full bg-[#fafafa] flex flex-col items-center ">
        <Nav
          buttonColorChange={navColorChange}
          cloudButtonColorChange={y > height * 1.5 + 80 - 40}
        />
        <div ref={titleRef} className="relative  sm:absolute flex justify-center w-full z-40">
          <Title
            buttonColorChange={!isMobile() && buttonColorChange}
            showButton={!navColorChange}
          />
        </div>
        {isMobile() ? (
          <img
            style={{ objectFit: 'cover' }}
            src={require('../pages/home/images/video-placeholder.png').default}
            className={' w-[200px]  h-[200px]  bg-[#fdf1c0]  rounded-full my-[40px]'}
            alt={'video'}
          />
        ) : (
          <AppBackground
            changeButtonColor={(position, w, top) => {
              if (
                Math.pow(width / 2 - 40, 2) + Math.pow(top + 200, 2) <= Math.pow(w / 2, 2) &&
                !_target.current
              ) {
                _target.current = w
              }
              setNavColorChange(_target.current && _target.current < w)
              setButtonColorChange(position <= titleRef.current?.getBoundingClientRect().bottom)
            }}
          />
        )}

        <Content />
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home'])),
  },
})

export default Home
