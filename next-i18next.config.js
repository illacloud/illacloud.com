const path = require('path');
const { locales } = require('./src/constants/language')

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: locales,
  },
  localePath: path.resolve('./public/locales')
}
