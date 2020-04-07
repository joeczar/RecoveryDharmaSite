/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import DharmaWheel from '../images/DharmaWheel.svg'
import Header from "./header"
import ContactBar from './contactBar.js'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
    
        <Header menuLinks={data.site.siteMetadata.menuLinks} />
        <div 
          className="site"
          style={{ 
            backgroundImage: `url(${DharmaWheel})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
            backgroundAttachment: `fixed`
          }}
        >
        
        
          <main>{children}</main>
       
        
      </div>
      <footer id="footer">
        © {new Date().getFullYear()}, Recovery Dharma Germany
      </footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
