let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
    console.log("clicou em proxima")
}

function previousSlide() {
    showSlide(currentSlide - 1);
    console.log("clicou anterior")
}



showSlide(currentSlide); // Exibindo o primeiro slide inicialmente

