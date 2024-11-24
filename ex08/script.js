const ulDespesas = document.getElementById("ulDespesas");
const inputDescricao = document.getElementById("inputDescricao");
const inputValor = document.getElementById("inputValor");
const btAdicionar = document.getElementById("btAdicionar");

// URL e headers da API
const baseURL = "https://parseapi.back4app.com/classes/despesa";
const headers = {
  "X-Parse-Application-Id": "dM71vWpVmgsm7vOQhK6nSLtqDT1vgv8D3GENv74M",
  "X-Parse-REST-API-Key": "QJSNc49zI2FEA0LoYWPusyIeTnmNFxKMsaAod643",
  "Content-Type": "application/json"
};

// Função para listar as despesas e atualizar o somatório
const listarDespesas = async () => {
  try {
    const response = await fetch(baseURL, { method: "GET", headers });
    if (!response.ok) throw new Error("Erro ao acessar o servidor");
    const data = await response.json();

    // Atualiza a lista de despesas no HTML
    ulDespesas.innerHTML = "";
    let somatorio = 0;
    data.results.forEach((despesa) => {
      const li = document.createElement("li");
      li.textContent = `${despesa.descricao} - R$ ${despesa.valor.toFixed(2)} `;

      // Botão para editar o valor da despesa
      const btEditar = document.createElement("button");
      btEditar.textContent = "Editar";
      btEditar.onclick = () => editarDespesa(despesa);
      li.appendChild(btEditar);

      // Botão para excluir a despesa
      const btExcluir = document.createElement("button");
      btExcluir.textContent = "Excluir";
      btExcluir.onclick = () => excluirDespesa(despesa.objectId);
      li.appendChild(btExcluir);

      ulDespesas.appendChild(li);

      // Soma o valor da despesa para o total
      somatorio += despesa.valor;
    });

    // Atualiza o somatório no HTML
    document.getElementById("valorTotal").textContent = `R$ ${somatorio.toFixed(2)}`;
  } catch (error) {
    console.error(error);
    alert("Erro ao carregar as despesas.");
  }
};

// Função para adicionar uma despesa
const adicionarDespesa = async () => {
  const descricao = inputDescricao.value.trim();
  const valor = parseFloat(inputValor.value.trim());

  if (!descricao || isNaN(valor) || valor <= 0) {
    alert("Por favor, preencha corretamente os campos.");
    return;
  }

  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers,
      body: JSON.stringify({ descricao, valor }),
    });

    if (!response.ok) throw new Error("Erro ao adicionar a despesa");

    inputDescricao.value = "";
    inputValor.value = "";
    listarDespesas();
  } catch (error) {
    console.error(error);
    alert("Erro ao adicionar a despesa.");
  }
};

// Função para editar uma despesa
const editarDespesa = async (despesa) => {
  const novoValor = prompt("Informe o novo valor:", despesa.valor);
  if (novoValor && !isNaN(novoValor) && parseFloat(novoValor) > 0) {
    try {
      const response = await fetch(`${baseURL}/${despesa.objectId}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ valor: parseFloat(novoValor) }),
      });

      if (!response.ok) throw new Error("Erro ao editar a despesa");

      listarDespesas();
    } catch (error) {
      console.error(error);
      alert("Erro ao editar a despesa.");
    }
  }
};

// Função para excluir uma despesa
const excluirDespesa = async (id) => {
  if (confirm("Tem certeza que deseja excluir essa despesa?")) {
    try {
      const response = await fetch(`${baseURL}/${id}`, {
        method: "DELETE",
        headers,
      });

      if (!response.ok) throw new Error("Erro ao excluir a despesa");

      listarDespesas();
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir a despesa.");
    }
  }
};

// Ao carregar a página, listar as despesas
window.onload = listarDespesas;

// Ao clicar no botão de adicionar, chama a função para adicionar a despesa
btAdicionar.onclick = adicionarDespesa;
