/*
 * @Author: chenzhenbing 1377196580@qq.com
 * @Date: 2025-05-04 12:36:19
 * @LastEditors: chenzhenbing 1377196580@qq.com
 * @LastEditTime: 2025-05-06 20:55:23
 * @FilePath: \study\docs\.vitepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  title: '子非鱼', // 博客的标题
  description: '', // 博客的介绍
  base: '/knowledge/', // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填
  themeConfig: {
    logo: "", // 页面上显示的logo
    nav: [ // 页面右上角的导航
      { text: "vue", link: "/articles/vue/" },
      { text: "uniapp", link: "" },
      {
        text: '博客文档',
        items: [ // 可以配置成下拉
          { text: '', link: '' },
        ]
      }
    ],
    sidebar: { // 侧边栏，可以分组
    },
    socialLinks: [{ icon: "github", link: "https://github.com/czb121/knowledge/tree/master/docs" }], // 可以连接到 github
  },
}

