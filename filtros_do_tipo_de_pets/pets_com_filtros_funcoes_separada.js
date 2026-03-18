async function carregarPets() {
  var resposta = await fetch("http://localhost:3000/api/pets");
  var pets = await resposta.json();

  document.getElementById("lista").innerHTML = "";

  pets.forEach((pet) => {
    var itemHTML = `<li>
    <img src=${pet.imagem} width="100px" />
    Pet: ${pet.nome}
    </li>`;

    document.getElementById("lista").insertAdjacentHTML("beforeend", itemHTML);
  });
}

async function carregarCachorros() {
  var resposta = await fetch("http://localhost:3000/api/pets?tipo=cachorro");
  var pets = await resposta.json();

  document.getElementById("lista").innerHTML = "";

  pets.forEach((pet) => {
    var itemHTML = `<li>
    <img src=${pet.imagem} width="100px" />
    Pet: ${pet.nome}
    </li>`;

    document.getElementById("lista").insertAdjacentHTML("beforeend", itemHTML);
  });
}

async function carregarGatos() {
  var resposta = await fetch("http://localhost:3000/api/pets?tipo=gato");
  var pets = await resposta.json();

  document.getElementById("lista").innerHTML = "";

  pets.forEach((pet) => {
    var itemHTML = `<li>
    <img src=${pet.imagem} width="100px" />
    Pet: ${pet.nome}
    </li>`;

    document.getElementById("lista").insertAdjacentHTML("beforeend", itemHTML);
  });
}

carregarPets();
