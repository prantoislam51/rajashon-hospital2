document.querySelectorAll<HTMLElement>('[data-slider]').forEach((root) => {
  const slides = [...root.querySelectorAll<HTMLElement>('.slide')];
  const dots = [...root.querySelectorAll<HTMLElement>('[data-dot]')];
  let i = 0;
  let timer: number | undefined;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const go = (n: number) => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => {
      s.classList.toggle('is-active', k === i);
      s.setAttribute('aria-hidden', String(k !== i));
    });
    dots.forEach((d, k) => d.setAttribute('aria-selected', String(k === i)));
  };
  const play = () => { if (reduce) return; stop(); timer = window.setInterval(() => go(i + 1), 5200); };
  const stop = () => { if (timer) clearInterval(timer); };

  root.querySelector('[data-prev]')?.addEventListener('click', () => { go(i - 1); play(); });
  root.querySelector('[data-next]')?.addEventListener('click', () => { go(i + 1); play(); });
  dots.forEach((d) => d.addEventListener('click', () => { go(Number(d.dataset.dot)); play(); }));
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', play);

  let x0 = 0;
  root.addEventListener('pointerdown', (e) => { x0 = e.clientX; });
  root.addEventListener('pointerup', (e) => {
    const dx = e.clientX - x0;
    if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); play(); }
  });
  play();
});
