var _paq = window._paq || [];

_paq.push(['trackPageView']);
_paq.push(['enableHeartBeatTimer']);
_paq.push(['enableLinkTracking']);

(function() {
  var u="https://analytics.yanirmor.com/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '3']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();