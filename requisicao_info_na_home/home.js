async function carregarIndicadores() {
  var resposta = await fetch("http://localhost:3000/api/info");
  var dados = await resposta.json();

  document.getElementById("valor_disponiveis").innerText = dados.disponiveis;
}

carregarIndicadores();
