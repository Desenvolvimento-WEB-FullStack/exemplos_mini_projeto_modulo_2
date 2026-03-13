async function carregarPets(tipo) {
  var resposta = await fetch("http://localhost:3000/api/pets");
  var pets = await resposta.json();

  document.getElementById("lista").innerHTML = "";

  pets.forEach((pet) => {
    if (pet.tipo === tipo || tipo === "") {
      var itemHTML = `<li>
    <img src=${pet.imagem} width="100px" />
    Pet: ${pet.nome}
    </li>`;

      document
        .getElementById("lista")
        .insertAdjacentHTML("beforeend", itemHTML);
    }
  });
}

carregarPets("");
