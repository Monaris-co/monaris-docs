(function () {
  var css = 'nav a[href="/"], aside a[href="/"], header a[href="/"], [class*="sidebar"] a[href="/"], [class*="Sidebar"] a[href="/"], [class*="topbar"] a[href="/"] { color: #CCFF04 !important; }';
  var style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
})();
