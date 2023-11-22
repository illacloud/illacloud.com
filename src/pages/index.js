import Head from 'next/head'
import Nav from '@/components/comm/Nav'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import NewContent from '@/components/home/Content'
import Footer from '@/components/comm/Footer'
import Banner from '@/components/home/Banner'
import { Modal } from '@/components/comm/Player'
import { useRaf } from 'react-use'
import Script from 'next/script'
import { getStars } from '@/utils/getStars'
import { getGithubOauth } from '@/utils/getGithubOauth'
import { useRouter } from 'next/router'
import { HomeSchemaData } from '@/components/schemaData/homeSchemaData'
import { InfoProvider } from '@/context/index'
import { isMobile } from '@/utils/isMobile'

const Home = ({ starCounts, uri, isMobile }) => {
  const { t } = useTranslation('home')
  const [playMaskShow, setPlayMaskShow] = useState(false)
  const step = useRaf(1000, 0)
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
        <meta
          name="keywords"
          content="illa,illacloud,illa cloud,艾拉云科,Retool,Budibase,Tooljet,UIBakery, Low-code,open-source, developers, developer tool, internal, rust,illa, illabuilder, illa-builder, retool alternative, Appsmith, Appsmith alternative, open-source alternative, budibase alternative,ローコード,低代码,开发者工具,낮은 코드,오픈 소스,オープンソース"
        />

        <link
          rel="canonical"
          href={`https://www.illacloud.com${
            router.locale === 'en-US' ? '' : `/${router.locale}`
          }`}
        />
      </Head>
      <HomeSchemaData />
      <InfoProvider isMobile={isMobile}>
        <div className="bg-black overflow-visible w-full relative z-[1]">
          <Nav whiteTheme={false} />
          <Script>
            {`(function (d, t) {
            var BASE_URL = "https://app.chatwoot.com";
            var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
            g.src = BASE_URL + "/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g, s);
            g.onload = function () {
              window.chatwootSDK.run({
                websiteToken: 'ECxzx85niyQqKpnUytwMjpUM',
                baseUrl: BASE_URL
              })
            }
          })(document, "script");`}
          </Script>
          <Banner
            setPlayMaskShow={setPlayMaskShow}
            githubStarts={Math.floor(starCounts * step)}
          />
          <NewContent />
          <Modal
            isOpen={playMaskShow}
            onClose={() => setPlayMaskShow(false)}
            link="https://cdn.illacloud.com/official-website/img/home/video.mp4"
          />
        </div>
        <Footer scrollStart={0.939} scrollEnd={1} />
      </InfoProvider>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { locale, req } = ctx
  const starCounts = await getStars()
  const uri = await getGithubOauth()
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'])),
      starCounts,
      uri,
      isMobile: isMobile(req?.headers?.['user-agent'] || ''),
    },
  }
}

export default Home
