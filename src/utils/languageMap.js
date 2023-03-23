export const LanCode2String = {
  'zh-CN': '简体中文',
  'en-US': 'English',
  'ja-JP': '日本語',
  'ko-KR': '한국인'
}

export const LanString2Code = {
  '简体中文': 'zh-CN',
  'English': 'en-US',
  '日本語': 'ja-JP',
  '한국인': 'ko-KR'
}
export const getLanString = (lanCode) => {
  return LanCode2String[lanCode]
}

export const getLanCode = (lanString) => {
  return LanString2Code[lanString]
}

// todo 临时处理, 当前文档只有英文和汉语
export const tempGetLanString = (lanCode) => {
  switch (lanCode) {
    case 'ja-JP':
    case 'ko-KR':
    case 'en-US':
    default:
      return LanCode2String['en-US']
    case 'zh-CN':
      return LanCode2String[lanCode]
  }
}
