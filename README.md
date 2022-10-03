# React-Accordion

react-multiway-accordion

#### Install via NPM:

```
npm install react-multiway-accordion
```

#### Import the modules:

```javascript
import {
  HorizontalAccordion,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionContent
} from 'react-multiway-accordion';
```

Items can be passed in to `<AccordionItem></AccordionItem>`, `<AccordionButton></AccordionButton>` and `<AccordionContent></AccordionContent>`:

- as children (preferred)
- as a component passed into the `template` prop (deprecated)

A user can **horizontally justify and vertically align** by using two different **tags** `<HorizontalAccordion></HorizontalAccordion>` and `<Accordion></Accordion>` respectively.

### Pass in a component as a child to `AccordionItem`, `AccordionButton` and `AccordionContent`:

(or plain html of course)

```javascript
// This is a sample code to showing our UI accordion component.
// This is an example of Horizontal Accordion.
import React from 'react';
import {
  HorizontalAccordion,
  AccordionItem,
  AccordionButton,
  AccordionContent
} from 'react-multiway-accordion';

export default function PastWork() {
  return (
    <HorizontalAccordion>
        <AccordionItem>
            <AccordionButton>
                <div>
                    We are PLG
                </div>
            </AccordionButton>
            <AccordionContent>
                <div>
                    We started with the mission to create amazing products. But how do we create amazing products without the people who create them? That's precisely why People are our No.1 product! Everything else comes second. We view our culture as ever-evolving.
                    created multiple award-winning products and experiences together, and we believe that amazing people are capable of achieving immeasurable heights!
                </div>
            </AccordionContent>
        </AccordionItem>
    </HorizontalAccordion>
  )
}
…
```

```javascript
// This is a sample code to showing our UI accordion component.
// This is an example of Vertical Accordion.
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionContent
} from 'react-multiway-accordion';

export default function PastWork() {
  return (
    <Accordion>
        <AccordionItem>
            <AccordionButton>
                <div>
                    We are PLG
                </div>
            </AccordionButton>
            <AccordionContent>
                <div>
                    We started with the mission to create amazing products. But how do we create amazing products without the people who create them? That's precisely why People are our No.1 product! Everything else comes second. We view our culture as ever-evolving.
                    created multiple award-winning products and experiences together, and we believe that amazing people are capable of achieving immeasurable heights!
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}


…
```
## Props

(all components accept a `className` and `style` prop per usual convention)

### `<Accordion></Accordion>`

| Property       | Type       | Description   | Default |
| :------------- | :--------- | :-----------  | :------ |
| style          | `Object`   | style object  | `none`  |
| className      | `String`   | CSS classname | `none`  |
| buttonHeight   | `Number`   | Defines Accordion Button height, in pixel | 50 |
| animationTime  | `Number`   | Defines Accordion open speed, in ms | 500 |

### `<HorizontalAccordion></HorizontalAccordion>`

| Property       | Type       | Description   | Default |
| :------------- | :--------- | :-----------  | :------ |
| style          | `Object`   | style object  | `none`  |
| className      | `String`   | CSS classname | `none`  |
| buttonWidth    | `Number`   | Defines Accordion Button width, in pixel | 50  |
| animationTime  | `Number`   | Defines Accordion open speed, in ms | 500 |
| showButtonOnOpen  | `Boolean` | Determines wether to show or hide accordion button | `false` |


### `<AccordionButton></AccordionButton>`

| Property       | Type       | Description  | Default |
| :------------- | :--------- | :----------- | :------ |
| style          | `Object`   | style object | `none`  |
| className      | `String`   | CSS classname | `none` |

### `<AccordionContent></AccordionContent>`

| Property       | Type       | Description   | Default |
| :------------- | :--------- | :-----------  | :------ |
| style          | `Object`   | style object  | `none`  |
| className      | `String`   | CSS classname | `none`  |

## What about styling?

You can style any component with a `style` prop or `className` prop

For example: `<AccordionButton style={{border: '1px solid'}}>`

Or: `<AccordionContent className="myCssClass">`

---
