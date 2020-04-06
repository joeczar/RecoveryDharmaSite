import React from "react"
import Table from "react-bootstrap/Table"

export default ({ day, time, location }) => (
  <div className="tableWrapper">
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
          <td>{location}</td>
        </tr>
      </tbody>
    </Table>
  </div>
)
