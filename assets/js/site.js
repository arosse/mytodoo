// Closes the "Apps" dropdown when clicking outside it or pressing Escape.
// The dropdown itself is a native <details> element, so it still works if this script fails to load.
document.addEventListener('click', function (e) {
  document.querySelectorAll('details.dropdown[open]').forEach(function (d) {
    if (!d.contains(e.target)) d.removeAttribute('open');
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('details.dropdown[open]').forEach(function (d) {
    d.removeAttribute('open');
    d.querySelector('summary').focus();
  });
});
