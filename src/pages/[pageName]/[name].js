import { useEffect, useState } from 'react'
import { Nav } from '@/components/home/NewNav'
import { Footer } from '@/components/home/NewFooter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { BookDemo } from '@/components/home/Form/BookDemo'
import style from '@/components/LandingPage/index.module.css'
import { LpHeader } from '@/components/LandingPage/LpHeader'
import { LpTemplate } from '@/components/LandingPage/LpTemplate'
import { useRouter } from 'next/router'
import { pageMap } from '@/constants/landingPage'
import { CommBottom } from '@/components/comm/commBottom'
import { getGithubOauth } from '@/utils/getGithubOauth'


const LandingPageSecond = ({ pageName, name, locale, uri }) => {
  const { t } = useTranslation('landingPageDetails')
  const [isBookShow, setIsBookShow] = useState(false)
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
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href={`https://www.illacloud.com/${locale === 'en-US' ? '' : `${locale}/`
            }${pageName}/${name}`}
        />
      </Head>
      <div className="w-full px-0 bg-white overflow-y-auto relative z-[1]">
        <Nav
          whiteTheme
          onChangeShow={() => setIsBookShow(true)}
        />
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
      <CommBottom whiteTheme scrollStart={0.724} scrollEnd={0.777} uri={uri} />
      </div>
      <BookDemo
        visible={isBookShow}
        onChangeShow={() => setIsBookShow(false)}
      />
      <Footer whiteTheme scrollStart={0.777} scrollEnd={1}/>
    </>
  )
}
export const getServerSideProps = async ({ locale, params }) => {
  const { pageName, name } = params
  if (!pageMap[pageName]) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  const uri = await getGithubOauth()
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
      uri
    },
  }
}
export default LandingPageSecond
