"use strict";

exports.__esModule = true;
exports["default"] = AccordionItem;

var _react = require("react");

var _AccordionButton = _interopRequireDefault(require("./AccordionButton"));

var _AccordionContent = _interopRequireDefault(require("./AccordionContent"));

var _UniqueIdGenerator = _interopRequireDefault(require("./UniqueIdGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function AccordionItem(props) {
  var uIdGeneratorRef = (0, _react.useRef)(new _UniqueIdGenerator["default"]("plg_ab_id"));

  var getProcessedChildren = function getProcessedChildren() {
    var children = props.children;
    var noOfChildren = children.length;
    var processedChildren = [];
    var idGenerator = uIdGeneratorRef.current;

    for (var cnt = 0; cnt < noOfChildren; cnt++) {
      var thisChild = children[cnt];

      if (thisChild.type === _AccordionContent["default"]) {
        processedChildren.push(thisChild);
        continue;
      }

      if (thisChild.type !== _AccordionButton["default"]) {
        console && console.warn("All children of AccordionItem must be AccordionButton or AccordionContent. Invalid child found on index " + cnt);
        continue;
      }

      processedChildren.push( /*#__PURE__*/React.createElement(_AccordionButton["default"], _extends({
        key: idGenerator.newId(),
        htmlFor: props.rId
      }, thisChild.props)));
    }

    return processedChildren;
  };

  return /*#__PURE__*/React.createElement("li", {
    className: " " + (props.className || '') + " listItem"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: props.rId,
    name: props.rName,
    defaultChecked: props.defaultOpen || ''
  }), getProcessedChildren());
}

module.exports = exports.default;