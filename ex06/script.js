const palavras = [
    "abacate", "anel", "amigo", "ave", "abacaxi",
    "bola", "bala", "banho", "banco", "baú",
    "casa", "cachorro", "carro", "café", "cama",
    "dado", "dedo", "doce", "dia", "dente",
    "elefante", "estrela", "escola", "elo", "escada",
    "faca", "festa", "fogo", "foca", "fada",
    "gato", "galo", "gelo", "goma", "ganso",
    "helicóptero", "hipopótamo", "hotel", "harpa", "horta",
    "ilha", "iglu", "íris", "índio", "ima",
    "janela", "jarra", "jogo", "jumento", "joaninha",
    "ketchup", "kiwi", "karatê", "koala", "kamikaze",
    "leão", "lago", "lua", "limão", "livro",
    "maçã", "mala", "muro", "mapa", "mesa",
    "neve", "ninho", "navio", "nuvem", "nota",
    "olho", "ovo", "onda", "ouro", "orelha",
    "pato", "peixe", "pipoca", "perna", "pato",
    "quilo", "quadro", "queijo", "quina", "queda",
    "raio", "rosa", "rede", "rato", "roupa",
    "sol", "sapo", "seda", "sabão", "sapato",
    "tigre", "touro", "teto", "tela", "tesoura",
    "uva", "urso", "urna", "união", "umidade",
    "vaca", "verão", "vento", "vela", "vidro",
    "webcam", "whisky", "waffle", "walker", "wifi",
    "xale", "xadrez", "xerox", "xarope", "xampu",
    "yoga", "yakisoba", "iogurte", "yeti", "yuppie",
    "zebra", "zoológico", "zumbi", "zero", "zagueiro"
];


const contentBtns = document.querySelector(".btns");
const img = document.querySelector(".img");
let index = [Math.floor(Math.random() * palavras.length)];
let palavraEscolhida = palavras[index];
let upperCasepalavra = palavraEscolhida.toUpperCase();
console.log(upperCasepalavra);

init();

function init(){
    generateButtons();

}

function generateButtons (){
    // content.textContent = "";

    for (let i= 97; i < 123; i++){
        const letter = String.fromCharCode(i).toUpperCase();
        const btn = document.createElement("button");
        btn.textContent = letter;
        
        btn.onclick = () => {
            btn.style.backgroundColor = "gray";
        };

        contentBtns.appendChild(btn); //o botão btn, que foi criado no loop, será adicionado como um filho do elemento contentBtns
 
    }
}
// criado função no botão Iniciar, loop para percorrer a lista de letras da palavraEscolhida, armazenando a cada iteração cada letra em upperCase
btnIniciar.onclick = function () {
    for (let i = 0; i < upperCasepalavra.length; i++){
        const letra = upperCasepalavra[i];

        let letraDiv = document.createElement("div");
        letraDiv.className = 'letra';
        letraDiv.textContent = letra;
        containerDiv.appendChild(letraDiv);

    }
}



