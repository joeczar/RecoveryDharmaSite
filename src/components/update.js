import React from "react"
import { format } from "date-fns"
import Layout from "../components/layout.js"
import Article from "./article.js"
import PortableText from "./portableText.js"
import Container from "react-bootstrap/Container"
import AuthorList from "./authorList.js"
import "./update.css"
import DWHR from "./DharmaWheel-hr.js"

const Post = props => {

  const {
    _rawBody,
    _rawExcerpt,
    authors,
    title,
    mainImage,
    publishedAt,
  } = props.pageContext.node
  console.log(props)
  return (
    <Layout pageName={title}>
      <Container>
        <Article title={title}>
          <div className="excerptAndImageWrapper">
            {mainImage && mainImage.asset && (
              <figure className="mainImage">
                <img src={mainImage.asset.url} alt={mainImage.alt} />
                <figcaption>{}</figcaption>
              </figure>
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
            <DWHR />
            <div className="postBody">
              {_rawBody && <PortableText blocks={_rawBody} />}
            </div>
          </div>
        </Article>
      </Container>
    </Layout>
  )
}
export default Post
