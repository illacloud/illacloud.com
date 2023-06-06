import { useState } from 'react'
import { Nav } from '@/components/home/NewNav'
import { Footer } from '@/components/home/newFooter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { BookDemo } from '@/components/home/Form/BookDemo'
import { useRouter } from 'next/router'
import { Title } from '@/components/drive/title'
import { MainContent } from '@/components/drive/mainContent'

const Drive = () => {
  const { t } = useTranslation('pricing')
  const [isBookShow, setIsBookShow] = useState(false)
  const router = useRouter()


  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('meta-desc')} />
        <link
          rel="canonical"
          href={`https://www.illacloud.com/${router.locale === 'en-US' ? '' : `${router.locale}/`
            }pricing`}
        />
      </Head>
      <div className='bg-gray-01 overflow-visible w-full z-[2] bg-mobileHeader bg-contain bg-no-repeat'>
        <Nav whiteTheme={false} onChangeShow={() => setIsBookShow(true)} />
        {/*TODO TITLE内容待完善*/}
        <Title />
        <MainContent />
      </div>
      <Footer />
      <BookDemo
        visible={isBookShow}
        onChangeShow={() => setIsBookShow(false)}
      />
    </>
  )
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['drive', 'home', "common"])),
  },
})

export default Drive
