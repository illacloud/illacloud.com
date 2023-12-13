import { keys } from '@/constants/utmKeys'

export const getGithubOauth = async (query) => {
  try {
    const redirectURI = new URL('https://cloud.illacloud.com/oauth')
    Object.keys(query).forEach((key) => {
      if (keys.includes(key)) {
        redirectURI.searchParams.append(key, query[key])
      }
    })
    const res = await fetch(
      `https://cloud-api.illacloud.com/supervisor/api/v1/oauth/github/uri/redirectTo/${encodeURIComponent(
        redirectURI.toString(),
      )}/landing/signup`,
    )
    const resJSON = await res.json()
    return resJSON.uri
  } catch (e) {
    return ''
  }
}
