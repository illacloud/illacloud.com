import { Nav } from '@/components/home/nav'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { SubscribeCard } from '@/components/subscribe/Card'

const Subscribed = () => {
  const { t } = useTranslation('subscribe')

  return (
    <>
      <Head>
        <title>{t('desc')}</title>
      </Head>
      <div className=" w-full items-center flex flex-col  bg-[#ffffff] lg:bg-[#fafafa]">
        <div className="h-screen flex flex-col  items-center  lg:items-center  w-full ">
          <Nav />
          <SubscribeCard />
        </div>
      </div>
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['subscribe', 'home'])),
  },
})

export default Subscribed
