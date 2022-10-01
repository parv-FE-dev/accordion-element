export default function AccordionButton(props) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: "" + (props.htmlFor || ''),
    className: "" + (props.className || '')
  }, props.children);
}