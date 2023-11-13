import { useState } from 'react'
import { Nav } from '@/components/home/NewNav'
import { Footer } from '@/components/home/Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { Title } from '@/components/comm/title'
import { MainContent } from '@/components/drive/mainContent'
import { getGithubOauth } from '@/utils/getGithubOauth'
import { DriveTitle } from '@/constants/driveContent'
import BecomePartner from '@/components/home/Form/BecomePartner'
import { DriveSchemaData } from '@/components/schemaData/driveSchemaData'

const Drive = ({ uri }) => {
  const { t } = useTranslation('drive')
  const [isPartnerShow, setIsPartnerShow] = useState(false)
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
      <div className="bg-gray-01 overflow-visible w-full z-[2] bg-mobileHeader bg-contain bg-no-repeat">
        <Nav whiteTheme={false} />
        <Title content={DriveTitle} translationName="drive" />
        <MainContent uri={uri} />
      </div>
      <Footer scrollStart={0.866} scrollEnd={1} />
      <BecomePartner
        visible={isPartnerShow}
        onChangeShow={() => setIsPartnerShow(false)}
      />
    </>
  )
}
export const getServerSideProps = async ({ locale }) => {
  const uri = await getGithubOauth()
  return {
    props: {
      ...(await serverSideTranslations(locale, ['drive', 'home', 'common'])),
      uri,
    },
  }
}

export default Drive
