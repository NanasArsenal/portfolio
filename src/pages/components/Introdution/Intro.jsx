import React from 'react'
import './Intro.scss'
import { Button } from 'react-bootstrap'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='wrapper'>
            <div className="wrapper">
                <img clasName='img' src="https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg" alt="" />
            </div>
            <div className="describe">
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, incidunt officia officiis ea asperiores quod pariatur dolor cum modi facilis facere ipsa suscipit a accusamus</h3>
                <Button variant="dark" className='aboutbtn'>Read More About Me...</Button>
            </div>
        </div>
    </div>
  )
}

export default Intro