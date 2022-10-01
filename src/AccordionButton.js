export default function AccordionButton(props) {
  return <label htmlFor={`${props.htmlFor || ''}`} className={`${props.className || ''}`}>
    {props.children}
  </label>;
}