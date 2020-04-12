import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import ContactForm from "../components/contactForm"
import SocialLinks from "../components/socialLinks"

import "./contact.css"

export default () => (
  <Layout pageName="Contact">
    <Container id="contactContainer">
    <h1 className="pageName">Contact</h1>
        <hr />
        <div className='columnWrapper'>
      <Container id="leftColumn">
        
        <p id='contactText'>
            If you'd like to get in touch with us please, follow us on social media, send us an email, or fill out the contact form and we'll get back to you as soon as we can.
        </p>
      </Container>
      <Container id="rightColumn">
        <SocialLinks />
        <ContactForm />
      </Container>
      </div>
    </Container>
  </Layout>
)
