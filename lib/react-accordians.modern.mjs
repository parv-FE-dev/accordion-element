import { useRef, useState, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

let instanceCount = 1092; //Some number. A constant, can not be random - randomness can cause issues with dom rehydration.

class UniqueIdGenerator {
  constructor(prefix) {
    this.instanceCount = instanceCount++;
    this.cnt = 0;
    this.prefix = prefix || "id_prefix";
  }

  newId() {
    return `${this.prefix}_${this.instanceCount}_${this.cnt++}`;
  }

}

function AccordionButton(props) {
  return /*#__PURE__*/jsx("label", {
    htmlFor: `${props.htmlFor || ''}`,
    className: `${props.className || ''}`,
    children: props.children
  });
}

function AccordionContent(props) {
  return /*#__PURE__*/jsx("section", {
    className: ` ${props.className || ''} plgAccordionContent`,
    children: /*#__PURE__*/jsx("div", {
      className: "plgAccordionContainWrap",
      children: props.children
    })
  });
}

function AccordionItem(props) {
  const uIdGeneratorRef = useRef(new UniqueIdGenerator("plg_ab_id"));

  const getProcessedChildren = () => {
    const children = props.children;
    const noOfChildren = children.length;
    const processedChildren = [];
    const idGenerator = uIdGeneratorRef.current;

    for (let cnt = 0; cnt < noOfChildren; cnt++) {
      const thisChild = children[cnt];

      if (thisChild.type === AccordionContent) {
        processedChildren.push(thisChild);
        continue;
      }

      if (thisChild.type !== AccordionButton) {
        console && console.warn(`All children of AccordionItem must be AccordionButton or AccordionContent. Invalid child found on index ${cnt}`);
        continue;
      }

      processedChildren.push( /*#__PURE__*/jsx(AccordionButton, _extends({
        htmlFor: props.rId
      }, thisChild.props), idGenerator.newId()));
    }

    return processedChildren;
  };

  return /*#__PURE__*/jsxs("li", {
    className: ` ${props.className || ''} listItem`,
    children: [/*#__PURE__*/jsx("input", {
      type: "radio",
      id: props.rId,
      name: props.rName,
      defaultChecked: props.defaultOpen || ''
    }), getProcessedChildren()]
  });
}

const accordionClassNameGenerator$1 = new UniqueIdGenerator("plg_vap_class");
function Accordion(props) {
  const [isRehydrated, setIsRehydrated] = useState(false);
  const uIdGeneratorRef = useRef(new UniqueIdGenerator("plg_vai_id"));
  const uniqueRadioName = useRef(new UniqueIdGenerator("plg_vai_name").newId());
  const selfClass = useRef(accordionClassNameGenerator$1.newId());
  const animationTime = props.animationTime ? `${Number(props.animationTime)}ms` : "500ms";
  const buttonHeight = props.buttonHeight ? Number(props.buttonHeight) : 50;

  const accordionItems = () => {
    const children = props.children;
    const noOfChildren = children.length;
    const processedChildren = [];
    const idGenerator = uIdGeneratorRef.current;
    const useEffectTimeoutRef = useRef(0);
    useEffect(() => {
      if (typeof window !== 'undefined') {
        clearTimeout(useEffectTimeoutRef.current);
        useEffectTimeoutRef.current = setTimeout(() => {
          setIsRehydrated(true);
        });
      }
    });

    for (let cnt = 0; cnt < noOfChildren; cnt++) {
      const thisChild = children[cnt];

      if (thisChild.type !== AccordionItem) {
        console && console.warn(`All children of HorizontalAccordion must be AccordionItem. Invalid child found on index ${cnt}`);
        continue;
      }

      const itemId = idGenerator.newId();
      const radioName = props.multiSelect ? itemId : uniqueRadioName.current;
      processedChildren.push( /*#__PURE__*/jsx(AccordionItem, _extends({
        rId: isRehydrated ? itemId : '',
        rName: isRehydrated ? radioName : ''
      }, thisChild.props), `${itemId}_wrap`));
    }

    return processedChildren;
  };

  const getStyles = () => {
    if (!isRehydrated) {
      return;
    }

    let stylesAsString = `

      .${selfClass.current} > li > label {
        height: ${buttonHeight} px;
      }

      .${selfClass.current} > li > section {
        transition: height ${animationTime} ease;
      }
      .${selfClass.current} > li > input[type="radio"]:checked ~ section {
        transition: height ${animationTime} ease;
      }
    `;
    return /*#__PURE__*/jsx("style", {
      children: stylesAsString
    });
  };

  return /*#__PURE__*/jsxs("ul", {
    className: `${props.className || ''} plgAccordion`,
    children: [accordionItems(), getStyles()]
  });
}

const accordionClassNameGenerator = new UniqueIdGenerator("plg_hap_class");
function HorizontalAccordion(props) {
  const [isRehydrated, setIsRehydrated] = useState(false);
  const selfClass = useRef(accordionClassNameGenerator.newId());
  const uIdGeneratorRef = useRef(new UniqueIdGenerator("plg_hai_id"));
  const radioName = useRef(new UniqueIdGenerator("plg_hai_name").newId());
  const showButtonOnOpen = String(props.showButtonOnOpen) === 'true' || false;
  const buttonWidth = props.buttonWidth ? Number(props.buttonWidth) : 68;
  const animationTime = props.animationTime ? `${Number(props.animationTime)}ms` : "500ms";

  const getAccordionItems = () => {
    if (!isRehydrated) {
      return props.children;
    }

    const children = props.children;
    const noOfChildren = children.length;
    const processedChildren = [];
    const idGenerator = uIdGeneratorRef.current;

    for (let cnt = 0; cnt < noOfChildren; cnt++) {
      const thisChild = children[cnt];

      if (thisChild.type !== AccordionItem) {
        console && console.warn(`All children of HorizontalAccordion must be AccordionItem. Invalid child found on index ${cnt}`);
        continue;
      }

      const itemId = idGenerator.newId();
      processedChildren.push( /*#__PURE__*/jsx(AccordionItem, _extends({
        rId: itemId,
        rName: radioName.current
      }, thisChild.props), `${itemId}_wrap`));
    }

    return processedChildren;
  };

  const accordionItems = getAccordionItems();
  const noOfItems = accordionItems.length;
  const useEffectTimeoutRef = useRef(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      clearTimeout(useEffectTimeoutRef.current);
      useEffectTimeoutRef.current = setTimeout(() => {
        setIsRehydrated(true);
      });
    }
  });

  const getStyles = () => {
    if (!isRehydrated) {
      return;
    }

    console.log("showButtonOnOpen", showButtonOnOpen);
    let stylesAsString = `
      .${selfClass.current} > li > label {
        width: ${buttonWidth}px;
      }

      ${showButtonOnOpen ? '' : `.${selfClass.current} > li > input[type="radio"]:checked ~ label { display:none; }`}

      .${selfClass.current} > li {
        width: ${buttonWidth}px;
        transition: width ${animationTime} ease;
      }

      .${selfClass.current} > li:has(> input[type="radio"]:checked ) {
        width: calc(100% - ${(noOfItems - (showButtonOnOpen ? 0 : 1)) * buttonWidth}px);
        transition: width ${animationTime} ease;
      }
    `;
    return /*#__PURE__*/jsx("style", {
      children: stylesAsString
    });
  };

  const selfClassName = isRehydrated ? selfClass.current : '';
  return /*#__PURE__*/jsxs("ul", {
    className: `${selfClassName} ${props.className || ''} plgHorizontalAccordion`,
    children: [accordionItems, getStyles()]
  });
}

export { Accordion, AccordionButton, AccordionContent, AccordionItem, HorizontalAccordion };
//# sourceMappingURL=react-accordians.modern.mjs.map
