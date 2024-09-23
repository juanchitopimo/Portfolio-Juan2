/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Read more functionality
    function toggleReadMore() {
        const moreContent = document.querySelector('.more-content');
        const dots = document.querySelector('.dots');
        const readMoreLink = document.querySelector('.read-more-link');

        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'inline';
            dots.style.display = 'none';
            readMoreLink.innerText = 'Read less';
        } else {
            moreContent.style.display = 'none';
            dots.style.display = 'inline';
            readMoreLink.innerText = 'Read more';
        }
    }

    // Add event listener for the Read More link
    const readMoreLink = document.querySelector('.read-more-link');
    if (readMoreLink) {
        readMoreLink.addEventListener('click', toggleReadMore);
    }

});
