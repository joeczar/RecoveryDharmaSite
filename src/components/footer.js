import React from 'react'
import {Link} from 'gatsby'

import './footer.css'

export default () => (
    <footer id="footer">
        <div id="copyright">
          © {new Date().getFullYear()}, Recovery Dharma Germany
        </div>
        <Link to='/impressum' id='impressumlLink'>Impressum</Link>
      </footer>
)