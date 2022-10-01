function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useEffect, useRef, useState } from "react";
import UniqueIdGenerator from "./UniqueIdGenerator";
import AccordionItem from "./AccordionItem";
var accordionClassNameGenerator = new UniqueIdGenerator("plg_vap_class");
export default function Accordion(props) {
  var _useState = useState(false),
      isRehydrated = _useState[0],
      setIsRehydrated = _useState[1];

  var uIdGeneratorRef = useRef(new UniqueIdGenerator("plg_vai_id"));
  var uniqueRadioName = useRef(new UniqueIdGenerator("plg_vai_name").newId());
  var selfClass = useRef(accordionClassNameGenerator.newId());
  var animationTime = props.animationTime ? Number(props.animationTime) + "ms" : "500ms";
  var buttonHeight = props.buttonHeight ? Number(props.buttonHeight) : 50;

  var accordionItems = function accordionItems() {
    var children = props.children;
    var noOfChildren = children.length;
    var processedChildren = [];
    var idGenerator = uIdGeneratorRef.current;
    var useEffectTimeoutRef = useRef(0);
    useEffect(function () {
      if (typeof window !== 'undefined') {
        clearTimeout(useEffectTimeoutRef.current);
        useEffectTimeoutRef.current = setTimeout(function () {
          setIsRehydrated(true);
        });
      }
    });

    for (var cnt = 0; cnt < noOfChildren; cnt++) {
      var thisChild = children[cnt];

      if (thisChild.type !== AccordionItem) {
        console && console.warn("All children of HorizontalAccordion must be AccordionItem. Invalid child found on index " + cnt);
        continue;
      }

      var itemId = idGenerator.newId();
      var radioName = props.multiSelect ? itemId : uniqueRadioName.current;
      processedChildren.push( /*#__PURE__*/React.createElement(AccordionItem, _extends({
        key: itemId + "_wrap",
        rId: isRehydrated ? itemId : '',
        rName: isRehydrated ? radioName : ''
      }, thisChild.props)));
    }

    return processedChildren;
  };

  var getStyles = function getStyles() {
    if (!isRehydrated) {
      return;
    }

    var stylesAsString = "\n\n      ." + selfClass.current + " > li > label {\n        height: " + buttonHeight + " px;\n      }\n\n      ." + selfClass.current + " > li > section {\n        transition: height " + animationTime + " ease;\n      }\n      ." + selfClass.current + " > li > input[type=\"radio\"]:checked ~ section {\n        transition: height " + animationTime + " ease;\n      }\n    ";
    return /*#__PURE__*/React.createElement("style", null, stylesAsString);
  };

  return /*#__PURE__*/React.createElement("ul", {
    className: (props.className || '') + " plgAccordion"
  }, accordionItems(), getStyles());
}