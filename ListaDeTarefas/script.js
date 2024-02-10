 let contador = 0;

 let input = document.getElementById('inputTarefa')
 let btnAdd = document.getElementById('btnAdd')
 let main = document.getElementById('areaLista')
function addTarefa() {
    let valorInput = input.value

    if ((valorInput !== "")  && (valorInput !== null) && (valorInput !== undefined) ) {
        contador++
        let novoItem = `<div id="${contador}" class="item">
        <div  onclick= "marcarTarefa(${contador})" class="item-icone">
            <span id= 'iconeImagem${contador}' class="material-symbols-outlined">
                radio_button_unchecked
                </span>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div >
        <div class="item-botao">
            <button onclick= "deletar(${contador})" class="delete">Deletar</button>

        </div>
    </div>`
       // adicionar novo item no main
        main.innerHTML += novoItem
            // zerar o campinho ali do input
            input.value = ''
            input.focus();


    }
}

function deletar(id) {
var tarefa = document.getElementById(id)
tarefa.remove()
}

input.addEventListener('keyup' , function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})

 // PARAR PRA ENTENDER AS DUAS FUNÇOES//
function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')

    if(classe ==='item') {
        item.classList.add('clicado')
    
        var icone = document.getElementById('iconeImagem' + id )
        
    
        icone.textContent = 'check_box';
    
    item.parentNode.appendChild(item)
    
    } else {
        item.classList.remove('clicado')
    
        var icone = document.getElementById('iconeImagem' + id )
        icone.textContent = 'check_box'
        
    }
    }
    
