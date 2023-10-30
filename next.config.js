const { createLoader } = require('simple-functional-loader')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const defaultConfig = require('tailwindcss/resolveConfig')(
  require('tailwindcss/defaultConfig'),
)
const dlv = require('dlv')
const { i18n } = require('./next-i18next.config')

module.exports = withBundleAnalyzer({
  i18n,
  swcMinify: true,
  pageExtensions: ['js', 'jsx'],
  images: {
    disableStaticImages: true,
    domains: ['cdn.illacloud.com'],
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  async redirects() {
    return require('./redirects.json')
  },
  webpack(config, options) {
    config.resolve.fallback = {
      fs: false,
      path: false,
      stream: false,
      constants: false,
    }

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|mp4|webm|zip)$/i,
      issuer: /\.(jsx?|tsx?|mdx)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.resolve.alias['defaultConfig$'] = require.resolve(
      'tailwindcss/defaultConfig',
    )
    config.module.rules.push({
      test: require.resolve('tailwindcss/defaultConfig'),
      use: createLoader(function (_source) {
        return `export default ${JSON.stringify(defaultConfig)}`
      }),
    })

    config.resolve.alias['utilities$'] = require.resolve(
      'tailwindcss/lib/corePlugins.js',
    )

    // import utilities from 'utilities?plugin=backgroundColor'
    config.module.rules.push({
      resourceQuery: /plugin/,
      test: require.resolve('tailwindcss/lib/corePlugins.js'),
      use: createLoader(function (_source) {
        let pluginName = new URLSearchParams(this.resourceQuery).get('plugin')
        let plugin = require('tailwindcss/lib/corePlugins.js').corePlugins[
          pluginName
        ]
        return `export default ${JSON.stringify(getUtilities(plugin))}`
      }),
    })

    config.module.rules.push({
      resourceQuery: /examples/,
      test: require.resolve('tailwindcss/lib/corePlugins.js'),
      use: createLoader(function (_source) {
        let plugins = require('tailwindcss/lib/corePlugins.js').corePlugins
        let examples = Object.entries(plugins).map(([name, plugin]) => {
          let utilities = getUtilities(plugin)
          return {
            plugin: name,
            example:
              Object.keys(utilities).length > 0
                ? Object.keys(utilities)
                    [Math.floor((Object.keys(utilities).length - 1) / 2)].split(
                      /[>:]/,
                    )[0]
                    .trim()
                    .substr(1)
                    .replace(/\\/g, '')
                : undefined,
          }
        })
        return `export default ${JSON.stringify(examples)}`
      }),
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgoConfig: { plugins: { removeViewBox: false } } },
        },
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    // Remove the 3px deadzone for drag gestures in Framer Motion
    config.module.rules.push({
      test: /framer-motion/,
      use: createLoader(function (source) {
        return source.replace(
          /var isDistancePastThreshold = .*?$/m,
          'var isDistancePastThreshold = true',
        )
      }),
    })

    config.module.rules.push({
      resourceQuery: /fields/,
      use: createLoader(function (source) {
        let fields = new URLSearchParams(this.resourceQuery)
          .get('fields')
          .split(',')
        return JSON.stringify(JSON.parse(source), (key, value) => {
          return ['', ...fields].includes(key) ? value : undefined
        })
      }),
    })

    return config
  },
})

function normalizeProperties(input) {
  if (typeof input !== 'object') return input
  if (Array.isArray(input)) return input.map(normalizeProperties)
  return Object.keys(input).reduce((newObj, key) => {
    let val = input[key]
    let newVal = typeof val === 'object' ? normalizeProperties(val) : val
    newObj[
      key.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1}-${p2.toLowerCase()}`)
    ] = newVal
    return newObj
  }, {})
}

function getUtilities(plugin, { includeNegativeValues = false } = {}) {
  if (!plugin) return {}
  const utilities = {}

  function addUtilities(utils) {
    utils = Array.isArray(utils) ? utils : [utils]
    for (let i = 0; i < utils.length; i++) {
      for (let prop in utils[i]) {
        for (let p in utils[i][prop]) {
          if (p.startsWith('@defaults')) {
            delete utils[i][prop][p]
          }
        }
        utilities[prop] = normalizeProperties(utils[i][prop])
      }
    }
  }

  plugin({
    addBase: () => {},
    addDefaults: () => {},
    addComponents: () => {},
    corePlugins: () => true,
    prefix: (x) => x,
    config: (option, defaultValue) => defaultValue,
    addUtilities,
    theme: (key, defaultValue) => dlv(defaultConfig.theme, key, defaultValue),
    matchUtilities: (matches, { values, supportsNegativeValues } = {}) => {
      if (!values) return

      let modifierValues = Object.entries(values)

      if (includeNegativeValues && supportsNegativeValues) {
        let negativeValues = []
        for (let [key, value] of modifierValues) {
          let negatedValue =
            require('tailwindcss/lib/util/negateValue').default(value)
          if (negatedValue) {
            negativeValues.push([`-${key}`, negatedValue])
          }
        }
        modifierValues.push(...negativeValues)
      }

      let result = Object.entries(matches).flatMap(
        ([name, utilityFunction]) => {
          return modifierValues
            .map(([modifier, value]) => {
              let declarations = utilityFunction(value, {
                includeRules(rules) {
                  addUtilities(rules)
                },
              })

              if (!declarations) {
                return null
              }

              return {
                [require('tailwindcss/lib/util/nameClass').default(
                  name,
                  modifier,
                )]: declarations,
              }
            })
            .filter(Boolean)
        },
      )

      for (let obj of result) {
        for (let key in obj) {
          let deleteKey = false
          for (let subkey in obj[key]) {
            if (subkey.startsWith('@defaults')) {
              delete obj[key][subkey]
              continue
            }
            if (subkey.includes('&')) {
              result.push({
                [subkey.replace(/&/g, key)]: obj[key][subkey],
              })
              deleteKey = true
            }
          }

          if (deleteKey) delete obj[key]
        }
      }

      addUtilities(result)
    },
  })
  return utilities
}
