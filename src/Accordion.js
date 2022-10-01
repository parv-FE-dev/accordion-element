import { useEffect, useRef, useState } from "react";
import UniqueIdGenerator from "./UniqueIdGenerator";
import AccordionItem from "./AccordionItem";

const accordionClassNameGenerator = new UniqueIdGenerator("plg_vap_class");


export default function Accordion(props) {
  const [isRehydrated, setIsRehydrated] = useState(false);
  const uIdGeneratorRef = useRef(new UniqueIdGenerator("plg_vai_id"));
  const uniqueRadioName = useRef((new UniqueIdGenerator("plg_vai_name")).newId());
  const selfClass = useRef(accordionClassNameGenerator.newId());
  const animationTime = props.animationTime ? `${Number(props.animationTime)}ms` : "500ms";
  const buttonHeight = props.buttonHeight ? Number(props.buttonHeight) : 50;


  const accordionItems = () =>{
    const children = props.children;
    const noOfChildren = children.length;
    const processedChildren = [];
    const idGenerator = uIdGeneratorRef.current;

    const useEffectTimeoutRef = useRef(0);
      useEffect(() => {
      if ( typeof window !== 'undefined') {
        clearTimeout( useEffectTimeoutRef.current );
        useEffectTimeoutRef.current = setTimeout(() => {
          setIsRehydrated(true);
        });
      }
    });

    for(let cnt = 0; cnt < noOfChildren; cnt++ ) {
      const thisChild = children[ cnt ];
      if ( thisChild.type !== AccordionItem ) {
        console && console.warn(`All children of HorizontalAccordion must be AccordionItem. Invalid child found on index ${cnt}`);
        continue;
      }

      const itemId = idGenerator.newId();
      const radioName = props.multiSelect ? itemId : uniqueRadioName.current;
      processedChildren.push( 
        <AccordionItem key={`${itemId}_wrap`} rId={(isRehydrated ? itemId : '')} rName={(isRehydrated ? radioName : '')} {...thisChild.props}></AccordionItem>
      );
    }
    return processedChildren;
  };


  const getStyles = () => {

    if ( !isRehydrated ) { return; }

    let stylesAsString = (`

      .${selfClass.current} > li > label {
        height: ${buttonHeight} px;
      }

      .${selfClass.current} > li > section {
        transition: height ${animationTime} ease;
      }
      .${selfClass.current} > li > input[type="radio"]:checked ~ section {
        transition: height ${animationTime} ease;
      }
    `);

    return <style>
      {stylesAsString}
    </style>
    
  };
  return <ul className={`${props.className || ''} plgAccordion`}>
    {accordionItems()}
    {getStyles()}
  </ul>;
}