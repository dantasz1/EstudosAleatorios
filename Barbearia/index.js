
function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {  // o metodo contains nao cria uma classe , ele é usado para verificar se uma classe esta presente na lista de classes de um elemento html
        menuMobile.classList.remove("open");
    } else {
        menuMobile.classList.add("open");
    }
}






