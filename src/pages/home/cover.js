import {useEffect, useMemo, useRef, useState} from "react";
import {useWindowScroll} from 'react-use'


export function Cover() {


  const [size, setSize] = useState(400)
  const scrollRef = useRef(null);
  const {y} = useWindowScroll()


  const [innerSize, setInnerHeight] = useState()
  const [top, setTop] = useState()
  const [radius, setRadius] = useState(0)

  const bgRef = useRef()

  useEffect(() => {
    if (window) {
      setInnerHeight({w: window.innerWidth, h: window.innerHeight,})
      setRadius(0)
    }
  }, [])

  useEffect(() => {
    if (innerSize?.w && innerSize?.h) {
      const _size = ((innerSize.h - 200) - scrollRef.current.getBoundingClientRect().top) / innerSize.h * (innerSize.w + 1000) * 2 + 400
      setSize(_size)
      setTop(scrollRef.current.getBoundingClientRect().top)
      console.log(window.innerHeight, window.innerWidth, scrollRef.current.getBoundingClientRect().top, _size, y)
    }
  }, [y])

  useEffect(() => {
    if (top -464.5 >= 80 ){
      setRadius(top -464.5 )
    }
    console.log("top",top)
  }, [top])


  return <div style={{
    height: `${innerSize?.h+160}px`,
    position: "absolute",
    top: `${664.5-80}px`,
    overflow: `${top && top < 464.5 ? "hidden" : "visible"}`,
    borderBottomLeftRadius: `${radius}px`,
    borderBottomRightRadius: `${radius}px`,
  }
  } className='w-full flex justify-center items-center z-30'>
    <div style={{height: size, width: size}} className={`bg-[#654aec] flex justify-center items-center  rounded-full `}>
      <img style={{objectFit:"cover"}} ref={scrollRef} src={require('./video-placeholder.png').default}  className={"w-[400px] h-[400px] bg-[#fdf1c0]  rounded-full"} />
    </div>
  </div>
}
