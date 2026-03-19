document
  .getElementById("cadastro_pet")
  .addEventListener("submit", async (event) => {
    try {
      event.preventDefault();

      var dadosBody = {
        nome: document.getElementById("campo_nome").value,
        tipo: document.getElementById("campo_tipo").value,
        raca: document.getElementById("campo_raca").value,
        idade: document.getElementById("campo_idade").value,
        sexo: document.getElementById("campo_sexo").value,
        porte: document.getElementById("campo_porte").value,
        descricao: document.getElementById("campo_descricao").value,
        imagem: document.getElementById("campo_url").value,
        cor: "caramelo",
      };

      var resposta = await fetch("http://localhost:3000/api/pets", {
        method: "POST",
        body: JSON.stringify(dadosBody),
        headers: {
          "Content-Type": "application/json", // obrigatorio passar isso
        },
      });

      if (resposta.ok === false) {
        throw new Error();
      }

      alert("Cadastrado com sucesso");
      limparCampos();
      window.location.href = "../filtros_do_tipo_de_pets/pets.html";
    } catch {
      alert("Erro ao cadastrar o pet. Entre em contato com 4002-8922");
    }
  });

function limparCampos() {
  document.getElementById("campo_nome").value = "";
}

/*

Codigo com then() e catch()

document
  .getElementById("cadastro_pet")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    var dadosBody = {
      nome: document.getElementById("campo_nome").value,
      tipo: document.getElementById("campo_tipo").value,
      raca: document.getElementById("campo_raca").value,
      idade: document.getElementById("campo_idade").value,
      sexo: document.getElementById("campo_sexo").value,
      porte: document.getElementById("campo_porte").value,
      descricao: document.getElementById("campo_descricao").value,
      imagem: document.getElementById("campo_url").value,
      cor: "caramelo",
    };

    fetch("http://localhost:3000/api/pets", {
      method: "POST",
      body: JSON.stringify(dadosBody),
      headers: {
        "Content-Type": "application/json", // obrigatorio passar isso
      },
    })
      .then((resposta) => {
        if (resposta.ok === false) {
          throw new Error();
        }

        alert("Cadastrado com sucesso");
        limparCampos();
        window.location.href = "../filtros_do_tipo_de_pets/pets.html";
      })
      .catch(() => {
        alert("Erro ao cadastrar o pet. Entre em contato com 4002-8922");
      });
  });

  */
