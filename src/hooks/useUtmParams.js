import { useRouter } from 'next/router'
import { addParams } from '@/utils/addParams'
import {getItems} from '@/utils/storage'
export const useUtmParams = (url) => {
  const router = useRouter()
  const keys = ['utm_source', 'utm_medium', 'utm_campaign']
  if (router?.query && Object.keys(router?.query).some(key => keys.includes(key))) {
    const { utm_source, utm_medium, utm_campaign } = router.query
    return addParams(url, { utm_source, utm_medium, utm_campaign })
  } else if (getItems(['utm_source', 'utm_medium', 'utm_campaign'])) {
    return addParams(url, getItems(['utm_source', 'utm_medium', 'utm_campaign']))
  } else {
    return url
  }
}