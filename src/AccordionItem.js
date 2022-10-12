import { useRef } from "react";
import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";
import UniqueIdGenerator from "./UniqueIdGenerator";

export default function AccordionItem(props) {
  const uIdGeneratorRef = useRef( new UniqueIdGenerator("plg_ab_id") );
  const isMultiselect = props.isMultiSelect ? Boolean(props.isMultiSelect) : false
  const isCheckBoxOrRadio = isMultiselect ? "checkbox" : "radio";
  const getProcessedChildren = () =>{
    const children = props.children;
    const noOfChildren = children.length;
    const processedChildren = [];
    const idGenerator = uIdGeneratorRef.current;
    for(let cnt = 0; cnt < noOfChildren; cnt++ ) {
      const thisChild = children[ cnt ];
      if ( thisChild.type === AccordionContent ) {
        processedChildren.push( thisChild );
        continue;
      }
      if ( thisChild.type !== AccordionButton ) {
        console && console.warn(`All children of AccordionItem must be AccordionButton or AccordionContent. Invalid child found on index ${cnt}`);
        continue;
      }

      processedChildren.push( 
        <AccordionButton key={idGenerator.newId()} htmlFor={props.rId} {...thisChild.props}></AccordionButton>
      );
    }
    return processedChildren;
  };
  
  return <li className={` ${props.className || ''} listItem`}>
    <input type={isCheckBoxOrRadio} id={props.rId} name={props.rName} defaultChecked={props.defaultOpen || ''} />
    {getProcessedChildren()}
  </li>;
}
