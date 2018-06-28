/*****************
ScrollReveal
*****************/

window.sr = ScrollReveal({ reset: true });
if (sr.isSupported()) {
        document.documentElement.classList.add('sr');
      }

sr.reveal('.products-title', { duration: 500, scale: 1 });
sr.reveal('.cards', { duration: 500, scale: 1 });
sr.reveal('.avatar', { duration: 1000 }, 100);
sr.reveal('.whoweare-title', { duration: 500, scale: 1 });
