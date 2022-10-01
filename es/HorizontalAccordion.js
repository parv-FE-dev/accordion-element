function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useEffect, useRef, useState } from "react";
import UniqueIdGenerator from "./UniqueIdGenerator";
import AccordionItem from "./AccordionItem";
var accordionClassNameGenerator = new UniqueIdGenerator("plg_hap_class");
export default function HorizontalAccordion(props) {
  var _useState = useState(false),
      isRehydrated = _useState[0],
      setIsRehydrated = _useState[1];

  var selfClass = useRef(accordionClassNameGenerator.newId());
  var uIdGeneratorRef = useRef(new UniqueIdGenerator("plg_hai_id"));
  var radioName = useRef(new UniqueIdGenerator("plg_hai_name").newId());
  var showButtonOnOpen = String(props.showButtonOnOpen) === 'true' || false;
  var buttonWidth = props.buttonWidth ? Number(props.buttonWidth) : 68;
  var animationTime = props.animationTime ? Number(props.animationTime) + "ms" : "500ms";

  var getAccordionItems = function getAccordionItems() {
    if (!isRehydrated) {
      return props.children;
    }

    var children = props.children;
    var noOfChildren = children.length;
    var processedChildren = [];
    var idGenerator = uIdGeneratorRef.current;

    for (var cnt = 0; cnt < noOfChildren; cnt++) {
      var thisChild = children[cnt];

      if (thisChild.type !== AccordionItem) {
        console && console.warn("All children of HorizontalAccordion must be AccordionItem. Invalid child found on index " + cnt);
        continue;
      }

      var itemId = idGenerator.newId();
      processedChildren.push( /*#__PURE__*/React.createElement(AccordionItem, _extends({
        key: itemId + "_wrap",
        rId: itemId,
        rName: radioName.current
      }, thisChild.props)));
    }

    return processedChildren;
  };

  var accordionItems = getAccordionItems();
  var noOfItems = accordionItems.length;
  var useEffectTimeoutRef = useRef(0);
  useEffect(function () {
    if (typeof window !== 'undefined') {
      clearTimeout(useEffectTimeoutRef.current);
      useEffectTimeoutRef.current = setTimeout(function () {
        setIsRehydrated(true);
      });
    }
  });

  var getStyles = function getStyles() {
    if (!isRehydrated) {
      return;
    }

    var stylesAsString = "\n      ." + selfClass.current + " > li > label {\n        width: " + buttonWidth + "px;\n      }\n\n      " + (showButtonOnOpen ? '' : "." + selfClass.current + " > li > input[type=\"radio\"]:checked ~ label { display:none; }") + "\n\n      ." + selfClass.current + " > li {\n        width: " + buttonWidth + "px;\n        transition: width " + animationTime + " ease;\n      }\n\n      ." + selfClass.current + " > li:has(> input[type=\"radio\"]:checked ) {\n        width: calc(100% - " + (noOfItems - (showButtonOnOpen ? 0 : 1)) * buttonWidth + "px);\n        transition: width " + animationTime + " ease;\n      }\n    ";
    return /*#__PURE__*/React.createElement("style", null, stylesAsString);
  };

  var selfClassName = isRehydrated ? selfClass.current : '';
  return /*#__PURE__*/React.createElement("ul", {
    className: selfClassName + " " + (props.className || '') + " plgHorizontalAccordion"
  }, accordionItems, getStyles());
}