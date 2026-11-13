const lock = (on: boolean) => document.body.classList.toggle('modal-open', on);

document.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  const open = t.closest<HTMLElement>('[data-dr-open]');
  if (open) {
    const dlg = document.getElementById(open.dataset.drOpen!) as HTMLDialogElement | null;
    if (dlg && !dlg.open) { dlg.showModal(); lock(true); }
    return;
  }
  if (t.closest('[data-dr-close]')) {
    (t.closest('dialog') as HTMLDialogElement | null)?.close();
    return;
  }
  // click on the backdrop (the dialog element itself) closes it
  if (t instanceof HTMLDialogElement && t.classList.contains('dmodal')) t.close();
});

document.querySelectorAll<HTMLDialogElement>('dialog.dmodal').forEach((d) => {
  d.addEventListener('close', () => lock(!!document.querySelector('dialog.dmodal[open]')));
});

// open a profile directly via #dr-slug
if (location.hash.startsWith('#dr-')) {
  const dlg = document.querySelector<HTMLDialogElement>(location.hash);
  if (dlg) { dlg.showModal(); lock(true); }
}
