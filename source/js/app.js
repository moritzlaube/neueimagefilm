/*****************
ScrollReveal
*****************/
window.sr = ScrollReveal({ reset: true });
if (sr.isSupported()) {
        document.documentElement.classList.add('sr');
      }

sr.reveal('.products-title');
