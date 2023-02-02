import { DiscordIcon, GitHubIconGray, TwitterIcon } from '@/img/home/svg'
import { ProductHuntIcon } from '@/img/public/productHunt'

export const Community = [
  {
    icon: <GitHubIconGray />,
    href: 'https://github.com/illacloud/illa-builder',
    tagCategory: 'homepage_footer_github_click',
  },
  {
    icon: <TwitterIcon />,
    href: 'https://twitter.com/illacloudhq',
    tagCategory: 'homepage_footer_twitter_click',
  },
  {
    icon: <DiscordIcon />,
    href: 'https://discord.com/invite/illacloud',
    tagCategory: 'homepage_footer_discord_click',
  },
  {
    icon: <ProductHuntIcon />,
    href: 'https://www.producthunt.com/posts/illa',
    tagCategory: 'homepage_footer_producthunt_click',
  },
]
