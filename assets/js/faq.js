// FAQ page: opens the question named in the URL (#question-id), keeps the URL in sync
// with the last opened question (so it can be copied and shared), and adds search and
// "Expand all". Questions are native <details> elements, so the page still works without this script.
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('details.faq-item'));
  if (!items.length) return;
  var groups = Array.prototype.slice.call(document.querySelectorAll('.faq-group'));
  var searchBox = document.querySelector('.faq-search');
  var search = document.getElementById('faq-search');
  var empty = document.getElementById('faq-empty');
  var toggle = document.getElementById('faq-toggle-all');
  var bulk = false;

  function visibleItems() {
    return items.filter(function (d) { return !d.hidden; });
  }

  function updateToggle() {
    var v = visibleItems();
    var allOpen = v.length > 0 && v.every(function (d) { return d.open; });
    toggle.textContent = allOpen ? 'Collapse all' : 'Expand all';
  }

  function openFromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    var el = id && document.getElementById(id);
    if (el && el.classList.contains('faq-item')) {
      el.open = true;
      el.scrollIntoView();
    }
  }

  items.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open && !bulk && history.replaceState) history.replaceState(null, '', '#' + d.id);
      updateToggle();
    });
  });

  toggle.hidden = false;
  toggle.addEventListener('click', function () {
    var v = visibleItems();
    var openAll = !v.every(function (d) { return d.open; });
    bulk = true;
    v.forEach(function (d) { d.open = openAll; });
    // toggle events fire asynchronously, so release the flag after they have run
    setTimeout(function () { bulk = false; updateToggle(); }, 0);
  });

  var texts = items.map(function (d) { return d.textContent.toLowerCase(); });
  searchBox.hidden = false;
  search.addEventListener('input', function () {
    var terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    var shown = 0;
    items.forEach(function (d, i) {
      var match = terms.every(function (t) { return texts[i].indexOf(t) !== -1; });
      d.hidden = !match;
      if (match) shown++;
    });
    groups.forEach(function (g) {
      g.hidden = !g.querySelector('details.faq-item:not([hidden])');
    });
    empty.hidden = shown !== 0;
    updateToggle();
  });

  window.addEventListener('hashchange', openFromHash);
  openFromHash();
})();
