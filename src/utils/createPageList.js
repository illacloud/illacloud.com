import { importAll } from '@/utils/importAll'
import { locales } from "@/constants/language"

export function createPageList(files, base) {
  return importAll(files).reduce((acc, cur) => {
    let slug = cur.fileName.substr(2).replace(/\.mdx$/, '')
    return {
      ...acc,
      [slug]: {
        ...cur.module.default,
        href: `/${base}/${slug}`,
        match: new RegExp(`^/docs/${slug}`),
      },
    }
  }, {})
}




const regex = /([^/.]+)(?=\.[^.]*$|$)/

export function newCreatePageList(files, base) {
  return locales.reduce((acc, lng) => {
    return {
      ...acc,
      [lng]: importAll(files).reduce((acc, cur) => {
        const finalFileName = cur.fileName.replace(`src/pages/${base}`, '.')
        const withPathFileName = finalFileName
        const metaInfo = withPathFileName.split("/")
        const language = metaInfo[1]
        let matches = finalFileName.match(regex)
        if (language === lng && matches[1]) {
          const slug = matches[1]
          return {
            ...acc,
            [slug]: {
              ...cur.module.default,
              href: `/${lng}/${base}/${slug}`,
              match: new RegExp(`^/docs/${slug}`),
            },
          }
        }
        return acc


      }, {})
    }
  }, {})

}
