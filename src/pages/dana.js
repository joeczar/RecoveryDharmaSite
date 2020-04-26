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
            Dana is the Buddhist term for the practice of generosity. To
            continue to support the meetings and the venus during the Covid-10
            lockdown, we have set up two ways for you to contribute. Please give
            what you can to help support the meetings.
          </p>
        </Container>
        <Container id="rightColumn">
          <Container>
            <h2>Steady</h2>
            <p>
              Steady is a subscription service that automatically donates your
              specified amout every month. Set it and forget it. It requires an
              account sign-up and lets you pay with Pay-Pal, credit Cards and
              Direct Debit.
            </p>
            <a
              href="https://steadyhq.com/de/plans/c7795c03-c107-418e-85bb-be61b7f9ffb0"
              className="btn btn-secondary  dropShadow"
            >
              Steady
            </a>
          </Container>
          <Container>
            <h2>PayPal</h2>
            <p>
              For those who don't wish to sign up for a subscription service, we
              have a PayPal you may also use to contribute your Dana.
            </p>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="A4L5YLM4SK8RQ"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_DE/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </Container>
        </Container>
      </div>
    </Container>
  </Layout>
)
