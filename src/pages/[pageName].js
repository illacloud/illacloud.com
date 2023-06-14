import { useEffect, useState } from 'react'
import { Nav } from '@/components/home/NewNav'
import { Footer } from '@/components/home/newFooter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { BookDemo } from '@/components/home/Form/BookDemo'
import style from '@/components/LandingPage/index.module.css'
import { LpHeader } from '@/components/LandingPage/LpHeader'
import { AsyncIndexContent } from '@/components/LandingPage/AsyncIndexContent'
import { pageMap } from '@/constants/landingPage'
import { CommBottom } from '@/components/comm/commBottom'
import { getGithubOauth } from '@/utils/getStars'

const LandingPageIndex = ({ pageName, uri }) => {
  const router = useRouter()
  const [isBookShow, setIsBookShow] = useState(false)

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
      <div className="w-full px-0 bg-white overflow-y-auto relative z-[1]">
        <Nav
          whiteTheme
          onChangeShow={() => setIsBookShow(true)}
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
      <CommBottom whiteTheme scrollStart={0.763} scrollEnd={0.81} uri={uri}/>
      </div>
      <BookDemo
        visible={isBookShow}
        onChangeShow={() => setIsBookShow(false)}
      />
      <Footer whiteTheme scrollStart={0.81} scrollEnd={1}/>
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
  const uri = await getGithubOauth()

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home',
        'landingPageIndex',
        'common',
      ])),
      pageName,
      uri
    },
  }
}
export default LandingPageIndex
