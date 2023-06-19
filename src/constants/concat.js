import { Discord } from '@/img/public/whiteDiscord'
import { Github } from '@/img/public/whiteGithub'
import { LinkedIn } from '@/img/public/whiteLinkedIn'
import { ProductHunt } from '@/img/public/whiteProductHunt'
import { Twitter } from '@/img/public/whiteTwitter'

import { DiscordIcon, GitHubIconGray, TwitterIcon } from '@/img/home/svg'
import { ProductHuntIcon } from '@/img/public/productHunt'
import { LinkInIcon } from '@/img/public/linkedin';


export const Community = [
  {
    icon: <Github />,
    blackIcon: <GitHubIconGray />,
    href: 'https://github.com/illacloud/illa-builder',
    tagCategory: 'homepage_footer_github_click',
    label: 'GitHub',
  },
  {
    icon: <Twitter />,
    blackIcon: <TwitterIcon />,
    href: 'https://twitter.com/illacloudhq',
    tagCategory: 'homepage_footer_twitter_click',
    label: 'Twitter',
  },
  {
    icon: <Discord />,
    blackIcon: <DiscordIcon />,
    href: 'https://discord.com/invite/illacloud',
    tagCategory: 'homepage_footer_discord_click',
    label: 'Discord',
  },
  {
    icon: <ProductHunt />,
    blackIcon: <ProductHuntIcon />,
    href: 'https://www.producthunt.com/posts/illa',
    tagCategory: 'homepage_footer_producthunt_click',
    label: 'ProductHunt',
  },
  {
    icon: <LinkedIn />,
    blackIcon: <LinkInIcon />,
    href: 'https://www.linkedin.com/company/illacloud/',
    tagCategory: 'homepage_footer_linkedin_click',
    label: 'LinkedIn',
  },
]

const AboutUs = [
  {
    label: 'footer.status',
    href: 'https://status.illacloud.com/',
    tagCategory: 'homepage_footer_status_click',
    target: 'Status'
  },
  {
    label: 'footer.roadmap',
    href: 'https://github.com/orgs/illacloud/projects/4',
    tagCategory: 'homepage_footer_roadmap_click',
    target: 'Roadmap'
  },
  {
    label: 'footer.changelog',
    href: 'https://github.com/illacloud/illa-builder/releases',
    tagCategory: 'homepage_footer_changelog_click',
    target: 'Changelog'
  },
  {
    label: 'footer.media',
    href: 'https://illa-cloud-storage.illacloud.com/system-assets/media-kit/illa_media_kit.20230228.zip',
    downloadName: 'ILLA Media Kit.zip',
    tagCategory: 'homepage_footer_mediakit_click',
  },
]

const Product = [
  {
    label: 'footer.drive',
    href: '/illadrive',
    tagCategory: 'homepage_footer_drive_click',
    target: 'drive'
  },
  {
    label: 'footer.cloud',
    href: '/illacloud',
    tagCategory: 'homepage_footer_cloud_click',
    target: 'drive'
  },
  {
    label: 'footer.selfhost',
    href: '/illa-self-host',
    tagCategory: 'homepage_footer_self_host_click',
    target: 'drive'
  },
]

export const footerContent = [
  {
    title: 'footer.product',
    items: Product
  },
  {
    title: 'footer.company',
    items: AboutUs
  },
  {
    title: 'footer.community',
    hasIcon: true,
    items: Community
  }
]