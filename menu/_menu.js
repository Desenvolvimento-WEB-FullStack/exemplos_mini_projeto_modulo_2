function carregarMenu() {
  var menuHTML = `
    <div class="menu">
      <a id="tela_1" href="tela1.html">Tela 1</a>
      <a id="tela_2" href="tela2.html">Tela 2</a>
    </div>
    `;

  // afterbegin -> coloca logo apos
  document.body.insertAdjacentHTML("afterbegin", menuHTML);
  deixarMenuAtivo();
}

function deixarMenuAtivo() {
  var url_atual = window.location.pathname;

  if (url_atual === "/menu/tela1.html") {
    document.getElementById("tela_1").classList.add("menu_ativo");
  } else if (url_atual === "/menu/tela2.html") {
    document.getElementById("tela_2").classList.add("menu_ativo");
  }
}

carregarMenu();
