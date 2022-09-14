Here is the list of requirements for accordion UI component.

- A generic accordion UI component which can be used by anyone.

- The UI components should have an ability to decide the direction it opens in.

- The UI component should have an ability to open or multiple sections, based on the requirements.(Applicable only for vertical accordion).

- In case of vertical accordion, the UI component should have the ability to have one or multiple default open section(s).

- When using vertical accordion, UI component should be able to Estimate the height of the open section.


Properties:-

In horzontal accordion, hide or show accordion button based on requirements.

Components:-
- component <AccordionGroup> (accordion section, define for vertical and horizontal)
- <AccordionItem> (Individual components)
- <AccordionButton>, <AccordionComponents> (header or button, elements)


File structure:- index.js -> <AccordionGroup> -> <AccordionItem> -> <AccordionButton><AccordionElements>