// window.addEventListener('load', (e) => {
//     const loader = document.getElementById('loader');
//     loader.classList.add('opacity-0', 'pointer-events-none');
// });

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    const iconPhone = document.querySelector('.icon__phone');
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    window.scrollY >= 80 ? header.classList.add('bg-white', 'text-black', 'shadow-md') : header.classList.remove('bg-white', 'text-black', 'shadow-md')
    window.scrollY >= 80 ? iconPhone.classList.add('fill-black') : iconPhone.classList.remove('fill-black');
}


window.addEventListener('scroll', () => {
    scrollHeader()
})

import './assets/js/smoth-scroll.js';
import './assets/js/form_process.js';