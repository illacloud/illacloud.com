import { useState } from 'react'
import { Nav } from '@/components/home/NewNav'
import { Footer } from '@/components/home/newFooter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { BookDemo } from '@/components/home/Form/BookDemo'
import { useRouter } from 'next/router'
import { MainContent } from '@/components/selfHost/mainContent'
import { getGithubOauth } from '@/utils/getStars'
import BecomePartner from '@/components/home/Form/BecomePartner'


const Cloud = ({ uri }) => {
  const { t } = useTranslation('selfHost')
  const [isPartnerShow, setIsPartnerShow] = useState(false)
  const [isBookShow, setIsBookShow] = useState(false)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link
          rel="canonical"
          href={`https://www.illacloud.com/${router.locale === 'en-US' ? '' : `${router.locale}/`
            }illa-self-host`}
        />
      </Head>
      <div className='bg-gray-01 overflow-visible w-full z-[2] bg-mobileHeader bg-contain bg-no-repeat'>
        <Nav whiteTheme={false} onChangeShow={() => setIsBookShow(true)} />
        <MainContent uri={uri} />
      </div>
      <Footer scrollStart={0.866} scrollEnd={1} />
      <BookDemo
        visible={isBookShow}
        onChangeShow={() => setIsBookShow(false)}
      />
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
      ...(await serverSideTranslations(locale, ['selfHost', 'landingPageDetails', 'home', "common"])),
      uri
    },
  }
}

export default Cloud
