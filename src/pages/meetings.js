import React from "react"
import Layout from "../components/layout.js"
import MeetingTable from "../components/meetingTable.js"
import ContactBar from "../components/contactBar"
import Container from "react-bootstrap/Container"
import { useStaticQuery, graphql } from "gatsby"
import "./meetings.css"

const Meetings = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityMeeting(sort: { fields: _createdAt }) {
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
    <Layout pageName="Meetings">
      <div id='infoHeadline'>
        <Container>
        <h2 id='Headline'>COVID-19 Meeting Info</h2>
        <div className='headlineDiv' id='headLineMain'>
            
            <p id='HeadlineBody'>During the lockdown caused by the COVID-19 Pandemic, all Recovery Dharma meetings will be held online with <a className='btn dropShadow' id='zoomLink' href='https://zoom.us/'>Zoom</a>. (We are working on moving to Jitsi, but need some time).</p>
            </div>
            <div className='headlineDiv' id='headLineLink'>
            <a href='https://zoom.us/j/4939374385?pwd=dTBHVkFoOFBieS9wcmhtVzZvWVNCUT09' className='btn dropShadow'>Join an Online Meeting</a>
            </div>
          
          </Container>
          </div>
      <Container id="meetings">
        <h1 className="pageName">Meetings</h1>
        <div id='meetingInfo'>
        <p>
              All meetings open <b>30 min</b> before the official start time and are <b>90 min</b> long.
            </p>
            </div>
        <div id="meetingTables">
        
          {data.allSanityMeeting.edges.map((meeting, index) => (
            <MeetingTable
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
