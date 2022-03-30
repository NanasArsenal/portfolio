import React from 'react'
import { Button } from 'react-bootstrap'

 Button = (props) => {
  return (
   <button>
       {props.name}
    </button>
  )
}

export default Button