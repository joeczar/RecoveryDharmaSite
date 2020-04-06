import React from 'react'
import PropTypes from "prop-types"
import './article.css'

const Article = ({title, children}) => (
    <div className='articleWrapper'>
        <article>
            <h1 className='articleTitle'>{title}</h1>
            <div className='articleContent'>{children}</div>
        </article>
    </div>
)
Article.propTypes = {
    children: PropTypes.node.isRequired,
  }
export default Article