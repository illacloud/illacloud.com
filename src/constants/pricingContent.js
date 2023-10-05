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
    title: 'Plus',
    desc: 'price-detail.discount.paid',
    editor: {
      price: '$10',
      content: 'price-detail.paid-editor',
    },
    viewer: {
      price: '$0',
      content: 'price-detail.paid-viewer',
    },
    hasSwitch: true,
    earlyBird: 'price-detail.early-bird',
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
            text: 'featureList.plus.ai-agent.token',
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
    title: 'Plus',
    desc: 'price-detail.discount.paid',
    editor: {
      price: '$8.3',
      content: 'price-detail.paid-editor',
    },
    viewer: {
      price: '$0',
      content: 'price-detail.paid-viewer',
    },
    hasSwitch: true,
    earlyBird: 'price-detail.early-bird',
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
            text: 'featureList.plus.ai-agent.token',
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

export const compare = {
  tableHeader: [
    {
      label: 'compare.plan.free',
      btnText: 'compare.button',
      link: 'https://cloud.illacloud.com',
    },
    {
      label: 'compare.plan.plus',
      btnText: 'compare.button',
      link: 'https://cloud.illacloud.com',
    },
    {
      label: 'compare.plan.premium',
      btnText: 'compare.button',
      link: 'https://cloud.illacloud.com',
    },
  ],
  items: [
    {
      label: 'compare.featureList.title.memberNum',
      desc: 'compare.featureList.desc.memberNum',
      texts: ['free-members', 'unlimited-viewer', 'unlimited-viewer'],
    },
    {
      label: 'compare.featureList.title.component',
      desc: 'compare.featureList.desc.component',
      icons: [true, true, true],
    },
    {
      label: 'compare.featureList.title.data-source',
      desc: 'compare.featureList.desc.data-source',
      icons: [true, true, true],
    },
    {
      label: 'compare.featureList.title.public',
      desc: 'compare.featureList.desc.public',
      icons: [false, true, true],
    },
    {
      label: 'compare.featureList.title.sql-generation',
      desc: 'compare.featureList.desc.sql-generation',
      icons: [false, true, true],
    },
    {
      label: 'compare.featureList.title.watermark',
      desc: 'compare.featureList.desc.watermark',
      icons: [false, true, true],
    },
    {
      label: 'compare.featureList.title.audit-logs',
      desc: 'compare.featureList.desc.audit-logs',
      icons: [false, true, true],
    },
    {
      label: 'compare.featureList.title.history',
      desc: 'compare.featureList.desc.history',
      icons: [false, true, true],
    },
    {
      label: 'compare.featureList.title.colla',
      desc: 'compare.featureList.desc.colla',
      texts: [
        'featureList.free.ai-agent.token',
        'featureList.plus.ai-agent.token',
        'featureList.ai-agent.token',
      ],
    },
    {
      label: 'compare.featureList.title.deployed-version',
      desc: 'compare.featureList.desc.deployed-version',
      icons: [false, true, true],
    },
    {
      label: 'compare.featureList.title.theme',
      desc: 'compare.featureList.desc.theme',
      icons: [false, true, true],
    },
    {
      label: 'compare.featureList.title.environment',
      desc: 'compare.featureList.desc.environment',
      icons: [false, true, true],
    },
  ],
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
