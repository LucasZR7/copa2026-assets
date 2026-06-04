/* Loader runtime — mantém o dataset (~3.6MB) FORA do contexto do Claude Design.
   O <script src> estático carrega só estes ~200 bytes; o arquivo real é injetado
   em runtime e o app (que já faz polling de window.COPA_PSTATS) o detecta. */
(function () {
  if (window.COPA_PSTATS) return;
  var s = document.createElement('script');
  s.src = 'https://lucaszr7.github.io/copa2026-assets/jogadores_stats_full.js';
  s.async = false;
  document.head.appendChild(s);
})();
