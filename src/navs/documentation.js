import { newCreatePageList } from '@/utils/createPageList'



const allFiles = newCreatePageList(
  require.context(
    `../pages/docs/?meta=title,shortTitle,description,published,tagCategory,categoryName,categoryPriority,postPriority`,
    true,
    /\.mdx$/,
  ),
  'docs',
)

const sortCategory = (allFiles) => {
  return Object.values(allFiles).sort((a, b) => {
    const aCategoryPriority = a.categoryPriority ?? +Infinity
    const bCategoryPriority = b.categoryPriority ?? +Infinity
    if (aCategoryPriority === bCategoryPriority) {
      return 0
    }
    return aCategoryPriority - bCategoryPriority > 0 ? 1 : -1
  }).map((item) => {
    return item.categoryName ?? "others"
  })
}

const sortPosts = (allFiles) => {
  return Object.values(allFiles).sort((a, b) => {
    const aPostPriority = a.postPriority ?? +Infinity
    const bPostPriority = b.postPriority ?? +Infinity
    if (aPostPriority === bPostPriority) {
      return 0
    }
    return aPostPriority - bPostPriority > 0 ? 1 : -1
  })
}


const categoryFiles = (allFiles) => {
  const categorizedFiles = Object.values(allFiles).reduce((acc, cur) => {
    const categoryName = cur.categoryName ?? "others"
    return {
      ...acc,
      [categoryName]: [...acc[categoryName] || [], cur]
    }
  }, [])
  const sortedCategoryNames = Array.from(new Set(sortCategory(allFiles)))
  const result = sortedCategoryNames.reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: sortPosts(categorizedFiles[cur])
    }
  }, {})
  return result;
}


export const ILLADocumentationNav = (locale) => {
  if (allFiles[locale]) {
    return categoryFiles(allFiles[locale])
  } else {
    return categoryFiles(allFiles["en-US"])
  }
}
