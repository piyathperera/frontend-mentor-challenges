# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The Challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Your users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page

### Screenshot

![Desktop layout](./images/Screenshot_1440.png)
Dekstop

<!-- ![Mobile layout](./images/Screenshot_375.png) Mobile -->

### Links

-   [Solution](https://www.frontendmentor.io/solutions/qr-code-component-using-html-and-css-rkkG2nDVc)
-   [Live Site](https://frontend-mentor-challeneges.netlify.app/sunnyside-agency-landing-page/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid

### What I learned

I learned to create shapes with css, some help with ::after pseudo class for mobile screen navigation menu.

Use of CSS Grid with a mix of Flexbox to achieve responsive layout blocks.

Learn to create responsive images with aspect-ratio and object-fit.

```css
.header__nav::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-bottom: 32px solid var(--clr-white);
    border-left: 32px solid transparent;
    content: "";
}
```

```css
.feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    place-items: center;
}
```

```css
.feature__img img {
    max-inline-size: 100%;
    block-size: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
}
```

### Continued development

I would like add more structure in html and use a css methodology like BEM, CUBE CSS to add more readbility and simplification to the code.

Learning to add css animations to elements of the website.

### Useful resources

-   [Responsive images - web.dev](https://web.dev/learn/design/responsive-images/) - These helped me for to understand responsive design for images. It clearly outlined step by step approach to make images responsive.

-   [CSS shapes - CSS Tricks](https://css-tricks.com/the-shapes-of-css/) - This helped me to understand how to add shapes with css.

## Author

-   Website - [Piyath Perera](https://piyathperera.netlify.app)
-   Frontend Mentor - [@piyathperera](https://www.frontendmentor.io/profile/piyathperera)
-   Twitter - [@PiyathPerera](https://www.twitter.com/PiyathPerera)

## Acknowledgments

I would like to acknowledge the internet and everyone contributing in it by creating videos, tutorials, articles and answering questions.Those resources are helping me to be a better developer today.
