import React from 'react'
import NavbarComp from '../components/navbar/NavbarComp'
import Intro from '../components/Introdution/Intro'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
        <NavbarComp></NavbarComp>
        <Intro/>
    </div>
  )
}

export default Home