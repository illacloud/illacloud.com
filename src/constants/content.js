import { CLIIcon, CloudIcon, KubernetesIcon, WaysIcon } from '@/img/home/svg'
import Huggingface from '@/img/home/Huggingface.svg'
import Supabase from '@/img/home/Supabase.svg'
import Pingcap from '@/img/home/Pingcap.svg'
import Appwrite from '@/img/home/Appwrite.svg'
import Lightly from '@/img/home/Lightly.svg'
import APITable from '@/img/home/APITable.svg'
import buildDevelopers from '@/img/home/build_developers.svg'
import collaboration from '@/img/home/collaboration.svg'
import dataSource from '@/img/home/data_source.png'
import sqlGenerate from '@/img/home/sql_generate.svg'
import uiLibrary from '@/img/home/ui_library.svg'

export const contentList = [
  {
    contentSvg: sqlGenerate,
    tittleList: [
      'content.sql-generate.title-1',
      'content.sql-generate.title-2',
    ],
    colorationTitle: ['Generate', '智能生成'],
    color: {
      colorDeg: '104.61deg',
      colorStart: '#C120C5',
      colorEnd: 'rgba(184, 255, 68, 0)',
    },
    linkUrl: '',
    linkContent: 'content.sql-generate.goto',
    extraLinkContent: '✍️ →',
    desc: 'content.sql-generate.introduction',
    imgDesc: 'SQL Generate. More AIGC features are coming soon.'
  },
  {
    contentSvg: buildDevelopers,
    tittleList: [
      'content.for-developer.title-1',
      'content.for-developer.title-2',
    ],
    colorationTitle: [' Developers', '开发者'],
    color: {
      colorDeg: '272.97deg',
      colorStart: 'rgba(85, 39, 130, 0)',
      colorEnd: '#521CED',
      hasFilter: true,
    },
    linkUrl: 'https://www.illacloud.com/docs/javascript',
    linkContent: 'content.for-developer.goto',
    extraLinkContent: '😋 →',
    desc: 'content.for-developer.introduction',
  },
  {
    contentSvg: dataSource,
    tittleList: [
      'content.date-integrate.title-1',
      'content.date-integrate.title-2',
      'content.date-integrate.title-3',
      'content.date-integrate.title-4',
    ],
    colorationTitle: ['Any', '整合'],
    color: {
      colorDeg: '104.61deg',
      colorStart: '#20C560',
      colorEnd: 'rgba(193, 197, 32, 0)',
    },
    linkUrl: 'https://www.illacloud.com/docs/integration-list',
    linkContent: 'content.date-integrate.goto',
    extraLinkContent: '😀 →',
    desc: 'content.date-integrate.introduction',
    tags: [
      {
        tagDesc: 'DATABASES',
        tagBgColor: '#D8F233',
      },
      {
        tagDesc: 'APIS',
        tagBgColor: '#3BFC65',
      },
      {
        tagDesc: 'JS TRANSFORMER',
        tagBgColor: '#08FEC3',
      },
    ],
    imgDesc: 'ILLA allows users to integrate with the following data sources via GUI mode: MySQL, Microsoft SQL Server, PostgreSQL, MongoDB, Redis, Elastic Search, Amazon DynamoDB, Snowflake, SMTP, REST API, S3, GraphQL, Clickhouse, MariaDB, Firebase, Appwrite, Supabase, TiDB, Hugging face, Oracle DB, CouchDB.'
  },
  {
    contentSvg: collaboration,
    tittleList: [
      'content.collaborative-develop.title-1',
      'content.collaborative-develop.title-2',
      'content.collaborative-develop.title-3',
      'content.collaborative-develop.title-4',
    ],
    colorationTitle: ['Collaboration', '协同'],
    color: {
      colorDeg: '90deg',
      colorStart: '#FF008A',
      colorEnd: 'rgba(255, 15, 0, 0)',
    },
    linkUrl: '/docs/about-illa',
    linkContent: 'content.collaborative-develop.goto',
    extraLinkContent: '🤠 →',
    desc: 'content.collaborative-develop.introduction',
  },
  {
    contentSvg: uiLibrary,
    tittleList: [
      'content.ui-library.title-1',
      'content.ui-library.title-2',
      'content.ui-library.title-3',
      'content.ui-library.title-4',
    ],
    colorationTitle: ['fully', '完善'],
    color: {
      colorDeg: '104.61deg',
      colorStart: '#C58320',
      colorEnd: 'rgba(154, 197, 32, 0)',
    },
    linkUrl: '/docs/about-illa',
    linkContent: 'content.ui-library.goto',
    extraLinkContent: '👍 →',
    desc: 'content.ui-library.introduction',
  },
]
export const deploymentContent = {
  tittleList: ['deployment.title-1', 'deployment.title-2'],
  colorationTitle: ['Flexible', '灵活'],
  color: {
    colorDeg: '272.97deg',
    colorStart: 'rgba(11, 255, 35, 0)',
    colorEnd: '#0500FF',
    hasFilter: true,
  },
  desc: 'deployment.introduction',
  items: [
    {
      icon: <CloudIcon />,
      title: 'deployment.illa-cloud.title',
      des: 'deployment.illa-cloud.des',
      linkUrl: 'https://cloud.illacloud.com/',
      extraLinkContent: ' 👍',
    },
    {
      icon: <CLIIcon />,
      title: 'deployment.illa-CLI.title',
      des: 'deployment.illa-CLI.des',
    },
    {
      icon: <KubernetesIcon />,
      title: 'deployment.kubernetes.title',
      des: 'deployment.kubernetes.des',
    },
    {
      icon: <WaysIcon />,
      title: 'deployment.docker.title',
      des: 'deployment.docker.des',
    },
  ],
}

export const partnerContent = {
  tittleList: ['content.for-developer.title-2'],
  colorationTitle: [' Developers', '开发者'],
  becomePartner: 'Become a partner',
  color: {
    colorDeg: '1272.97deg',
    colorStart: 'rgba(58, 19, 255, 0)',
    colorEnd: '#8000FF',
    hasFilter: true,
  },
  partners: [
    {
      logo: Huggingface,
      name: 'Huggingface',
      desc: 'partnerList.partner-1',
      tag: 'AI',
      href: 'https://huggingface.co/',
      tagCategory: 'homepage_partner_hf_click',
    },
    {
      logo: Supabase,
      name: 'Supabase',
      desc: 'partnerList.partner-2',
      tag: 'Database',
      href: 'https://supabase.com/',
      tagCategory: 'homepage_partner_supabase_click',
    },
    {
      logo: Pingcap,
      name: 'Pingcap',
      desc: 'partnerList.partner-3',
      tag: 'Database',
      href: 'https://www.pingcap.com/',
      tagCategory: 'homepage_partner_pingcap_click',
    },
    {
      logo: Appwrite,
      name: 'Appwrite',
      desc: 'partnerList.partner-4',
      tag: 'API',
      href: 'https://appwrite.io/',
      tagCategory: 'homepage_partner_appwrite_click',
    },
    {
      logo: Lightly,
      name: 'Lightly',
      desc: 'partnerList.partner-5',
      tag: 'API',
      href: 'https://www.lightly-dev.com/',
      tagCategory: 'homepage_partner_lightly_click',
    },
    {
      logo: APITable,
      name: 'APITable',
      desc: 'partnerList.partner-6',
      tag: 'API',
      href: 'https://apitable.com/',
      tagCategory: 'homepage_partner_apitable_click',
    },
  ],
}
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
  },
  {
    label: 'partnerFrom.form.email.label',
    name: 'email',
    required: true,
    pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  },
]
export const bookFormContent = [
  ...partnerFormContent,
  {
    label: 'bookFrom.form.bit.label',
    name: 'bit',
    required: true,
  },
  {
    label: 'bookFrom.form.wantTo.label',
    name: 'wantTo',
    required: true,
  },
]
