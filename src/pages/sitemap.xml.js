import { getServerSideSitemap } from 'next-sitemap';
const { i18n } = require('../../next-i18next.config')
export const getServerSideProps = async (ctx) => {
  const response = await fetch('https://illacloud.com');
  const paths = await response.json();
  const fields = paths.data.map(({ path }) => {
    const alternateRefs = i18n.locales.map((language) => {
      let href = 'https://illacloud.com/' + language + path;
      if (language === 'en-US' ) {
        href = 'https://illacloud.com' + path;
      }
      return {
        href,
        hreflang: [ ...i18n.locales ],
      };
    });
    return {
      loc: 'https://www.illacloud.com' + path,
      alternateRefs,
      lastmod: new Date().toISOString(),
    };
  });
  return getServerSideSitemap(ctx, fields);
};
export default () => {};
