const MOBILE_USER_AGENT = /Android|webOS|iPhone|iPod|BlackBerry/i

export const isMobile = (userAgent) => {
  return MOBILE_USER_AGENT.test(userAgent)
}
