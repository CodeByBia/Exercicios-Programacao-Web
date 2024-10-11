async function fetchUsers(){
    const users = document.querySelector("#users");

    try{
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const results = data.results[0]
        users.textContent = `${results.name.first} = ${results.email}`;

    } catch (error){
        users.textContent = `Erro ao carregar o user: ${error}`;

    } finally{ //Uso opcional, foi usada para registrar no console que a tentativa de carregar os posts foi finalizada, independentemente de ter ocorrido um erro
    console.log("Tentativa de carregar os users finalizada"); 
}
}

window.onload = () => fetchUsers();