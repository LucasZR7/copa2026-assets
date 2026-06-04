/* Loader SÍNCRONO — busca o dataset real em runtime e o injeta ANTES do app rodar.
   O <script src> estático carrega só estes ~700 bytes; o Claude Design NÃO ingere os 3.3MB.
   GitHub Pages manda CORS (*), então o XHR síncrono funciona. */
(function () {
  if (window.COPA_PSTATS) return;
  var URL_FULL = 'https://lucaszr7.github.io/copa2026-assets/jogadores_stats_full.js';
  try {
    var x = new XMLHttpRequest();
    x.open('GET', URL_FULL, false);   // síncrono: bloqueia até carregar
    x.send();
    if (x.status >= 200 && x.status < 300) { (0, eval)(x.responseText); }
  } catch (e) {
    // fallback assíncrono (o app já faz polling de window.COPA_PSTATS)
    var s = document.createElement('script');
    s.src = URL_FULL;
    document.head.appendChild(s);
  }
})();
