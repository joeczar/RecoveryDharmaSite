import React from "react"
import Layout from "../components/layout.js"
import MeetingTable from "../components/meetingTable.js"
import ContactBar from "../components/contactBar"
import Container from "react-bootstrap/Container"
import { useStaticQuery, graphql } from "gatsby"
import PortableText from "../components/portableText.js"
import Message from "../components/message.js"
import "./meetings.css"


const Meetings = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityMeeting(sort: { fields: _createdAt }) {
        totalCount
        edges {
          node {
            _rawDescription
            day
            time
            location {
              venuName
              streetaddress
              zipcode
              city
            }
          }
        }
      }
    }
  `)

  return (
    <Layout pageName="Meetings">
      <Message page="meetingPage" />
      <Container id="meetings">
        <h1 className="pageName">Meetings</h1>
        <div id="meetingInfo">
          <p>
            All meetings open <b>30 min</b> before the official start time and
            are <b>90 min</b> long.
          </p>
        </div>
        <div id="meetingTables">
          {data.allSanityMeeting.edges.map((meeting, index) => (
            <MeetingTable
              description={
                meeting.node._rawDescription && (
                  <PortableText blocks={meeting.node._rawDescription} />
                )
              }
              day={meeting.node.day}
              time={meeting.node.time}
              location={meeting.node.location}
              key={index}
            />
          ))}
        </div>
      </Container>
      <ContactBar />
    </Layout>
  )
}
export default Meetings
