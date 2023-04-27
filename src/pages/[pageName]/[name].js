import { useState, useMemo } from 'react'
import { Nav } from '@/components/home/Nav'
import { Footer } from '@/components/home/home-footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { BookDemo } from '@/components/home/Form/BookDemo'
import style from '@/components/LandingPage/index.module.css'
import { useRaf } from 'react-use'
import { LpHeader } from '@/components/LandingPage/LpHeader';
import { LpTemplate } from '@/components/LandingPage/LpTemplate';
import { formatLpSecondContent } from '@/utils/formatLpList'
import { getStars } from '@/utils/getStars';
import { pageMap } from '@/constants/landingPage';


const LandingPageSecond = ({ content, pageName, starCounts }) => {
  const { t } = useTranslation('landingPage')
  const [isBookShow, setIsBookShow] = useState(false)
  const { metaTitle, metaDescription } = content
  const headerContent = useMemo(() => {
    const { name, title, description } = content
    return {
      title,
      description,
      btnText: `${t('build-with', { name })}`,
      isShowBack: true,
      isIntegration: pageName === 'integrations',
      name,
    }
  }, [content, pageName, t])
  const step = useRaf(1000, 0)

  if (!content.metaTitle) return null

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className='w-full px-0 bg-white overflow-y-auto'>
        <Nav hasButton whiteTheme onChangeShow={() => setIsBookShow(true)} githubStarts={Math.floor(starCounts * step)} />
        <div className={style.lpContainer}>
          <LpHeader content={headerContent} />
          <LpTemplate />
        </div>
      </div>
      <BookDemo
        visible={isBookShow}
        onChangeShow={() => setIsBookShow(false)}
      />
      <div className='lg:pt-[50px] overflow-hidden'>
        <Footer />
      </div>
    </>
  )
}
export const getServerSideProps = async ({ locale, params, query }) => {
  const { pageName, name } = params
  if (!pageMap[pageName]) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
  const starCounts = await getStars()
  const content = await formatLpSecondContent(name, locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['landingPage', 'home'])),
      content: content,
      starCounts,
      pageName,
    },
  }
}
export default LandingPageSecond