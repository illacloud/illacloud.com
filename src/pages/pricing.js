import { useState } from 'react'
import { Nav } from '@/components/home/NewNav'
import { Footer } from '@/components/home/newFooter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { PricingContent } from '@/components/home/Pricing/PricingContent'
import { PricingMask } from '@/components/home/Pricing/PricingMask'
import { OpenSource } from '@/components/home/Pricing/OpenSource'
import { BookDemo } from '@/components/home/Form/BookDemo'
import { FAQ } from '@/components/comm/Faq'
import style from '@/components/home/Pricing/index.module.css'
import { useRouter } from 'next/router'
import { CommBottom } from '@/components/comm/commBottom'
import useMeasure from "react-use-measure"
import {PricingSchemaData} from '@/components/schemaData/pricingSchemaData'


const Pricing = () => {
  const { t } = useTranslation('pricing')
  const [isBookShow, setIsBookShow] = useState(false)
  const router = useRouter()
  const [ref, rect] = useMeasure()

  const customNavStyle = {
    background: 'transparent',
  }

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('meta-desc')} />
        <link
          rel="canonical"
          href={`https://www.illacloud.com/${router.locale === 'en-US' ? '' : `${router.locale}/`
            }pricing`}
        />
      </Head>
      <PricingSchemaData />
      <PricingMask rect={rect}/>
      <div ref={ref} className='w-full px-0'>
        <div className={style.pricingContainer}>
          <Nav whiteTheme={false} customStyle={customNavStyle} onChangeShow={() => setIsBookShow(true)} />
          <div className='w-full text-white xl:pt-[120px] bg-transparent'>
            <PricingContent onChangeShow={() => setIsBookShow(true)} />
            <OpenSource />
              <FAQ  translationSpace='pricing' />
            <CommBottom scrollStart={0.55} scrollEnd={0.613}/>
          </div>
        </div>
        <BookDemo
          visible={isBookShow}
          onChangeShow={() => setIsBookShow(false)}
        />
      </div>
        <Footer scrollStart={0.704} scrollEnd={1}/>
    </>
  )
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['pricing', 'home', "common"])),
  },
})

export default Pricing
