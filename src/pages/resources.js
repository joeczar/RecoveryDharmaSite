import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list"
import { mapEdgesToNodes, buildReferenceLinkArray } from "../lib/helpers"
import LinkArrayList from '../components/linkArrayList'

import "./resources.css"

export const query = graphql`
  {
    official: allFile(
      filter: { relativeDirectory: { eq: "Meditations" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          extension
          name
          publicURL
          ext
          relativeDirectory
          id
        }
      }
    }
    community: allFile(
      filter: {
        relativeDirectory: { eq: "Community Submitted Meditations" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          extension
          name
          publicURL
          ext
          relativeDirectory
          id
        }
      }
    }
    meeting: allFile(sort: {fields: name}, filter: {relativeDirectory: { eq: "Meeting Resources"}}) {
      edges {
        node {
          extension
          name
          publicURL
          ext
          relativeDirectory
          id
        }
      }
    }
    promo: allFile(sort: {fields: name}, filter: {relativeDirectory: {eq: "Promotional Printouts"}}) {
      edges {
        node {
          extension
          name
          publicURL
          ext
          relativeDirectory
          id
        }
      }
    }
      sangha: allFile(sort: {fields: name}, filter: {relativeDirectory: {eq: "Sangha Development"}}) {
      edges {
        node {
          extension
          name
          publicURL
          ext
          relativeDirectory
          id
        }
      }
    }
      info: allFile(sort: {fields: name}, filter: {relativeDirectory: {eq: "What is Recovery Dharma"}}) {
      edges {
        node {
          extension
          name
          publicURL
          ext
          relativeDirectory
          id
        }
      }
    }
  }
`
  


const Resources = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const official = (data || {}).official ? mapEdgesToNodes(data.official) : []
  const community = (data || {}).community
    ? mapEdgesToNodes(data.community)
    : []
  const meeting = (data || {}).meeting ? mapEdgesToNodes(data.meeting) : []
  const promo = (data || {}).promo ? mapEdgesToNodes(data.promo) : []
  const sangha = (data || {}).sangha ? mapEdgesToNodes(data.sangha) : []
  const info = (data || {}).info ? mapEdgesToNodes(data.info) : []

  const officialLinkArray = buildReferenceLinkArray(official)
  const communityLinkArray = buildReferenceLinkArray(community)
  const meetingLinkArray = buildReferenceLinkArray(meeting)
  const promoLinkArray = buildReferenceLinkArray(promo)
  const sanghaLinkArray = buildReferenceLinkArray(sangha)
  const infoLinkArray = buildReferenceLinkArray(info)

  
  return (
    <Layout pageName="Rescources">
      
        <h1 className="pageName">Rescources</h1>
        
        <div className="columnWrapper">
          <Container id="one">
            <LinkArrayList props= {meetingLinkArray} />
          </Container>
          <Container id="two">
            <LinkArrayList props={officialLinkArray} />
            <LinkArrayList props={communityLinkArray} />
          </Container>
          <Container id='three'>
          <LinkArrayList props={promoLinkArray} />
          <LinkArrayList props={sanghaLinkArray} />
          <LinkArrayList props={infoLinkArray} />
          </Container>
        </div>
      
    </Layout>
  )
}

export default Resources
