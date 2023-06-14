export const menuItems = [
  {
    href: '/pricing',
    category: 'homepage_menu_pricing_click',
    title: 'nav.pricing',
  },
  {
    href: '/docs/about-illa',
    category: 'homepage_menu_doc_click',
    title: 'nav.doc',
  },
  {
    href: 'https://blog.illacloud.com/',
    category: 'homepage_menu_blog_click',
    title: 'nav.blog',
  }
]

export const selectItems = [
  {
    title: 'nav.product',
    category: 'homepage_menu_product_click',
    mobileCategory: 'homepage_menu_product_mob_click',
    values: [
      {
        href: '/cloud',
        category: '',
        title: 'sub_nav.product.cloud',
        openNewPage: true
      },
      {
        href: '/drive',
        category: '',
        title: 'sub_nav.product.drive',
        openNewPage: true
      },
      {
        href: '/builder',
        category: '',
        title: 'sub_nav.product.builder',
        openNewPage: true
      },
      {
        href: '/selfhost',
        category: '',
        title: 'sub_nav.product.selfhost',
        openNewPage: true
      },
    ]
  },
  {
    title: 'nav.resource',
    category: 'homepage_menu_resources_click',
    values: [
      {
        href: '/integrations',
        category: 'homepage_menu_product_integration_click',
        title: 'sub_nav.resource.integrations',
        target: 'integrations',
      },
      {
        href: '/components',
        category: 'homepage_menu_product_components_click',
        title: 'sub_nav.resource.components',
        target: 'components'
      },
      {
        href: '/templates',
        category: 'homepage_menu_product_template_click',
        title: 'sub_nav.resource.templates',
        target: 'template'
      },
      // {
      //   href: '/tools',
      //   category: 'homepage_menu_product_tools_click',
      //   title: 'nav.tools',
      //   target: 'tools'
      // },
    ]
  }
]