import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import DWHR from "../components/DharmaWheel-hr"

import "./impressum.css"

const NotFoundPage = () => (
  <Layout pageName="Impressum">
    <Container id='impressumContainer'>
      <h1 className="pageName" id="impressumTitle">
        Impressum
      </h1>
      <DWHR id="impressumHR" />
      <div id="impressumBody">
        <p>This page is required to meet German legal requirements.</p>

        <p>
          <em>
            Please note that we are not endorsing, nor are we affiliated with,
            any of the platforms mentioned on this website. We are simply
            providing these links to our members for information purposes only.
          </em>
        </p>

        <p>
          https://recoverydharma.de ist ein nicht-kommerzieller
          Internetauftritt.
        </p>

        <p>Inhaber des Internetauftritts:</p>

        <p>
          Garry Czarnecki
          <br />
          Für die Berlin Intergroup of Recovery Dharma Germany
          <br />
          Prenzlauer Promenade 147
          <br />
          13189 Berlin
        </p>

        <p>E-Mail: webmaster (at) recoverydharma.org</p>

        <p>
          Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Garry Czarnecki
        </p>

        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber/-innen verantwortlich.
        </p>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
