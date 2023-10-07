import { CLIIcon, KubernetesIcon, WaysIcon } from '@/img/home/svg'

export const monthlyContent = [
  {
    title: 'Free',
    desc: 'price-detail.discount.free',
    editor: {
      price: '$0',
      content: 'price-detail.free',
    },
    btnContent: 'free-btn',
    href: 'https://cloud.illacloud.com/',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'free-members',
          },
          {
            text: 'unlimited-members',
            hasLineThrough: true,
          },
        ],
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components',
          },
          {
            text: 'apps.resources',
          },
          {
            text: 'security.app-public',
            hasLineThrough: true,
          },
          {
            text: 'apps.plugins',
            hasLineThrough: true,
          },
          {
            text: 'apps.sql',
            hasLineThrough: true,
          },
          {
            text: 'apps.watermark',
            hasLineThrough: true,
          },
        ],
      },
      {
        name: 'Colla',
        values: [
          {
            text: 'featureList.free.ai-agent.token',
          },
        ],
      },
    ],
  },
  {
    title: 'Premium',
    desc: 'price-detail.discount.paid',
    editor: {
      price: '$20',
      content: 'price-detail.paid-editor',
    },
    viewer: {
      price: '$0',
      content: 'price-detail.paid-viewer',
    },
    hasSwitch: true,
    href: 'https://cloud.illacloud.com/',
    btnContent: 'plus-btn',
    titleColor: 'text-[#22FFD7]',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'unlimited-viewer',
          },
          {
            text: 'unlimited-members',
          },
        ],
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components',
          },
          {
            text: 'apps.resources',
          },
          {
            text: 'security.app-public',
            tip: 'tips.app-public',
          },
          {
            text: 'apps.plugins',
            tip: 'tips.plugins',
          },
          {
            text: 'apps.sql',
            tip: 'tips.sql',
          },
          {
            text: 'apps.watermark',
          },
        ],
      },
      {
        name: 'Colla',
        values: [
          {
            text: 'featureList.ai-agent.token',
          },
        ],
      },
      {
        name: 'security-support',
        values: [
          {
            text: 'security.historic-30',
          },
          {
            text: 'security.develop-environment',
            tip: 'tips.staging',
          },
          {
            text: 'security.restore-data',
            tip: 'tips.restore-data',
          },
        ],
      },
    ],
  },
  {
    title: 'Enterprise',
    desc: 'price-detail.discount.enterprise',
    editor: {
      price: '$50',
      content: 'price-detail.enterprise',
    },
    btnContent: 'enterprise-btn',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'unlimited-viewer',
          },
          {
            text: 'unlimited-members',
          },
        ],
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components',
          },
          {
            text: 'apps.resources',
          },
          {
            text: 'security.app-public',
            tip: 'tips.app-public',
          },
          {
            text: 'apps.plugins',
            tip: 'tips.plugins',
          },
          {
            text: 'apps.sql',
            tip: 'tips.sql',
          },
          {
            text: 'apps.watermark',
          },
        ],
      },
      {
        name: 'Colla',
        values: [
          {
            text: 'featureList.enterprise.ai-agent.token',
          },
        ],
      },
      {
        name: 'security-support',
        values: [
          {
            text: 'security.historic-30',
          },
          {
            text: 'security.develop-environment',
            tip: 'tips.staging',
          },
          {
            text: 'security.restore-data',
            tip: 'tips.restore-data',
          },
          {
            text: 'security.deployed',
            tip: 'tips.deployed',
          },
          {
            text: 'security.dedicated',
            tip: 'tips.dedicated',
          },
        ],
      },
    ],
  },
]
export const annuallyContent = [
  {
    title: 'Free',
    desc: 'price-detail.discount.free',
    editor: {
      price: '$0',
      content: 'price-detail.free',
    },
    btnContent: 'free-btn',
    href: 'https://cloud.illacloud.com/',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'free-members',
          },
          {
            text: 'unlimited-members',
            hasLineThrough: true,
          },
        ],
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components',
          },
          {
            text: 'apps.resources',
          },
          {
            text: 'security.app-public',
            hasLineThrough: true,
          },
          {
            text: 'apps.plugins',
            hasLineThrough: true,
          },
          {
            text: 'apps.sql',
            hasLineThrough: true,
          },
          {
            text: 'apps.watermark',
            hasLineThrough: true,
          },
        ],
      },
      {
        name: 'Colla',
        values: [
          {
            text: 'featureList.free.ai-agent.token',
          },
        ],
      },
    ],
  },
  {
    title: 'Premium',
    desc: 'price-detail.discount.paid',
    editor: {
      price: '$16.7',
      content: 'price-detail.paid-editor',
    },
    viewer: {
      price: '$0',
      content: 'price-detail.paid-viewer',
    },
    hasSwitch: true,
    href: 'https://cloud.illacloud.com/',
    btnContent: 'plus-btn',
    titleColor: 'text-[#22FFD7]',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'unlimited-viewer',
          },
          {
            text: 'unlimited-members',
          },
        ],
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components',
          },
          {
            text: 'apps.resources',
          },
          {
            text: 'security.app-public',
            tip: 'tips.app-public',
          },
          {
            text: 'apps.plugins',
            tip: 'tips.plugins',
          },
          {
            text: 'apps.sql',
            tip: 'tips.sql',
          },
          {
            text: 'apps.watermark',
          },
        ],
      },
      {
        name: 'Colla',
        values: [
          {
            text: 'featureList.ai-agent.token',
          },
        ],
      },
      {
        name: 'security-support',
        values: [
          {
            text: 'security.historic-30',
          },
          {
            text: 'security.develop-environment',
            tip: 'tips.staging',
          },
          {
            text: 'security.restore-data',
            tip: 'tips.restore-data',
          },
        ],
      },
    ],
  },
  {
    title: 'Enterprise',
    desc: 'price-detail.discount.enterprise',
    editor: {
      price: '$50',
      content: 'price-detail.enterprise',
    },
    btnContent: 'enterprise-btn',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'unlimited-viewer',
          },
          {
            text: 'unlimited-members',
          },
        ],
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components',
          },
          {
            text: 'apps.resources',
          },
          {
            text: 'security.app-public',
            tip: 'tips.app-public',
          },
          {
            text: 'apps.plugins',
            tip: 'tips.plugins',
          },
          {
            text: 'apps.sql',
            tip: 'tips.sql',
          },
          {
            text: 'apps.watermark',
          },
        ],
      },
      {
        name: 'Colla',
        values: [
          {
            text: 'featureList.enterprise.ai-agent.token',
          },
        ],
      },
      {
        name: 'security-support',
        values: [
          {
            text: 'security.historic-30',
          },
          {
            text: 'security.develop-environment',
            tip: 'tips.staging',
          },
          {
            text: 'security.restore-data',
            tip: 'tips.restore-data',
          },
          {
            text: 'security.deployed',
            tip: 'tips.deployed',
          },
          {
            text: 'security.dedicated',
            tip: 'tips.dedicated',
          },
        ],
      },
    ],
  },
]

export const PRICE_BUILDER_LIST = [
  'billing.pricing.premium.feature.builder.viewer',
  'billing.pricing.premium.feature.builder.audit_log',
  'billing.pricing.premium.feature.builder.public',
  'billing.pricing.premium.feature.builder.sql',
  'billing.pricing.premium.feature.builder.history',
  'billing.pricing.premium.feature.builder.theme',
  'billing.pricing.premium.feature.builder.multi_environment',
  'billing.pricing.premium.feature.builder.deployed_version',
]

export const PRICE_AGENT_LIST = [
  'billing.pricing.premium.feature.agent.gpt',
  'billing.pricing.premium.feature.agent.colla',
]

export const PRICE_COLLAR_LIST = [
  'billing.pricing.colla.feature.storage',
  'billing.pricing.colla.feature.traffic',
  'billing.pricing.colla.feature.token',
]

export const LICENSE_UNIT_PRICE = {
  FREE: 0,
  MONTHLY: 20,
  YEARLY: 200,
}
export const COLLAR_UNIT_PRICE = {
  FREE: 0,
  MONTHLY: 10,
  YEARLY: 100,
}

export const openSourceContent = {
  tittle: 'open-source',
  desc: 'source-desc',
  items: [
    {
      icon: <CLIIcon />,
      title: 'deployment.illa-CLI.title',
      des: 'deployment.illa-CLI.des',
      linkUrl: 'https://www.illacloud.com/docs/illa-cli',
      showArrow: true,
    },
    {
      icon: <KubernetesIcon />,
      title: 'deployment.kubernetes.title',
      des: 'deployment.kubernetes.des',
      linkUrl: 'https://github.com/illacloud/deploy-illa-manually/',
    },
    {
      icon: <WaysIcon />,
      title: 'deployment.docker.title',
      des: 'deployment.docker.des',
      linkUrl: 'https://github.com/illacloud/deploy-illa-manually/',
    },
  ],
}
