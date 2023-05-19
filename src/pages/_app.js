import '../css/fonts.css'
import '../css/main.css'
import 'focus-visible'
import { useState, useEffect, Fragment } from 'react'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import Head from 'next/head'
import socialCardLarge from '@/img/social-card-large.png'
import { ResizeObserver } from '@juggle/resize-observer'
import 'intersection-observer'
import { SearchProvider } from '@/components/Search'
import { appWithTranslation, useTranslation } from 'next-i18next'
import Script from 'next/script'

if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  window.ResizeObserver = ResizeObserver
}

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

function App({ Component, pageProps, router }) {
  let [navIsOpen, setNavIsOpen] = useState(false)
  const { t } = useTranslation('home')

  useEffect(() => {
    if (!navIsOpen) return

    function handleRouteChange() {
      setNavIsOpen(false)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [navIsOpen, router.pathname])

  const Layout = Component.layoutProps?.Layout || Fragment
  const layoutProps = Component.layoutProps?.Layout
    ? { layoutProps: Component.layoutProps, navIsOpen, setNavIsOpen }
    : {}
  const showHeader =
    router.pathname !== '/' &&
    router.pathname !== '/hire' &&
    router.pathname !== '/subscribed' &&
    router.pathname !== '/subscribe-failed' &&
    router.pathname !== '/pricing' &&
    !/\/(components|integrations)/.test(router.asPath)
  const meta = Component.layoutProps?.meta || {}
  const description =
    meta.metaDescription || meta.description || t('meta.description')

  if (router.pathname.startsWith('/examples/')) {
    return <Component {...pageProps} />
  }

  let section =
    meta.section ||
    Object.entries(Component.layoutProps?.Layout?.nav ?? {}).find(([, items]) =>
      items.find(({ href }) => {
        return href === router.pathname
      }),
    )?.[0]

  return (
    <>
      <Title suffix="ILLA">{meta.metaTitle || meta.title}</Title>
      <meta
        name="google-site-verification"
        content="OUXmcu0vZKXsDme_4ycUDM3OdGhf_wH6_gxaDixI9Ng"
      />
      <Head>
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta key="twitter:site" name="twitter:site" content="@illaCloudHQ" />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://illa.cloud${socialCardLarge}`}
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@illaCloudHQ"
        />
        <meta
          key="og:url"
          property="og:url"
          content={`https://illa.cloud${router.pathname}`}
        />
        <meta key="og:type" property="og:type" content="website" />
        {router.locale === 'zh-CN' ? (
          <meta key="og:title" content="ILLA - 分钟级开发 轻松搭建内部工具" />
        ) : (
          <meta
            key="og:title"
            content="ILLA Cloud | Accelerate your internal tools development"
          />
        )}
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`https://illa.cloud${socialCardLarge}`}
        />
        <meta
          name="google-site-verification"
          content="Jsfwfmzu_AE4NZCHQuCT2F9dMHj6MdOPBIlaNf1H8fU"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS 2.0"
          href="/feeds/feed.xml"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Atom 1.0"
          href="/feeds/atom.xml"
        />
        <link
          rel="alternate"
          type="application/json"
          title="JSON Feed"
          href="/feeds/feed.json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtagReportConversion () {
                gtag('event', 'conversion', {
                  'send_to': 'AW-11158040052/PoXKCKuozaAYEPTbyMgp',
                });
                return false;
              }
            `,
          }}
        />
      </Head>
      <Script>
        {`(function(w, d, s, l, i) {
            w[l] = w[l] || []
            w[l].push({
              "gtm.start": new Date().getTime(),
               "event": "gtm.js",
            })
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != "dataLayer" ? "&l=" + l : ""
            j.async = true
            j.src =
              "https://www.googletagmanager.com/gtm.js?id=" + i + dl
            f.parentNode.insertBefore(j, f)
          })(window, document, "script", "dataLayer", "GTM-NRT4JCB");`}
      </Script>
      {/*Google Tag Manager (noscript)*/}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NRT4JCB"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {/*End Google Tag Manager (noscript)*/}
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
      <Script strategy="afterInteractive" >
        {` _linkedin_partner_id = "4707852";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
      </Script>
      <Script>
        {`(function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
      </Script>
      <noscript>
        <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=4707852&fmt=gif" />
      </noscript>
      <SearchProvider>
        {showHeader && (
          <Header
            hasNav={Boolean(Component.layoutProps?.Layout?.nav)}
            navIsOpen={navIsOpen}
            onNavToggle={(isOpen) => setNavIsOpen(isOpen)}
            title={meta.title}
            section={section}
          />
        )}
        <Layout {...layoutProps}>
          <Component section={section} {...pageProps} />
        </Layout>
      </SearchProvider>
    </>
  )
}

export default appWithTranslation(App)
