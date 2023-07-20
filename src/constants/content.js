import { CLIIcon, KubernetesIcon, WaysIcon } from '@/img/home/svg'

export const partnerFormContent = [
  {
    label: 'partnerFrom.form.title.label',
    name: 'title',
  },
  {
    label: 'partnerFrom.form.companyName.label',
    name: 'companyName',
    required: true,
  },
  {
    label: 'partnerFrom.form.companyWebsite.label',
    name: 'companyWebsite',
    required: true,
    pattern:
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/,
    placeholder: 'www.illacloud.com',
  },
  {
    label: 'partnerFrom.form.email.label',
    name: 'email',
    required: true,
    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    placeholder: 'business@illasoft.com',
  },
]
export const bookFormContent = [
  ...partnerFormContent,
  {
    label: 'bookFrom.form.about.label',
    name: 'about',
    required: true,
  },
  {
    label: 'bookFrom.form.wantTo.label',
    name: 'wantTo',
    required: true,
  },
]

export const monthlyContent = [
  {
    title: 'Free',
    price: '$0',
    userMonth: 'user-month',
    btnContent: 'free-btn',
    href: 'https://cloud.illacloud.com/',
    btnColor: 'bg-white/[0.08]',
    titleColor: 'text-white',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'free-members'
          },
          {
            text: ''
          },
        ]
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components'
          },
          {
            text: 'apps.resources'
          },
          {
            text: ''
          },
          {
            text: ''
          },
          {
            text: ''
          },
          {
            text: ''
          },
        ]
      },
      {
        name: 'featureList.drive.title',
        values: [
          {
            text: 'featureList.free.drive.storage'
          },
          {
            text: 'featureList.free.drive.traffic'
          },
        ]
      },
    ],
  },
  {
    title: 'Premium',
    price: '$20',
    userMonth: 'editor-month',
    href: 'https://cloud.illacloud.com/',
    btnContent: 'plus-btn',
    btnColor: 'bg-[#FF0EA1]',
    titleColor: 'text-[#FFC122]',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'unlimited-viewer'
          },
          {
            text: 'unlimited-members'
          }
        ]
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components'
          },
          {
            text: 'apps.resources'
          },
          {
            text: 'security.app-public',
            tip: 'tips.app-public'
          },
          {
            text: 'apps.plugins',
            tip: 'tips.plugins'
          },
          {
            text: 'apps.sql',
            tip: 'tips.sql'
          },
          {
            text: 'apps.watermark',
          },
        ]
      },
      {
        name: 'featureList.drive.title',
        values: [
          {
            text: 'featureList.drive.storage'
          },
          {
            text: 'featureList.drive.traffic'
          },
        ]
      },
      {
        name: 'security-support',
        values: [
          {
            text: 'security.historic-30'
          },
          {
            text: 'security.develop-environment',
            tip: 'tips.staging'
          },
          {
            text: 'security.restore-data',
            tip: 'tips.restore-data'
          },
        ]
      }
    ],
  },
  {
    title: 'Enterprise',
    price: '$50',
    userMonth: 'editor-month',
    startAt: "start-at",
    btnContent: 'enterprise-btn',
    btnColor: 'bg-tech-purple-01',
    titleColor: 'text-[#6D6AFF]',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'unlimited-viewer'
          },
          {
            text: 'unlimited-members'
          }
        ]
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components'
          },
          {
            text: 'apps.resources'
          },
          {
            text: 'security.app-public',
            tip: 'tips.app-public'
          },
          {
            text: 'apps.plugins',
            tip: 'tips.plugins'
          },
          {
            text: 'apps.sql',
            tip: 'tips.sql'
          },
          {
            text: 'apps.watermark',
          },
        ]
      },
      {
        name: 'featureList.drive.title',
        values: [
          {
            text: 'featureList.drive.storage'
          },
          {
            text: 'featureList.drive.traffic'
          },
        ]
      },
      {
        name: 'security-support',
        values: [
          {
            text: 'security.historic-30'
          },
          {
            text: 'security.develop-environment',
            tip: 'tips.staging'
          },
          {
            text: 'security.restore-data',
            tip: 'tips.restore-data'
          },
          {
            text: 'security.deployed',
            tip: 'tips.deployed'
          },
          {
            text: 'security.dedicated',
            tip: 'tips.dedicated'
          },
        ]
      }
    ],
  }
]
export const annuallyContent = [
  {
    title: 'Free',
    price: '$0',
    userMonth: 'user-month',
    btnContent: 'free-btn',
    href: 'https://cloud.illacloud.com/',
    btnColor: 'bg-white/[0.08]',
    titleColor: 'text-white',
    members: 'free-members',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'free-members'
          },
          {
            text: ''
          },
        ]
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components'
          },
          {
            text: 'apps.resources'
          },
          {
            text: ''
          },
          {
            text: ''
          },
          {
            text: ''
          },
          {
            text: ''
          },
        ]
      },
      {
        name: 'featureList.drive.title',
        values: [
          {
            text: 'featureList.free.drive.storage'
          },
          {
            text: 'featureList.free.drive.traffic'
          },
        ]
      },
    ],
  },
  {
    title: 'Premium',
    price: '$16.',
    decimal: '7',
    userMonth: 'editor-month',
    btnContent: 'plus-btn',
    btnColor: 'bg-[#FF0EA1]',
    titleColor: 'text-[#FFC122]',
    href: 'https://cloud.illacloud.com/',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'unlimited-viewer'
          },
          {
            text: 'unlimited-members'
          }
        ]
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components'
          },
          {
            text: 'apps.resources'
          },
          {
            text: 'security.app-public',
            tip: 'tips.app-public'
          },
          {
            text: 'apps.plugins',
            tip: 'tips.plugins'
          },
          {
            text: 'apps.sql',
            tip: 'tips.sql'
          },
          {
            text: 'apps.watermark',
          },
        ]
      },
      {
        name: 'featureList.drive.title',
        values: [
          {
            text: 'featureList.drive.storage'
          },
          {
            text: 'featureList.drive.traffic'
          },
        ]
      },
      {
        name: 'security-support',
        values: [
          {
            text: 'security.historic-30'
          },
          {
            text: 'security.develop-environment',
            tip: 'tips.staging'
          },
          {
            text: 'security.restore-data',
            tip: 'tips.restore-data'
          },
        ]
      }
    ],
  },
  {
    title: 'Enterprise',
    price: '$50',
    userMonth: 'editor-month',
    startAt: "start-at",
    btnContent: 'enterprise-btn',
    btnColor: 'bg-tech-purple-01',
    titleColor: 'text-[#6D6AFF]',
    list: [
      {
        name: 'members',
        values: [
          {
            text: 'unlimited-viewer'
          },
          {
            text: 'unlimited-members'
          }
        ]
      },
      {
        name: 'app',
        values: [
          {
            text: 'apps.components'
          },
          {
            text: 'apps.resources'
          },
          {
            text: 'security.app-public',
            tip: 'tips.app-public'
          },
          {
            text: 'apps.plugins',
            tip: 'tips.plugins'
          },
          {
            text: 'apps.sql',
            tip: 'tips.sql'
          },
          {
            text: 'apps.watermark',
          },
        ]
      },
      {
        name: 'featureList.drive.title',
        values: [
          {
            text: 'featureList.drive.storage'
          },
          {
            text: 'featureList.drive.traffic'
          },
        ]
      },
      {
        name: 'security-support',
        values: [
          {
            text: 'security.historic-30'
          },
          {
            text: 'security.develop-environment',
            tip: 'tips.staging'
          },
          {
            text: 'security.restore-data',
            tip: 'tips.restore-data'
          },
          {
            text: 'security.deployed',
            tip: 'tips.deployed'
          },
          {
            text: 'security.dedicated',
            tip: 'tips.dedicated'
          },
        ]
      }
    ],
  }
]

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
    {
      icon: <CLIIcon />,
      title: 'deployment.illa-CLI.title',
      des: 'deployment.illa-CLI.des',
      linkUrl: 'docs/illa-cli',
    },
  ],
}
