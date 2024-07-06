// Captura o clique no botão e chama getData
const simularBtn = document.querySelector("#simularBtn");
simularBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#nameInput");
  const moneyInput = document.querySelector("#moneyInput");
  const timeSelect = document.querySelector("#timeSelect");

  const nameValue = nameInput.value;
  const moneyValue = moneyInput.value;
  const timeValue = timeSelect.value * 12;

  if (nameValue === "" || moneyValue === "") {
    window.alert("Preencha os campos");
    return null;
  }

  Api(moneyValue, timeValue, nameValue);
});

async function Api(money, time, name) {
  //console.log(time);
  const fees = 0.00517;
  const expr = `${money} * (((1 + ${fees}) ^ ${time} - 1) / ${fees})`;
  //console.log(typeof expr);
  const response = await fetch(
    `http://api.mathjs.org/v4/?expr=${encodeURIComponent(expr)}`
  );
  const data = await response.json();
  //console.log(data);
  window.location.href = `./src/pages/result.html?name=${encodeURIComponent(
    name
  )}&money=${encodeURIComponent(money)}&time=${encodeURIComponent(
    time
  )}&result=${encodeURIComponent(data)}`;
}
