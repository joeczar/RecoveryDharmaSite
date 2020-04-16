import React from 'react'



export default ({props}) => (
    
    <div className='linkWrapper'>
              <h3 className='resourceTitle'>{props[0].directory}</h3>
              <ul className='resourcelinkList'>
              {props.map(file => (
                <li className='file' key={file.id}>
                  <span className='fileName'>
                    {file.title}
                  </span>
                  {file.links.map(link =>
                  
                    
                    <a 
                      className='btn btn-secondary  dropShadow'
                      href={link[1]} 
                      key={link[0] + file.id}
                    >
                      {link[0]}</a>
                      
                  )}
                </li>
              ))}
              </ul>
            </div>
)