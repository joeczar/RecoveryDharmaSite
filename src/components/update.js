import React from "react"
import { format } from "date-fns"
import Layout from "../components/layout.js"
import Article from "./article.js"
import PortableText from "./portableText.js"
import Container from "react-bootstrap/Container"
import AuthorList from "./authorList.js"
import "./update.css"

const Post = props => {
  const {
    _rawBody,
    _rawExcerpt,
    authors,
    title,
    mainImage,
    publishedAt,
  } = props.pageContext.node
  console.log(mainImage)
  return (
    <Layout pageName={title}>
      <Container>
        <Article title={title}>
        {mainImage && mainImage.asset && (
        <div className='mainImage'>
          {/* <img
            src={mainImage.}
            alt={mainImage.alt}
          /> */}
        </div>
      )}
          <div className="excerptDateWrapper">
            <div className="publishDate">
              {format(new Date(publishedAt), "dd.MM.yyyy")} -
            </div>
            <div className="excerpt">
              {_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
            </div>
          </div>
          <AuthorList items={authors} title="Posted by:" />
          <div className="postBody">
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
        </Article>
      </Container>
    </Layout>
  )
}
export default Post
