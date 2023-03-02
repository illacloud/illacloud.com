/** @type {import("next-sitemap").IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.illacloud.com',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        {
          href: 'https://www.illacloud.com' + path,
          hreflang: path.includes('zh-CN') ? 'zh' : 'en',
          hrefIsAbsolute: true,
        },
      ],
    }
  },
}
