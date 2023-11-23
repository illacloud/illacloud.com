import Nav from '@/components/common/Nav'
import Footer from '@/components/common/Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Banner from '@/components/common/Banner'
import { MainContent } from '@/components/drive/mainContent'
import { getGithubOauth } from '@/utils/getGithubOauth'
import { DriveTitle } from '@/constants/driveContent'
import { DriveSchemaData } from '@/components/schemaData/driveSchemaData'
import { InfoProvider } from '@/context/index'
import { isMobile } from '@/utils/isMobile'

const Drive = ({ uri, isMobile }) => {
  const { t } = useTranslation('drive')
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
          }drive`}
        />
      </Head>
      <DriveSchemaData />
      <InfoProvider isMobile={isMobile}>
        <div className="bg-gray-01 overflow-visible w-full z-[2] bg-mobileHeader bg-contain bg-no-repeat">
          <Nav whiteTheme={false} />
          <Banner content={DriveTitle} translationName="drive" />
          <MainContent uri={uri} />
        </div>
        <Footer scrollStart={0.866} scrollEnd={1} />
      </InfoProvider>
    </>
  )
}
export const getServerSideProps = async ({ locale, req }) => {
  const uri = await getGithubOauth()
  return {
    props: {
      ...(await serverSideTranslations(locale, ['drive', 'home', 'common'])),
      uri,
      isMobile: isMobile(req?.headers?.['user-agent'] || ''),
    },
  }
}

export default Drive
