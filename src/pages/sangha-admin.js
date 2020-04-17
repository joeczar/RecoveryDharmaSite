import React from "react"
import Layout from "../components/layout"
import Container from 'react-bootstrap/Container'

const sanghaAdmin = () => (
  <Layout pageName="Sangha Admin">
      <Container>
    <h1>The link below takes you to the site administration</h1>
    <p><a className='btn dropshadow' href='https://rd-sanity.sanity.studio'>RD-Studio</a> </p>
    </Container>
  </Layout>
)

export default sanghaAdmin
