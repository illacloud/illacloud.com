import Head from 'next/head'
import { AppBackground } from '@/pages/home/bg'
import { Nav } from '@/pages/home/nav'
import { Title } from '@/pages/home/title'
import { Content } from '@/pages/home/content'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from 'react-use'
import { Footer } from '@/pages/home/footer'

const Home = () => {
  const titleRef = useRef(null)
  const [buttonColorChange, setButtonColorChange] = useState(false)
  const [navColorChange, setNavColorChange] = useState(false)
  const { width } = useWindowSize()
  const _target = useRef(null)

  useEffect(() => {
    console.log('buttonRef --title', titleRef.current?.getBoundingClientRect().bottom)
  }, [titleRef.current])

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
      <div className="w-full bg-[#fafafa]">
        <Nav buttonColorChange={navColorChange} />
        <div ref={titleRef} className=" absolute w-full z-40">
          <Title buttonColorChange={buttonColorChange} showButton={!navColorChange} />
        </div>
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
