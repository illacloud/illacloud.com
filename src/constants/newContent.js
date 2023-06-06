import i1 from '@/img/imageTemp/1.png'
import i2 from '@/img/imageTemp/2.png'
import i3 from '@/img/imageTemp/3.png'
import l1 from '@/img/imageTemp/l1.svg'
import r1 from '@/img/imageTemp/r1.svg'
import l2 from '@/img/imageTemp/l2.svg'
import r2 from '@/img/imageTemp/r2.svg'

import Huggingface from '@/img/home/Huggingface.svg'
import Supabase from '@/img/home/Supabase.svg'
import Pingcap from '@/img/home/Pingcap.svg'
import Appwrite from '@/img/home/Appwrite.svg'
import Lightly from '@/img/home/Lightly.svg'
import APITable from '@/img/home/APITable.svg'
import gl from '@/img/home3/gl.svg'
import miracle from '@/img/home3/miracle.svg'
import source from '@/img/home3/source.svg'
import codeContentBg from '@/img/home3/codeContentBg.svg'
import mobileCodeContentBg from '@/img/home3/mobileCodeBg.svg'




export const firstSwipeContent = {
  title: 'content.components.title',
  descList: [
    'content.components.desc-1',
    'content.components.desc-2',
  ],
  imageAlt: 'content.components.alt',
  moreTitle: 'new-content.swipe-content-1.more-title',
  moreLink: 'https://www.illacloud.com/components',
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
  moreLink: 'https://www.illacloud.com/integrations',
  // TODO 图片需要替换，以及图片的描述信息
  imgList: [
    i1,
    i2,
    i3
  ]
}

export const cardContent = [
  {
    title: 'content.collaboration.title',
    desc: 'content.collaboration.desc',
    moreLink: 'https://cloud.illacloud.com',
    moreTitle: 'content.collaboration.action',
    cardImage: i1,
    imageAlt: 'content.collaboration.alt'
  },
  {
    title: 'content.SQL.title',
    desc: 'content.SQL.desc',
    moreLink: 'https://cloud.illacloud.com',
    moreTitle: 'content.SQL.action',
    cardImage: i1,
    imageAlt: 'content.SQL.alt'
  }
]
export const solutionContent = {
  title: 'content.drive.title',
  moreTitle: 'content.drive.desc',
  moreLink: 'www.illacloud.com/illadrive',
  imageAlt: 'content.drive.alt',
  values: [
    {
      label: 'content.drive.title-1',
      desc: 'content.drive.desc-1',
      image: i1
    },
    {
      label: 'content.drive.title-2',
      desc: 'content.drive.desc-1',
      image: i2
    }
  ]
}

// TODO: 临时加的，这个是要丢在翻译里面配置的
export const tempPartnerContent = [
  {
    logo: Huggingface,
    name: 'Huggingface',
    href: 'https://huggingface.co/',
    tagCategory: 'homepage_partner_hf_click',
  },
  {
    logo: Supabase,
    name: 'Supabase',
    href: 'https://supabase.com/',
  },
  {
    logo: Pingcap,
    name: 'Pingcap',
    href: 'https://www.pingcap.com/',
  },
  {
    logo: Appwrite,
    name: 'Appwrite',
    href: 'https://appwrite.io/',
  },
  {
    logo: Lightly,
    name: 'Lightly',
    href: 'https://www.lightly-dev.com/',
  },
  {
    logo: APITable,
    name: 'APITable22',
    href: 'https://apitable.com/',
  },
  {
    logo: APITable,
    name: 'APITable11',
    href: 'https://apitable.com/',
  },
  {
    logo: APITable,
    name: 'APITable1',
    href: 'https://apitable.com/',
  },
  {
    logo: APITable,
    name: 'APITable2',
    href: 'https://apitable.com/',
  },
  {
    logo: APITable,
    name: 'APITable3',
    href: 'https://apitable.com/',
  },
]
export const backedContent = [
  {
    title: 'backed_by.content-1',
    img: gl,
  },
  {
    title: 'backed_by.content-2',
    img: source,
  },
  {
    title: 'backed_by.content-3',
    img: miracle,
  },
]

export const codeContent = {
  title: 'content.code.title',
  moreLink: 'https://cloud.illacloud.com',
  moreTitle: 'content.code.action',
  bgImg: codeContentBg,
  mobileBgImg: mobileCodeContentBg,
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