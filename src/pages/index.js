import Head from 'next/head'
import { AppBackground } from '@/pages/home/bg'
import { Nav } from '@/pages/home/nav'
import { Title } from '@/pages/home/title'
import { Content } from '@/pages/home/content'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useRef, useState } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import { Footer } from '@/pages/home/footer'

const Home = () => {
  const titleRef = useRef(null)
  const [buttonColorChange, setButtonColorChange] = useState(false)
  const [navColorChange, setNavColorChange] = useState(false)
  const { width, height } = useWindowSize()
  const { y } = useWindowScroll()
  const _target = useRef(null)

  const [_height, setHeight] = useState(height)
  useEffect(() => {
    setHeight(height)
  }, [height])

  useEffect(() => {
    if (typeof window.innerHeight != 'undefined') {
      setHeight(window.innerHeight)
    }
  }, [])

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
      <div>
        <div className="h-screen  w-full flex flex-col items-center">
          <Nav
            buttonColorChange={navColorChange}
            cloudButtonColorChange={y > height * 1.5 + 80 - 40}
          />
          <Title buttonColorChange={buttonColorChange} />
          <img
            style={{ objectFit: 'cover' }}
            src={require('../pages/home/images/video-placeholder.png').default}
            className="rounded-full h-[200px] w-[200px] mt-[40px] mb-[92px] block sm:hidden"
            alt={'video'}
          />
        </div>
        <div
          style={{ height: _height > 0 ? _height / 2 + 80 : '100vh' }}
          className="w-full bg-black"
        />
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
