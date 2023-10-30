import clsx from 'clsx'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

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
    return (
      <Html
        lang={this?.props.__NEXT_DATA__?.locale || 'en-US'}
        className="dark [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]"
      >
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={v('/favicons/apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={v('/favicons/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={v('/favicons/favicon-16x16.png')}
          />
          <link rel="manifest" href={v('/favicons/site.webmanifest')} />
          <link
            rel="mask-icon"
            href={v('/favicons/safari-pinned-tab.svg')}
            color="#38bdf8"
          />
          <link rel="shortcut icon" href={v('/favicons/favicon.ico')} />
          <meta name="apple-mobile-web-app-title" content="ILLA" />
          <meta name="application-name" content="ILLA" />
          <meta name="msapplication-TileColor" content="#38bdf8" />
          <meta httpEquiv="content-language" content="en-us" />
          <meta
            name="msapplication-config"
            content={v('/favicons/browserconfig.xml')}
          />
          <meta name="theme-color" content="#000000" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-QW745VE33W"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QW745VE33W');
              `,
            }}
          />
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
          className={clsx('antialiased text-slate-500 dark:text-slate-400', {
            'bg-white dark:bg-slate-900':
              !this.props.dangerousAsPath.startsWith('/examples/'),
          })}
        >
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              _linkedin_partner_id = "4707852";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})(window.lintrk);
              `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              !function(e,t,n,s,u,a)
              {e.twq ||
                ((s = e.twq =
                  function () {
                    s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
                  }),
                (s.version = '1.1'),
                (s.queue = []),
                (u = t.createElement(n)),
                (u.async = !0),
                (u.src = 'https://static.ads-twitter.com/uwt.js'),
                (a = t.getElementsByTagName(n)[0]),
                a.parentNode.insertBefore(u, a))}
              (window,document,'script'); twq('config','ogv2a');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src="https://px.ads.linkedin.com/collect/?pid=4707852&fmt=gif"
            />
          </noscript>
        </body>
      </Html>
    )
  }
}
