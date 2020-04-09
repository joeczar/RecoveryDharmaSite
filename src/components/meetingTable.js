import React from "react"
import Table from "react-bootstrap/Table"
import './meetingTable.css'

export default ({ day, time, location }) => (

    <Table striped bordered hover variant="dark" responsive="sm">
      <thead>
        <tr>
          <th>{day}</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{time}</td>
        </tr>
        <tr>
          <td>
            <span className='address locationName'>{location.venuName}</span>
            <span className='address streetAddress'>{location.streetaddress}</span>
            <span className='address zipcode'>{location.zipcode}</span>
            <span className='address city'>{location.city}</span>
          </td>
        </tr>
      </tbody>
    </Table>

)
