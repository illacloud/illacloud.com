import {DefaultStars} from '@/constants/defaultVal';
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