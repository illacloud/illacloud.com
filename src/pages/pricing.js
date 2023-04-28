import { useState } from 'react'
import { Nav } from '@/components/home/Nav'
import { Footer } from '@/components/home/home-footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { PricingContent } from '@/components/home/Pricing/PricingContent'
import { PricingMask } from '@/components/home/Pricing/PricingMask'
import { OpenSource } from '@/components/home/Pricing/OpenSource'
import { BookDemo } from '@/components/home/Form/BookDemo'
import { FAQ } from '@/components/home/Pricing/Faq'
import style from '@/components/home/Pricing/index.module.css'


const Pricing = () => {
  const { t } = useTranslation('pricing')
  const [isBookShow, setIsBookShow] = useState(false)

  const customNavStyle = {
    background: 'transparent',
  }

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('meta-desc')} />
      </Head>
      <PricingMask />
      <div className='w-full px-0'>
        <div className={style.pricingContainer}>
          <Nav hasButton={false} whiteTheme={false} customStyle={customNavStyle} onChangeShow={() => setIsBookShow(true)} />
          <div className='w-full text-white xl:pt-[120px] bg-transparent'>
            <PricingContent onChangeShow={() => setIsBookShow(true)} />
            <OpenSource />
            <FAQ />
          </div>
        </div>
        <BookDemo
          visible={isBookShow}
          onChangeShow={() => setIsBookShow(false)}
        />
      </div>
      <div className={style.pricingFooter}>
        <Footer />
      </div>
    </>
  )
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['pricing', 'home', "common"])),
  },
})

export default Pricing
