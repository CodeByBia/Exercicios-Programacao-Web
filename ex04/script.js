const btnAdicionar = document.getElementById('adicionar');
arrayDeNumeros = [];
let somatorio = 0;

btnAdicionar.onclick = function (){
    const numero = document.getElementById('input-numero').value;
    arrayDeNumeros.push(numero);

    const jsonArray = JSON.stringify(arrayDeNumeros);
    document.getElementById('array').textContent = jsonArray;

    somatorio += Number(numero);
    console.log(somatorio);
    
}

