document.getElementById('btnApi').addEventListener('click', async function() {
    const statusCode = document.getElementById('statusCode').value;
    const imageUrl = `https://http.dog/${statusCode}.jpg`; // cria a URL da imagem

    try {
        const response = await fetch(imageUrl); // faz a requisição HTTP!

        if (!response.ok) {
            throw new Error(`Erro: código ${statusCode} inválido`);
        }

        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = `<img src="${imageUrl}" alt="Imagem do código ${statusCode}" style="max-width: 100%;">`;

    } catch (error) {
        alert(`Erro ao carregar a imagem: ${error.message}`);
    }
});