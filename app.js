//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];
console.log(nomes);

function verificarInput()
{
    let inputNome =  document.getElementById("amigo").value;
    let botao = document.querySelector('.button-add');
    if (inputNome != "")
    {   
        botao.style.backgroundColor = 'var(--color-button)';
        botao.style.color = 'var(--color-white)';
    } else
    {
        botao.style.backgroundColor = "var(--color-tertiary)";
        botao.style.color = 'var(--color-text)';
    }
}

function adicionarAmigo()
{
    let inputNome =  document.getElementById("amigo");
    let nome = inputNome.value.trim();
    if (nome == "" || /\d/.test(nome) )
    {
        alert ("Digite um nome válido.");
        inputNome.value = ""; 
        verificarInput();       
        return ;
    } else
    {
        nomes.push(nome);
        let listaNomes = document.getElementById("listaAmigos");
        listaNomes.innerHTML = nomes.join("<br>");
        inputNome.value = ""; 
        verificarInput();  
        console.log(nomes);
    }
}

function sortearAmigo()
{
    let quantidadeNomes = nomes.length;
    if (quantidadeNomes>=2)
    {
        let areaResultado = document.getElementById('resultado');
        let i = parseInt(Math.random() * quantidadeNomes);
        let nomeSorteado = nomes[i];
        console.log(` sorteado: ${nomes[i]}`);
        areaResultado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
        let listaNomes = document.getElementById("listaAmigos");
        listaNomes.innerHTML ="";
        nomes = [];
    } else 
    {
        alert ("Digite pelo menos dois nomes válidos.");
    }
    
    



    
    
    





}