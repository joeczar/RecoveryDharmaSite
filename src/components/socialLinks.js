import React from "react"
import Facebook from '../svg/Facebook.svg'
import Instagram from '../svg/Instagram.svg'
import { useStaticQuery, graphql } from "gatsby"
import './socialLinks.css'

const socialList = [
  ["Facebook", "https://www.facebook.com/recoverydharmaberlin/", 
    <Facebook className='socialIcons' />],
  ["Instagram", "https://www.instagram.com/recoverydharmaberlin/", 
    <Instagram className='socialIcons' />],
  
]


export default () => {
  const socialLinks = useStaticQuery(graphql`
    {
      allSanitySocial(sort: { fields: _createdAt }) {
        title
        link
        image {
          alt
          asset{
            url
          }
        }
      }
    }
  `)
  console.log("socialLinks", {socialLinks})
  return (<ul className="socialLinkList">
  {socialList.map((social, index) => (
    <li className="socialLink-li" key={index}>
        
      <a href={social[1]} alt={social[0]}>{social[2]}</a>
    </li>
  ))}
</ul>)
}
  

