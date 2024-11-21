const alphaCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const caracteres = '!@#$%&*()_+{}[]~^:;>.<,¨|\?/';

let senha = ''

function aleatorizar() {

    if (senha != ''){
        limparCampos()
    }

    const capital = document.getElementById('capital').checked;
    const nuns = document.getElementById('numbers').checked;
    const especial = document.getElementById('especial').checked;
    const quantidade = document.getElementById('quantidade').value;

    let caracteresDisponiveis = alpha;

    if (capital) {
        caracteresDisponiveis += alphaCaps;
    }
    if (nuns) {
        caracteresDisponiveis += numbers;
    }
    if (especial) {
        caracteresDisponiveis += caracteres;
    }

    if (quantidade < 8){
        senha = 'Senha abaixo do número mínimo exigido';
        return document.getElementById('senha').textContent = senha;
    }

    for (let i = 1; i <= quantidade && i < 50; i++){
        const randonIndex = Math.floor(Math.random() * caracteresDisponiveis.length);
        senha += caracteresDisponiveis[randonIndex];
    }

    document.getElementById('senha').textContent = senha;
}

function limparCampos(){
    document.getElementById('senha').textContent = ''
    senha = ''
}