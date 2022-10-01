"use strict";

exports.__esModule = true;
exports["default"] = Accordion;

var _react = require("react");

var _UniqueIdGenerator = _interopRequireDefault(require("./UniqueIdGenerator"));

var _AccordionItem = _interopRequireDefault(require("./AccordionItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var accordionClassNameGenerator = new _UniqueIdGenerator["default"]("plg_vap_class");

function Accordion(props) {
  var _useState = (0, _react.useState)(false),
      isRehydrated = _useState[0],
      setIsRehydrated = _useState[1];

  var uIdGeneratorRef = (0, _react.useRef)(new _UniqueIdGenerator["default"]("plg_vai_id"));
  var uniqueRadioName = (0, _react.useRef)(new _UniqueIdGenerator["default"]("plg_vai_name").newId());
  var selfClass = (0, _react.useRef)(accordionClassNameGenerator.newId());
  var animationTime = props.animationTime ? Number(props.animationTime) + "ms" : "500ms";
  var buttonHeight = props.buttonHeight ? Number(props.buttonHeight) : 50;

  var accordionItems = function accordionItems() {
    var children = props.children;
    var noOfChildren = children.length;
    var processedChildren = [];
    var idGenerator = uIdGeneratorRef.current;
    var useEffectTimeoutRef = (0, _react.useRef)(0);
    (0, _react.useEffect)(function () {
      if (typeof window !== 'undefined') {
        clearTimeout(useEffectTimeoutRef.current);
        useEffectTimeoutRef.current = setTimeout(function () {
          setIsRehydrated(true);
        });
      }
    });

    for (var cnt = 0; cnt < noOfChildren; cnt++) {
      var thisChild = children[cnt];

      if (thisChild.type !== _AccordionItem["default"]) {
        console && console.warn("All children of HorizontalAccordion must be AccordionItem. Invalid child found on index " + cnt);
        continue;
      }

      var itemId = idGenerator.newId();
      var radioName = props.multiSelect ? itemId : uniqueRadioName.current;
      processedChildren.push( /*#__PURE__*/React.createElement(_AccordionItem["default"], _extends({
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

module.exports = exports.default;