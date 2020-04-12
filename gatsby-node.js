const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()
  config.node = {
      fs: 'empty'
  }
}

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
        allSanityPost(filter: {slug: {current: {ne: null}}}) {
            edges {
              node {
                title
                _rawExcerpt
                publishedAt
                slug {
                  current
                }
                mainImage {
                  asset {
                    url
                  }
                }
                _rawBody
                authors {
                  author {
                    name
                  }
                }
              }
            }
          }
        }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(new Date(publishedAt), 'dd-MM-yyy')
      const path = `/updates/${dateSegment}/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/components/update.js'),
        context: {id,
            node: edge.node
        }
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createBlogPostPages(graphql, actions)
}
