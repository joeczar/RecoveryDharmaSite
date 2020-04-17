import React from 'react'
import {Link} from 'gatsby'

import './footer.css'

export default () => (
    <footer id="footer">
        
         <p id="copyright"> © {new Date().getFullYear()}, Recovery Dharma Germany</p>
       
        <Link to='/impressum' id='impressumlLink'>Impressum</Link>
      </footer>
)