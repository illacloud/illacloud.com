import { useEffect, useState } from 'react'
import { Nav } from '@/components/home/Nav'
import { Footer } from '@/components/home/home-footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { BookDemo } from '@/components/home/Form/BookDemo'
import style from '@/components/LandingPage/index.module.css'
import { useRaf } from 'react-use'
import { LpHeader } from '@/components/LandingPage/LpHeader'
import { AsyncIndexContent } from '@/components/LandingPage/AsyncIndexContent'
import { pageMap } from '@/constants/landingPage'
import { getStars } from '@/utils/getStars'

const LandingPageIndex = ({ pageName, starCounts }) => {
  const router = useRouter()
  const [isBookShow, setIsBookShow] = useState(false)
  const step = useRaf(1000, 0)

  const { t } = useTranslation('landingPageIndex')
  const content = t(`${pageName}.classify`, {
    returnObjects: true,
  })

  useEffect(() => {
    // use the router on the client side
    if (!content || Object.keys(content).length <= 0) {
      router.replace('/404')
    }
  }, [content, router])

  if (!content || Object.keys(content).length <= 0) return null

  return (
    <>
      <Head>
        <title>{t(`${pageName}.meta.title`)}</title>
        <meta name="description" content={t(`${pageName}.meta.description`)} />
        <link
          rel="canonical"
          href={`https://www.illacloud.com/${router.locale === 'en-US' ? '' : `${router.locale}/`
            }${pageName}`}
        />
      </Head>
      <div className="w-full px-0 bg-white overflow-y-auto">
        <Nav
          hasButton
          whiteTheme
          onChangeShow={() => setIsBookShow(true)}
          githubStarts={Math.floor(starCounts * step)}
        />
        <div className={style.lpContainer}>
          <LpHeader
            title={t(`${pageName}.headerContent.title`)}
            description={t(`${pageName}.headerContent.description`)}
            btnText={t(`${pageName}.headerContent.btn_text`)}
            name={pageName}
            leftImage={t(`${pageName}.headerContent.left_image`)}
          />
          <AsyncIndexContent content={content} pageName={pageName} />
        </div>
      </div>
      <BookDemo
        visible={isBookShow}
        onChangeShow={() => setIsBookShow(false)}
      />
      <Footer />
    </>
  )
}
export const getServerSideProps = async ({ locale, params }) => {
  const { pageName } = params
  if (!pageMap[pageName]) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  const starCounts = await getStars()

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home',
        'landingPageIndex',
        'common',
      ])),
      pageName,
      starCounts,
    },
  }
}
export default LandingPageIndex
