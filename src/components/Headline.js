import React from 'react'
import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card'

import './Headline.css'

const Headline = ({title, children}) => (
<div className='quoteWrapper'>
<Card className="text-center">
  <Card.Body>
<Card.Title>{title}</Card.Title>
  {children}
  </Card.Body>
  </Card>
  </div>
)
Headline.propTypes = {
    children: PropTypes.node.isRequired,
  }
export default Headline