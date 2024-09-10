const btnAdicionar = document.getElementById('adicionar');
arrayDeNumeros = [];
let somatorio = 0;

btnAdicionar.onclick = function (){
    let numero = document.getElementById('input-numero').value;
    arrayDeNumeros.push(numero);

    let jsonArray = JSON.stringify(arrayDeNumeros);
    document.getElementById('array').textContent = jsonArray;

    somatorio += Number(numero)

    let media = (somatorio / arrayDeNumeros.length)

    document.getElementById('media').textContent = media;
}

