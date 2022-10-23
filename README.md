# frontend-mentor-faq-accordion-card

## The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

CSS flexbox and positioned elements were used to create the layout of the card.

JS was used in conjuction with CSS transitions to add functionality to the webpage.

## What I learned

For 'overflow: hidden' to work in cases where the child element is given 'position: absolute', the wrapper element also needs to be positioned.

```html
<div id="desktop-illustration__bg-container">
  <img
    src="images/bg-pattern-desktop.svg"
    alt="Illustration shadow"
    class="desktop-illustration__component"
    id="desktop-illustration__bg"
  />
</div>
```
```css
#desktop-illustration__bg-container {
  position: relative;
  overflow: hidden;
}

#desktop-illustration__bg {
  position: absolute;
}
```

Element.nextSibling gets the next sibling node, which includes things like text, whitespace, and comments.

Element.nextElementSibling gets the closest sibling element of the target element, i.e. HTML tags.

Event.target refers to the element that the event was dispatched onto.

Event.currentTarget refers to the element that the event handler is attached to.
