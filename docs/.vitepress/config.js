/*
 * @Author: chenzhenbing 1377196580@qq.com
 * @Date: 2025-05-04 12:36:19
 * @LastEditors: chenzhenbing 1377196580@qq.com
 * @LastEditTime: 2025-05-04 12:36:31
 * @FilePath: \study\docs\.vitepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  themeConfig: {
    nav: [
      { text: '关于', link: '/about' },
      {
        text: '大前端',
        items: [
          { text: "html", link: "/bigFrontEnd/html/" },
          { text: "css", link: "/bigFrontEnd/css/" },
          { text: "js", link: "/bigFrontEnd/js/" },
        ]
      }
    ]
  }
}