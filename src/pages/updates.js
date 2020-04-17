import React from "react"
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers"
import Layout from "../components/layout.js"
import ContactBar from "../components/contactBar"
import PostPreviewList from "../components/postPreviewList"
import GraphQLErrorList from "../components/graphql-error-list"
import Container from "react-bootstrap/Container"
import { graphql } from "gatsby"

import './updates.css'

export const query = graphql`{
    site: allSanitySiteSettings {
      edges {
        node {
          title
          description
          keywords
        }
      }
    }
    posts: allSanityPost(limit: 6, sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            alt
            asset {
              fluid {
                src
              }
            }
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`


const Updates = props => {

  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  
  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout pageName="Updates">
      <Container id='updates'>
        <h1 className="pageName">Updates</h1>
        <hr />
        <PostPreviewList
          nodes={postNodes}
        />
      </Container>
      <ContactBar />
    </Layout>
  )
}
export default Updates
