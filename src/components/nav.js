import React from "react"
import { Link } from "gatsby"
import "./nav.css"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Logo from "./logo.js"
import SocialLinks from './socialLinks'

class Navi extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>
          <Link
            id="logoLink"
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" justify>
            {this.props.menuLinks.map((link, index) => (
              <Nav.Item key={index}>
                <Link
                  className="navLinks"
                  style={{ color: `lightgray` }}
                  to={link.link}
                  key={index}
                >
                  {link.name}
                </Link>
              </Nav.Item>
            ))}
            <Nav.Item key='social'>
              <SocialLinks id="navSocial" />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Navi
