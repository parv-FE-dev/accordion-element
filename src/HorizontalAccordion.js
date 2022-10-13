import { useEffect, useRef, useState } from "react";
import UniqueIdGenerator from "./UniqueIdGenerator";
import AccordionItem from "./AccordionItem";

const accordionClassNameGenerator = new UniqueIdGenerator("plg_hap_class");

export default function HorizontalAccordion(props) {
  const [isRehydrated, setIsRehydrated] = useState(false); 
  const selfClass = useRef( accordionClassNameGenerator.newId() );
  const uIdGeneratorRef = useRef( new UniqueIdGenerator("plg_hai_id") );
  const radioName = useRef( (new UniqueIdGenerator("plg_hai_name")).newId() );
  const showButtonOnOpen = String(props.showButtonOnOpen) === 'true' || false;
  const buttonWidth = props.buttonWidth ? Number(props.buttonWidth) : 68;
  const animationTime = props.animationTime ? `${Number(props.animationTime)}ms` : "1000ms";

  const getAccordionItems = () => {
    if ( !isRehydrated ) {
      return props.children;
    }

    const children = props.children;
    const noOfChildren = children.length;
    const processedChildren = [];
    const idGenerator = uIdGeneratorRef.current;

    for(let cnt = 0; cnt < noOfChildren; cnt++ ) {
      const thisChild = children[ cnt ];
      if ( thisChild.type !== AccordionItem ) {
        console && console.warn(`All children of HorizontalAccordion must be AccordionItem. Invalid child found on index ${cnt}`);
        continue;
      }

      const itemId = idGenerator.newId();
      processedChildren.push( 
        <AccordionItem key={`${itemId}_wrap`} rId={itemId} rName={radioName.current} {...thisChild.props}></AccordionItem>
      );
    }
    return processedChildren;
  };

  const accordionItems = getAccordionItems();
  const noOfItems = accordionItems.length;

  const useEffectTimeoutRef = useRef(0);
  useEffect(() => {
    if ( typeof window !== 'undefined') {
      clearTimeout( useEffectTimeoutRef.current );
      useEffectTimeoutRef.current = setTimeout(() => {
        setIsRehydrated(true);
      });
    }
  });

  const getStyles = () => {
    if ( !isRehydrated ) { return; }
    let stylesAsString = (`
    .${selfClass.current} > li > label {
        width: ${buttonWidth}px;
      }

      ${ showButtonOnOpen ? '' : `.${selfClass.current} > li > input[type="radio"]:checked ~ label { display:none; }` }
      
    `);

    for(let i = 2 ;i<=noOfItems ;i++){
      let im1 = i - 1;
      for(let j = 1 ;j<=i; j++){
         let str = (`.${selfClass.current} > li:nth-child(${j}):nth-last-child(${i - j + 1}) > input[type="radio"]:checked ~ section {
            width: calc(100% - ${(noOfItems - 1) * buttonWidth}px);
            transition: width ${animationTime} ease;
          }
          .${selfClass.current} > li:nth-child(${j}):nth-last-child(${i - j + 1}) > input[type="radio"]:checked ~ label {
              width: 0;
          }`)

        stylesAsString = stylesAsString + '\n' + str;

      }
    }

    console.log("css Style ", stylesAsString);

    return <style>
      {stylesAsString}
    </style>
  };

  const selfClassName = isRehydrated ? selfClass.current : '';
  
  return<>  {getStyles()}
    <ul className={`${selfClassName} ${props.className || ''} plgHorizontalAccordion`}>
      {accordionItems}
    </ul>
  </>;
}