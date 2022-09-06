import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)
const pagesUS = createPageList(
  require.context(`../pages/docs/en-US/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'en-US/docs'
)
const pagesCN = createPageList(
  require.context(`../pages/docs/zh-CN/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'zh-CN/docs'
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
  if (locale=== 'zh-CN') {
    return {
      'ILLA Builder': [
        pagesCN['overview'],
        pagesCN['quick-start']
      ],
      '安装ILLA Builder': [
        pagesCN['deploy-introduction'],
        pagesCN['illa-cli'],
        // pagesCN['docker-compose'],
        // pagesCN['k8s-helm'],
      ],
      '数据接入': [
        pagesCN['resource'],
        pagesCN['action'],
        pagesCN['transformer']
      ],
      '构建Apps': [
        pagesCN['app-editor'],
        pagesCN['event-handler'],
        pagesCN['javascript']
      ],
      '组件库':[

      ]
    }
  } else {
    return {
      'ILLA Builder': [
        pagesUS['overview'],
        pagesUS['quick-start']
      ],
      'Install ILLA Builder': [
        pagesUS['deploy-introduction'],
        pagesUS['illa-cli'],
        // pagesUS['docker-compose'],
        // pagesUS['k8s-helm'],
      ],
      'Data access':[
        pagesUS['resource'],
        pagesUS['action'],
        pagesUS['transformer']
      ],
      'Build Apps': [
        pagesUS['app-editor'],
        pagesUS['event-handler'],
        pagesUS['javascript']
      ]
    }
  }
}
