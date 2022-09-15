import React from 'react'
import './AccordionElements.css'

function AccordionElements(props) {
  return (
    <div className='accordionElements'>
      {props.elementText}
    </div>
  )
}
export default AccordionElements;