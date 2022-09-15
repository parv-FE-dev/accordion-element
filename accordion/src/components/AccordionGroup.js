import React from 'react'
import AccordionItem from './AccordionItem';

function AccordionGroup(props) {
  console.log("Hello", props)
  return (
    <div>
      <AccordionItem props={props}/>
    </div>
  )
}
export default AccordionGroup;