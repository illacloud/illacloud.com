export const SelfHostContent = {
  titleContent: {
    title: 'product.title',
    desc: 'product.description',
    btnText: 'product.button',
    btnLink: 'https://docs.illacloud.com/self-hosted-deployment',
    image:
      'https://cdn.illacloud.com/official-website/img/selfhost/selfhost.svg',
    mobileImg:
      'https://cdn.illacloud.com/official-website/img/mobile/selfhost/selfhost.png',
    imageAlt: 'product.alt',
    category: 'selfhost_button_click',
  },
  deploy: {
    title: 'how-to-deploy.title',
    label: 'how-to-deploy.sub-title',
    desc: 'how-to-deploy.desc',
    items: [
      {
        icon: 'https://cdn.illacloud.com/official-website/img/selfhost/Docker.svg',
        title: 'how-to-deploy.docker.title',
        content: 'how-to-deploy.docker.desc',
        moreLink: 'https://docs.illacloud.com/self-hosted-deployment#docker',
        moreTitle: 'how-to-deploy.docker.button',
        clickCategory: 'selfhost_docker_click',
        showCategory: 'selfhost_guide_first_show',
      },
      {
        icon: 'https://cdn.illacloud.com/official-website/img/selfhost/CLI.svg',
        title: 'how-to-deploy.ILLA-CLI.title',
        content: 'how-to-deploy.ILLA-CLI.desc',
        moreLink: 'https://docs.illacloud.com/self-hosted-deployment#cli',
        moreTitle: 'how-to-deploy.ILLA-CLI.button',
        clickCategory: 'selfhost_illa_cli_click',
      },
      {
        icon: 'https://cdn.illacloud.com/official-website/img/selfhost/Kubernetes.svg',
        title: 'how-to-deploy.Kubernetes.title',
        moreLink:
          'https://docs.illacloud.com/self-hosted-deployment#kubernetes',
        moreTitle: 'how-to-deploy.Kubernetes.button',
        clickCategory: 'selfhost_kubernetes_click',
        showCategory: 'selfhost_guide_second_show',
      },
      {
        icon: 'https://cdn.illacloud.com/official-website/img/selfhost/ILLA.svg',
        title: 'how-to-deploy.quickly_deploy.title',
        content: 'how-to-deploy.quickly_deploy.desc',
        moreLink:
          'https://docs.illacloud.com/self-hosted-deployment#quickly-deployy',
        moreTitle: 'how-to-deploy.quickly_deploy.button',
        clickCategory: 'selfhost_quick_click',
      },
    ],
  },
  features: {
    title: 'features.title',
    items: [
      {
        label: 'features.drag-and-drop.title',
        desc: 'features.drag-and-drop.desc',
      },
      {
        label: 'features.fost.title',
        desc: 'features.fost.desc',
      },
      {
        label: 'features.components.title',
        desc: 'features.components.desc',
      },
      {
        label: 'features.integrations.title',
        desc: 'features.integrations.desc',
      },
      {
        label: 'features.access.title',
        desc: 'features.access.desc',
      },
    ],
  },
  compare: {
    title: 'compare.title',
    tableHeader: [
      {
        label: 'compare.sub-title-1',
        btnText: 'compare.button',
        link: 'https://cloud.illacloud.com/',
      },
      {
        label: 'compare.sub-title-2',
        btnText: 'compare.button',
        link: 'https://docs.illacloud.com/self-hosted-deployment',
      },
    ],
    items: [
      {
        label: 'compare.list.components.title',
        desc: 'compare.list.components.desc',
        icons: [true, true],
      },
      {
        label: 'compare.list.integration.title',
        desc: 'compare.list.integration.desc',
        icons: [true, true],
      },
      {
        label: 'compare.list.team-member.title',
        desc: 'compare.list.team-member.desc',
        forward: true,
        backward: true,
        icons: [true, true],
      },
      {
        label: 'compare.list.collaboration.title',
        desc: 'compare.list.collaboration.desc',
        icons: [true, true],
      },
      {
        label: 'compare.list.one-click-deploy.title',
        desc: 'compare.list.one-click-deploy.desc',
        icons: [true, true],
      },
      {
        label: 'compare.list.multi-team.title',
        desc: 'compare.list.multi-team.desc',
        icons: [false, true],
      },
      {
        label: 'compare.list.public-app.title',
        desc: 'compare.list.public-app.desc',
        icons: [false, true],
      },
      {
        label: 'compare.list.audit-log.title',
        desc: 'compare.list.audit-log.desc',
        icons: [false, true],
      },
      {
        label: 'compare.list.theme.title',
        desc: 'compare.list.theme.desc',
        icons: [false, true],
      },
      {
        label: 'compare.list.branding.title',
        desc: 'compare.list.branding.desc',
        icons: [false, true],
      },
    ],
  },
}
