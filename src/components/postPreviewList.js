import React from 'react'
import PostPreview from './postPreview'
import './postPreviewList.css'

function PostPreviewGrid (props) {
   
  return (
    <div className='postPreviewListWrapper'>
      <h2>{props.title}</h2>
      <ul className='postList'>
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
