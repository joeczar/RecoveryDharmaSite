import React from 'react'
import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card'
import './Headline.css'

const Headline = ({children}) => (
<div className='quoteWrapper'>
<Card className="text-center">
  <Card.Body>
  <Card.Title>{children}</Card.Title>
  </Card.Body>
  </Card>
  </div>
)
Headline.propTypes = {
    children: PropTypes.node.isRequired,
  }
export default Headline