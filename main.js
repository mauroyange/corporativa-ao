// Menu do telemóvel e ano no rodapé.
(function () {
  var botao = document.querySelector('.menu-botao');
  var menu = document.getElementById('menu');

  if (botao && menu) {
    botao.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    // Fecha o menu ao escolher uma secção.
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && menu.classList.contains('aberto')) {
        menu.classList.remove('aberto');
        botao.setAttribute('aria-expanded', 'false');
        botao.setAttribute('aria-label', 'Abrir menu');
      }
    });
  }

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
