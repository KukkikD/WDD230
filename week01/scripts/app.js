document.addEventListener('DOMContentLoaded', function () {
    // Add animation class to header elements on load
    const headerElements = document.querySelectorAll('header .animated');
    headerElements.forEach(element => {
        element.classList.add('rotate');
    });
});