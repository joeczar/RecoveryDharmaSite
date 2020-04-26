import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import './thanks.css'

const Thanks = () => (
  <Layout pageName="Thank You!">
    <Container id="thankYouWrapper">
      <h1>Thank You!</h1>
      <p>Your donation helps us keep the meetings going. It is greatly appreciated.</p>
    </Container>
    
  </Layout>
   
)

export default Thanks
