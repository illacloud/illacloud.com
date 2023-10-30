export const menuItems = [
  {
    href: '/pricing',
    category: 'homepage_menu_pricing_click',
    title: 'nav.pricing',
  },
  {
    href: 'https://docs.illacloud.com',
    category: 'homepage_menu_doc_click',
    title: 'nav.doc',
  },
  {
    href: 'https://blog.illacloud.com/',
    category: 'homepage_menu_blog_click',
    title: 'nav.blog',
  },
  {
    href: 'https://illa.ai',
    title: 'nav.marketplace',
  },
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
      {
        href: '/illacloud',
        category: 'homepage_menu_product_cloud_click',
        title: 'sub_nav.product.cloud',
      },
      {
        href: '/illa-self-host',
        category: 'homepage_menu_product_selfhost_click',
        title: 'sub_nav.product.selfhost',
      },
    ],
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
        target: 'components',
      },
    ],
  },
]
