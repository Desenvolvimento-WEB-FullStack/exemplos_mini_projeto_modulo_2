async function carregarPets(tipo) {
  var resposta = await fetch("http://localhost:3000/api/pets" + tipo);
  var pets = await resposta.json();

  document.getElementById("lista").innerHTML = "";

  pets.forEach((pet) => {
    var itemDaListaHTML = `<li> 
    <img src=${pet.imagem} width="30px" /> 
    Pet: ${pet.nome}
    <a href="../passar_a_imagem_do_pet_para_outra_tela/form.html?imagem=${pet.imagem}"> Quero adotar <a/>
    </li>
    `;

    document
      .getElementById("lista")
      .insertAdjacentHTML("beforeend", itemDaListaHTML);
  });
}

/*
document
  .getElementById("todos")
  .addEventListener("click", () => carregarPets("?tipo=Gato"));
*/

carregarPets("");
