import { useState } from 'react'
import { Nav } from '@/components/hacktoberfest/nav'
import { Footer } from '@/components/home/Footer'
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
import { Modal } from '@/components/home/mobileTitle'
import { CommBottom } from '@/components/comm/commBottom'

dayjs.extend(utc)
dayjs.extend(timezone)

const Hacktoberfest = ({ uri }) => {
  const { t } = useTranslation('hacktober')
  const [playMaskShow, setPlayMaskShow] = useState(false)
  const [isBookShow, setIsBookShow] = useState(false)
  const [activeKey, setActiveKey] = useState('#about-illa')
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
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
          setPlayMaskShow={setPlayMaskShow}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
        />
        <div className="bg-gray-01 relative z-[1]">
          <CommBottom scrollStart={0.9} scrollEnd={1} uri={uri} />
        </div>
      </div>
      <Footer scrollStart={0.9} scrollEnd={1} />
      <BookDemo
        visible={isBookShow}
        onChangeShow={() => setIsBookShow(false)}
      />
      <Modal isOpen={playMaskShow} onClose={() => setPlayMaskShow(false)} />
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
