import { useState } from 'react'
import { Nav } from '@/components/home/Nav'
import { Footer } from '@/components/home/home-footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { BookDemo } from '@/components/home/Form/BookDemo'
import style from '@/components/LandingPage/index.module.css'
import { useRaf } from 'react-use'
import { LpHeader } from '@/components/LandingPage/LpHeader';
import { contentMap } from '@/constants/landingPage';
import { AsyncIndexContent } from '@/components/LandingPage/AsyncIndexContent';
import { pageMap } from '@/constants/landingPage';
import { formatLpContentList } from '@/utils/formatLpList';
import { getStars } from '@/utils/getStars';


const LandingPageIndex = ({ content, pageName, starCounts }) => {
  const router = useRouter()
  if(!pageMap[pageName]) {
    router.replace('/404')
  }
  const { t } = useTranslation('landingPage')
  const [isBookShow, setIsBookShow] = useState(false)
  const contentMapFinal = contentMap[pageName]
  const step = useRaf(1000, 0)

  if (!content || !content.length) return null

  return (
    <>
      <Head>
        <title>{t(contentMapFinal.meta.title)}</title>
        <meta name="description" content={t(contentMapFinal.meta.description)} />
      </Head>
      <div className='w-full px-0 bg-white overflow-y-auto'>
        <Nav hasButton whiteTheme onChangeShow={() => setIsBookShow(true)} githubStarts={Math.floor(starCounts * step)} />
        <div className={style.lpContainer}>
          <LpHeader content={contentMapFinal.headerContent} />
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
    };
  }
  const id = pageMap[pageName]
  const starCounts = await getStars()
  const list = await formatLpContentList(id, locale, pageName)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['landingPage', 'home'])),
      content: list || [],
      pageName,
      starCounts
    },
  }
}
export default LandingPageIndex