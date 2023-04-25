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
import {DefaultStart} from '@/constants/defaultVal';


const IntegrationSecond = ({starCounts, content, pageName}) => {
  const { t } = useTranslation('landingPage')
  const [isBookShow, setIsBookShow] = useState(false)
  const {metaTitle, metaDescription} = content
  const headerContent = useMemo(() => {
    const {name, title, description} = content
    return {
      title,
      description,
      btnText: `${t('build-with', {name})}`,
      isShowBack: true,
      isIntegration: pageName === 'integrations',
      name,
    }
  }, [content, pageName, t])
  const step = useRaf(1000, 0)


  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className='w-full px-0 bg-white overflow-y-auto xs:rounded-b-[40px]'>
        <Nav hasButton whiteTheme onChangeShow={() => setIsBookShow(true)} githubStarts={Math.floor(starCounts * step)} />
        <div className={style.lpContainer}>
          <LpHeader content={headerContent}/>
          <LpTemplate />
        </div>
      </div>
      <BookDemo
        visible={isBookShow}
        onChangeShow={() => setIsBookShow(false)}
      />
      <div className='lg:pt-[50px] overflow-hidden'>
        <Footer/>
      </div>
    </>
  )
}
export const getServerSideProps = async ({ locale, params, query }) => {
  const { name } = params
  const {pageName} = query
  const request = async () => {
    try {
      const res = await fetch(
        'https://api.github.com/repos/illacloud/illa-builder',
      )
      const resJSON = await res.json()
      return resJSON?.stargazers_count || DefaultStart
    } catch {
      return DefaultStart
    }
  }
  const getComponentContent = (name, locale) => {
    return {
      name,
      title: 'What sets ILLA Cloud apart from others?',
      description: 'ILLA provides a range of commonly used front-end development components, enabling users to easily build front-end interfaces and respond to user actions and display data through simple drag-and-drop operations. In addition, users can construct complex components such as tables, charts, forms, lists, and more through the platform. This simple approach empowers users to effortlessly create complex components.',
      metaTitle: 'aaabbbcc',
      metaDescription: 'vvvaaccc'
    }
  }
  const starCounts = await request()
  const content = getComponentContent(name, locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['landingPage', 'home'])),
      starCounts,
      content,
      pageName,
    },
  }
}
export default IntegrationSecond