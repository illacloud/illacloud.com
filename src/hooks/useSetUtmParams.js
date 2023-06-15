import { useRouter } from 'next/router'
import { setItems } from '@/utils/storage'

export const useSetUtmParams = () => {
  const router = useRouter()
  if (router?.query) {
    const { utm_source, utm_medium, utm_campaign } = router.query
    setItems({ utm_source, utm_medium, utm_campaign })
  }
}