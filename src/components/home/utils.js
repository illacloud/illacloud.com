export const AppState = {
  h: 0,
  w: 0,
}

export const COVER_HEIGHT = 400
export const BUFFER_HEIGHT = 160
// cover offset relative to the screen bottom
export const OFFSET = 50

export const getCoverPosition = (y) => {
  return AppState.h - y - (COVER_HEIGHT / 2 - OFFSET)
}

export const coverBgRadius = () =>
  Math.pow(Math.pow(AppState.w / 2, 2) + Math.pow(AppState.h / 2, 2), 0.5) * 3

export const scale = 400 / coverBgRadius

export const getBgSize = (y) => {
  const top = AppState.h - y - (COVER_HEIGHT / 2 - OFFSET)
  return (
    ((AppState.h - COVER_HEIGHT / 2 + OFFSET - top) / AppState.h) *
      (AppState.w + 1000) *
      2.5 +
    COVER_HEIGHT
  )
}
