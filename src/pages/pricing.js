import { Nav } from '@/components/home/Nav'
import { Footer } from '@/components/home/home-footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Head from 'next/head'


const Pricing = () => {
  const { t } = useTranslation('hire')

  return (
    <>
      <div className="bg-gray-01 w-full overflow-y-auto xs:rounded-b-[40px] z-[2] bg-mobileHeader bg-contain bg-no-repeat">
        <Nav  whiteTheme={false}/>
        <div className='w-full bg-black'></div>
        <Footer />
      </div>
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['pricing', 'home'])),
  },
})

export default Pricing