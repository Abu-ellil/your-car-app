import React from 'react'
import Nav from './navbar/Nav'
import Discover from './Discover'
import classes from '../css/Nav.css'
import hero from '../css/hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <Nav/>
        <Discover/>
    </div>
  )
}

export default Hero