# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshots/Screen%20Shot%201.png)
![](./screenshots/Screen%20Shot%202.png)
### Links

- Solution URL: [Solution](https://github.com/andyjv1/Interactive-rating-component.git)
- Live Site URL: [Live](https://andyjv1.github.io/Interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Visual Studio Code
- JS


### What I learned

This project was an excellent excercise flex to display the individual card and basic javascript.

```js
btns.forEach(btn => btn.addEventListener("click", () => {
    clickedId = btn.getAttribute('id')

    btns.forEach(btn => {
        id = btn.getAttribute('id')
        if (clickedId === id) {
            btn.classList.add('lightGrey')
            numberValue = document.getElementById(`${clickedId}`).value
        } else {
            btn.classList.remove('lightGrey')
        }
    }
    )
})
)
```


### Continued development

### Useful resources

- [EventTarget: addEventListener() method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) - This helped how to attache an event handler to the buttons.
- [Element: getAttribute() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) - This helped how to return the value of an button's attribute.

## Author

- Frontend Mentor - [@andyjv1](https://www.frontendmentor.io/profile/andyjv1)

