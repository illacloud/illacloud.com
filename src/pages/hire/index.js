import { Nav } from '@/components/home/nav'
import { Footer } from '@/components/home/home-footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AddressIcon } from '@/img/hire/svg'
import clsx from 'clsx'

const renderImageItem = (item, index) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center sm:w-1/2 ',
        index % 2 === 0 ? 'sm:items-end sm:pr-[10px]' : 'sm:items-start sm:pl-[20px]'
      )}
    >
      <div className="sm:flex flex-col sm:justify-center ">
        <img
          style={{ objectFit: 'cover' }}
          src={item.image}
          className={'w-[279px] sm:w-[373px] h-[179.5px] sm:h-[240px] '}
          alt={'video'}
        />
        <span className="text-[12px] sm:text-[16px] text-[#1d2129] text-center font-bold  mt-[12px] mb-[24px] sm:mt-[24px] sm:mb-[48px]">
          {item.des}
        </span>
      </div>
    </div>
  )
}

const renderItem = (item) => {
  return (
    <div className="flex flex-col items-start justify-start overflow-x-scroll sm:w-full sm:overflow-x-hidden sm:items-center ">
      <div className="flex  gap-[20px] justify-between">
        {item.images?.map((image) => (
          <div className={'w-[279px] sm:w-1/3 '}>
            <img style={{ objectFit: 'cover' }} src={image} alt={'video'} />
          </div>
        ))}
      </div>
      <span className="text-[12px] text-[#1d2129]  sm:w-full  truncate mt-[12px] mb-[24px] sm:mt-[24px] flex  sm:justify-center flex-nowrap sm:mb-[48px] items-center ">
        <AddressIcon />
        {item.des}
      </span>
    </div>
  )
}

const renderJobItem = (item) => {
  return (
    <div className="flex flex-col items-start justify-start overflow-x-scroll mb-[20px] sm:mb-[40px]">
      <span className="font-medium text-[18px] sm:text-[36px] mb-[20px] sm:mb-[40px]">
        {item.title}
      </span>
      <span className="font-medium text-[16px] sm:text-[20px] mb-[8px] sm:mb-[16px]">岗位职责</span>
      <span className="whitespace-pre-line  mb-[20px] sm:mb-[40px]  text-[14px] sm:text-[16px]">
        {item.responsibilities}
      </span>
      <span className="font-medium text-[16px] sm:text-[20px] mb-[8px] sm:mb-[16px]">职位要求</span>
      <span className="whitespace-pre-line  text-[14px]  mb-[20px] sm:mb-[40px]  sm:text-[16px]">
        {item.requirements}
      </span>
      {item.pluses && (
        <>
          <span className="font-medium text-[16px] sm:text-[20px] mb-[8px] sm:mb-[16px]">
            加分项
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
        投递简历
      </span>
    </div>
  )
}

const jobList = [
  {
    title: '前端工程师',
    responsibilities:
      '1. 主导或参与组件库研发工作，持续提升组件库的易用性和扩展性；\n2. 主导或参与低代码平台研发工作， 持续提升低代码平台的易用性、稳定性与扩展性',
    requirements:
      '1. 本科及以上学历，计算机相关专业；\n2. 良好的沟通表达能力，执行力强，对待工作认真严谨高度负责；\n3. 善于主动思考总结，倡导创新与持续优化，思路周密，代码严谨，对待技术有强烈兴趣；\n4. 精通HTML5/ES6/CSS3等Web开发技能，能独立完成页面制作、具备良好的CSS功底；\n5. 熟练掌握至少一款当下主流的前端框架 如Vue、 React、Svelte等；\n6. 熟悉Web应用系统开发，对HTTP协议及Web服务器等有所理解；',
    pluses:
      '1. 熟悉Nodejs后端server研发，具有服务高并发、性能分析调优、后端服务架构经验；\n2. 有组件库开发经验；\n3. 有开源项目维护经验。',
  },
  {
    title: 'golang开发工程师',
    responsibilities:
      '1、负责高质量Go系统的开发，维护开源项目illa Family的基础设施；\n2、优化在线和离线服务性能，支持高并发、多机房、容灾方案的实施；\n3、了解单元测试写法，能产出符合开源项目的高质量代码要求；\n4、有容器相关经验。',
    requirements:
      '1、良好的数据结构和算法基础，扎实的编程能力；\n2、熟悉Go语言中的一种, 熟悉mysql，redis，kafka消息队列等；\n3、有开源项目维护经验为加分项；\n4、熟悉前端相关技术，vue、html、javascript、css为加分项；\n5、独立思考，有产品意识，能提出系统改善和产品优化者优先。',
  },
]

const benefitList = [
  { image: require('../../img/hire/01.jpg').default, des: '💻 入职提供苹果笔记本、台式机' },
  {
    image: require('../../img/hire/01.jpg').default,
    des: '💰每日提供餐食补贴 & 每月福利金助员工提升自我',
  },
  { image: require('../../img/hire/01.jpg').default, des: '☀️ 在节假日外为员工提供福利年假、病假' },
  { image: require('../../img/hire/01.jpg').default, des: '☕️ 免费咖啡、每周举办不同主题活动' },
]
const addressLit = [
  {
    images: [
      require('../../img/hire/02.png').default,
      require('../../img/hire/02.png').default,
      require('../../img/hire/02.png').default,
    ],
    des: '北京市东城区王府井219淘汇新天7层',
  },

  {
    images: [
      require('../../img/hire/02.png').default,
      require('../../img/hire/02.png').default,
      require('../../img/hire/02.png').default,
    ],
    des: '广东省深圳市南山区高新南一道6号TCL大厦B座9层',
  },
]

const Hire = () => {
  return (
    <>
      <div>
        <div className=" w-full items-center  bg-[#fafafa]">
          <div className="h-screen flex flex-col items-start sm:items-center   ">
            <Nav />
            <div className="px-[48px] sm:flex sm:flex-row-reverse items-center sm:px-[96px] sm:gap-[80px] sm:h-full">
              <img
                style={{ objectFit: 'cover' }}
                src={require('../../img/hire/logo.png').default}
                className={' w-[300px] sm:w-[600px] h-[140px] sm:h-[280px] mt-[80px]  '}
                alt={'logo'}
              />
              <div className=" sm:w-[508px]">
                <div className="text-[#0b0c0f] text-[40px] sm:text-[48px] font-bold  mt-[40px] sm:mt-[80px]">
                  Work at ILLA
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#713bf9] to-[#ff3ea6] mt-[16px] text-[16px] sm:text-[20px]">
                  Facing challenges with great people
                </span>
                <div className="text-[#1d2129] text-[14px] sm:text-[16px] mt-[12px] leading-[20px] sm:leading-[24px] ">
                  ILLA是一个年轻的团队，核心成员来自字节跳动、快手、北大、港科大等知名公司和院校，参与了抖音和快手用户量从零到亿的产品研发工作，拥有极其丰富的产品开发经验。
                  我们致力于为国内外用户开发优秀的低代码平台产品，减少企业内部工具开发过程中UI与数据接入花费的时间，优化企业工作流。我们将进一步建立起完整的企业云服务体系，为中小规模的企业提供低成本、高质量的云服务。
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#e5e4ff] w-full px-[48px] flex flex-col items-center sm:bg-[#fafafa]">
            <span className="text-[#0b0c0f] text-[40px] sm:text-[48px] font-bold  mt-[40px] sm:mt-[80px]">
              走进ILLA
            </span>
            <span className="text-[#1d2129] text-[20px] sm:text-[16px]  mt-[12px] sm:mt-[24px] mb-[24px] mb-[48px]">
              我们提供温馨的工作环境
            </span>
            <div className="flex flex-wrap justify-center">
              {benefitList?.map((item, index) => renderImageItem(item, index))}
            </div>
          </div>
          <div className=" w-full px-[48px] flex flex-col items-center sm:bg-[#e5e4ff]">
            <span className="text-[#0b0c0f] text-[40px] sm:text-[48px] font-bold  mt-[40px] sm:mt-[80px] sm:mb-[48px]">
              我们在这里
            </span>
            <div className="flex flex-col justify-start  w-full">
              {addressLit?.map((item) => renderItem(item))}
            </div>
          </div>
          <div className=" bg-[#e5e4ff] sm:bg-[#fafafa] w-full px-[48px] flex flex-col items-center">
            <span className="text-[#0b0c0f] text-[40px] sm:text-[48px] font-bold  mt-[40px] sm:mt-[80px] mb-[24px] sm:mb-[48px] ">
              我们正在招聘
            </span>
            <div className="flex flex-col justify-start w-full text-[#0b0c0f]  sm:w-[600px] ">
              {jobList?.map((item) => renderJobItem(item))}
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
