import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"

import "./translation.css"

export default () => (
  <Layout pageName="Translation">
    <Container id="translationContainer">
      <h1 className="pageName">Translation</h1>
      <hr />
      <div className="flexRowWrapper">
      <Container id="english">
        <h2>English</h2>
      </Container>
      <Container id="german">
        <h2>German</h2>
      </Container>
      </div>
    </Container>
  </Layout>
)
