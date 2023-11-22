import Nav from '@/components/comm/Nav'
import Footer from '@/components/comm/Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { PricingContent } from '@/components/pricing/PricingContent'
import { PricingMask } from '@/components/pricing/PricingMask'
import { OpenSource } from '@/components/pricing/OpenSource'
import { CompareCard } from '@/components/pricing/CompareCard'
import FAQ from '@/components/comm/Faq'
import style from '@/components/pricing/index.module.css'
import { useRouter } from 'next/router'
import CommBottom from '@/components/comm/CommBottom'
import useMeasure from 'react-use-measure'
import { PricingSchemaData } from '@/components/schemaData/pricingSchemaData'
import { InfoProvider } from '@/context/index'
import { isMobile } from '@/utils/isMobile'

const Pricing = ({ isMobile }) => {
  const { t } = useTranslation('pricing')
  const router = useRouter()
  const [ref, rect] = useMeasure()

  const customNavStyle = {
    background: 'transparent',
  }

  return (
    <>
      <Head>
        <meta key="twitter:title" name="twitter:title" content={t('title')} />
        <meta key="og:title" property="og:title" content={t('title')} />
        <title>{t('title')}</title>
        <meta name="description" content={t('meta-desc')} />
        <link
          rel="canonical"
          href={`https://www.illacloud.com/${
            router.locale === 'en-US' ? '' : `${router.locale}/`
          }pricing`}
        />
      </Head>
      <PricingSchemaData />
      <InfoProvider isMobile={isMobile}>
        <PricingMask rect={rect} />
        <div ref={ref} className="w-full px-0">
          <div className={style.pricingContainer}>
            <Nav whiteTheme={false} customStyle={customNavStyle} />
            <div className="w-full text-white xl:pt-[120px] bg-transparent">
              <PricingContent />
              <CompareCard />
              <OpenSource />
              <FAQ translationSpace="pricing" />
              <CommBottom scrollStart={0.88} scrollEnd={0.93} />
            </div>
          </div>
        </div>
        <Footer scrollStart={0.85} scrollEnd={1} />
      </InfoProvider>
    </>
  )
}
export const getServerSideProps = async ({ locale, req }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['pricing', 'home', 'common'])),
    isMobile: isMobile(req?.headers?.['user-agent'] || ''),
  },
})

export default Pricing
