export const formatLpContentList = async (id, locale, pageName) => {
  const requestContent = async () => {
    try {
      const res = await fetch(
        `https://strapi.illasoft.com/Landing-page-index-contents/${id}`
      )
      const resJSON = await res.json()
      return resJSON?.data || {}
    } catch(e) {
      console.log(e);
      return {}
    }
  }
  const res = await requestContent()
  let lan = locale.slice(0, 2);
  if(res && res[lan]) {
    const currentContent = Object.keys(res[lan]).map(key => {
      const itemList = res[lan][key]
      itemList.sort((a, b) => a.sort - b.sort)
      return itemList
    })
    if(pageName === 'integrations') {
      return [
        {
          title: 'integrations.classify.database-integrations',
          contentList: currentContent[0]
        },
        {
          title: 'integrations.classify.api-integrations',
          contentList: currentContent[1]
        },
      ]
    } else {
      return [
        {
          title: 'components.classify.inputs',
          contentList: currentContent[0]
        },
        {
          title: 'components.classify.data',
          contentList: currentContent[1]
        },
        {
          title: 'components.classify.presentation',
          contentList: currentContent[2]
        },
      ]
    }
  } else {
    return {}
  }
}