// Minimal JS — highlight active nav link, mark visited course pages.
(function () {
  // ---------- Active top-nav highlighting ----------
  var path = window.location.pathname;
  var navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach(function (a) {
    var href = a.getAttribute('href') || '';
    // strip trailing index.html for comparison
    var clean = href.replace(/index\.html$/, '');
    var pathClean = path.replace(/index\.html$/, '');
    if (clean === '/' && pathClean === '/') {
      a.classList.add('active');
      return;
    }
    if (clean !== '/' && pathClean.indexOf(clean) === 0) {
      a.classList.add('active');
    }
  });

  // ---------- Sidebar active highlighting ----------
  var sideLinks = document.querySelectorAll('.course-sidebar a');
  sideLinks.forEach(function (a) {
    var href = a.getAttribute('href') || '';
    var clean = href.replace(/index\.html$/, '');
    var pathClean = path.replace(/index\.html$/, '');
    if (clean === pathClean) {
      a.classList.add('active');
    }
  });

  // ---------- Mark visited pages (very light progress tracking) ----------
  try {
    var key = 'vibecoding:visited';
    var visited = JSON.parse(localStorage.getItem(key) || '[]');
    if (path.indexOf('/course/') === 0 && visited.indexOf(path) === -1) {
      visited.push(path);
      localStorage.setItem(key, JSON.stringify(visited));
    }
    // Add a small dot to sidebar entries for visited pages
    sideLinks.forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (visited.indexOf(href) !== -1) {
        a.setAttribute('data-visited', 'true');
      }
    });
  } catch (e) {
    // localStorage may be unavailable in some contexts; fail silently
  }
})();
