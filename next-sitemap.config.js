/** @type {import("next-sitemap").IConfig} */
const { locales } = require('./src/constants/language')

const site = process.env.SITE_URL || 'https://www.illacloud.com'
const getHrefLan = (href) => {
  for (let i = 0; i < locales.length; i++) {
    if (href.includes(locales[i])) return locales[i].slice(0, 2).toLocaleLowerCase()
  }

  return "en";
}

const transformUrl = async (list, config) => {
  const res = []
  await list.forEach(async (url) => {
    res.push(await config.transform(config, url))
  })
  return res
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
  additionalPaths: async (config) => {
    const result = []
    const list = [
      "/integrations",
      "/components",
      "/integrations/MySQL",
      "/integrations/PostgreSQL",
      "/integrations/MariaDB",
      "/integrations/TiDB",
      "/integrations/Redis",
      "/integrations/MongoDB",
      "/integrations/Elastic%20Search",
      "/integrations/Firebase",
      "/integrations/Supabase%20DB",
      "/integrations/Clickhouse",
      "/integrations/Amazon%20DynamoDB",
      "/integrations/Snowflake",
      "/components/Upload",
      "/components/Switch",
      "/components/Select",
      "/components/Radio%20group",
      "/components/Checkbox%20Group",
      "/components/Chart",
      "/components/Tables",
      "/components/PDF",
      "/components/Video",
    ]
    result.push(...(await transformUrl(list, config)))
    return result
  },
}
