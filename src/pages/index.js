import Head from 'next/head'
import { Nav } from '@/components/home/Nav'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Content } from '@/components/home/content'
import { Footer } from '@/components/home/home-footer'
import { Title } from '@/components/home/title'
import { MobileTitle, Modal } from '@/components/home/mobileTitle'
import { SubscribeModal } from '@/components/home/Subscribe'
import Script from 'next/script'

const Home = (props) => {
  const { stargazers_count } = props
  const { t } = useTranslation('home')

  const [playMaskShow, setPlayMaskShow] = useState(false)
  const [modalVisible, setModalVisible] = useState()

  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="ILLA Cloud - Accelerate your internal tools development."
        />
        <meta
          key="og:title"
          property="og:title"
          content="ILLA Cloud - Accelerate your internal tools development."
        />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta
          name="keywords"
          content="illa,illacloud,illa cloud,艾拉云,艾拉云科,艾拉"
        />
      </Head>
      <div className="bg-gray-01 w-full overflow-y-scroll xs:rounded-b-[40px] z-[2] bg-mobileHeader bg-contain bg-no-repeat">
        <Nav
          githubStarts={stargazers_count}
          onSubscribe={() => setModalVisible(true)}
          whiteTheme={false}
        />

        {/*Global site tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4VKRNGN7GE"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4VKRNGN7GE');
        `}
        </Script>
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
        <Title
          githubStarts={stargazers_count}
          setPlayMaskShow={setPlayMaskShow}
          onSubscribe={() => setModalVisible(true)}
        />
        <MobileTitle
          setPlayMaskShow={setPlayMaskShow}
          githubStarts={stargazers_count}
          onSubscribe={() => setModalVisible(true)}
        />
        <Content />
        <Modal isOpen={playMaskShow} onClose={() => setPlayMaskShow(false)} />
        <SubscribeModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </div>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  const data = await fetch(
    'https://api.github.com/repos/illa-family/illa-builder',
  ).then((res) => res.json())
  const { stargazers_count = 0 } = data

  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'navs'])),
      stargazers_count,
    },
  }
}

export default Home
