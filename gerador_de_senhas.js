    addEventListener('DOMContentLoaded', function() {
        const quantidade = document.getElementById('quantidade');
        const quantidadeValor = document.getElementById('quantidadeValor');

        quantidadeValor.textContent = quantidade.value;

        quantidade.addEventListener('input', function() {
            quantidadeValor.textContent = quantidade.value;
        });

        const gerar = document.getElementById('gerar');
        gerar.addEventListener('click', () => {
            aleatorizar(quantidade.value);
        });
    })

    let senhaArr = [];

    function aleatorizar(quantidade) {
        let senha = '';
        const alphaCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const alpha = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '1234567890';
        const caracteres = '!@#$%&*()_+{}[]~^:;>.<,¨|?/';

        if (senha != ''){
            limparCampos();
        };

        const capital = document.getElementById('capital').checked;
        const nuns = document.getElementById('numbers').checked;
        const especial = document.getElementById('especial').checked;

        let caracteresDisponiveis = alpha;

        if (capital) {
            caracteresDisponiveis += alphaCaps;
        };
        if (nuns) {
            caracteresDisponiveis += numbers;
        };
        if (especial) {
            caracteresDisponiveis += caracteres;
        };
  
            return document.getElementById('senha').textContent = senha;

        for (let i = 1; i <= quantidade && i < 50; i++){
            const randonIndex = Math.floor(Math.random() * caracteresDisponiveis.length);
            senha += caracteresDisponiveis[randonIndex];
        };

        senhaArr.unshift(senha);

        if(senhaArr.length > 3) {
            senhaArr.splice(3);
        };

        console.log(senhaArr);

        document.getElementById('senha').innerHTML = senhaArr.map(s => `<ol class="textoSenha">${s}</ol>`).join('');
        
        
    };