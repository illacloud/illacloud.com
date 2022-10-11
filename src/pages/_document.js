import clsx from "clsx"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

const FAVICON_VERSION = 3

function v(href) {
  return `${href}?v=${FAVICON_VERSION}`
}

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (<Html lang="en-US" className="dark [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href={v("/favicons/apple-touch-icon.png")} />
        <link rel="icon" type="image/png" sizes="32x32" href={v("/favicons/favicon-32x32.png")} />
        <link rel="icon" type="image/png" sizes="16x16" href={v("/favicons/favicon-16x16.png")} />
        <link rel="manifest" href={v("/favicons/site.webmanifest")} />
        <link rel="mask-icon" href={v("/favicons/safari-pinned-tab.svg")} color="#38bdf8" />
        <link rel="shortcut icon" href={v("/favicons/favicon.ico")} />
        <meta name="apple-mobile-web-app-title" content="ILLA" />
        <meta name="application-name" content="ILLA" />
        <meta name="msapplication-TileColor" content="#38bdf8" />
        <meta name="msapplication-config" content={v("/favicons/browserconfig.xml")} />
        <meta name="theme-color" content="#ffffff" />
        <Script>{`(function(w, d, s, l, i) {
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
          }}
        />
      </Head>
      <body
        className={clsx("antialiased text-slate-500 dark:text-slate-400", {
          "bg-white dark:bg-slate-900": !this.props.dangerousAsPath.startsWith("/examples/"),
        })}
      >
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NRT4JCB"
                height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
      <Main />
      <NextScript />
      <script></script>
      </body>
    </Html>)
  }
}
