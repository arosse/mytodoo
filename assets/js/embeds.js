// Social embeds (Instagram / TikTok) for the Formula 10 page.
// Each embed loads when its card scrolls near the viewport, so visitors who never
// reach the section don't trigger any third-party requests. To go back to
// click-to-load, restore a button with [data-load] and a click handler.
(function () {
  function load(card) {
    var type = card.getAttribute('data-embed');
    var url = card.getAttribute('data-url');
    var handle = card.getAttribute('data-handle');
    var holder = document.createElement('div');
    holder.className = 'embed-live';
    var src;

    if (type === 'instagram') {
      holder.innerHTML =
        '<blockquote class="instagram-media" data-instgrm-permalink="' + url + '" data-instgrm-version="14" ' +
        'style="background:#fff;border:0;border-radius:3px;margin:0;max-width:100%;min-width:0;padding:0;width:100%">' +
        '<a href="' + url + '" target="_blank" rel="noopener">View @' + handle + ' on Instagram</a></blockquote>';
      src = 'https://www.instagram.com/embed.js';
    } else if (type === 'tiktok') {
      holder.innerHTML =
        '<blockquote class="tiktok-embed" cite="' + url + '" data-unique-id="' + handle + '" data-embed-type="creator" ' +
        'style="max-width:780px;min-width:0;margin:0">' +
        '<section><a href="' + url + '" target="_blank" rel="noopener">@' + handle + '</a></section></blockquote>';
      src = 'https://www.tiktok.com/embed.js';
    } else {
      return;
    }

    card.innerHTML = '';
    card.classList.add('loaded');
    card.appendChild(holder);

    var script = document.createElement('script');
    script.async = true;
    script.src = src;
    document.body.appendChild(script);
  }

  var cards = document.querySelectorAll('.embed-card[data-embed]');
  if (!('IntersectionObserver' in window)) {
    cards.forEach(load);
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        load(entry.target);
      }
    });
  }, { rootMargin: '300px 0px' });
  cards.forEach(function (card) { observer.observe(card); });
})();
