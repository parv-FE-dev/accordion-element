"use strict";

exports.__esModule = true;
exports["default"] = AccordionButton;

function AccordionButton(props) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: "" + (props.htmlFor || ''),
    className: "" + (props.className || '')
  }, props.children);
}

module.exports = exports.default;