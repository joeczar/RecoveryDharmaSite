import React from "react"
import Facebook from '../svg/Facebook.svg'
import Instagram from '../svg/Instagram.svg'
import Twitter from '../svg/Twitter.svg'

import './socialLinks.css'

const socialList = [
  ["Facebook", "https://www.facebook.com/recoverydharmaberlin/", 
    <Facebook className='socialIcons' />],
  ["Instagram", "https://www.instagram.com/berlinrecoverydharma/", 
    <Instagram className='socialIcons' />],
  ["Twitter", "https://twitter.com/GermanyDharma", 
    <Twitter className='socialIcons' />],
]



export default () => (
  <ul className="socialLinkList">
    {socialList.map((social, index) => (
      <li className="socialLink-li" key={index}>
          
        <a href={social[1]} alt={social[0]}>{social[2]}</a>
      </li>
    ))}
  </ul>
)
