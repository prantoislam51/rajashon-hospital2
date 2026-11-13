const root = document.documentElement;
type Lang = 'en' | 'bn';

export const getLang = (): Lang => (root.lang === 'bn' ? 'bn' : 'en');

function applyAttrs() {
  const l = getLang();
  document.querySelectorAll<HTMLElement>('[data-ph-en]').forEach((el) => {
    (el as HTMLInputElement).placeholder = el.dataset[l === 'bn' ? 'phBn' : 'phEn'] || '';
  });
  document.querySelectorAll<HTMLElement>('[data-aria-en]').forEach((el) => {
    el.setAttribute('aria-label', el.dataset[l === 'bn' ? 'ariaBn' : 'ariaEn'] || '');
  });
  const title = document.querySelector<HTMLElement>('title[data-en]');
  if (title) document.title = title.dataset[l === 'bn' ? 'bn' : 'en'] || document.title;
}

function setLang(l: Lang) {
  root.lang = l;
  try { localStorage.setItem('rj-lang', l); } catch {}
  applyAttrs();
  document.dispatchEvent(new CustomEvent('langchange', { detail: l }));
}

function setTheme(t: 'light' | 'dark') {
  root.dataset.theme = t;
  try { localStorage.setItem('rj-theme', t); } catch {}
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', t === 'dark' ? '#0b1b1b' : '#f7f6f1');
}

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const langBtn = target.closest<HTMLElement>('[data-set-lang]');
  if (langBtn) setLang(langBtn.dataset.setLang === 'bn' ? 'bn' : 'en');

  if (target.closest('[data-theme-toggle]')) setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');

  if (target.closest('[data-nav-toggle]')) {
    const open = document.body.classList.toggle('nav-open');
    document.querySelector('[data-nav-toggle]')?.setAttribute('aria-expanded', String(open));
  } else if (target.closest('.drawer a') || target.closest('[data-nav-scrim]') || target.closest('[data-nav-close]')) {
    document.body.classList.remove('nav-open');
    document.querySelector('[data-nav-toggle]')?.setAttribute('aria-expanded', 'false');
  }

  if (target.closest('[data-banner-close]')) {
    document.querySelector('.demo-bar')?.remove();
    try { sessionStorage.setItem('rj-banner', '1'); } catch {}
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.body.classList.remove('nav-open');
    document.querySelector('[data-nav-toggle]')?.setAttribute('aria-expanded', 'false');
  }
});
// close the drawer if the window grows to desktop width
matchMedia('(min-width: 1041px)').addEventListener('change', (m) => {
  if (m.matches) document.body.classList.remove('nav-open');
});

// header shadow
const header = document.querySelector('.site-header');
const onScroll = () => header?.classList.toggle('is-stuck', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// reveal on scroll
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  items.forEach((el) => io.observe(el));
} else items.forEach((el) => el.classList.add('in'));

try { if (sessionStorage.getItem('rj-banner')) document.querySelector('.demo-bar')?.remove(); } catch {}
applyAttrs();
