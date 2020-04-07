import React from "react"
import Layout from "../components/layout.js"
import MeetingTable from "../components/meetingTable.js"
import Container from "react-bootstrap/Container"

export default () => (
  <Layout>
    <Container id='meetings'>
      <div id="meetingTables">
        <h1 className="pageName">Meetings</h1>
        <MeetingTable
          day="Sunday"
          time="10:30"
          location="Fehrbelliner Straße 92"
        />
        <MeetingTable day="Monday" time="19:00" location="Kinzigstr. 25-29" />
        <MeetingTable day="Wednsday" time="20:00" location="Kinzigstr. 25-29" />
        <MeetingTable day="Thursday" time="20:00" location="Kinzigstr. 25-29" />
        <span id='end' />
      </div>
    </Container>
  </Layout>
)
