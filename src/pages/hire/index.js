import { Nav } from '@/pages/home/nav'
import { Footer } from '@/pages/home/footer'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const renderImageItem = (item) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        style={{ objectFit: 'cover' }}
        src={item.image}
        className={' w-[279px] sm:w-[273px] h-[179.5px] sm:h-[240px]  '}
        alt={'video'}
      />
      <span className="text-[12px] text-[#1d2129] mt-[12px] mb-[24px] sm:mt-[24px] sm:mb-[48px]">
        {item.des}
      </span>
    </div>
  )
}

const renderItem = (item) => {
  return (
    <div className="flex flex-col items-start justify-start w-full">
      <div className="flex flex-row items-center justify-center w-full ">
        <img
          style={{ objectFit: 'cover' }}
          src={item.image1}
          className={'w-[279px] sm:w-[558px] h-[179.5px] sm:h-[359px] mr-[20px] '}
          alt={'video'}
        />
        <img
          style={{ objectFit: 'cover' }}
          src={item.image2}
          className={'w-[279px] sm:w-[558px] h-[179.5px] sm:h-[359px]  '}
          alt={'video'}
        />
      </div>
      <span className="text-[12px] text-[#1d2129] mt-[12px] mb-[24px] sm:mt-[24px] sm:mb-[48px]">
        {item.des}
      </span>
    </div>
  )
}

const benefitList = [
  { image: require('./images/01.jpg').default, des: '💻 入职提供苹果笔记本、台式机' },
  {
    image: require('./images/01.jpg').default,
    des: '💰每日提供餐食补贴 & 每月福利金助员工提升自我',
  },
  { image: require('./images/01.jpg').default, des: '☀️ 在节假日外为员工提供福利年假、病假' },
  { image: require('./images/01.jpg').default, des: '☕️ 免费咖啡、每周举办不同主题活动' },
]
const addressLit = [
  {
    image1: require('./images/02.png').default,
    image2: require('./images/02.png').default,
    des: '北京市东城区王府井219淘汇新天7层',
  },

  {
    image1: require('./images/02.png').default,
    image2: require('./images/02.png').default,
    des: '广东省深圳市南山区高新南一道6号TCL大厦B座9层',
  },
]

const Hire = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <div>
        <div className="  w-full flex flex-col items-center bg-[#fafafa] ">
          <Nav />
          <div className="h-screen">
            <div className="px-[48px]">
              <img
                style={{ objectFit: 'cover' }}
                src={require('./images/logo.png').default}
                className={' w-[300px] sm:w-[600px] h-[140px] sm:h-[280px] mt-[40px] sm:mt-[80px] '}
                alt={'logo'}
              />
              <div className="text-[#0b0c0f] text-[40px] sm:text-[80px] font-bold  mt-[40px] sm:mt-[80px]">
                Work at ILLA
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#713bf9] to-[#ff3ea6] mt-[16px] text-[16px]">
                Facing challenges with great people
              </span>
              <div className="text-[#1d2129] text-[14px] mt-[12px] leading-[20px] ">
                ILLA是一个年轻的团队，核心成员来自字节跳动、快手、北大、港科大等知名公司和院校，参与了抖音和快手用户量从零到亿的产品研发工作，拥有极其丰富的产品开发经验。
                我们致力于为国内外用户开发优秀的低代码平台产品，减少企业内部工具开发过程中UI与数据接入花费的时间，优化企业工作流。我们将进一步建立起完整的企业云服务体系，为中小规模的企业提供低成本、高质量的云服务。
              </div>
            </div>
          </div>
          <div className=" bg-[#e5e4ff] w-full px-[48px] flex flex-col items-center">
            <span className="text-[#0b0c0f] text-[40px] sm:text-[80px] font-bold  mt-[40px] sm:mt-[80px]">
              走进ILLA
            </span>
            <span className="text-[#1d2129] text-[20px] sm:text-[40px]  mt-[12px] sm:mt-[24px] mb-[24px] mb-[48px]">
              我们提供温馨的工作环境
            </span>
            <div className="flex flex-wrap justify-center">
              {benefitList?.map((item) => renderImageItem(item))}
            </div>
          </div>
          <div className=" w-full px-[48px] flex flex-col items-center">
            <span className="text-[#0b0c0f] text-[40px] sm:text-[80px] font-bold  mt-[40px] sm:mt-[80px]">
              我们在这里
            </span>
            <div className="flex flex-col justify-center overflow-x-scroll">
              {addressLit?.map((item) => renderItem(item))}
            </div>
          </div>
          <div className=" bg-[#e5e4ff] w-full px-[48px] flex flex-col items-center">
            <span className="text-[#0b0c0f] text-[40px] sm:text-[80px] font-bold  mt-[40px] sm:mt-[80px]">
              我们正在招聘
            </span>
            <span className="text-[#1d2129] text-[20px] sm:text-[40px]  mt-[12px] sm:mt-[24px] mb-[24px] mb-[48px]">
              我们提供温馨的工作环境
            </span>
            <div className="flex flex-wrap justify-center">
              {benefitList?.map((item) => renderImageItem(item))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['hire'])),
  },
})

export default Hire
