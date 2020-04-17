import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"


import "./dana.css"

export default () => (
  <Layout pageName="Dana">
    <Container id="danaContainer">
      <h1 className="pageName">Dana</h1>
      <hr />
      <div className="columnWrapper">
        <Container id="leftColumn">
          <p id="danaText">
          Dana is the Buddhist term for the practice of generosity. To continue to support the meetings and the venus during the Covid-10 lockdown, we have set up two ways for you to contribute. Please give what you can to help support the meetings.
          </p>
        </Container>
        <Container id="rightColumn">
            <Container>
         <h2>Steady</h2>
         <p>
             Steady is a subscription service that automatically donates your specified amout every month. Set it and forget it. It requires an account sign-up and lets you pay with Pay-Pal, credit Cards and Direct Debit.
         </p>
         <a 
            href='https://steadyhq.com/de/plans/c7795c03-c107-418e-85bb-be61b7f9ffb0' 
            className='btn btn-secondary  dropShadow'
        >
            Steady
        </a>
        </Container>
        <Container>
        <h2>PayPal</h2>
        <p>
            For those who don't wish to sign up for a subscription service, we have a PayPal you may also use to contribute your Dana.
        </p>
        <a href='#paypal' className='btn btn-secondary  dropShadow'>PayPal</a>
        </Container>
        </Container>
      </div>
    </Container>
  </Layout>
)
