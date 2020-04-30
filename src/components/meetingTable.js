import React from "react"
import Container from "react-bootstrap/Container"
import "./meetingTable.css"

export default ({ day, time, location, description }) => (
  <Container className="meetingWrapper dropShadow">
    <div className="dayWrapper">
      <h1 className="day">{day}</h1>
    </div>
    <div className="timeWrapper">
      <h1 className="time">{time}</h1>
    </div>
    <div className="descriptionWrapper">
    {description}
    </div>
    <div className="locationWrapper">
      <span className="address locationName">{location.venuName}</span>
      <span className="address streetAddress">{location.streetaddress}</span>
      <span className="address zipcode">{location.zipcode}</span>
      <span className="address city">{location.city}</span>
    </div>
  </Container>
)
