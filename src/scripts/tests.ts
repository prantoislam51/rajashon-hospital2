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

  const pagination = root.querySelector<HTMLElement>('[data-pagination]')!;
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-page-prev]')!;
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-page-next]')!;
  const pageNumbers = root.querySelector<HTMLElement>('[data-page-numbers]')!;

  const PAGE_SIZE = 100;
  let currentPage = 1;
  let matchingRows: HTMLElement[] = [];

  const scrollToTop = () => {
    const rect = root.getBoundingClientRect();
    if (rect.top < 0) {
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderPagination = (totalPages: number) => {
    if (!pagination) return;
    if (totalPages <= 1) {
      pagination.hidden = true;
      return;
    }
    pagination.hidden = false;
    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages;

    if (!pageNumbers) return;
    pageNumbers.innerHTML = '';

    const getPages = () => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      if (currentPage <= 4) {
        return [1, 2, 3, 4, 5, '...', totalPages];
      }
      if (currentPage >= totalPages - 3) {
        return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      }
      return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };

    getPages().forEach((p) => {
      if (p === '...') {
        const span = document.createElement('span');
        span.className = 'tx-page-ellipsis';
        span.textContent = '…';
        pageNumbers.appendChild(span);
      } else {
        const num = p as number;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `tx-page-num ${num === currentPage ? 'is-active' : ''}`;
        btn.dataset.page = String(num);
        btn.setAttribute('aria-label', `Page ${num}`);
        btn.setAttribute('aria-current', num === currentPage ? 'page' : 'false');
        btn.innerHTML = `<span class="l-en">${num}</span><span class="l-bn">${toBn(num)}</span>`;
        pageNumbers.appendChild(btn);
      }
    });
  };

  const showPage = () => {
    const totalCount = matchingRows.length;
    const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    rows.forEach((r) => { r.hidden = true; });
    matchingRows.slice(start, end).forEach((r) => { r.hidden = false; });

    renderPagination(totalPages);
  };

  const apply = (resetPage = true) => {
    if (resetPage) currentPage = 1;
    const cat = dd.dataset.value || 'all';
    const words = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);

    matchingRows = rows.filter((r) => {
      return (cat === 'all' || r.dataset.cat === cat) && words.every((w) => r.dataset.s!.includes(w));
    });

    const shown = matchingRows.length;
    n.textContent = String(shown);
    nb.textContent = toBn(shown);
    empty.hidden = shown !== 0;
    table.hidden = shown === 0;
    clear.hidden = !q.value;

    showPage();
  };

  prevBtn?.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showPage();
      scrollToTop();
    }
  });

  nextBtn?.addEventListener('click', () => {
    const totalPages = Math.ceil(matchingRows.length / PAGE_SIZE);
    if (currentPage < totalPages) {
      currentPage++;
      showPage();
      scrollToTop();
    }
  });

  pageNumbers?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-page]');
    if (!btn) return;
    const p = Number(btn.dataset.page);
    if (p && p !== currentPage) {
      currentPage = p;
      showPage();
      scrollToTop();
    }
  });

  q.addEventListener('input', () => apply(true));
  dd.addEventListener('dd-change', () => apply(true));
  clear.addEventListener('click', () => { q.value = ''; apply(true); q.focus(); });
  root.querySelector('[data-reset]')?.addEventListener('click', () => { q.value = ''; setDropdown(dd, 'all', true); apply(true); });

  const preset = new URLSearchParams(location.search).get('cat');
  if (preset) setDropdown(dd, preset, true);
  const preQ = new URLSearchParams(location.search).get('q');
  if (preQ) q.value = preQ;
  const prePage = Number(new URLSearchParams(location.search).get('page'));
  if (prePage && prePage > 1) currentPage = prePage;
  apply(false);
});
