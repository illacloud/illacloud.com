import { SidebarLayout } from '@/layouts/SidebarLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Title } from '@/components/Title'
import { ILLADocumentationNav } from '@/navs/documentation'

export function DocumentationLayout(props) {
  let router = useRouter()
  return (
    <>
      <Title suffix={router.pathname === '/' ? undefined : 'ILLA'}>
        {props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}
      </Title>
      <DocumentationHeader meta={props.layoutProps.meta} />
      <SidebarLayout nav={ILLADocumentationNav(router.locale)} {...props} />
    </>
  )
}

export function DocumentationHeader(props) {
  let router = useRouter()

  const { meta } = props
  return (
    <Head>
      <meta
        key="og:url"
        property="og:url"
        content={`https://illa.cloud.com${router.pathname}`}
      />
      <meta key="og:type" property="og:type" content="article" />
      <meta
        key="og:title"
        property="og:title"
        content={`${meta.metaTitle || meta.title} – ILLA`}
      />
      <meta
        key="og:image"
        name="og:image"
        property="og:image"
        content={`https://illa.cloud${meta.image ??
          `https://cdn.illacloud.com/official-website/img/illa_logo.png`
          }`}
      />
      <meta
        key="og:description"
        name="og:description"
        property="og:description"
        content={meta.description ?? meta.desc}
      />

      <meta
        key="image"
        name="image"
        content={`https://illa.cloud${meta.image ??
          `https://cdn.illacloud.com/official-website/img/illa_logo.png`
          }`}
      />

      <meta name="description" content={meta.description ?? meta.desc}></meta>
      {meta.keywords ? (
        <meta name="keywords" content={meta.keywords?.toString()}></meta>
      ) : null}

      <meta name="twitter:site" content="@illaCloud" />
      <meta name="twitter:creator" content="@illaCloud" />
      <meta
        name="twitter:title"
        content={`${meta.metaTitle || meta.title} – ILLA`}
      />
      <meta
        name="twitter:description"
        content={meta.description ?? meta.desc}
      />
      {meta.image ? (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content={`https://illa.cloud${meta.image}`}
          />
        </>
      ) : (
        <>
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content={`https://cdn.illacloud.com/official-website/img/illa_logo.png`}
          />
        </>
      )}
    </Head>
  )
}

DocumentationLayout.nav = ILLADocumentationNav()
