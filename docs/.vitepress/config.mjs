import { withMermaid } from "vitepress-plugin-mermaid"

export default withMermaid({
  base: '/butsuri-kiso-enshu/',
  title: "物理基礎演習",
  description: "福岡工業大学 知能機械工学科 - Physics Fundamentals",
  lang: 'ja-JP',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/butsuri-kiso-enshu/favicon.svg' }]],

  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '授業', link: '/weeks/week-02' },
    ],

    sidebar: {
      '/weeks/': [
        {
          text: '第1部：力学の基礎',
          collapsed: false,
          items: [
            { text: '第2週：単位系と単位換算', link: '/weeks/week-02' },
            { text: '第3週：力と質量、密度', link: '/weeks/week-03' },
            { text: '第4週：力の合成と分解', link: '/weeks/week-04' },
            { text: '🔒 第5週：弾性力・張力・滑車' },
            { text: '🔒 第6週：摩擦力' },
            { text: '🔒 第7週：剛体と重心' },
            { text: '🔒 第8週：力のモーメント' },
          ]
        },
        {
          text: '第2部：運動学',
          collapsed: false,
          items: [
            { text: '🔒 第9週：運動の表し方' },
            { text: '🔒 第10週：等速度運動と等加速度運動' },
            { text: '🔒 第11週：運動方程式' },
            { text: '🔒 第12週：落下・投げ上げ・放物運動' },
          ]
        },
        {
          text: 'まとめ',
          items: [
            { text: '🔒 第13週：まとめ' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fit-ime-cao/butsuri-kiso-enshu' }
    ],

    footer: {
      message: '福岡工業大学 工学部 知能機械工学科',
      copyright: '© 2026 FIT-IME-CAO'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '検索', buttonAriaLabel: '検索' },
          modal: {
            noResultsText: '結果が見つかりません',
            resetButtonTitle: 'クリア',
            footer: { selectText: '選択', navigateText: '移動' }
          }
        }
      }
    },

    docFooter: { prev: '前のページ', next: '次のページ' },
    outlineTitle: '目次',
    lastUpdatedText: '最終更新'
  },

  markdown: { math: true, lineNumbers: true },
  lastUpdated: true,
  mermaid: {},
  mermaidPlugin: { class: "mermaid" }
})
