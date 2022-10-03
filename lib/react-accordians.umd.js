(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react/jsx-runtime')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react/jsx-runtime'], factory) :
  (global = global || self, factory(global.reactAccordions = {}, global.react, global.jsx));
})(this, (function (exports, react, jsxRuntime) {
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

  var instanceCount = 1092; //Some number. A constant, can not be random - randomness can cause issues with dom rehydration.

  var UniqueIdGenerator = /*#__PURE__*/function () {
    function UniqueIdGenerator(prefix) {
      this.instanceCount = instanceCount++;
      this.cnt = 0;
      this.prefix = prefix || "id_prefix";
    }

    var _proto = UniqueIdGenerator.prototype;

    _proto.newId = function newId() {
      return this.prefix + "_" + this.instanceCount + "_" + this.cnt++;
    };

    return UniqueIdGenerator;
  }();

  function AccordionButton(props) {
    return /*#__PURE__*/jsxRuntime.jsx("label", {
      htmlFor: "" + (props.htmlFor || ''),
      className: "" + (props.className || ''),
      children: props.children
    });
  }

  function AccordionContent(props) {
    return /*#__PURE__*/jsxRuntime.jsx("section", {
      className: " " + (props.className || '') + " plgAccordionContent",
      children: /*#__PURE__*/jsxRuntime.jsx("div", {
        className: "plgAccordionContainWrap",
        children: props.children
      })
    });
  }

  function AccordionItem(props) {
    var uIdGeneratorRef = react.useRef(new UniqueIdGenerator("plg_ab_id"));

    var getProcessedChildren = function getProcessedChildren() {
      var children = props.children;
      var noOfChildren = children.length;
      var processedChildren = [];
      var idGenerator = uIdGeneratorRef.current;

      for (var cnt = 0; cnt < noOfChildren; cnt++) {
        var thisChild = children[cnt];

        if (thisChild.type === AccordionContent) {
          processedChildren.push(thisChild);
          continue;
        }

        if (thisChild.type !== AccordionButton) {
          console && console.warn("All children of AccordionItem must be AccordionButton or AccordionContent. Invalid child found on index " + cnt);
          continue;
        }

        processedChildren.push( /*#__PURE__*/jsxRuntime.jsx(AccordionButton, _extends({
          htmlFor: props.rId
        }, thisChild.props), idGenerator.newId()));
      }

      return processedChildren;
    };

    return /*#__PURE__*/jsxRuntime.jsxs("li", {
      className: " " + (props.className || '') + " listItem",
      children: [/*#__PURE__*/jsxRuntime.jsx("input", {
        type: "radio",
        id: props.rId,
        name: props.rName,
        defaultChecked: props.defaultOpen || ''
      }), getProcessedChildren()]
    });
  }

  var accordionClassNameGenerator$1 = new UniqueIdGenerator("plg_vap_class");
  function Accordion(props) {
    var _useState = react.useState(false),
        isRehydrated = _useState[0],
        setIsRehydrated = _useState[1];

    var uIdGeneratorRef = react.useRef(new UniqueIdGenerator("plg_vai_id"));
    var uniqueRadioName = react.useRef(new UniqueIdGenerator("plg_vai_name").newId());
    var selfClass = react.useRef(accordionClassNameGenerator$1.newId());
    var animationTime = props.animationTime ? Number(props.animationTime) + "ms" : "500ms";
    var buttonHeight = props.buttonHeight ? Number(props.buttonHeight) : 50;

    var accordionItems = function accordionItems() {
      var children = props.children;
      var noOfChildren = children.length;
      var processedChildren = [];
      var idGenerator = uIdGeneratorRef.current;
      var useEffectTimeoutRef = react.useRef(0);
      react.useEffect(function () {
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
        processedChildren.push( /*#__PURE__*/jsxRuntime.jsx(AccordionItem, _extends({
          rId: isRehydrated ? itemId : '',
          rName: isRehydrated ? radioName : ''
        }, thisChild.props), itemId + "_wrap"));
      }

      return processedChildren;
    };

    var getStyles = function getStyles() {
      if (!isRehydrated) {
        return;
      }

      var stylesAsString = "\n\n      ." + selfClass.current + " > li > label {\n        height: " + buttonHeight + " px;\n      }\n\n      ." + selfClass.current + " > li > section {\n        transition: height " + animationTime + " ease;\n      }\n      ." + selfClass.current + " > li > input[type=\"radio\"]:checked ~ section {\n        transition: height " + animationTime + " ease;\n      }\n    ";
      return /*#__PURE__*/jsxRuntime.jsx("style", {
        children: stylesAsString
      });
    };

    return /*#__PURE__*/jsxRuntime.jsxs("ul", {
      className: (props.className || '') + " plgAccordion",
      children: [accordionItems(), getStyles()]
    });
  }

  var accordionClassNameGenerator = new UniqueIdGenerator("plg_hap_class");
  function HorizontalAccordion(props) {
    var _useState = react.useState(false),
        isRehydrated = _useState[0],
        setIsRehydrated = _useState[1];

    var selfClass = react.useRef(accordionClassNameGenerator.newId());
    var uIdGeneratorRef = react.useRef(new UniqueIdGenerator("plg_hai_id"));
    var radioName = react.useRef(new UniqueIdGenerator("plg_hai_name").newId());
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
        processedChildren.push( /*#__PURE__*/jsxRuntime.jsx(AccordionItem, _extends({
          rId: itemId,
          rName: radioName.current
        }, thisChild.props), itemId + "_wrap"));
      }

      return processedChildren;
    };

    var accordionItems = getAccordionItems();
    var noOfItems = accordionItems.length;
    var useEffectTimeoutRef = react.useRef(0);
    react.useEffect(function () {
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
      return /*#__PURE__*/jsxRuntime.jsx("style", {
        children: stylesAsString
      });
    };

    var selfClassName = isRehydrated ? selfClass.current : '';
    return /*#__PURE__*/jsxRuntime.jsxs("ul", {
      className: selfClassName + " " + (props.className || '') + " plgHorizontalAccordion",
      children: [accordionItems, getStyles()]
    });
  }

  exports.Accordion = Accordion;
  exports.AccordionButton = AccordionButton;
  exports.AccordionContent = AccordionContent;
  exports.AccordionItem = AccordionItem;
  exports.HorizontalAccordion = HorizontalAccordion;

}));
//# sourceMappingURL=react-accordians.umd.js.map
