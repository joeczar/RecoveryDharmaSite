import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import GraphQLErrorList from "../components/graphql-error-list"
import { graphql } from "gatsby"
import { mapEdgesToNodes, buildReferenceLinkArray } from "../lib/helpers"
import LinkArrayList from "../components/linkArrayList"

import "./book.css"

export const query = graphql`
  {
    bookImg: file(relativePath: { eq: "RD_book_bigger_noBorder.jpg" }) {
      id
      publicURL
      childImageSharp {
        fluid(fit: INSIDE) {
          originalImg
        }
      }
    }

    bookDownload: allFile(
      sort: { fields: name }
      filter: { relativeDirectory: { regex: "/^Book Downloads$/g" } }
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
  }
`

const audioBookLinkArray = [
    {
        relativeDirectory: "Audio Book Downloads",
        id: "id1479884325",
        publicURL: "https://podcasts.apple.com/us/podcast/recovery-dharma-audiobook/id1479884325",
        name: "Listen on Apple Podcasts",
        extension: "Podcast"
    },
    {
        relativeDirectory: "Audio Book Downloads",
        id: "https://soundcloud.com/sean-the-nutjob/sets/recovery-dharma",
        publicURL: "https://soundcloud.com/sean-the-nutjob/sets/recovery-dharma",
        name: "Listen on Soundcloud",
        extension: "Soundcloud"
    },
    {
        relativeDirectory: "Audio Book Downloads",
        id: "https://play.google.com/music/m/Iidfd27zz7yheum5xmg7zu63vuy?t=Recovery_Dharma_Audiobook",
        publicURL: "https://play.google.com/music/m/Iidfd27zz7yheum5xmg7zu63vuy?t=Recovery_Dharma_Audiobook",
        name: "Listen on GooglePlay",
        extension: "GooglePlay"
    }
]

const Book = props => {
  const { data, errors } = props
  
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const bookDownload = (data || {}).bookDownload
    ? mapEdgesToNodes(data.bookDownload)
    : []
  const bookLinkArray = buildReferenceLinkArray(bookDownload)
  const audioLinkArray = buildReferenceLinkArray(audioBookLinkArray)
  
  return (
    <Layout pageName="Book">
      <Container id="bookContainer">
        <h1 className="pageName">Book</h1>
        <hr />
        <div className="columnWrapper">
          <Container id="leftColumn">
           
            <p id="bookText">
              We’re proud and humbled to announce that the official First
              Edition of our book is now available on Amazon! 100% of royalties
              from sales of the paperback and Kindle e-book will go as dāna
              (donation) to the non-profit. Printable PDFs are available as free
              downloads from our website. This is ours. It will always be ours.
              And we’re just getting started.
            </p>
            <a 
                id='amazonBtn'
                className='btn btn-secondary  dropShadow' 
                href='https://www.amazon.com/dp/1086040007/'
            >
                Buy on Amazon!
                </a>
            <img
              id="bookImg"
              src={data.bookImg.childImageSharp.fluid.originalImg}
              alt=""
            />
          </Container>
          <Container id="rightColumn">
            <LinkArrayList props={bookLinkArray} />
            <LinkArrayList props={audioLinkArray} />
          </Container>
        </div>
      </Container>
    </Layout>
  )
}
export default Book
