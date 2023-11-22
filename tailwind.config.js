const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')
const colors = require('tailwindcss/colors')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ['./src/**/*.{js,jsx,mdx,html}'],
  blocklist: ['[html:has(&)]:bg-blue-500'],
  darkMode: 'class',
  theme: {
    // `demo-*` screens are used for the "mobile-first" responsive demo
    screens: {
      sm: '640px',
      'demo-sm': '720px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xs: '1440px',
      '2xl': '1536px',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '5rem',
      '7xl': '7rem',
      title: '2.5rem',
      titleWeb: '5rem',
    },
    height: (theme) => ({
      ...theme('spacing'),
      screen: '100vh',
    }),
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    colors: {
      ...colors,
      'white-01': '#fff',
      'white-02': 'rgba(255, 255, 255, 0.9)',
      'white-03': 'rgba(255, 255, 255, 0.75)',
      'white-04': 'rgba(255, 255, 255, 0.5)',
      'white-05': 'rgba(255, 255, 255, 0.3)',
      'white-06': 'rgba(255, 255, 255, 0.2)',
      'white-07': 'rgba(255, 255, 255, 0.12)',
      'white-08': 'rgba(255, 255, 255, 0.08)',
      'white-09': 'rgba(255, 255, 255, 0.04)',
      'gray-01': '#000',
      'gray-02': '#1f1f1f',
      'gray-03': '#5c5c5c',
      'gray-04': '#999',
      'gray-05': '#c2c2c2',
      'gray-06': '#d6d6d6',
      'gray-07': '#e0e0e0',
      'gray-08': '#ebebeb',
      'gray-09': '#f5f5f5',
      'garyBlue-01': '#0b0c0fff',
      'garyBlue-02': '#1d2129ff',
      'garyBlue-03': '#787e85ff',
      'garyBlue-04': '#a9aeb8ff',
      'garyBlue-05': '#bbc0c9ff',
      'garyBlue-06': '#c9cdd4ff',
      'garyBlue-07': '#dadee5ff',
      'garyBlue-08': '#e5e6ebff',
      'garyBlue-09': '#f2f3f5ff',
      'tech-purple-01': '#654aec',
      'tech-purple-02': '#775ff2',
      'tech-purple-03': '#a087f4',
      'tech-purple-04': '#bca6f7',
      'tech-purple-05': '#d6c7fb',
      'tech-purple-07': '#f8f5ff',
      'tech-purple-06': '#eadeff',
      'tech-purple-n-01': '#5343d0',
      'tech-pink-01': '#ff58be',
      'tech-pink-02': '#ff75c5',
      'tech-pink-03': '#ff92ce',
      'tech-pink-05': '#ffcbe4',
      'tech-pink-04': '#ffaed8',
      'tech-pink-06': '#ffe8f2',
      'tech-pink-07': '#fff5f9',
      'tech-pink-n-01': '#c24499',
      'blackAlpha-01': 'rgba(0, 0, 0, 0.88)',
      'blackAlpha-02': 'rgba(0, 0, 0, 0.64)',
      'blackAlpha-03': 'rgba(0, 0, 0, 0.4)',
      'blackAlpha-04': 'rgba(0, 0, 0, 0.24)',
      'blackAlpha-06': 'rgba(0, 0, 0, 0.12)',
      'blackAlpha-05': 'rgba(0, 0, 0, 0.16)',
      'blackAlpha-07': 'rgba(0, 0, 0, 0.08)',
      'blackAlpha-08': 'rgba(0, 0, 0, 0.04)',
      'blue-01': '#134ae0',
      'blue-02': '#175ceb',
      'blue-03': '#1e6fff',
      'blue-04': '#5c99ff',
      'blue-05': '#99beff',
      'blue-06': '#c2d8ff',
      'blue-07': '#edf4ff',
      'blue-n-01': '#083bc7',
      'purple-02': '#8e4be0',
      'purple-01': '#833fdf',
      'purple-03': '#a55bf5',
      'purple-04': '#c87ffa',
      'purple-05': '#dfb2fc',
      'purple-06': '#f0d6fe',
      'purple-07': '#fbf2fe',
      'purple-n-01': '#6f2fc4',
      'red-01': '#e02424',
      'red-02': '#eb3639',
      'red-03': '#ff4747',
      'red-04': '#ff7272',
      'red-05': '#ffa3a3',
      'red-07': '#fee',
      'red-06': '#fcc',
      'green-01': '#007a41',
      'green-02': '#118f58',
      'green-04': '#00d689',
      'green-03': '#00aa5b',
      'red-n-01': '#c21f1f',
      'green-05': '#66dfb0',
      'green-06': '#d9ffea',
      'green-07': '#ecfbf5',
      'green-n-01': '#006134',
      'yellow-01': '#e07800',
      'yellow-02': '#eb9000',
      'yellow-04': '#ffcd00',
      'yellow-03': '#ffab00',
      'yellow-05': '#ffe266',
      'yellow-07': '#fffceb',
      'yellow-06': '#fff2a3',
      'yellow-n-01': '#c76b00',
      'orange-02': '#eb4825',
      'orange-01': '#e03118',
      'orange-03': '#ff5e2f',
      'orange-04': '#ff8246',
      'orange-05': '#ffb490',
      'orange-06': '#ffd7bf',
      'orange-07': '#fff5f0',
      'orange-n-01': '#c72c15',
      'cyan-02': '#08a7cc',
      'cyan-01': '#069fcc',
      'cyan-03': '#0cc1e2',
      'garyBlue-05': '#bbc0c9',
      'garyBlue-07': '#dadee5',
    },
    extend: {
      colors: {
        code: {
          highlight: 'rgb(125 211 252 / 0.1)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.slate.700'),
            hr: {
              borderColor: theme('colors.slate.100'),
              marginTop: '3em',
              marginBottom: '3em',
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            h2: {
              marginBottom: `${16 / 24}em`,
            },
            h3: {
              marginTop: '2.4em',
              lineHeight: '1.4',
            },
            h4: {
              marginTop: '2em',
              fontSize: '1.125em',
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.slate.500'),
              fontWeight: 500,
            },
            'h2 small': {
              fontSize: theme('fontSize.lg')[0],
              ...theme('fontSize.lg')[1],
            },
            'h3 small': {
              fontSize: theme('fontSize.base')[0],
              ...theme('fontSize.base')[1],
            },
            'h4 small': {
              fontSize: theme('fontSize.sm')[0],
              ...theme('fontSize.sm')[1],
            },
            'h2, h3, h4': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: 0,
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em',
            },
            'ul > li::before': {
              content: '""',
              width: '0.75em',
              height: '0.125em',
              position: 'absolute',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: '999px',
              backgroundColor: theme('colors.slate.300'),
            },
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.sky.300')}`,
            },
            'a:hover': {
              borderBottomWidth: '2px',
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.slate.900'),
              fontWeight: theme('fontWeight.semibold'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            kbd: {
              background: theme('colors.slate.100'),
              borderWidth: '1px',
              borderColor: theme('colors.slate.200'),
              padding: '0.125em 0.25em',
              color: theme('colors.slate.700'),
              fontWeight: 500,
              fontSize: '0.875em',
              fontVariantLigatures: 'none',
              borderRadius: '4px',
              margin: '0 1px',
            },
            code: {
              fontWeight: theme('fontWeight.medium'),
              fontVariantLigatures: 'none',
            },
            pre: {
              color: theme('colors.slate.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
              display: 'flex',
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`,
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`,
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%',
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.slate.700'),
              borderBottomColor: theme('colors.slate.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.slate.100'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
            'figure figcaption': {
              textAlign: 'center',
              fontStyle: 'italic',
            },
            'figure > figcaption': {
              marginTop: `${12 / 14}em`,
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.400'),
            'h2, h3, h4, thead th': {
              color: theme('colors.slate.200'),
            },
            'h2 small, h3 small, h4 small': {
              color: theme('colors.slate.400'),
            },
            kbd: {
              background: theme('colors.slate.700'),
              borderColor: theme('colors.slate.600'),
              color: theme('colors.slate.200'),
            },
            code: {
              color: theme('colors.slate.200'),
            },
            hr: {
              borderColor: theme('colors.slate.200'),
              opacity: '0.05',
            },
            pre: {
              boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
            },
            a: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.sky.400'),
            },
            strong: {
              color: theme('colors.slate.200'),
            },
            thead: {
              color: theme('colors.slate.300'),
              borderBottomColor: 'rgb(148 163 184 / 0.2)',
            },
            'tbody tr': {
              borderBottomColor: 'rgb(148 163 184 / 0.1)',
            },
            blockQuote: {
              color: theme('colors.white'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        eurostile: ['Eurostile Becker', ...defaultTheme.fontFamily.sans],
        jetBrains: ['JetBrains Mono', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        full: '100%',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      keyframes: {
        'flash-code': {
          '0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
        'title-opacity': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'title-position-y': {
          '0%': {
            transform: 'translateY(64px)',
          },
          '100%': {
            transform: 'translateY(56px)',
          },
        },
        'cover-image-position-y': {
          '0%': {
            transform: 'translateY(190px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
        'title-visible':
          'title-opacity 800ms ease-in-out forwards,title-position-y 800ms ease-in-out forwards',
        'coverage-visible':
          'title-opacity 800ms ease-in-out 50ms forwards,cover-image-position-y 800ms ease-in-out 50ms forwards',
      },
      backgroundImage: (theme) => ({
        squiggle: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
            'colors.yellow.400',
          )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`,
        )}")`,
        mobileHeader: `url("${svgToDataUri(`<svg width="375" height="494" viewBox="0 0 375 494" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3" filter="url(#filter0_f_1411_27360)">
<path d="M398.453 258.91C393.25 373.434 252.039 460.05 83.0507 452.371C-85.9376 444.692 -218.711 345.627 -213.507 231.103C-208.303 116.579 -209.636 67.0591 101.896 37.6421C535 48.5001 403.657 144.386 398.453 258.91Z" fill="url(#paint0_radial_1411_27360)"/>
</g>
<defs>
<filter id="filter0_f_1411_27360" x="-263.655" y="-12.3579" width="734.8" height="515.203" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_1411_27360"/>
</filter>
<radialGradient id="paint0_radial_1411_27360" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(92.1928 244.994) rotate(34.3606) scale(274.087 381.64)">
<stop stop-color="#654AEC"/>
<stop offset="1" stop-color="#654AEC" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>
`)}")`,
      }),
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))',
      )
      addVariant(
        'supports-scrollbars',
        '@supports selector(::-webkit-scrollbar)',
      )
      addVariant('children', '& > *')
      addVariant('scrollbar', '&::-webkit-scrollbar')
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
      addVariant('demo-dark', '.demo-dark &')
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      )

      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      )
    },
    function ({ addUtilities, theme }) {
      let backgroundSize = '7.07px 7.07px'
      let backgroundImage = (color) =>
        `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`
      let colors = Object.entries(theme('backgroundColor')).filter(
        ([, value]) => typeof value === 'object' && value[400] && value[500],
      )

      addUtilities(
        Object.fromEntries(
          colors.map(([name, colors]) => {
            let backgroundColor = colors[400] + '1a' // 10% opacity
            let stripeColor = colors[500] + '80' // 50% opacity

            return [
              `.bg-stripes-${name}`,
              {
                backgroundColor,
                backgroundImage: backgroundImage(stripeColor),
                backgroundSize,
              },
            ]
          }),
        ),
      )

      addUtilities({
        '.bg-stripes-white': {
          backgroundImage: backgroundImage('rgba(255 255 255 / 0.75)'),
          backgroundSize,
        },
      })

      addUtilities({
        '.ligatures-none': {
          fontVariantLigatures: 'none',
        },
      })
    },
  ],
}
