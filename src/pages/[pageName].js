import { useEffect } from 'react'
import Nav from '@/components/common/Nav'
import Footer from '@/components/common/Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import style from '@/components/LandingPage/index.module.css'
import { LpHeader } from '@/components/LandingPage/LpHeader'
import { AsyncIndexContent } from '@/components/LandingPage/AsyncIndexContent'
import { pageMap } from '@/constants/landingPage'
import CommBottom from '@/components/common/CommBottom'
import { getGithubOauth } from '@/utils/getGithubOauth'
import { IntegrationSchemaData } from '@/components/schemaData/integrationSchemaData'
import { ComponentsSchemaData } from '@/components/schemaData/componentsSchemaData'
import { InfoProvider } from '@/context/index'
import { isMobile } from '@/utils/isMobile'

const LandingPageIndex = ({ pageName, uri, isMobile }) => {
  const router = useRouter()

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
        <meta
          key="twitter:title"
          name="twitter:title"
          content={t(`${pageName}.meta.title`)}
        />
        <meta
          key="og:title"
          property="og:title"
          content={t(`${pageName}.meta.title`)}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={t(`${pageName}.meta.description`)}
        />
        <meta
          key="og:description"
          property="og:description"
          content={t(`${pageName}.meta.description`)}
        />
        <title>{t(`${pageName}.meta.title`)}</title>
        <meta name="description" content={t(`${pageName}.meta.description`)} />
        <link
          rel="canonical"
          href={`https://www.illacloud.com/${
            router.locale === 'en-US' ? '' : `${router.locale}/`
          }${pageName}`}
        />
      </Head>
      {pageName === 'integrations' ? (
        <IntegrationSchemaData />
      ) : (
        <ComponentsSchemaData />
      )}
      <InfoProvider isMobile={isMobile}>
        <div className="w-full px-0 bg-white overflow-y-auto relative z-[1]">
          <Nav whiteTheme />
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
          <CommBottom
            whiteTheme
            scrollStart={0.763}
            scrollEnd={0.81}
            uri={uri}
          />
        </div>
        <Footer whiteTheme scrollStart={0.81} scrollEnd={1} />
      </InfoProvider>
    </>
  )
}
export const getServerSideProps = async ({ locale, params, req, query }) => {
  const { pageName } = params
  if (!pageMap[pageName]) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  const uri = await getGithubOauth(query)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home',
        'landingPageIndex',
        'common',
      ])),
      pageName,
      uri,
      isMobile: isMobile(req?.headers?.['user-agent'] || ''),
    },
  }
}
export default LandingPageIndex
