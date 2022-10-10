import { useTranslation } from 'next-i18next'
import { useCallback, useEffect, useRef } from 'react'
import NextLink from 'next/link'
import playVideoCover from '@/img/home/playVideoCover.png'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { DiscordIcon } from '@/img/public/discord'
import { GithubIcon } from '@/img/public/github'

export const Title = (props) => {
  const { githubStarts, setPlayMaskShow, onSubscribe } = props
  const { t } = useTranslation('home')
  const containerRef = useRef(null)

  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const titlePositionY = useTransform(scrollYProgress, [0, 0.1], [0, -24])
  const width = useTransform(scrollYProgress, [0, 0.1], [1040, 1200])

  const mouseenterHandler = useCallback(function (e) {
    containerRef.current.style.setProperty('--mouse-x', e.clientX)
    containerRef.current.style.setProperty('--mouse-y', e.clientY - 80)
  }, [])

  const mousemoveHandler = useCallback(function (e) {
    containerRef.current.style.setProperty('--mouse-x', e.clientX)
    containerRef.current.style.setProperty('--mouse-y', e.clientY - 80)
  }, [])

  const mouseleaveHandler = useCallback(function (e) {
    containerRef.current.style.setProperty('--mouse-x', -999)
    containerRef.current.style.setProperty('--mouse-y', -999)
  }, [])

  useEffect(() => {
    if (document) {
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
      className="hidden xl:flex z-40 top-[80px] bg-black text-title grow-0 text-[40px] text-white-01  flex flex-col  items-center font-bold relative overflow-hidden"
      ref={containerRef}
      id="firstPageCover"
      style={{
        height: '120vh',
        '--magnet-color': 'rgb(97, 123, 255)',
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
      <motion.div
        style={{ opacity: opacity, translateY: titlePositionY }}
        className="fixed left-0 top-[10vh] w-full"
      >
        <div className="h-full flex flex-col items-center animate-title-visible">
          <span className="leading-[48px] px-[20px] sm:px-0 sm:leading-[96px] sm:whitespace-pre-line text-center">
            {t('slogan-1')}
          </span>
          <span className="font-normal text-[16px] mt-[24px] px-[20px] sm:w-[520px] sm:px-0 text-center">
            {t('description')}
          </span>
          <div className="flex items-center content-between gap-[16px] text-[20px] mt-[24px]">
            <button
              onClick={() => {
                onSubscribe(true)
              }}
              className="h-[48px] bg-tech-purple-01 rounded-[8px] px-[64px] py-[8px] text-white-01 hover:bg-tech-purple-02 active:bg-purple-n-01"
            >
              {t('illa-Cloud')}
            </button>
            <NextLink href="/docs/illa-cli">
              <button className="h-[48px] bg-blackAlpha-05 border-[1px] border-white-01 rounded-[8px] px-[64px] py-[8px] text-white-01">
                {t('self-Hosted')}
              </button>
            </NextLink>
          </div>
          <div className="flex mt-[40px] gap-[48px]">
            <div
              className="flex gap-[16px] cursor-pointer"
              onClick={() => {
                window.open('https://github.com/illa-family', '__blank')
              }}
            >
              <GithubIcon />
              <div className="flex flex-col ">
                <span className="text-white-01 text-[16px]">
                  {githubStarts}
                </span>
                <span className="text-white-04 text-[14px]">{t('stars')}</span>
              </div>
            </div>
            <div
              className="flex gap-[16px] cursor-pointer"
              onClick={() => {
                window.open('https://discord.gg/zKf3WKCufR', '__blank')
              }}
            >
              <DiscordIcon />
              <div className="flex flex-col">
                <span className="text-white-01 text-[16px]">
                  {t('join-community')}
                </span>
                <span className="text-white-04 text-[14px]">Discord</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="w-full flex items-center justify-center  absolute top-[50vh]">
        <motion.img
          src={playVideoCover}
          className=" animate-coverage-visible  flex items-center justify-center "
          style={{
            width: width,
          }}
          onClick={() => {
            setPlayMaskShow(true)
          }}
        />
      </div>
    </div>
  )
}
