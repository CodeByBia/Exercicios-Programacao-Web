const words = [
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
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const btnNew = document.querySelector(".new");
btnNew.onclick = () => init();
let indexImg;

function init() {
  indexImg = 0;
  img.src = `./img/forca0.png`;

  generateGuessSection();
  generateButtons();
}

function getWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

function generateGuessSection() {
  contentGuessWord.textContent = "";

  const word = getWord();

  Array.from(word).forEach((letter) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("word", letter.toUpperCase());
    contentGuessWord.appendChild(span);
    console.log(word);
  });

}

function wrongAnswer() {
  indexImg++;
  img.src = `./img/forca${indexImg}.png`;

  if (indexImg === 7) {
    setTimeout(() => {
      alert("Perdeu!");
      init();
    }, 100);
  }
}

function verifyLetter(letter) {
  const arr = document.querySelectorAll(`[word="${letter}"]`);

  if (!arr.length) wrongAnswer();

  arr.forEach((e) => {
    e.textContent = letter;
  });

  const spans = document.querySelectorAll(`.guess-word span`);
  const won = !Array.from(spans).find((span) => span.textContent === "_");

  if (won) {
    setTimeout(() => {
      alert("Ganhou!!!");
      init();
    }, 100);
  }
}

function generateButtons() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase();
    btn.textContent = letter;

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
      verifyLetter(letter);
    };

    contentBtns.appendChild(btn);
  }
}
