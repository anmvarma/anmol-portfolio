$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('nav a, .cta-button').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 60 // Adjusting for fixed header height
            }, 800);
        }
    });

    // Form submission handling (example)
    $('form').on('submit', function(event) {
        event.preventDefault();
        // Here you can add form submission logic, like sending the form data via AJAX
        alert('Form submitted!');
    });
});