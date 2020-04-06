import PropTypes from "prop-types"
import React from "react"
import Nav from './nav.js'
import './header.css'

const Header = ({ menuLinks }) => (
  <header id='header'
    style={{
      background: `#343a40`,
      marginBottom: `1.45rem`,
      display: `flex`, 
      flex: 1,
      margin: `0 auto`,
      padding: `2ex 2ex 1ex 2ex`,
      justifyItems: `center`
    }}
  >
    
       
        <div id='navWrapper'>
        <Nav id='popo' menuLinks={menuLinks} />
        </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
