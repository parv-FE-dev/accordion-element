
export default function AccordionContent(props) {
  return <section  className={` ${props.className || ''} plgAccordionContent`}>
    <div className='plgAccordionContainWrap'>
      {props.children}
    </div>
  </section>;
};