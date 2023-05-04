/** @type {import("next-sitemap").IConfig} */
const site = process.env.SITE_URL || 'https://www.illacloud.com'
const getHrefLan = (href) => {
  if (href.includes('zh-CN')) return 'zh'
  else if (href.includes('ko-KR')) return 'ko'
  else if (href.includes('ja-JP')) return 'ja'
  else return 'en'
}
module.exports = {
  siteUrl: site,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        {
          href: site + path,
          hreflang: getHrefLan(path),
          hrefIsAbsolute: true,
        },
      ],
    }
  },
}
