import React from "react"
import Container from "react-bootstrap/Container"
import { useStaticQuery, graphql } from "gatsby"
import PortableText from "./portableText"
import "./message.css"

const Message = ({ page }) => {
  const {
    allSanityMessage: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityMessage {
        nodes {
          id
          color
          title
          _rawMessage
          buttonText
          buttonLink
          homePage
          meetingPage
        }
      }
    }
  `)
  const messages = nodes.filter(message => message[page] === true)
  console.log(messages)
  return (
    // <div id="infoHeadline">
    <>
      {messages.map(message => {
        const {
          id,
          color,
          title,
          _rawMessage,
          buttonText,
          buttonLink,
        } = message
        return (
          <Container key={id}>
            <section className={`message ${color}`}>
              <h1 className="messageTitle">{title}</h1>
              <div className="messageBody">
                <PortableText blocks={_rawMessage} />
              </div>

              <div className="messageButton">
                {buttonText && buttonLink && (
                  <a href={buttonLink} className="btn dropShadow">
                    {buttonText}
                  </a>
                )}
              </div>
            </section>
          </Container>
        )
      })}
    </>
    // </div>
  )
}
export default Message
