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
    values: [
      {
        href: '/illadrive',
        category: 'homepage_menu_product_drive_click',
        title: 'sub_nav.product.drive',
      },
    ]
  },
  {
    title: 'nav.resource',
    category: 'homepage_menu_resources_click',
    values: [
      {
        href: '/integrations',
        category: 'homepage_menu_resource_integration_click',
        title: 'sub_nav.resource.integrations',
        target: 'integrations',
      },
      {
        href: '/components',
        category: 'homepage_menu_resource_components_click',
        title: 'sub_nav.resource.components',
        target: 'components'
      },
    ]
  }
]