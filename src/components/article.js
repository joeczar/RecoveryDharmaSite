import React from 'react'
import PropTypes from "prop-types"
import './article.css'
import Container from 'react-bootstrap/Container'

const Article = ({title, children}) => (
    <Container>
    <div className='articleWrapper'>
        <article>
            <h1 className='articleTitle'>{title}</h1>
            <div className='articleContent'>{children}</div>
        </article>
    </div>
    </Container>
)
Article.propTypes = {
    children: PropTypes.node.isRequired,
  }
export default Article