import { DiscordIcon, GitHubIconGray, TwitterIcon } from '@/img/home/svg'
import { ProductHuntIcon } from '@/img/public/productHunt'
import { LinkInIcon } from '@/img/public/linkedin';

export const Community = [
  {
    icon: <GitHubIconGray />,
    href: 'https://github.com/illacloud/illa-builder',
    tagCategory: 'homepage_footer_github_click',
    label: 'GitHub',
  },
  {
    icon: <TwitterIcon />,
    href: 'https://twitter.com/illacloudhq',
    tagCategory: 'homepage_footer_twitter_click',
    label: 'Twitter',
  },
  {
    icon: <DiscordIcon />,
    href: 'https://discord.com/invite/illacloud',
    tagCategory: 'homepage_footer_discord_click',
    label: 'Discord',
  },
  {
    icon: <ProductHuntIcon />,
    href: 'https://www.producthunt.com/posts/illa',
    tagCategory: 'homepage_footer_producthunt_click',
    label: 'ProductHunt',
  },
  {
    icon: <LinkInIcon />,
    href: 'https://www.linkedin.com/company/illacloud/',
    tagCategory: 'homepage_footer_linkedin_click',
    label: 'LinkedIn',
  },
]
