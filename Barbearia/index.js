//class NavBar {
//
//
//    constructor(mobileMenu,textos , navLinks) {
//        this.mobileMenu = document.querySelector(mobileMenu)
//        this.textos = document.querySelector(textos)
//        this.navLinks = document.querySelectorAll(navLinks)
//        this.activeClass = "active"
//    }
//    addCLickEvent () {
//        this.mobileMenu.addCLickEvent("click" , () => console.log("teste")
//
//        )}
//    init() {
//        if (this.mobileMenu) {
//            this.addCLickEvent()
//        }
//        return this;
//    }
//}
//
// //let mobileNavBr = new MobileNavBr( 
//".mobile-menu",
//".textos",
//".textos li",
//
//)
//mobileNavBr.init()

function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {  // o metodo contains nao cria uma classe , ele é usado para verificar se uma classe esta presente na lista de classes de um elemento html
        menuMobile.classList.remove("open");
    } else {
        menuMobile.classList.add("open");
    }
}




//document.addEventListener('DOMContentLoaded', function () {
//    const hamburgerButton = document.querySelector('.hamburger');
//    const menu = document.querySelector('#menu');
//
//    // Adiciona um evento de clique ao ícone do hamburger
//    hamburgerButton.addEventListener('click', function () {
//        // Alterna a classe 'show' no menu para exibir/ocultar a barra lateral
//        menu.classList.toggle('active');
//    });
//
//    // Adiciona um evento de clique aos itens do menu para ocultar o menu ao clicar em um item
//    const menuItems = menu.querySelectorAll('li');
//    menuItems.forEach(function (item) {
//        item.addEventListener('click', function () {
//            menu.classList.remove('active'); // Oculta o menu ao clicar em um item
//        });
//    });
//});



