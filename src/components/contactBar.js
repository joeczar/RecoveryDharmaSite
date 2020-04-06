import React from 'react'
import {Link} from 'gatsby'
import './contactBar.css'

export default () => (
    <div className='contactBar'>
        <h1>Contact Us</h1>
        <p>Have any questions about the Recovery Dharma program? <Link to='/contact'>Let us know here!</Link></p>
    </div>
)