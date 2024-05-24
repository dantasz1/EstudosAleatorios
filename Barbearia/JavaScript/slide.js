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





// Seleciona os elementos dos cards
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');

// Função para verificar a posição de rolagem e mostrar os cards gradualmente
function showCardsOnScroll() {
    // Verifica a posição vertical de rolagem da página
    const scrollPosition = window.scrollY;
    const triggerOffset = 50; // Define a posição de rolagem para acionar a exibição dos cards

    if (scrollPosition > triggerOffset) {
        // Se a página for rolada para baixo mais do que o offset definido, mostra os cards
        card1.style.opacity = '1'; // Torna o card1 totalmente visível
        card2.style.opacity = '1'; // Torna o card2 totalmente visível
    } else {
        // Se a página estiver no topo ou acima do offset, mantém os cards transparentes
        card1.style.opacity = '0'; // Mantém o card1 transparente
        card2.style.opacity = '0'; // Mantém o card2 transparente
    }
}

// Adiciona um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', showCardsOnScroll);
