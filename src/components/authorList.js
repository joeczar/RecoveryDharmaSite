import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import './authorList.css'

function AuthorList ({items, title}) {

  return (
    <div className='root'>
      <h2 className='headline'>{title}</h2>
      <ul className='list'>
        {items.map(({author, index}) => {
          const authorName = author && author.name
          return (
            <li key={6 + index} className='listItem'>
              <div>
                <div className='avatar'>
                  {author && author.image && author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=''
                    />
                  )}
                </div>
              </div>
              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AuthorList
