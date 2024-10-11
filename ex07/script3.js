const btnApi = document.querySelector(".btnApi"); 
const fact = document.querySelector('.fact');

async function fetchCatFact(){

    try{
        const api = await fetch('https://catfact.ninja/fact'); //foi feita a requisicao http e ao usar o await esperamos a promisse ser devolvida antes de ir pra próxima linha de código
        const data = await api.json(); // o await é usado novamente para transformar em json e esperar antes de seguir para próxima linha
        fact.textContent = `Fato interessante: ${data.fact}`;
        
    } catch (error){ //caso ocorra um erro, é informado ao usuário
        fact.textContent = `Erro ao carregar o fato: ${error}`

} finally{ //Uso opcional, foi usada para registrar no console que a tentativa de carregar os posts foi finalizada, independentemente de ter ocorrido um erro
    console.log("Tentativa de carregar os posts finalizada"); 
}
}

// btnApi.onclick = fetchCatFact()  Executaria a função diretamente, por isso usamos a anÔnima

btnApi.onclick = function(){
    fetchCatFact();
}
