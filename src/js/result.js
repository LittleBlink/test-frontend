// Função para exibir o resultado na página
function displayResult() {
  const result = document.querySelector("#result");
  const resultContent = document.createElement("div");
  resultContent.classList.add("resultContent");

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const data = {
    name: params.get("name"),
    money: params.get("money"),
    time: params.get("time"),
    res: params.get("result"),
  };
  console.log(data);

  // Verifica se a função getData retornou algum dado
  if (data) {
    resultContent.innerHTML = `
      <h1>Olá ${data.name}</h1>
      <p>Juntando R$ ${parseFloat(data.money)
        .toFixed(2)
        .replace(".", ",")} todo mês, você terá R$ ${parseFloat(
      data.res
    ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} em ${
      data.time / 12
    } anos</p>
      <button id="simularNBtn">SIMULAR NOVAMENTE</button>
    `;
    result.appendChild(resultContent);
  } else {
    resultContent.textContent = "Erro ao obter os dados.";
    result.appendChild(resultContent);
  }
}

// Chama a função para exibir o resultado na página
displayResult();

const simularNBtn = document.querySelector("#simularNBtn");
simularNBtn.addEventListener("click", () => {
  window.location.href = "../../../index.html";
});
