const Helmet = require('react-helmet').default
const React = require("react")
const Layout = require("./src/components/Layout").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    ...SEO()
  ])
}

function SEO () {
  const helmet = Helmet.renderStatic()
  return [
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent()
  ]
}