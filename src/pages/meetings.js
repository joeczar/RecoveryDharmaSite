import React from "react"
import Layout from "../components/layout.js"
import MeetingTable from "../components/meetingTable.js"
import ContactBar from '../components/contactBar'
import Container from "react-bootstrap/Container"
import { useStaticQuery, graphql } from "gatsby"
import './meetings.css'

const Meetings = () => {

  const data = useStaticQuery(graphql`
      {
        allSanityMeeting(sort: {fields: _createdAt}) {
          totalCount
          edges {
            node {
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
  <Layout pageName='Meetings'>
    <Container id='meetings'>
    <h1 className="pageName">Meetings</h1>
      <div id="meetingTables">
      
        {data.allSanityMeeting.edges.map((meeting, index) => 
        <MeetingTable
          day={meeting.node.day}
          time={meeting.node.time}
          location={meeting.node.location}
          key={index}
        />
        )}
        
        
        
        <span id='end' />
      </div>
    </Container>
    <ContactBar />
  </Layout>
)
}
export default Meetings