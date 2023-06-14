import { DefaultStars } from '@/constants/defaultVal';
export const getStars = async () => {
  try {
    const res = await fetch(
      'https://api.github.com/repos/illacloud/illa-builder',
    )
    const resJSON = await res.json()
    return resJSON?.stargazers_count || DefaultStars
  } catch {
    return DefaultStars
  }
}

export const getGithubOauth = async () => {
  try {
    const res = await fetch(
      'https://cloud-api.illacloud.com/supervisor/api/v1/oauth/github/uri/redirectTo/https%3A%2F%2Fcloud.illacloud.com%2Foauth/landing/signup'
    )
    const resJSON = await res.json()
    return resJSON.uri
  } catch (e) {
    return ''
  }
}