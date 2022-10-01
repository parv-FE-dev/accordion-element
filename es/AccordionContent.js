export default function AccordionContent(props) {
  return /*#__PURE__*/React.createElement("section", {
    className: " " + (props.className || '') + " plgAccordionContent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "plgAccordionContainWrap"
  }, props.children));
}
;