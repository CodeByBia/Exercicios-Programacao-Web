const btnTransformar = document.getElementById('btnTransformar');
let listaDeDados = [];

function adicionarNaLista (){
    const matricula = document.getElementById("matricula").value;
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cpf = document.getElementById("cpf").value;

    if (!matricula || !nome || !cpf){
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const idadeNum = Number(idade);

    if (isNaN(idadeNum) || !Number.isInteger(idadeNum)){
        alert("Por favor, coloque uma idade válida.");
        return;
    }

    const aluno = {
        matricula: matricula,
        nome: nome,
        idade: idade,
        cpf: cpf
    };

    listaDeDados.push(aluno);

    const jsonString = JSON.stringify(listaDeDados);
    document.getElementById('jsonAluno').textContent = jsonString;
}

btnTransformar.onclick = function() {
    adicionarNaLista();
}
