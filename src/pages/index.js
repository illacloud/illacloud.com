import Head from 'next/head'
import { AppBackground } from '@/pages/home/bg'
import { Nav } from '@/pages/home/nav'
import { Title } from '@/pages/home/title'
import { Content } from '@/pages/home/content'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRef, useState } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import { Footer } from '@/pages/home/footer'
import clsx from 'clsx'
import { Player } from '@/pages/home/player'

const Home = () => {
  const titleRef = useRef(null)
  const [buttonColorChange, setButtonColorChange] = useState(false)
  const [navColorChange, setNavColorChange] = useState(false)
  const { width, height } = useWindowSize()
  const { y } = useWindowScroll()
  const _target = useRef(null)
  const [playing, setPlaying] = useState(false)

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
        <div className="h-screen w-full flex flex-col items-center justify-between sm:items-center bg-[#fafafa]">
          <Nav
            buttonColorChange={navColorChange}
            cloudButtonColorChange={y > height * 1.5 + 80 - 40}
          />
          <Title buttonColorChange={buttonColorChange} />
          <div className="grow sm:grow-0  flex items-center block sm:hidden">
            <img
              style={{ objectFit: 'cover' }}
              src={require('../pages/home/images/video-placeholder.png').default}
              className="rounded-full h-[200px] w-[200px]  "
              alt={'video'}
            />
          </div>
        </div>
        <div className={clsx('w-full h-[calc(50vh+80px+50px)]  flex flex-col hidden sm:flex ')}>
          <div className="grow bg-[#fafafa]" />
          <div className="bg-black w-full block h-[80px]" />
        </div>
        <AppBackground
          openPlayer={() => setPlaying(true)}
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
