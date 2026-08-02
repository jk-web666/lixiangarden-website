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
      var w = window.innerWidth;
      var isMobile = w < 1024;
      // 【小米13修复】直接用CSSStyleDeclaration.setProperty加!important，
      // 确保内联样式优先级最高，任何媒体查询/内联都不会把它变回none
      if (isMobile) {
        toggle.style.setProperty('display', 'inline-flex', 'important');
        toggle.style.setProperty('align-items', 'center', 'important');
        toggle.style.setProperty('justify-content', 'center', 'important');
        toggle.style.setProperty('visibility', 'visible', 'important');
        toggle.style.setProperty('opacity', '1', 'important');
      } else {
        toggle.style.setProperty('display', 'none', 'important');
        mobileMenu.style.setProperty('display', 'none', 'important');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  }

  window.addEventListener('resize', checkMobile);
  // 延迟100ms再执行一次，避免页面还没渲染完就误判
  checkMobile();
  setTimeout(checkMobile, 100);
  setTimeout(checkMobile, 500);

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

  /* =========================================================
     FINAL FALLBACK (小米13兼容性兜底)
     就算CSS媒体查询全部失败，JS也能硬改到位：
       1) 移动端汉堡按钮 display 绝对inline-flex
       2) 首页两个section.grid 绝对变单列
       3) 漫游此园引言p标签绝对white-space:normal
     ========================================================= */
  function applyMobileLayoutOverride() {
    var w = window.innerWidth;
    var isMobile = w < 1024;
    var isSmall = w <= 767;

    // 1) 汉堡按钮（无论什么尺寸先清掉display:none，再根据isMobile决定）
    if (toggle) {
      toggle.style.removeProperty('display');
      if (isMobile) {
        toggle.style.setProperty('display', 'inline-flex', 'important');
        toggle.style.setProperty('align-items', 'center', 'important');
        toggle.style.setProperty('justify-content', 'center', 'important');
        toggle.style.setProperty('visibility', 'visible', 'important');
        toggle.style.setProperty('opacity', '1', 'important');
      } else {
        toggle.style.setProperty('display', 'none', 'important');
        if (mobileMenu) mobileMenu.style.setProperty('display', 'none', 'important');
      }
    }

    // 2) 首页两个section / 任何 .featured-teaser —— 小屏强制单列
    if (isSmall) {
      var teasers = document.querySelectorAll(
        '#homeFeatured > div, #homeFeatured .featured-teaser, #homeFeatured .home-featured,' +
        '#homePhilosophy .featured-teaser, #homePhilosophy .philosophy-featured, #homePhilosophy > div > div'
      );
      for (var i = 0; i < teasers.length; i++) {
        var t = teasers[i];
        t.style.setProperty('display', 'grid', 'important');
        t.style.setProperty('grid-template-columns', '1fr', 'important');
        t.style.setProperty('grid-template-rows', 'auto', 'important');
        t.style.setProperty('grid-auto-flow', 'row', 'important');
        t.style.setProperty('gap', '32px', 'important');
        t.style.setProperty('width', '100%', 'important');
      }
      // order重置
      var inner = document.querySelectorAll(
        '#homeFeatured > div > div, #homeFeatured .featured-teaser > div,' +
        '#homePhilosophy .featured-teaser > div, #homePhilosophy .philosophy-featured > div'
      );
      for (var j = 0; j < inner.length; j++) {
        inner[j].style.setProperty('order', 'initial', 'important');
        inner[j].style.setProperty('width', '100%', 'important');
      }
      var secs = document.querySelectorAll('#homeFeatured, #homePhilosophy');
      for (var k = 0; k < secs.length; k++) {
        secs[k].style.setProperty('padding', '64px 24px', 'important');
      }
    } else {
      // 大屏清空JS强制改的内联，让桌面CSS重新接管
      var bigTeasers = document.querySelectorAll(
        '#homeFeatured > div, #homeFeatured .featured-teaser,' +
        '#homePhilosophy .featured-teaser, #homePhilosophy > div > div,' +
        '#homeFeatured > div > div, #homePhilosophy .featured-teaser > div,' +
        '#homeFeatured, #homePhilosophy'
      );
      for (var m = 0; m < bigTeasers.length; m++) {
        bigTeasers[m].style.removeProperty('display');
        bigTeasers[m].style.removeProperty('grid-template-columns');
        bigTeasers[m].style.removeProperty('grid-template-rows');
        bigTeasers[m].style.removeProperty('grid-auto-flow');
        bigTeasers[m].style.removeProperty('gap');
        bigTeasers[m].style.removeProperty('order');
        bigTeasers[m].style.removeProperty('width');
        bigTeasers[m].style.removeProperty('padding');
      }
    }

    // 3) 漫游此园引言 —— 任何尺寸都强制换行、不横溢
    var quotes = document.querySelectorAll(
      'p[data-i18n*="projects-lixian-quote"], #project-1 p'
    );
    for (var q = 0; q < quotes.length; q++) {
      quotes[q].style.setProperty('white-space', 'normal', 'important');
      quotes[q].style.setProperty('word-break', 'break-word', 'important');
      quotes[q].style.setProperty('overflow-wrap', 'break-word', 'important');
      quotes[q].style.setProperty('max-width', '100%', 'important');
      quotes[q].style.setProperty('width', '100%', 'important');
    }
  }

  window.addEventListener('resize', applyMobileLayoutOverride);
  // DOMContentLoaded后立即执行，避免任何时序错过
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyMobileLayoutOverride();
      setTimeout(applyMobileLayoutOverride, 200);
      setTimeout(applyMobileLayoutOverride, 1000);
    });
  } else {
    applyMobileLayoutOverride();
    setTimeout(applyMobileLayoutOverride, 200);
    setTimeout(applyMobileLayoutOverride, 1000);
  }
})();
