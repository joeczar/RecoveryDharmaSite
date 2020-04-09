import {Link} from 'gatsby'
import React from 'react'
import PostPreview from './postPreview'

function PostPreviewGrid (props) {
    console.log(props)
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.nodes.map(node => (
            <li key={node.id}>
              <PostPreview {...node} isInList />
            </li>
          ))}
      </ul>
    </div>
  )
}

PostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default PostPreviewGrid
