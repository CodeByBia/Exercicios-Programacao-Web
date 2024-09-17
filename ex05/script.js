const btnSeparar = document.getElementById('btnSeparar');
const containerDiv = document.getElementById('containerDiv');

    btnSeparar.onclick = function () {
        const palavra = document.getElementById('input-palavra').value; 
        const upperCasepalavra = palavra.toUpperCase();

        for (let i = 0; i < upperCasepalavra.length; i++) {
            const letra = upperCasepalavra[i];

            let letraDiv = document.createElement("div"); 
            letraDiv.className = 'letra'; 
            letraDiv.textContent = letra; 
            containerDiv.appendChild(letraDiv); 

        }
    };
