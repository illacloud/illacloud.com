import Nav from '@/components/common/Nav'
import Footer from '@/components/common/Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { MainContent } from '@/components/selfHost/mainContent'
import { getGithubOauth } from '@/utils/getGithubOauth'
import { SelfHostSchemaData } from '@/components/schemaData/selfHostSchemaData'
import { InfoProvider } from '@/context/index'
import { isMobile } from '@/utils/isMobile'

const Cloud = ({ uri, isMobile }) => {
  const { t } = useTranslation('selfHost')
  const router = useRouter()

  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content={t('meta.title')}
        />
        <meta key="og:title" property="og:title" content={t('meta.title')} />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link
          rel="canonical"
          href={`https://www.illacloud.com/${
            router.locale === 'en-US' ? '' : `${router.locale}/`
          }illa-self-host`}
        />
      </Head>
      <SelfHostSchemaData />
      <InfoProvider isMobile={isMobile}>
        <div className="bg-gray-01 overflow-visible w-full z-[2] bg-mobileHeader bg-contain bg-no-repeat">
          <Nav whiteTheme={false} />
          <MainContent uri={uri} />
        </div>
        <Footer scrollStart={0.866} scrollEnd={1} />
      </InfoProvider>
    </>
  )
}
export const getServerSideProps = async ({ locale, req, query }) => {
  const uri = await getGithubOauth(query)
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'selfHost',
        'landingPageDetails',
        'home',
        'common',
      ])),
      uri,
      isMobile: isMobile(req?.headers?.['user-agent'] || ''),
    },
  }
}

export default Cloud
