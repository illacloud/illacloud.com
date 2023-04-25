import dataSource from '@/img/landingPage/dataSource.svg';
import componentIndex from '@/img/landingPage/componentIndex.svg';
import chatGPT from '@/img/landingPage/chatGPT.svg';
import buildForDev from '@/img/landingPage/buildForDev.svg';
import anyDateSource from '@/img/landingPage/anyDateSource.svg';
import realTime from '@/img/landingPage/realTime.svg';
import uiLibrary from '@/img/landingPage/uiLibrary.svg';
import dashboard from '@/img/landingPage/dashboard.svg';
import survey from '@/img/landingPage/survey.svg';
import adminPanel from '@/img/landingPage/adminPanel.svg';

export const pageMap = {
  components: "644784ff11188c005eb0da1b",
  integrations: "6447851611188c005eb0da1c"
}
export const contentMap = {
  components: {
    meta: {
      title: 'components.meta.title',
      description: 'components.meta.description'
    },
    headerContent: {
      title: 'components.header.title',
      description: 'components.header.description',
      btnText: 'components.header.btn-text',
      isShowBack: false,
      leftImage: componentIndex
    },
    classify: {
      inputs: 'components.classify.inputs',
      data: 'components.classify.data',
      presentation: 'components.classify.presentation'
    }
  },
  integrations: {
    meta: {
      title: 'integrations.meta.title',
      description: 'integrations.meta.description'
    },
    headerContent: {
      title: 'integrations.header.title',
      description: 'integrations.header.description',
      btnText: 'integrations.header.btn-text',
      isShowBack: false,
      isIntegration: true,
      leftImage: dataSource
    },
    classify: {
      database: 'integrations.classify.database-integrations',
      api: 'integrations.classify.api-integrations',
    }
  }
}

export const templateContent = [
  {
    label: 'second-page.feature.label',
    title: 'second-page.feature.title',
    description: 'second-page.feature.description',
    link: 'https://cloud.illacloud.com/login',
    btnText: 'try-now',
    target: 'feature',
    itemList: [
      {
        itemImage: chatGPT,
        itemName: 'second-page.feature.item-1-title',
        itemDesc: 'second-page.feature.item-1-description',
        itemLink: 'https://cloud.illacloud.com/login',
        btnText: 'try-now',
        target: 'chatgpt'
      },
      {
        itemImage: buildForDev,
        itemName: 'second-page.feature.item-2-title',
        itemDesc: 'second-page.feature.item-2-description',
        itemLink: 'https://cloud.illacloud.com/login',
        btnText: 'try-now',
        target: 'for_developer'
      },
      {
        itemImage: anyDateSource,
        itemName: 'second-page.feature.item-3-title',
        itemDesc: 'second-page.feature.item-3-description',
        itemLink: 'https://cloud.illacloud.com/login',
        btnText: 'try-now',
        target: 'integrate'
      },
      {
        itemImage: realTime,
        itemName: 'second-page.feature.item-4-title',
        itemDesc: 'second-page.feature.item-4-description',
        itemLink: 'https://cloud.illacloud.com/login',
        btnText: 'try-now',
        target: 'collaboration'
      },
      {
        itemImage: uiLibrary,
        itemName: 'second-page.feature.item-5-title',
        itemDesc: 'second-page.feature.item-5-description',
        itemLink: 'https://cloud.illacloud.com/login',
        btnText: 'try-now',
        target: 'library'
      },
    ]
  },
  {
    label: 'second-page.template.label',
    title: 'second-page.template.title',
    description: 'second-page.template.description',
    link: 'https://cloud.illacloud.com/login',
    btnText: 'try-now',
    target: 'template',
    itemList: [
      {
        itemImage: dashboard,
        itemName: 'second-page.template.item-1-title',
        itemDesc: 'second-page.template.item-1-description',
        itemLink: 'https://builder.illacloud.com/illacloud_demo/deploy/app/ILAex4p1C74H/',
        btnText: 'live-demo',
        target: 'dashboard'
      },
      {
        itemImage: survey,
        itemName: 'second-page.template.item-2-title',
        itemDesc: 'second-page.feature.item-2-description',
        itemLink: 'https://builder.illacloud.com/illacloud_demo/deploy/app/ILAex4p1C74O',
        btnText: 'live-demo',
        target: 'survey'
      },
      {
        itemImage: adminPanel,
        itemName: 'second-page.template.item-3-title',
        itemDesc: 'second-page.feature.item-3-description',
        itemLink: 'https://builder.illacloud.com/illacloud_demo/deploy/app/ILAex4p1C74N',
        btnText: 'live-demo',
        target: 'admin_panel'
      }
    ]
  }
]