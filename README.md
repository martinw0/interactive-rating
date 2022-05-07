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


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [GitHub](https://github.com/martinw0/interactive-rating)
- Live Site URL: [GitHub Pages](https://martinw0.github.io/interactive-rating/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- sass
- JavaScript


### What I learned

How to get a DOM element with the same selector as css:  
```
document.querySelector('div');
```

Use corrrectly the onclick event :  
```
onclick = function() {
  alert('test');
}
```

[Parent selector css](https://sass-lang.com/documentation/style-rules/parent-selector):
```
.alert {
  &:hover {
    font-weight: bold;
  }
}
```


### Continued development

Improve JS skills and mlayter try jquery

### Useful resources

- [Manage vertical space with flexbox](https://stackoverflow.com/questions/25098042/fill-remaining-vertical-space-with-css-using-displayflex)

## Author

- Frontend Mentor - [@martinw0](https://www.frontendmentor.io/profile/martinw0)
- Twitter - [@leWalletM](https://www.twitter.com/leWalletM)
