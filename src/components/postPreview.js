import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {getBlogUrl} from '../lib/helpers'
import PortableText from './portableText'
import './postPreview.css'

const PostPreview = (props) => {
  return (
    <Link
      className='postLink'
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
    <div className='postPreviewWrapper'>
      <div className='imageWrapper'>
        {props.mainImage && props.mainImage.asset && (
          <img
            className='previewImage'
            src={props.mainImage.asset.fluid.src}
            alt={props.mainImage.alt}
            width='80em'
          />
        )}
      </div>
      <div className='postPreviewBody'>
        <h3 className='previewTitle'>{props.title}</h3>
        {props._rawExcerpt && (
          <div className='portableTextWrapper'>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div>{format(new Date(props.publishedAt), 'dd.MM.yyyy')}</div>
      </div>
    </div>
    </Link>
  )
}

export default PostPreview
