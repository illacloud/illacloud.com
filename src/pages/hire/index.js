import { Nav } from '@/components/home/nav'
import { Footer } from '@/components/home/home-footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AddressIcon } from '@/img/hire/svg'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

const renderImageItem = (item, index) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center sm:w-1/2 ',
        index % 2 === 0 ? 'sm:items-end sm:pr-[10px]' : 'sm:items-start sm:pl-[20px]'
      )}
    >
      <div className="flex flex-col sm:justify-center ">
        <img
          style={{ objectFit: 'cover' }}
          src={item.image}
          className={
            'w-[279px] sm:w-[373px] h-[179.5px] sm:h-[240px] mt-[24px] mb-[12px] sm:mb-0  '
          }
          alt={'video'}
        />
        <span className="text-[12px] w-full sm:text-[16px] text-[#1d2129] sm:text-start text-start font-medium sm:h-[48px] mt-[12px]   sm:mt-[24px] mb-0">
          {item.des}
        </span>
      </div>
    </div>
  )
}

const renderItem = (item) => {
  return (
    <div className="flex flex-col items-start justify-start sm:w-full  sm:items-center ">
      <div className="w-full  overflow-x-scroll ">
        <div className="flex  justify-between w-[925px]   sm:w-full sm:px-[126px] px-0 pr-[48px]">
          {item.images?.map((image) => (
            <div className={'w-[279px] sm:w-1/3 '}>
              <img style={{ objectFit: 'cover' }} src={image} alt={'video'} />
            </div>
          ))}
        </div>
      </div>
      <span className="text-[12px] sm:text-[16px] text-[#1d2129]  sm:w-full  truncate mt-[12px] mb-[24px] sm:mt-[24px] flex  sm:justify-center flex-nowrap sm:mb-[48px] items-center ">
        <AddressIcon />
        {item.des}
      </span>
    </div>
  )
}

const renderJobItem = (item, responsibilities, requirements, pluses, cv) => {
  return (
    <div className="flex flex-col items-start justify-start overflow-x-scroll mb-[20px] sm:mb-[40px]">
      <span className="font-medium text-[18px] sm:text-[36px] mb-[20px] sm:mb-[40px]">
        {item.title}
      </span>
      <span className="font-medium text-[16px] sm:text-[20px] mb-[8px] sm:mb-[16px]">
        {responsibilities}
      </span>
      <span className="whitespace-pre-line  mb-[20px] sm:mb-[40px]  text-[14px] sm:text-[16px]">
        {item.responsibilities}
      </span>
      <span className="font-medium text-[16px] sm:text-[20px] mb-[8px] sm:mb-[16px]">
        {requirements}
      </span>
      <span className="whitespace-pre-line  text-[14px]  mb-[20px] sm:mb-[40px]  sm:text-[16px]">
        {item.requirements}
      </span>
      {item.pluses && (
        <>
          <span className="font-medium text-[16px] sm:text-[20px] mb-[8px] sm:mb-[16px]">
            {pluses}
          </span>
          <span className="whitespace-pre-line  mb-[20px] sm:mb-[40px]  text-[14px] sm:text-[16px]">
            {item.pluses}
          </span>
        </>
      )}
      <a
        href={'mailto:hr@illasoft.com'}
        className=" text-[14px] sm:text-[28px] text-[#1e6fff] mb-[20px] sm:mb-[40px]"
      >
        <span className=" text-[14px] sm:text-[16px] text-[#1e6fff] mb-[20px] sm:mb-[34px] ">
          hr@illasoft.com
        </span>
      </a>
      <span className=" text-[16px] sm:text-[16px] bg-[#654aec] text-white px-[48px] py-[17px] rounded-full">
        {cv}
      </span>
    </div>
  )
}

const Hire = () => {
  const { t } = useTranslation('hire')
  const benefitList = [
    { image: require('../../img/hire/01.jpg').default, des: '💻 ' + t('life.benefit.newcomer') },
    {
      image: require('../../img/hire/01.jpg').default,
      des: '💰 ' + t('life.benefit.welfare'),
    },
    {
      image: require('../../img/hire/01.jpg').default,
      des: '☀️' + t('life.benefit.holiday'),
    },
    { image: require('../../img/hire/01.jpg').default, des: '☕️ ' + t('life.benefit.office') },
  ]
  const addressLit = [
    {
      images: [
        require('../../img/hire/02.png').default,
        require('../../img/hire/address01-02.jpg').default,
        require('../../img/hire/address01-03.jpg').default,
      ],
      des: t('address.beijing'),
    },

    {
      images: [
        require('../../img/hire/address02-01.jpg').default,
        require('../../img/hire/address02-02.jpg').default,
        require('../../img/hire/address02-03.png').default,
      ],
      des: t('address.shenzhen'),
    },
  ]

  const jobList = [
    {
      title: t('recruiting.front-end.title'),
      responsibilities: t('recruiting.front-end.responsibilities'),
      requirements: t('recruiting.front-end.requirements'),
      pluses: t('recruiting.front-end.pluses'),
    },
    {
      title: t('recruiting.golang.title'),
      responsibilities: t('recruiting.golang.responsibilities'),
      requirements: t('recruiting.golang.requirements'),
    },
  ]

  return (
    <>
      <Head>
        <title>{t('slogan')}</title>
      </Head>
      <div>
        <div className=" w-full items-center flex flex-col bg-[#ffffff] sm:bg-[#fafafa]">
          <div className="sm:h-screen mb-[40px] sm:mb-0 flex flex-col items-start sm:items-center   ">
            <Nav />
            <div className="px-[48px] sm:flex sm:flex-row-reverse items-center sm:px-[96px] sm:gap-[80px] sm:h-full">
              <img
                style={{ objectFit: 'cover' }}
                src={require('../../img/hire/logo.png').default}
                className={' w-[300px] sm:w-[600px] h-[140px] sm:h-[280px] mt-[80px]  '}
                alt={'logo'}
              />
              <div className=" sm:w-[508px]">
                <div className="text-[#0b0c0f] text-[40px] sm:text-[48px] font-bold mt-[40px] sm:mt-[80px]">
                  {t('title')}
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r font-medium from-[#713bf9]  to-[#ff3ea6] mt-[16px] text-[16px] sm:text-[20px]">
                  {t('slogan')}
                </span>
                <div className="text-[#1d2129] text-[14px] sm:text-[16px] mt-[12px] leading-[20px] sm:leading-[24px] ">
                  {t('description')}
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#e5e4ff] w-full px-[48px] flex flex-col items-center sm:bg-[#fafafa] sm:w-[800px] pb-[40px] sm:pb-[48px] pb-[40px]">
            <span className="text-[#0b0c0f] text-[40px] sm:text-[48px] font-bold  mt-[40px] sm:mt-[80px]">
              {t('life.title')}
            </span>
            <span className="text-[#1d2129] text-[14px] sm:text-[16px]  mt-[12px] sm:mt-[24px] ">
              {t('life.des')}
            </span>
            <div className="flex flex-wrap justify-center">
              {benefitList?.map((item, index) => renderImageItem(item, index))}
            </div>
          </div>
          <div className=" w-full pl-[48px] sm:px-[48px]  flex flex-col items-center sm:bg-[#e5e4ff] py-[40px] sm:pt-[80px] ">
            <span className="text-[#0b0c0f] text-[40px] sm:text-[48px] font-bold mb-[24px] sm:mb-[48px]">
              {t('address.title')}
            </span>
            <div className="flex flex-col justify-start  w-full">
              {addressLit?.map((item) => renderItem(item))}
            </div>
          </div>
          <div className=" bg-[#e5e4ff] sm:bg-[#fafafa] w-full px-[48px] py-[40px] sm:py-[80px] flex flex-col items-center">
            <span className="text-[#0b0c0f] text-[40px] sm:text-[48px] font-bold  mb-[24px] sm:mb-[48px] ">
              {t('recruiting.title')}
            </span>
            <div className="flex flex-col justify-start w-full text-[#0b0c0f]  sm:w-[600px] ">
              {jobList?.map((item) =>
                renderJobItem(
                  item,
                  t('recruiting.responsibilities'),
                  t('recruiting.requirements'),
                  t('recruiting.pluses'),
                  t('recruiting.cv')
                )
              )}
            </div>
          </div>
          <Footer noHome />
        </div>
      </div>
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['hire', 'home'])),
  },
})

export default Hire
