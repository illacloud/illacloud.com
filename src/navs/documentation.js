import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(
    `../pages/docs/?meta=title,shortTitle,description,published,tagCategory`,
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
      '👋 Introduction': [
        pagesCN['about-illa'],
        pagesCN['connect-data-sources'],
        pagesCN['build-your-apps'],
        pagesCN['deploy-on-premise'],
        pagesCN['collaboration'],
      ],
      '👷 Deploy ILLA': [pagesCN['illa-cli']],
      '🔨 Integrations': [pagesCN['integration-list'], pagesCN['supabase'],
      pagesCN['appwrite'],
      pagesCN['hugging-face-endpoint'],
      pagesCN['hugging-face-api'],
      pagesCN['sql-generate'],],
      '📲 Connect to Database and API': [
        pagesCN['connect-to-a-database'],
        pagesCN['connect-to-an-api'],
        pagesCN['api-authentication'],
        pagesCN['custom-api-authentication'],
      ],
      '🌀 构建Apps': [
        pagesCN['app-editor'],
        pagesCN['transformer'],
        pagesCN['event-handler'],
        pagesCN['javascript'],
      ],
      '🧬 Assemble components': [
        pagesCN['illa-components'],
        pagesCN['chart'],
        pagesCN['container'],
        pagesCN['list'],
        pagesCN['radio-button'],
        pagesCN['radio-group'],
        pagesCN['select'],
        pagesCN['table'],
      ],
      '📎 Contributing Guide': [pagesCN['beyond-coding']],
    }
  } else {
    return {
      '👋 Introduction': [
        pagesUS['about-illa'],
        pagesUS['connect-data-sources'],
        pagesUS['build-your-apps'],
        pagesUS['deploy-on-premise'],
        pagesUS['collaboration'],
      ],
      '👷 Deploy ILLA': [
        pagesUS['quickly-deploy'],
        pagesUS['illa-cli'],
        pagesUS['docker-all-in-one-image'],
        pagesUS['kubernetes'],
        pagesUS['known-issues'],
      ],
      '🔨 Integrations': [
        pagesUS['integration-list'],
        pagesUS['supabase'],
        pagesUS['appwrite'],
        pagesUS['hugging-face-endpoint'],
        pagesUS['hugging-face-api'],
        pagesUS['sql-generate'],
      ],
      '📲 Connect to Database and API': [
        pagesUS['connect-to-a-database'],
        pagesUS['connect-to-an-api'],
        pagesUS['api-authentication'],
        pagesUS['custom-api-authentication'],
      ],
      '🌀 BUILD YOUR APPS': [
        pagesUS['app-editor'],
        pagesUS['transformer'],
        pagesUS['event-handler'],
        pagesUS['javascript'],
      ],
      '🧬 Assemble components': [
        pagesUS['illa-components'],
        pagesUS['chart'],
        pagesUS['container'],
        pagesUS['list'],
        pagesUS['multi-select'],
        pagesUS['page'],
        pagesUS['radio-button'],
        pagesUS['radio-group'],
        pagesUS['select'],
        pagesUS['table'],
        pagesUS['text'],
        pagesUS['upload'],
      ],
      '📎 Contributing Guide': [pagesUS['beyond-coding']],
    }
  }
}
