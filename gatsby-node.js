const { resolve } = require(`path`)

const makeGetMarkdownFromType = graphql => async (type, addtionalFields = "") =>
  await graphql(`
  {
    allMarkdownRemark(filter: {frontmatter: {type: { eq: "${type}" }}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "DD/MM/Y")
          }
          html
          timeToRead
          ${addtionalFields}
        }
      }
    }
  }
`)

const destructuringNode = ({ node: { frontmatter, ...other } }) => ({
  ...frontmatter,
  ...other,
})

const makeGuideURI = (absolutePath, guidePath) => {
  const splittedPath = absolutePath.split("/")
  const guideBkpt = splittedPath.indexOf("guides")
  return `/${splittedPath[guideBkpt + 1]}${guidePath}`
}

const makePostPage = createPage => ({ title, date, path, html, timeToRead }) =>
  createPage({
    path: `/conteudo${path}`,
    component: resolve(`src/templates/post.js`),
    context: { html, title, date, timeToRead },
  })

const makeGuidePage = createPage => ({
  title,
  step,
  fileAbsolutePath,
  path,
  html,
  timeToRead,
}) =>
  createPage({
    path: `/guia${makeGuideURI(fileAbsolutePath, path)}`,
    component: resolve(`src/templates/guide.js`),
    context: { html, title, step, timeToRead },
  })

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const getMarkdownFromType = makeGetMarkdownFromType(graphql)

  const posts = await getMarkdownFromType("post")
  const guides = await getMarkdownFromType("guide", "fileAbsolutePath")

  posts.data.allMarkdownRemark.edges
    .map(destructuringNode)
    .forEach(makePostPage(createPage))

  guides.data.allMarkdownRemark.edges
    .map(destructuringNode)
    .forEach(makeGuidePage(createPage))
}
