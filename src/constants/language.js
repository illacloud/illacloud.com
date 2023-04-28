const locales = [
  "en-US",
  "zh-CN",
  "ja-JP",
  "ko-KR",
  "cs-CZ",
  "da-DK",
  "de-DE",
  "el-GR",
  "es-ES",
  "fi-FI",
  "fr-FR",
  "it-IT",
  "nl-NL",
  "no-NO",
  "pl-PL",
  "pt-PT",
  "ru-RU",
  "ro-RO",
  "sv-SE",
  "uk-UA"
]

module.exports.locales = locales

module.exports.generateLanguageOptions = (t) => {
  return locales.map((locale) => {
    return {
      label: t(`language.${locale}`),
      value: locale,
      tagCategory: `homepage_menu_language_${locale.slice(0, 2)}_click`,
    }
  }
  )
}

