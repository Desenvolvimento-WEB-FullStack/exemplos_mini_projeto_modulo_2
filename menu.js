function carregarMenu() {
  var urlAtual = window.location.pathname;

  var menuAtual = `
  <div class="menu">
      <a href="tela1.html" class="${urlAtual === "/tela1.html" ? "active" : ""}">Tela 1</a>
      <a href="tela2.html" class="${urlAtual === "/tela2.html" ? "active" : ""}">Tela 2</a>
    </div>
  `;

  document.body.insertAdjacentHTML("beforebegin", menuAtual);
}

carregarMenu();
