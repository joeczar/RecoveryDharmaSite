import React from 'react'
import PropTypes from "prop-types"
import './article.css'
import Container from 'react-bootstrap/Container'

const Article = ({title, children}) => (
    <Container className='flexColumn articleWrapper'>
        <h1 className='articleTitle'>{title}</h1>
        <hr className='article-hr' />
        <article id='about'> 
            
            <div className='articleContent'>{children}</div>
        </article>
    </Container>
)
Article.propTypes = {
    children: PropTypes.node.isRequired,
  }
export default Article