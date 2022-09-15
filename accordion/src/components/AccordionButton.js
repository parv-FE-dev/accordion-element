import React from 'react'
import './AccordionButton.css'

function AccordionButton(props) {
  return (
    <div className='accordionButton'>
      {props.buttonText}
    </div>
  )
}
export default AccordionButton;