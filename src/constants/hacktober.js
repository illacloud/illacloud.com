export const bannerContent = {
  title: 'hacktober-illa.title',
  desc1: 'hacktober-illa.description.1',
  desc2: 'hacktober-illa.description.2',
  btn1Content: {
    text: 'hacktober-illa.button.1',
    href: '#swag',
    category: 'hacktober_contribute_2_click',
  },
  btn2Content: {
    text: 'hacktober-illa.button.2',
    href: '#swag',
    category: 'hacktober_swag_click',
  },
}

export const aboutILLAContent = {
  title: 'illa.title',
  desc: 'illa.description',
  btnText: 'illa.button',
  href: 'https://www.illacloud.com',
  category: 'hacktober_learn_more_click',
}

export const contributeContent = {
  info: {
    title: 'contribute-method.title.all',
    desc: [
      'contribute-method.description.all.1',
      'contribute-method.description.all.2',
      'contribute-method.description.all.3',
    ],
    button: {
      text: 'contribute-method.button.all',
      href: 'https://builder.illacloud.com/illa_policy/deploy/app/ILAgx4p1C7kO',
      category: 'hacktober_redeem_click',
    },
  },
  cards: {
    card1: {
      title: 'contribute-method.title.build-with-illa',
      desc: [
        'contribute-method.description.build-with-illa.1',
        'contribute-method.description.build-with-illa.2',
        'contribute-method.description.build-with-illa.3',
      ],
      options: [
        {
          text: 'contribute-method.option.contribute',
          count: '+3',
          icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/contribute.svg',
        },
        {
          text: 'contribute-method.option.fork',
          count: '+2',
          icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/fork.svg',
        },
        {
          text: 'contribute-method.option.star',
          count: '+1',
          icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/star.svg',
        },
        {
          text: 'contribute-method.option.partner',
          count: '+3',
          icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/partner.svg',
        },
      ],
      button: [
        {
          text: 'contribute-method.button.build-with-illa.2',
          href: 'https://illa.ai/app',
          category: 'hacktober_build_marketplace_click',
          longButton: true,
        },
        {
          text: 'contribute-method.button.build-with-illa.1',
          href: 'https://issuegithub.com/illacloud/illa-builder/issues?q=is%3Aopen+is%3Aissue+label%3A%22build+with+ILLA%22+label%3Ahacktoberfast',
          category: 'hacktober_build_issue_click',
          pureButton: true,
        },
      ],
    },
    card2: {
      title: 'contribute-method.title.illa-ai',
      desc: 'contribute-method.description.illa-ai',
      options: [
        {
          text: 'contribute-method.option.contribute',
          count: '+3',
          icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/contribute.svg',
        },
        {
          text: 'contribute-method.option.fork',
          count: '+2',
          icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/fork.svg',
        },
        {
          text: 'contribute-method.option.star',
          count: '+1',
          icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/star.svg',
        },
        {
          text: 'contribute-method.option.run',
          count: '+1',
          icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/run.svg',
        },
      ],
      button: [
        {
          text: 'contribute-method.button.illa-ai.2',
          href: 'https://illa.ai',
          category: 'hacktober_ai_marketplace_click',
          longButton: true,
        },
        {
          text: 'contribute-method.button.illa-ai.1',
          href: 'https://github.com/illacloud/illa-builder/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfast+label%3A%22ILLA+with+AI%22',
          category: 'hacktober_ai_issue_click',
          pureButton: true,
        },
      ],
    },
    card3: {
      title: 'contribute-method.title.awesome',
      desc: [
        {
          text: 'contribute-method.description.awesome.1',
          count: '+1',
          icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/awesome1.svg',
        },
        {
          text: 'contribute-method.description.awesome.2',
          count: '+1',
          icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/awesome2.svg',
        },
      ],
      button: [
        {
          text: 'contribute-method.button.awesome',
          href: 'https://github.com/illacloud/illa-builder/issues',
          category: 'hacktober_awesome_click',
          longButton: true,
          extraStyle: 'xl:w-[154px]',
        },
      ],
    },
    card4: {
      title: 'contribute-method.title.pr',
      desc: 'contribute-method.description.pr',
      options: 'contribute-method.option.oss',
      button: [
        {
          text: 'contribute-method.button.pr',
          href: 'https://github.com/illacloud/illa-builder/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfast+label%3A%22hacktoberfest+developing%22',
          category: 'hacktober_pr_click',
          longButton: true,
          extraStyle: 'xl:w-[154px]',
        },
      ],
    },
  },
}

export const swagContent = {
  title: 'swag.illa-swag.title',
  desc: 'swag.illa-swag.desc',
  options: [
    {
      title: 'swag.illa-swag.master.title',
      label: 'swag.illa-swag.master.desc',
      extra: 'swag.illa-swag.master.swag',
      icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/master.jpeg',
      titleColor: {
        background: 'linear-gradient(90deg, #B1B6C3 0%, #EBF0FF 100%)',
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
      },
      height: 'xl:h-[256px]',
      mobileHeight: 'h-[170px]'
    },
    {
      title: 'swag.illa-swag.ace.title',
      label: 'swag.illa-swag.ace.desc',
      extra: 'swag.illa-swag.ace.swag',
      icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/ace.png',
      titleColor: {
        background: 'linear-gradient(90deg, #FFE500 0%, #FFF176 100%)',
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
      },
      height: 'xl:h-[320px]',
      mobileHeight: 'h-[200px]'
    },
    {
      title: 'swag.illa-swag.rookie.title',
      label: 'swag.illa-swag.rookie.desc',
      extra: 'swag.illa-swag.rookie.swag',
      icon: 'https://cdn.illacloud.com/official-website/img/hacktoberFest/rookie.png',
      titleColor: {
        background: 'linear-gradient(90deg, #C66C03 0%, #FFC27B 100%)',
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
      },
      height: 'xl:h-[224px]',
      mobileHeight: 'h-[140px]'
    },
  ],
}