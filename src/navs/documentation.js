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
      '👋 Introduction': [pagesUS['about-illa'], pagesUS['connect-data-sources'], pagesUS['build-your-apps'], pagesUS['deploy-on-premise']],
      '👷 Deploy ILLA': [
        pagesUS['deploy-introduction'],
        pagesUS['illa-cli'],
      ],
      "🔨 Integrations": [pagesUS['integration-list']],
      "📲 Connect to Database and API": [pagesUS['connect-to-a-database'], pagesUS['connect-to-an-api'],pagesUS['api-authentication'], pagesUS['custom-api-authentication']],
      "🌀 构建Apps": [
        pagesCN['app-editor'],
        pagesCN['event-handler'],
        pagesCN['javascript'],
      ],
      '🧬 Assemble components': [pagesUS['table'], pagesUS['list']],
      '📎 Contributing Guide': [pagesUS['beyond-coding']]
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
      '🧬 Assemble components': [pagesUS['table'], pagesUS['list']],
      '📎 Contributing Guide': [pagesUS['beyond-coding']]
    }

  }
}
