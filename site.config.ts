import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  
  timezone: 'Asia/Shanghai',
  lang: 'zh-CN',
  url: 'https://leostudiooo.github.io/',
  
  title: '烫烫烫的记事本',
  subtitle: '手持两把锟斤拷，口中疾呼烫烫烫。',
  description: 'A place where technology meets imagination.',
  
  author: {
    name: '锟斤拷',
    email: 'lilingfeng0408@outlook.com',
    link: 'https://leostudiooo.github.io/',
    avatar: 'https://resources.xn--huu92dpwpaa217f909c.top/avatar.jpg',
    status: {
      emoji: '🎆',
      message: 'Bon voyage.'
    },
    intro: 'Stay hungry, stay foolish.'
  },

  frontmatter: {
    time_warning: false,
  },
  
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    // {
    //   name: 'QQ',
    //   link: 'https://wpa.qq.com/msgrd?v=3&uin=1806941781&site=qq&menu=yes',
    //   icon: 'i-ri-qq-line',
    //   color: '#12B7F5',
    // },
    {
      name: 'GitHub',
      link: 'https://github.com/leostudiooo',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/artist?id=34438980',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/lingling0408/',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/244815810',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Leo_050408',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    {
      name: 'E-Mail',
      link: 'mailto:leo.li@kevinz.cn',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
    {
      name: 'Status',
      link: 'https://stats.uptimerobot.com/MKAxnT5nQy',
      icon: 'i-ri-eye-line',
      color: '#0DBC79',
    },
  ],

  search: {
    enable: true,
  },

  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },
  
  codeHeightLimit: 300,

  encrypt: {
    enable: true
  },

  sponsor: {
    enable: true,
    title: '赞助我',
    description: '我很可爱，请给我钱买杯热巧克力 🥺',
    methods: [
      {
        name: '支付宝',
        url: 'https://resources.xn--huu92dpwpaa217f909c.top/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信支付',
        url: 'https://resources.xn--huu92dpwpaa217f909c.top/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
