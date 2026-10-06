// Fills the TestCircle community stats band from the public, rounded-down
// numbers the backend publishes daily (functions: syncAllPackageNames).
// The band stays hidden unless the data loads, so a failure never shows
// broken or empty numbers.
(function () {
  var band = document.getElementById('community-stats');
  if (!band || !window.fetch) return;

  // The "?h=" hour bucket gives browsers their own cache entry. Without it, the plain URL can be
  // served from Google's edge cache with a copy that has no CORS header (e.g. one created by a
  // request without an Origin), which would make the browser block the response.
  var url = 'https://storage.googleapis.com/testcircle-prod.firebasestorage.app/public/community_stats.json' +
    '?h=' + Math.floor(Date.now() / 3600000);

  fetch(url)
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function (data) {
      var shown = 0;
      band.querySelectorAll('[data-stat]').forEach(function (el) {
        var value = Number(data[el.getAttribute('data-stat')]);
        if (isFinite(value) && value > 0) {
          el.textContent = value.toLocaleString('en-US') + '+';
          shown++;
        } else {
          el.parentNode.hidden = true;
        }
      });
      if (shown) band.hidden = false;
    })
    .catch(function () { /* leave the band hidden */ });
})();
