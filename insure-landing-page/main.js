//Toggle Navigation button
const navButton = document.querySelector('#navToggle[aria-expanded]');

function toggleNavigation({target}) {
    const expanded = navButton.getAttribute('aria-expanded') === 'true';
    navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNavigation);