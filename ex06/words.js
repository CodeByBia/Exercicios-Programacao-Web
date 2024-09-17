const words = [
    { word: 'uva' },
    { word: 'elefante' },
    { word: 'navio' },
    { word: 'telefone' },
    { word: 'quadrado' },
    { word: 'floresta' },
    { word: 'google' },
    { word: 'facada' },
    { word: 'teclado' },
    { word: 'hospital' }
];

export default function getWord(){
    const index = Math.floor(Math.random() * words.length);

    return words[index];
}
