
let currentSlide = 0;
const slides = document.querySelectorAll('#slider img');

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 3000); 