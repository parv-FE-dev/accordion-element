import React from 'react'
import AccordionButton from './AccordionButton';
import AccordionElements from './AccordionElements';

function AccordionItem(props) {
  return (
    <div>
      <AccordionButton buttonText={props.props.buttonText}/>
      <AccordionElements elementText={props.props.elementText}/>
    </div>
  )
}
export default AccordionItem;