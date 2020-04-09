import React from "react"
import Layout from "../components/layout.js"
import Article from "../components/article.js"
import ContactBar from '../components/contactBar.js'

export default () => (
  <Layout pageName='About'>
    <Article title="About Us">
      <p>
        Recovery Dharma is a peer-led, grass-roots, democratically-structured
        organization. Our mission is to support individuals on their path of
        recovery from addiction using Buddhist practices and principles.
      </p>
      <p>
        We believe that the traditional Buddhist teachings, often referred to as
        the Dharma, offer a powerful approach to healing from addiction and
        living a life of true freedom. Our program is based on the idea that
        every one of us is our own guide in recovery from addiction, with the
        help and understanding of our wise friends and sangha (community). We
        believe that’s what the Dharma teaches us. So it’s with great joy and
        excitement that we come together to build this recovery community and
        support structure, informed by the spirit of democracy.
      </p>
      <p>
        We believe that the organization should focus on providing resources to
        local sanghas who wish to use Buddhist practices and principles for
        recovery. We believe that each of us must determine our path and
        practice for ourselves with the support of both local and global
        communities. There are many texts and teachers in the Buddhist
        tradition, and many opportunities to learn. Recovery Dharma is based on
        the idea of choice: that groups and individuals within those groups
        should be encouraged to explore, to learn, and to understand, following
        their own path and their own needs. We accept and honor the fact that
        there are many possible roads to the wise understanding and effort that
        are part of this practice. We are here to support that exploration, not
        to limit it. The ideals, aims, and structure of this organization will
        be decided by the community itself.
      </p>
    </Article>
    <ContactBar />
  </Layout>
)
