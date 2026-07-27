(function () {
  var header = document.getElementById('site-header');
  var toggle = document.getElementById('mobile-menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileMenu.style.display === 'block';
      mobileMenu.style.display = isOpen ? 'none' : 'block';
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  function checkMobile() {
    if (toggle && mobileMenu) {
      var isMobile = window.innerWidth < 1024;
      toggle.style.display = isMobile ? 'block' : 'none';
      if (!isMobile) {
        mobileMenu.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  }

  window.addEventListener('resize', checkMobile);
  checkMobile();

  function initFadeIn() {
    var elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(function (el) { observer.observe(el); });
    } else {
      elements.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  initFadeIn();

  window.createSwiper = function (prefix, total) {
    var ci = 0;
    var vp = null;
    var tk = null;

    function ensure() {
      if (!vp) vp = document.getElementById(prefix + 'SwiperViewport');
      if (!tk) tk = document.getElementById(prefix + 'SwiperTrack');
    }

    function moveTo() {
      ensure();
      if (!vp || !tk) return;
      var w = vp.clientWidth;
      tk.style.transform = 'translateX(' + (-ci * w) + 'px)';
      for (var i = 0; i < total; i++) {
        var d = document.getElementById(prefix + 'Dot' + i);
        if (d) {
          d.style.background = i === ci ? 'var(--color-text-primary)' : 'var(--color-border-subtle)';
          d.style.transform = i === ci ? 'scale(1.3)' : 'scale(1)';
        }
      }
      var c = document.getElementById(prefix + 'Counter');
      if (c) c.textContent = (ci + 1) + ' / ' + total;
    }

    window[prefix + 'Slide'] = function (dir) {
      ci = ci + dir;
      if (ci > total - 1) ci = 0;
      if (ci < 0) ci = total - 1;
      moveTo();
    };

    window[prefix + 'Go'] = function (i) {
      ci = Math.max(0, Math.min(total - 1, i));
      moveTo();
    };

    window['open' + prefix.charAt(0).toUpperCase() + prefix.slice(1) + 'Lightbox'] = function (src) {
      var lb = document.getElementById(prefix + 'Lightbox');
      var img = document.getElementById(prefix + 'LightboxImg');
      if (lb && img) {
        img.src = src;
        lb.style.display = 'flex';
        requestAnimationFrame(function () { lb.classList.add('open'); });
      }
    };

    var sx = 0;
    var el = document.getElementById(prefix + 'SwiperContainer');
    if (el) {
      el.addEventListener('touchstart', function (e) {
        sx = e.touches[0].clientX;
      }, { passive: true });
      el.addEventListener('touchend', function (e) {
        var d = sx - e.changedTouches[0].clientX;
        if (Math.abs(d) > 50) window[prefix + 'Slide'](d > 0 ? 1 : -1);
      }, { passive: true });
    }

    var lbEl = document.getElementById(prefix + 'Lightbox');
    if (lbEl) {
      lbEl.addEventListener('click', function () {
        lbEl.classList.remove('open');
        setTimeout(function () { lbEl.style.display = 'none'; }, 350);
      });
    }

    window.addEventListener('resize', moveTo);
    setTimeout(moveTo, 100);

    return { slide: window[prefix + 'Slide'], go: window[prefix + 'Go'] };
  };

  window.setupKeyboardNav = function (prefix) {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') window[prefix + 'Slide'](-1);
      if (e.key === 'ArrowRight') window[prefix + 'Slide'](1);
    });
  };
})();
