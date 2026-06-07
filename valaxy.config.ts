import type { ThemeConfig } from 'valaxy-theme-yun'
import 'katex/contrib/mhchem'
import { defineValaxyConfig } from 'valaxy'
import { addonAlgolia } from 'valaxy-addon-algolia'
import { addonComponents } from 'valaxy-addon-components'
import { addonMeting } from 'valaxy-addon-meting'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<ThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  vite: {
    server: {
      watch: {
        ignored: [
          '**/dist/**',
          '**/.git/**',
          '**/node_modules/**',
        ],
      },
    },
  },

  themeConfig: {
    banner: {
      enable: true,
      title: '烫烫烫的记事本',
      cloud: {
        enable: true,
      },
    },

    colors: {
      primary: '#00a2ff',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '配布站',
        url: 'https://box.xn--huu92dpwpaa217f909c.top/',
        icon: 'i-ri-archive-line',
        color: '#41B883',
      },
      {
        name: 'Radio Logbook',
        url: 'https://radio.xn--huu92dpwpaa217f909c.top/',
        icon: 'i-ri-router-line',
        color: '#FF5722',
      },
      // {
      //   name: '时钟',
      //   url: '/time/index.html',
      //   icon: 'i-ri-time-line',
      //   color: '#66CCFF',
      // },
      // {
      //   name: '番茄钟',
      //   url: '/pomodoro/',
      //   icon: 'i-ri-timer-line',
      //   color: '#00A2FF',
      // },
      {
        name: '随机数',
        url: '/random/',
        icon: 'i-ri-shuffle-line',
        color: '#80BBFF',
      },
      // {
      //   name: 'B707o',
      //   url: '/b707o/',
      //   icon: 'i-ri-plane-line',
      //   color: '#FFBF00',
      // },
    ],

    footer: {
      since: 2020,
      beian: {
        enable: false,
        icp: '萌ICP备20247120号',
        police: '',
      },
      powered: true
    },
  },

  addons: [
    addonMeting({
      global: true,
      /** @see https://github.com/metowolf/MetingJS */
      props: {
        id: '586118236',
        server: 'netease',
        type: 'playlist',
      },
    }),
    addonComponents(),
    addonAlgolia(),
    addonWaline(),
  ],

  unocss: { safelist },
})
