/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import DharmaWheel from "../svg/DharmaWheel.svg"
import SEO from "./seo.js"
import Header from "./header"
import "./layout.css"

const Layout = ({ children, pageName }) => {
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
      <SEO title={pageName} />
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
      <div
        className="site"
        style={{
          backgroundImage: `url(${DharmaWheel})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundAttachment: `fixed`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer id="footer">
        
          <div id="copyright">
            © {new Date().getFullYear()}, Recovery Dharma Germany
          </div>
          
        
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
