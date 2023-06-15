import i1 from '@/img/imageTemp/1.png'
import i2 from '@/img/imageTemp/2.png'
import i3 from '@/img/imageTemp/3.png'
import l1 from '@/img/imageTemp/l1.svg'
import r1 from '@/img/imageTemp/r1.svg'
import l2 from '@/img/imageTemp/l2.svg'
import r2 from '@/img/imageTemp/r2.svg'

import codeContentBg from '@/img/home3/codeContentBg.svg'
import mobileCodeContentBg from '@/img/home3/mobileCodeBg.svg'


export const firstSwipeContent = {
  title: 'content.components.title',
  descList: [
    'content.components.desc-1',
    'content.components.desc-2',
  ],
  imageAlt: 'content.components.alt',
  moreTitle: 'content.components.action',
  moreLink: '/components',
  category: 'homepage_body_view_all_click',
  showCategory: 'homepage_body_view_all_show',
  // TODO 图片需要替换，以及图片的描述信息
  imgList: [
    i1,
    i2
  ]
}

export const lastSwipeContent = {
  title: 'content.datasource.title',
  descList: [
    'content.datasource.desc-1',
    'content.datasource.desc-2',
    'content.datasource.desc-3',
  ],
  imageAlt: 'content.datasource.alt',
  moreTitle: 'content.datasource.action',
  category: 'homepage_body_connect_datasource_click',
  showCategory: 'homepage_body_connect_datasourcel_show',
  moreLink: '/integrations',
  // TODO 图片需要替换，以及图片的描述信息
  imgList: [
    i1,
    i2,
    i3
  ]
}

export const cardContent = [
  {
    title: 'content.SQL.title',
    desc: 'content.SQL.desc',
    moreLink: '/docs/sql-generate',
    moreTitle: 'content.SQL.action',
    category: 'homepage_body_sql_click',
    cardImage: 'https://cdn.illacloud.com/official-website/img/home/home3/Frame%203340.svg',
    imageAlt: 'content.SQL.alt'
  },
  {
    title: 'content.collaboration.title',
    desc: 'content.collaboration.desc',
    moreLink: '/docs/collaboration',
    category: 'homepage_body_collaboration_click',
    moreTitle: 'content.collaboration.action',
    cardImage: 'https://cdn.illacloud.com/official-website/img/home/home3/Frame%203340%20(1).svg',
    imageAlt: 'content.collaboration.alt'
  },
]
export const solutionContent = {
  title: 'content.drive.title',
  moreTitle: 'content.drive.desc',
  moreLink: '/illadrive',
  category: 'homepage_body_drive_click',
  imageAlt: 'content.drive.alt',
  values: [
    {
      label: 'content.drive.title-1',
      desc: 'content.drive.desc-1',
      image: 'https://cdn.illacloud.com/official-website/img/home/home3/Frame%203356.svg'
    },
    {
      label: 'content.drive.title-2',
      desc: 'content.drive.desc-1',
      image: 'https://cdn.illacloud.com/official-website/img/home/home3/Frame%203356%20(1).svg'
    }
  ]
}

export const backedContent = [
  {
    title: 'backed_by.content-1',
    img: 'https://cdn.illacloud.com/official-website/img/home/home3/gl.svg',
  },
  {
    title: 'backed_by.content-2',
    img: 'https://cdn.illacloud.com/official-website/img/home/home3/sc.svg',
  },
  {
    title: 'backed_by.content-3',
    img: 'https://cdn.illacloud.com/official-website/img/home/home3/mp.svg',
  },
]

export const codeContent = {
  title: 'content.code.title',
  moreLink: '/docs/javascript',
  moreTitle: 'content.code.action',
  bgImg: codeContentBg,
  mobileBgImg: mobileCodeContentBg,
  category: 'homepage_body_code_anywhere_click',
  imageAlt: 'content.code.alt',
  values: [
    {
      title: 'content.code.title-1',
      desc: 'content.code.desc-1',
      leftImage: l1,
      rightImage: r1,
    },
    {
      title: 'content.code.title-2',
      desc: 'content.code.desc-2',
      leftImage: l2,
      rightImage: r2,
    },
  ]
}