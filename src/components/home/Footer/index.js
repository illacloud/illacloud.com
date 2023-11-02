import style from './index.module.css'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { footerContent } from '@/constants/concat'
import Link from 'next/link'
import ILLA_LOGO from '@/img/home3/logo.svg'
import WHITE_LOGO from '@/img/home3/whiteLogo.svg'
import { LanguageSelect } from '@/components/home/language-select'
import Language from '@/img/home3/language.svg'
import WhiteLanguage from '@/img/home/language.svg'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import { FooterItems } from './footerItems'
import { useRouter } from 'next/router'
import { sendTagEvent } from '@/utils/gtag'
import { saveAs } from 'file-saver'
import { useElementFirstShow } from '@/hooks/useElementFirstShow'
import { useRef, useCallback, useMemo } from 'react'

export const Footer = ({ whiteTheme = false, scrollStart, scrollEnd }) => {
  const { t } = useTranslation('home')
  const content = t('footer.footerList', {
    returnObjects: true,
  })
  const ref = useRef(null)
  const reportShow = useCallback(() => {
    sendTagEvent({
      action: 'click',
      category: 'homepage_body_code_anywhere_show',
    })
  }, [])
  useElementFirstShow(ref, reportShow)

  const mergeFooterContent = [...content, ...footerContent]
  const { scrollYProgress } = useViewportScroll()
  const translateY = useTransform(
    scrollYProgress,
    [scrollStart, scrollEnd],
    [-150, 0],
  )
  const router = useRouter()
  const curLanguage = router.locale
  const showWeChat = useMemo(() => {
    return curLanguage === 'zh-CN'
  }, [curLanguage])

  return (
    <motion.div
      ref={ref}
      className={clsx(
        style.footerContainer,
        style.mobileFooterContainer,
        whiteTheme ? 'bg-white-01' : 'bg-black',
      )}
      style={{ translateY }}
    >
      <div className={style.footerContentContainer}>
        {mergeFooterContent.map(({ title, items }) => (
          <div className="flex flex-col items-start gap-[16px]" key={title}>
            <span
              className={clsx(
                'font-[500] text-[18px] leading-[28px]',
                whiteTheme ? 'text-[#0B0C0F]' : 'text-white-01',
              )}
            >
              {t(title)}
            </span>
            <div className="flex flex-col items-start gap-[8px] w-[80px] w-full">
              {items.length > 6 && (
                <FooterItems items={items} whiteTheme={whiteTheme} />
              )}
              {items.length <= 6 &&
                items.map(
                  ({
                    label,
                    href = '',
                    tagCategory,
                    icon,
                    downloadName,
                    blackIcon,
                  }) => {
                    if (downloadName) {
                      return (
                        <span
                          key={label}
                          className={clsx(
                            style.footerItem,
                            whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
                          )}
                          onClick={() => {
                            sendTagEvent({
                              action: 'click',
                              category: tagCategory,
                              label: t(label),
                              value: href,
                            })
                            saveAs(href, downloadName)
                          }}
                        >
                          {t(label)}
                        </span>
                      )
                    } else {
                      return (
                        <Link key={label} href={href}>
                          {icon ? (
                            <span className="flex flex-row items-center gap-[8px]">
                              {whiteTheme ? blackIcon : icon}
                              <span
                                className={clsx(
                                  style.footerItem,
                                  whiteTheme
                                    ? 'text-[#1D2129]'
                                    : 'text-white-02',
                                )}
                                onClick={() => {
                                  sendTagEvent({
                                    action: 'click',
                                    category: tagCategory,
                                    label: t(label),
                                    value: href,
                                  })
                                }}
                              >
                                {t(label)}
                              </span>
                            </span>
                          ) : (
                            <span
                              className={clsx(
                                style.footerItem,
                                whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
                              )}
                              onClick={() => {
                                sendTagEvent({
                                  action: 'click',
                                  category: tagCategory,
                                  label: t(label),
                                  value: href,
                                })
                              }}
                            >
                              {t(label)}
                            </span>
                          )}
                        </Link>
                      )
                    }
                  },
                )}
              {showWeChat && items.some((item) => item.icon) && (
                <div className="flex flex-col mt-[16px] gap-[8px] w-[70px] hidden xl:block">
                  <img
                    src="https://cdn.illacloud.com/official-website/img/home/wechat.png"
                    className="w-full"
                    alt=""
                  />
                  <span
                    className={clsx(
                      style.footerItem,
                      whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
                    )}
                  >
                    加入微信群
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={style.space} />
      <div className={style.footerBottom}>
        <div className="flex flex-row items-center gap-[16px]">
          <img
            src={whiteTheme ? WHITE_LOGO : ILLA_LOGO}
            alt="ILLA_LOGO"
            height="20"
          />
          <span
            className={clsx(
              'hidden xl:block',
              whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
            )}
          >
            {t('slogan-1')}
          </span>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center gap-[16px] xl:gap-[32px] ">
            <div className="flex flex-row gap-[4px] xl:gap-[8px] px-[4px]">
              <img src={whiteTheme ? WhiteLanguage : Language} alt="language" />
              <LanguageSelect buttonColorChange={!whiteTheme} />
            </div>
            <Link href="https://docs.illacloud.com/privacy-policy">
              <span
                className={clsx(
                  style.footerItem,
                  whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
                )}
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_footer_privacy_policy_click',
                    label: t('footer.privacy-policy'),
                  })
                }}
              >
                {t('footer.privacy-policy')}
              </span>
            </Link>
            <Link href="https://docs.illacloud.com/terms-of-service">
              <span
                className={clsx(
                  style.footerItem,
                  whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
                )}
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_footer_terms_of_service_click',
                    label: t('footer.terms-of-service'),
                  })
                }}
              >
                {t('footer.terms-of-service')}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
