export const addParams = (url, obj) => {
  const params = []
  Object.keys(obj)
    .forEach((key) => {
      if(obj[key]) {
       params.push(`${key}=${obj[key]}`)
      }
    })
  if(params.length === 0) return url
  if(url.includes('?')) return `${url}&${params.join('&')}`
  return `${url}?${params.join('&')}`
}

export const isCloudUrl = (url) => url.includes('https://cloud.illacloud.com')