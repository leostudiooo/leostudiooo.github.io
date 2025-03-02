import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonMeting } from 'valaxy-addon-meting'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '烫烫烫的记事本',
      cloud: {
        enable: true,
      },
    },

    colors: {
      primary: '#00a2ff'
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
        url: 'https://paradox.xn--huu92dpwpaa217f909c.top/',
        icon: 'i-ri-archive-line',
        color: '#41B883',
      },
      // {
      //   name: '时钟',
      //   url: '/time/',
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
      {
        name: 'B707o',
        url: '/b707o/',
        icon: 'i-ri-plane-line',
        color: '#FFBF00',
      },
    ],

    footer: {
      since: 2020,
      beian: {
        enable: false,
        icp: '萌ICP备20247120号',
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
    })
  ],

  unocss: { safelist },
})
