import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Article from "../components/article.js"
import Headline from "../components/Headline.js"
import ContactBar from "../components/contactBar.js"

const IndexPage = () => (
  <Layout pageName='Home'>
    <Headline>
      <h1>
        Using Buddhist Practices and Principles to Heal the Suffering of
        Addiction
      </h1>
    </Headline>
    <Article
      id="homeArticle"
      title="We are a peer-led movement and community that is unified by our trust in the potential of each of us to recover and find freedom from the suffering of addiction. We believe that recovery means empowerment, and we support each other as partners walking the path of recovery together."
    >
      <p>
        Our program uses the Buddhist practices of meditation, self-inquiry,
        wisdom, compassion, and community as tools for recovery and healing. We
        believe that recovery is about finding our own inner wisdom and our own
        path.
      </p>
      <p>
        Recovery Dharma welcomes anyone who is looking to heal from addiction
        and addictive behavior, whether it’s caused by substance use or process
        addictions like codependency, gambling, eating disorders, relationships,
        technology, or any obsessive or habitual pattern that creates suffering.
        We’ve found that this Buddhist-inspired path can lead to liberation from
        the suffering of addiction, and we support you in finding your own path
        to recovery.
      </p>
    </Article>
    <ContactBar />
  </Layout>
)

export default IndexPage
