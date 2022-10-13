import React from 'react'
import { render } from 'react-dom'
import {Accordion, HorizontalAccordion} from "../lib/react-accordians";
import {AccordionButton} from "../lib/react-accordians";
import {AccordionContent} from "../lib/react-accordians";
import {AccordionItem} from "../lib/react-accordians";

render(
<div style={{width:"100%", height:"100%"}}>
  <HorizontalAccordion className='horizontal-accordion'>
    <AccordionItem>
      <AccordionButton className='accordion-button'>L1<br/>o<br/>r<br/>e<br/>m<br/></AccordionButton>
      <AccordionContent className='accordion-content'>Lorem ipsum dolor sit amet. Aut vitae iusto et dolores magnam sit consequuntur dolores. Sit culpa inventore et ipsum nesciunt sed esse maiores.</AccordionContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton className='accordion-button'>L2<br/>o<br/>r<br/>e<br/>m<br/></AccordionButton>
      <AccordionContent className='accordion-content'>Lorem ipsum dolor sit amet. Aut vitae iusto et dolores magnam sit consequuntur dolores. Sit culpa inventore et ipsum nesciunt sed esse maiores.</AccordionContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton className='accordion-button'>L3<br/>o<br/>r<br/>e<br/>m<br/></AccordionButton>
      <AccordionContent className='accordion-content'>Lorem ipsum dolor sit amet. Aut vitae iusto et dolores magnam sit consequuntur dolores. Sit culpa inventore et ipsum nesciunt sed esse maiores.</AccordionContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton className='accordion-button'>L4<br/>o<br/>r<br/>e<br/>m<br/></AccordionButton>
      <AccordionContent className='accordion-content'>Lorem ipsum dolor sit amet. Aut vitae iusto et dolores magnam sit consequuntur dolores. Sit culpa inventore et ipsum nesciunt sed esse maiores.</AccordionContent>
    </AccordionItem>
    
    <AccordionItem defaultOpen="true">
      <AccordionButton className='accordion-button'>I5<br/>p<br/>s<br/>u<br/>m</AccordionButton>
      <AccordionContent className='accordion-content'>Est illo aperiam et temporibus modi a voluptatibus quia ut cupiditate illo ut similique consectetur. Et deleniti cumque ut voluptatum quos id distinctio repellat. Ea numquam consequatur ut vitae omnis hic expedita quia ea voluptas reiciendis ea libero nobis quo minima praesentium est neque quas.</AccordionContent>
    </AccordionItem>
  </HorizontalAccordion>
</div>, document.getElementById('root'))
