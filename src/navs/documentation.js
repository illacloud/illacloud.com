import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(
    `../pages/docs/?meta=title,shortTitle,published`,
    false,
    /\.mdx$/,
  ),
  'docs',
)
const pagesUS = createPageList(
  require.context(
    `../pages/docs/en-US/?meta=title,shortTitle,description,published,tagCategory`,
    false,
    /\.mdx$/,
  ),
  'en-US/docs',
)
const pagesCN = createPageList(
  require.context(
    `../pages/docs/zh-CN/?meta=title,shortTitle,description,published,tagCategory`,
    false,
    /\.mdx$/,
  ),
  'zh-CN/docs',
)

export const documentationNav = {
  'Getting Started': [
    {
      title: 'Installation',
      href: '/docs/installation',
      match: /^\/docs\/installation/,
    },
    // {
    //   title: 'blog',
    //   href: '/blog',
    //   match: /^\/blog/
    // }
  ],
}

export const ILLADocumentationNav = (locale) => {
  if (locale === 'zh-CN') {
    return {
      '👋 Introduction': [pagesCN['about-illa'], pagesCN['connect-data-sources'], pagesCN['build-your-apps'], pagesCN['deploy-on-premise']],
      '👷 Deploy ILLA': [
        pagesCN['deploy-introduction'],
        pagesCN['illa-cli'],
      ],
      "🔨 Integrations": [pagesCN['integration-list']],
      "📲 Connect to Database and API": [pagesCN['connect-to-a-database'], pagesCN['connect-to-an-api'],pagesCN['api-authentication'], pagesCN['custom-api-authentication']],
      "🌀 构建Apps": [
        pagesCN['app-editor'],
        pagesCN['transformer'],
        pagesCN['event-handler'],
        pagesCN['javascript'],
      ],
      '🧬 Assemble components': [pagesCN['table'], pagesCN['list'], pagesCN['chart'], pagesCN['container']],
      '📎 Contributing Guide': [pagesCN['beyond-coding']]
    }
  } else {
    return {
      '👋 Introduction': [pagesUS['about-illa'], pagesUS['connect-data-sources'], pagesUS['build-your-apps'], pagesUS['deploy-on-premise']],
      '👷 Deploy ILLA': [
        pagesUS['deploy-introduction'],
        pagesUS['illa-cli'],
      ],
      "🔨 Integrations": [pagesUS['integration-list']],
      "📲 Connect to Database and API": [pagesUS['connect-to-a-database'], pagesUS['connect-to-an-api'], pagesUS['api-authentication'], pagesUS['custom-api-authentication']],
      '🌀 BUILD YOUR APPS': [
        pagesUS['app-editor'],
        pagesUS['transformer'],
        pagesUS['event-handler'],
        pagesUS['javascript'],
      ],
      '🧬 Assemble components': [pagesUS['table'], pagesUS['list'], pagesUS['chart'], pagesUS['container']],
      '📎 Contributing Guide': [pagesUS['beyond-coding']]
    }

  }
}
