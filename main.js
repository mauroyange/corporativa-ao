// Menu do telemóvel, sombra do cabeçalho, aviso de erro do formulário e ano no rodapé.
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

  // Sombra discreta no cabeçalho depois de começar a descer a página.
  var topo = document.querySelector('.topo');
  if (topo) {
    var actualizar = function () { topo.classList.toggle('com-sombra', window.scrollY > 8); };
    window.addEventListener('scroll', actualizar, { passive: true });
    actualizar();
  }

  // Entrada suave dos blocos marcados com .revelar quando aparecem no ecrã.
  var blocos = document.querySelectorAll('.revelar');
  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visivel');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    blocos.forEach(function (bloco) { observador.observe(bloco); });
  } else {
    blocos.forEach(function (bloco) { bloco.classList.add('visivel'); });
  }

  // O enviar.php volta com ?erro=1 quando o email não pôde ser enviado.
  if (/[?&]erro=1/.test(window.location.search)) {
    var erro = document.getElementById('erro-envio');
    if (erro) erro.hidden = false;
  }

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
