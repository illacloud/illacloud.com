import { useEffect, useRef, useState } from 'react'
import { Nav } from '@/components/hacktoberfest/nav'
import Footer from '@/components/common/Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { BookDemo } from '@/components/home/Form/BookDemo'
import { useRouter } from 'next/router'
import { MainContent } from '@/components/hacktoberfest'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { getGithubOauth } from '@/utils/getGithubOauth'
import { Modal } from '@/components/common/Player'
import CommBottom from '@/components/common/CommBottom'
import socialHack from '@/img/social-hack.jpeg'

dayjs.extend(utc)
dayjs.extend(timezone)

const Hacktoberfest = ({ uri }) => {
  const { t } = useTranslation('hacktober')
  const [playMaskShow, setPlayMaskShow] = useState(false)
  const [isBookShow, setIsBookShow] = useState(false)
  const [activeKey, setActiveKey] = useState('')
  const router = useRouter()
  const keyDownRef = useRef(null)

  keyDownRef.current = (e) => {
    if (e.key === 'Escape') {
      setPlayMaskShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownRef.current)
    return () => {
      document.removeEventListener('keydown', keyDownRef.current)
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content={t('meta.title')}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={t('meta.description')}
        />
        <meta key="og:title" property="og:title" content={t('meta.title')} />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://illa.cloud${socialHack}`}
        />
        <meta
          key="og:url"
          property="og:url"
          content={`https://illa.cloud${router.pathname}`}
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:image"
          property="og:image"
          content={`https://illa.cloud${socialHack}`}
        />
        <link
          rel="canonical"
          href={`https://www.illacloud.com/${
            router.locale === 'en-US' ? '' : `${router.locale}/`
          }illacloud`}
        />
      </Head>
      <div className="bg-gray-01 overflow-visible w-full bg-mobileHeader bg-contain bg-no-repeat">
        <Nav activeKey={activeKey} setActiveKey={setActiveKey} />
        <MainContent
          setPlayMaskShow={() => {
            setPlayMaskShow(true)
          }}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
        />
        <div className="bg-gray-01 relative z-[0] xl:z-[1]">
          <CommBottom scrollStart={0.9} scrollEnd={1} uri={uri} />
        </div>
      </div>
      <Footer scrollStart={0.9} scrollEnd={1} />
      <BookDemo
        visible={isBookShow}
        onChangeShow={() => setIsBookShow(false)}
      />
      <Modal
        isOpen={playMaskShow}
        onClose={() => setPlayMaskShow(false)}
        link="https://cdn.illacloud.com/official-website/img/hacktoberFest/guide1.mp4"
      />
    </>
  )
}
export const getServerSideProps = async ({ locale }) => {
  const uri = await getGithubOauth()
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'hacktober',
        'home',
        'common',
      ])),
      uri,
    },
  }
}

export default Hacktoberfest
