import { useTranslation } from 'next-i18next'
import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useViewportScroll } from 'framer-motion'
import { Publicize } from '@/components/home/NewNav/publicize'
import Image from 'next/image'
import { useUtmParams } from '@/hooks/useUtmParams'
import clsx from 'clsx'
import { sendTagEvent } from '@/utils/gtag'
import { titleBottomContent } from '@/constants/newContent'
import { Vector } from '@/img/public/vector'

export const Title = (props) => {
  const { setPlayMaskShow, githubStarts } = props
  const { t } = useTranslation('home')
  const containerRef = useRef(null)
  const [canClick, setCanClcik] = useState(true)
  const cloudUrl = useUtmParams('https://cloud.illacloud.com')

  const { scrollYProgress, scrollY } = useViewportScroll()

  useEffect(() => {
    return scrollYProgress.onChange((leatest) => {
      if (leatest >= 0.038) {
        setCanClcik(false)
      } else {
        setCanClcik(true)
      }
    })
  }, [scrollYProgress])

  const mouseenterHandler = useCallback(
    function (e) {
      containerRef.current.style.setProperty('--mouse-x', e.clientX)
      containerRef.current.style.setProperty(
        '--mouse-y',
        e.clientY - 80 + scrollY.current,
      )
    },
    [scrollY],
  )

  const mousemoveHandler = useCallback(
    function (e) {
      containerRef.current.style.setProperty('--mouse-x', e.clientX)
      containerRef.current.style.setProperty(
        '--mouse-y',
        e.clientY - 80 + scrollY.current,
      )
    },
    [scrollY],
  )

  const mouseleaveHandler = useCallback(function (e) {
    containerRef.current.style.setProperty('--mouse-x', -999)
    containerRef.current.style.setProperty('--mouse-y', -999)
  }, [])

  useEffect(() => {
    if (document && CSS && CSS.paintWorklet) {
      CSS.paintWorklet.addModule(
        `data:application/javascript;charset=utf8,${encodeURIComponent(`
  class MagnetMatrixPaintWorklet {
    static get inputProperties() { return ['--mouse-x', '--mouse-y', '--magnet-color', '--magnet-size', '--magnet-gap', '--magnet-radius']; }

    paint(ctx, size, props) {
      const mouseX = parseInt(props.get('--mouse-x'))
      const mouseY = parseInt(props.get('--mouse-y'))
      const color = props.get('--magnet-color')
      const lineWidth = parseInt(props.get('--magnet-size'))
      const gap = parseInt(props.get('--magnet-gap'))
      const radius = parseInt(props.get('--magnet-radius'))
      ctx.lineCap = "round";
      for (let i = 0; i * gap < size.width; i++) {
        for (let j = 0; j * gap < size.height; j++) {
          const posX = i * gap
          const posY = j * gap
          const distance = Math.sqrt(Math.pow(posX - mouseX, 2) + Math.pow(posY - mouseY, 2))
          const width = distance < radius ? (1 - distance / radius * distance / radius) * gap * 0.2 : 0
          const startPosX = posX - width * 0.5
          const endPosX = posX + width * 0.5
          const rotate = Math.atan2(mouseY - posY, mouseX - posX)

          ctx.save()
          ctx.beginPath();
          ctx.translate(posX, posY);
          ctx.rotate(rotate);
          ctx.translate(-posX, -posY);
          ctx.moveTo(startPosX, posY);
          ctx.strokeStyle = color
          ctx.lineWidth = lineWidth;
          ctx.lineCap = "round";
          ctx.lineTo(endPosX, posY);
          ctx.stroke()
          ctx.closePath()
          ctx.restore()
        }
      }
    }
  }

  registerPaint('magnet-matrix', MagnetMatrixPaintWorklet);
`)}`,
      )
    }
  }, [])

  return (
    <div
      className="hidden xl:flex pt-[166px] bg-black text-title grow-0 text-[40px] text-white-01  flex flex-col  items-center font-bold"
      ref={containerRef}
      id="firstPageCover"
      style={{
        '--magnet-color': 'rgb(101, 74, 236)',
        '--magnet-size': '1',
        '--magnet-gap': '32',
        '--magnet-radius': '200',
        background: 'paint(magnet-matrix)',
        backgroundColor: 'black',
      }}
      onMouseEnter={mouseenterHandler}
      onMouseMove={mousemoveHandler}
      onMouseLeave={mouseleaveHandler}
    >
      <div
        className={clsx('w-full flex justify-center', {
          'pointer-events-none': !canClick,
        })}
      >
        <div className="h-full flex flex-col items-center w-[1200px] gap-[40px] gap-[48px]">
          <div className="flex flex-col items-center gap-[24px]">
            <Publicize stars={githubStarts} />
            <h1 className=" px-[20px] sm:px-0  sm:whitespace-pre-line text-center text-[64px] leading-[72px]">
              {t('slogan-1')}
            </h1>
            <span className="font-normal text-[20px] px-[20px] sm:px-0 text-center">
              {t('description')}
            </span>
            <div className="flex items-center flex-col content-between gap-[24px] text-[16px] leading-[28px] font-[500]">
              <Link legacyBehavior href={cloudUrl}>
                <a
                  className="h-[48px] w-[400px] bg-tech-purple-01 rounded-[8px] px-[32px] py-[10px] font-normal text-white-01 text-center hover:bg-tech-purple-02 active:bg-tech-purple-n-01"
                  onClick={() => {
                    sendTagEvent({
                      action: 'click',
                      category: 'homepage_body_try_cloud_free_click',
                      label: t('illa-Cloud'),
                      value: 'https://cloud.illacloud.com/',
                    })
                    sendTagEvent({
                      action: 'click_try',
                    })
                  }}
                >
                  {t('illa-Cloud')}
                </a>
              </Link>
              <Link
                legacyBehavior
                href="https://docs.illacloud.com/self-hosted-deployment"
              >
                <a
                  className="h-[19px] bg-blackAlpha-05 text-center leading-[19px] flex flex-row gap-[8px] items-center"
                  onClick={() => {
                    sendTagEvent({
                      action: 'click',
                      category: 'homepage_body_selfhsot_click',
                      label: t('self-Hosted'),
                    })
                  }}
                >
                  <span className="underline">{t('self-Hosted')} </span>
                  <Vector />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-start gap-[40px] rounded-[16px] h-[56px] ">
            {titleBottomContent.map(({ title, desc, image }) => (
              <div
                key={title}
                className="flex flex-row justify-center items-center px-[9px] gap-[16px] rounded-[8px]"
              >
                <Image src={image} width="32" height="32" />
                <div className="flex flex-col">
                  <span className="text-[12px] font-[600] leading-[16px] text-white-04">
                    {t(title)}
                  </span>
                  <span className="text-[14px] font-[500] leading-[22px] text-white-01">
                    {t(desc)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-[56px]">
        <Image
          src="https://cdn.illacloud.com/official-website/img/home/playVideoCover.png"
          className="flex items-center justify-center"
          alt="Screenshot of ILLA Cloud app editor"
          width={1040}
          height={648}
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_body_video_click',
            })
            setPlayMaskShow && setPlayMaskShow(true)
          }}
        />
      </div>
    </div>
  )
}
