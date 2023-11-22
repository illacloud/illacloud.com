import Nav from '@/components/common/Nav'
import Footer from '@/components/common/Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { PricingContent } from '@/components/pricing/PricingContent'
import { PricingMask } from '@/components/pricing/pricingMask/PricingMask'
import FAQ from '@/components/common/Faq'
import { useRouter } from 'next/router'
import CommBottom from '@/components/common/CommBottom'
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
          <div className="w-full relative z-[1]">
            <Nav whiteTheme={false} customStyle={customNavStyle} />
            <div className="w-full text-white flex flex-col xl:gap-[120px] gap-[60px] xl:pt-[120px] bg-transparent">
              <PricingContent />
              <div className="px-[20px]">
                <FAQ translationSpace="pricing" />
              </div>
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
