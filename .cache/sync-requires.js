const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-caches-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/martanunesdeabreu/website/.cache/caches/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/martanunesdeabreu/website/src/pages/about.js"))),
  "component---src-pages-articles-js": hot(preferDefault(require("/Users/martanunesdeabreu/website/src/pages/articles.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/martanunesdeabreu/website/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/martanunesdeabreu/website/src/templates/blog-post.js")))
}

