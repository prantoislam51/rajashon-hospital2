function closeAll(except?: Element | null) {
  document.querySelectorAll<HTMLElement>('[data-dd].open').forEach((dd) => {
    if (dd === except) return;
    dd.classList.remove('open');
    dd.querySelector('.dd-btn')?.setAttribute('aria-expanded', 'false');
    dd.querySelector<HTMLElement>('.dd-panel')!.hidden = true;
  });
}

function toggle(dd: HTMLElement, force?: boolean) {
  const open = force ?? !dd.classList.contains('open');
  closeAll(open ? dd : null);
  dd.classList.toggle('open', open);
  dd.querySelector('.dd-btn')?.setAttribute('aria-expanded', String(open));
  const panel = dd.querySelector<HTMLElement>('.dd-panel')!;
  panel.hidden = !open;
  if (open) panel.querySelector<HTMLElement>('[aria-selected="true"]')?.focus();
}

export function setDropdown(dd: HTMLElement, value: string, silent = false) {
  const opt = dd.querySelector<HTMLElement>(`.dd-opt[data-value="${CSS.escape(value)}"]`);
  if (!opt) return;
  dd.querySelectorAll('.dd-opt').forEach((o) => o.setAttribute('aria-selected', String(o === opt)));
  dd.querySelector('.dd-cur')!.innerHTML = opt.querySelector('.dd-text')!.innerHTML.replace(/<small[\s\S]*?<\/small>/g, '');
  dd.dataset.value = value;
  if (!silent) dd.dispatchEvent(new CustomEvent('dd-change', { bubbles: true, detail: { id: dd.id, value } }));
}

document.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  const dd = t.closest<HTMLElement>('[data-dd]');
  if (!dd) return closeAll();
  if (t.closest('.dd-btn')) return toggle(dd);
  const opt = t.closest<HTMLElement>('.dd-opt');
  if (opt) {
    setDropdown(dd, opt.dataset.value!);
    toggle(dd, false);
    dd.querySelector<HTMLElement>('.dd-btn')?.focus();
  }
});

document.addEventListener('keydown', (e) => {
  const open = document.querySelector<HTMLElement>('[data-dd].open');
  if (!open) return;
  if (e.key === 'Escape') { toggle(open, false); open.querySelector<HTMLElement>('.dd-btn')?.focus(); return; }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const opts = [...open.querySelectorAll<HTMLElement>('.dd-opt')];
    const i = opts.indexOf(document.activeElement as HTMLElement);
    const n = e.key === 'ArrowDown' ? Math.min(opts.length - 1, i + 1) : Math.max(0, i - 1);
    opts[n]?.focus();
  }
});
