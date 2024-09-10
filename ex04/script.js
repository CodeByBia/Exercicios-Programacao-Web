let btnAdicionar = document.getElementById('adicionar');
arrayDeNumeros = [];
let somatorio = 0;

btnAdicionar.onclick = function (){
    let numero = document.getElementById('input-numero').value;
    arrayDeNumeros.push(numero);

    const jsonArray = JSON.stringify(arrayDeNumeros);
    document.getElementById('array').textContent = jsonArray;

    for (const i = 0; i <= arrayDeNumeros.length; i++)
            somatorio += Number(numero);
            let media = (somatorio / arrayDeNumeros.length)
            console.log(media);
    
    }
    
 
    

