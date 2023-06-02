const form = document.getElementById('form-atividade');
let linhas = '';
const telefones = [];
const contatos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputnome = document.getElementById('nome');
    const inputtelefone = document.getElementById('telefone');

    if (telefones.includes(inputtelefone.value)) {
        alert(`Esse telefone já foi inserido`);
    } else if (contatos.includes(inputnome.value)) {
        alert(`Esse nome já foi inserido`);
    } else {
    telefones.push(inputtelefone.value);
    contatos.push(inputnome.value);

    let linha = '<tr>';
    linha += `<td>${inputnome.value}</td>`;
    linha += `<td>${inputtelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputnome.value = '';
    inputtelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}