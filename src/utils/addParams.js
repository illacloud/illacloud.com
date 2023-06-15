export const addParams = (url, obj) => {
  const params = Object.keys(obj)
    .map((key) => {
      if(obj[key]) {
       return `${key}=${obj[key]}`
      } else {
        return ''
      }
    })
    .join('&')
  if(url.includes('?')) return `${url}&${params}`
  return `${url}?${params}`
}

export const isCloudUrl = (url) => url.includes('https://cloud.illacloud.com')