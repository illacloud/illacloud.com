import { useEffect } from 'react'
import Nav from '@/components/common/Nav'
import Footer from '@/components/common/Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import style from '@/components/LandingPage/index.module.css'
import { LpHeader } from '@/components/LandingPage/LpHeader'
import { LpTemplate } from '@/components/LandingPage/LpTemplate'
import { useRouter } from 'next/router'
import { pageMap } from '@/constants/landingPage'
import CommBottom from '@/components/common/CommBottom'
import { getGithubOauth } from '@/utils/getGithubOauth'
import { InfoProvider } from '@/context/index'
import { isMobile } from '@/utils/isMobile'

const LandingPageSecond = ({ pageName, name, locale, uri, isMobile }) => {
  const { t } = useTranslation('landingPageDetails')
  const router = useRouter()
  const content = t(`${pageName}.${name}`, {
    returnObjects: true,
  })
  const { metaTitle, metaDescription } = content

  useEffect(() => {
    // use the router on the client side
    if (typeof content === 'string') {
      router.replace('/404')
    }
  }, [content, router])

  if (!content.metaTitle || typeof content === 'string') {
    return null
  }

  return (
    <>
      <Head>
        <meta key="twitter:title" name="twitter:title" content={metaTitle} />
        <meta key="og:title" property="og:title" content={metaTitle} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={metaDescription}
        />
        <meta
          key="og:description"
          property="og:description"
          content={metaDescription}
        />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href={`https://www.illacloud.com/${
            locale === 'en-US' ? '' : `${locale}/`
          }${pageName}/${name}`}
        />
      </Head>
      <InfoProvider isMobile={isMobile}>
        <div className="w-full px-0 bg-white overflow-y-auto relative z-[1]">
          <Nav whiteTheme />
          <div className={style.lpContainer}>
            <LpHeader
              title={t(`${pageName}.${name}.title`)}
              description={t(`${pageName}.${name}.description`)}
              btnText={t('build_with', { name })}
              name={name}
              isShowBack
              backText={t(`back_to_${pageName}`)}
              pageName={pageName}
            />
            <LpTemplate />
          </div>
          <CommBottom
            whiteTheme
            scrollStart={0.724}
            scrollEnd={0.777}
            uri={uri}
          />
        </div>
        <Footer whiteTheme scrollStart={0.777} scrollEnd={1} />
      </InfoProvider>
    </>
  )
}
export const getServerSideProps = async ({ locale, params, req, query }) => {
  const { pageName, name } = params
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
        'landingPageDetails',
        'home',
        'common',
      ])),
      pageName,
      name,
      locale,
      uri,
      isMobile: isMobile(req?.headers?.['user-agent'] || ''),
    },
  }
}
export default LandingPageSecond
