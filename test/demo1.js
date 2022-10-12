import React from 'react'
import { render } from 'react-dom'
import {Accordion, HorizontalAccordion} from "../lib/react-accordians";
import {AccordionButton} from "../lib/react-accordians";
import {AccordionContent} from "../lib/react-accordians";
import {AccordionItem} from "../lib/react-accordians";

render(
<div style={{width:"100%"}}>
  <Accordion className="accordion">
    <AccordionItem>
      <AccordionButton className="">Lorem</AccordionButton>
      <AccordionContent >Lorem ipsum dolor sit amet. Aut vitae iusto et dolores magnam sit consequuntur dolores. Sit culpa inventore et ipsum nesciunt sed esse maiores.</AccordionContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton >Lorem</AccordionButton>
      <AccordionContent >Lorem ipsum dolor sit amet. Aut vitae iusto et dolores magnam sit consequuntur dolores. Sit culpa inventore et ipsum nesciunt sed esse maiores.</AccordionContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton >Lorem</AccordionButton>
      <AccordionContent >Lorem ipsum dolor sit amet. Aut vitae iusto et dolores magnam sit consequuntur dolores. Sit culpa inventore et ipsum nesciunt sed esse maiores.</AccordionContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton >Lorem</AccordionButton>
      <AccordionContent >Lorem ipsum dolor sit amet. Aut vitae iusto et dolores magnam sit consequuntur dolores. Sit culpa inventore et ipsum nesciunt sed esse maiores.</AccordionContent>
    </AccordionItem>
    
    <AccordionItem defaultOpen="true">
      <AccordionButton >Ipsum</AccordionButton>
      <AccordionContent >Est illo aperiam et temporibus modi a voluptatibus quia ut cupiditate illo ut similique consectetur. Et deleniti cumque ut voluptatum quos id distinctio repellat. Ea numquam consequatur ut vitae omnis hic expedita quia ea voluptas reiciendis ea libero nobis quo minima praesentium est neque quas.</AccordionContent>
    </AccordionItem>
  </Accordion>
</div>, document.getElementById('root'))
