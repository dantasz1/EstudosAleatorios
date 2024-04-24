let contador = 0;
let input = document.getElementById('inputTarefa');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value.trim();

    if (valorInput) {
        contador++;
        let isChecked = false;

        let novoItem = `
            <div id="item${contador}" class="item">
                <div onclick="marcarTarefa(${contador})" class="item-icone">
                    <span id="iconeImagem${contador}" class="material-symbols-outlined">
                        ▢
                    </span>
                </div>
                <div class="item-nome">
                    ${valorInput}
                </div>
                <div class="item-botao">
                    <button onclick="deletar(${contador})" class="delete">Deletar</button>
                </div>
            </div>`;

        if (main) {
            main.insertAdjacentHTML('beforeend', novoItem);
        } else {
            console.error('Elemento main não encontrado.');
        }

        input.value = '';
        input.focus();
    }
}

function deletar(id) {
    let tarefa = document.getElementById(`item${id}`);

    if (tarefa) {
        tarefa.remove();
    } else {
        console.warn(`Tarefa com ID ${id} não encontrada.`);
    }
}

function marcarTarefa(id) {
    let item = document.getElementById(`item${id}`);
    let icone = document.getElementById(`iconeImagem${id}`);

    if (item && icone) {
        if (!item.classList.contains('clicado')) {
            item.classList.add('clicado');
            icone.textContent = '☑';
        } else {
            item.classList.remove('clicado');
            icone.textContent = '▢';
        }
    } else {
        console.warn(`Elemento com ID ${id} não encontrado.`);
    }
}

if (input) {
    input.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) { // Tecla Enter
            event.preventDefault();
            addTarefa();
        }
    });
} else {
    console.error('Elemento input não encontrado para adicionar evento keyup.');
}

