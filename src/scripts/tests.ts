import { setDropdown } from './dropdown';

const BN = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const toBn = (n: number) => String(n).replace(/\d/g, (d) => BN[+d]);

document.querySelectorAll<HTMLElement>('[data-tests]').forEach((root) => {
  const rows = [...root.querySelectorAll<HTMLElement>('[data-row]')];
  const q = root.querySelector<HTMLInputElement>('[data-q]')!;
  const dd = root.querySelector<HTMLElement>('[data-dd]')!;
  const clear = root.querySelector<HTMLElement>('[data-clear]')!;
  const empty = root.querySelector<HTMLElement>('.tx-empty')!;
  const table = root.querySelector<HTMLElement>('.ttable')!;
  const n = root.querySelector<HTMLElement>('[data-n]')!;
  const nb = root.querySelector<HTMLElement>('[data-nb]')!;

  const apply = () => {
    const cat = dd.dataset.value || 'all';
    const words = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let shown = 0;
    rows.forEach((r) => {
      const ok = (cat === 'all' || r.dataset.cat === cat) && words.every((w) => r.dataset.s!.includes(w));
      r.hidden = !ok;
      if (ok) shown++;
    });
    n.textContent = String(shown);
    nb.textContent = toBn(shown);
    empty.hidden = shown !== 0;
    table.hidden = shown === 0;
    clear.hidden = !q.value;
  };

  q.addEventListener('input', apply);
  dd.addEventListener('dd-change', apply);
  clear.addEventListener('click', () => { q.value = ''; apply(); q.focus(); });
  root.querySelector('[data-reset]')?.addEventListener('click', () => { q.value = ''; setDropdown(dd, 'all', true); apply(); });

  const preset = new URLSearchParams(location.search).get('cat');
  if (preset) setDropdown(dd, preset, true);
  const preQ = new URLSearchParams(location.search).get('q');
  if (preQ) q.value = preQ;
  apply();
});
