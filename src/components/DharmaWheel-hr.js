import React from "react"
import DharmaWheel from "../svg/DharmaWheel.svg"
import './DharmaWheel-hr.css'

export default () => (
  <div className='Dharma-Hr-Wrapper'>
    <hr className='hr left' />
    <span className="dot">·</span>
    <DharmaWheel className="hr-Wheel" fill=''/>
    <span className="dot">·</span>
    <hr className='hr right' />
  </div>
)
