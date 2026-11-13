import { setDropdown } from './dropdown';

type Bi = { en: string; bn: string };
type Doc = { slug: string; name: Bi; spec: Bi; days: number[]; time: Bi; fee: number };
type L = 'en' | 'bn';

const root = document.querySelector<HTMLElement>('[data-book]');
if (root) {
  const docs: Doc[] = JSON.parse(document.getElementById('book-data')!.textContent || '[]');
  const lang = (): L => (document.documentElement.lang === 'bn' ? 'bn' : 'en');
  const loc = () => (lang() === 'bn' ? 'bn-BD' : 'en-GB');

  const WEEK: { d: number; en: string; bn: string }[] = [
    { d: 6, en: 'Sat', bn: 'শনি' }, { d: 0, en: 'Sun', bn: 'রবি' }, { d: 1, en: 'Mon', bn: 'সোম' },
    { d: 2, en: 'Tue', bn: 'মঙ্গল' }, { d: 3, en: 'Wed', bn: 'বুধ' }, { d: 4, en: 'Thu', bn: 'বৃহ.' }, { d: 5, en: 'Fri', bn: 'শুক্র' },
  ];
  const S = {
    en: { next: 'Next available', none: 'No available day soon', needDoc: 'Please choose a doctor.', needDate: 'Please pick a date from the green days.', needName: 'Please enter the patient’s name.', needMobile: 'Enter a valid mobile number (e.g. 01XXXXXXXXX).', needAge: 'Please enter the age.', free: 'Ask at counter' },
    bn: { next: 'পরবর্তী সিরিয়ালের দিন', none: 'কাছাকাছি কোনো দিন নেই', needDoc: 'অনুগ্রহ করে ডাক্তার নির্বাচন করুন।', needDate: 'অনুগ্রহ করে সবুজ দিনগুলো থেকে তারিখ নির্বাচন করুন।', needName: 'রোগীর নাম লিখুন।', needMobile: 'সঠিক মোবাইল নম্বর দিন (যেমন 01XXXXXXXXX)।', needAge: 'বয়স লিখুন।', free: 'কাউন্টারে জানুন' },
  };

  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const dd = $('#doc-dd');
  const cal = $('[data-cal]');
  const lock = $('[data-lock]');
  const grid = $('.cal-grid');
  const weekEl = $('.cal-week');
  const monthSel = $<HTMLSelectElement>('[data-month]');
  const yearSel = $<HTMLSelectElement>('[data-year]');
  const prev = $<HTMLButtonElement>('[data-prev]');
  const next = $<HTMLButtonElement>('[data-next]');
  const nextAvail = $<HTMLButtonElement>('[data-next-avail]');
  const nextLabel = $('[data-next-label]');
  const form = $<HTMLFormElement>('[data-form]');
  const msg = $('[data-msg]');
  const done = $('[data-done]');

  const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const today = startOfDay(new Date());
  const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 120);
  const sameDay = (a: Date, b: Date) => a.getTime() === b.getTime();

  let doc: Doc | undefined;
  let sel: Date | null = null;
  let y = today.getFullYear();
  let m = today.getMonth();

  const isAvail = (d: Date) => !!doc && doc.days.includes(d.getDay()) && d >= today && d <= maxDate;
  const findNext = (): Date | null => {
    if (!doc) return null;
    for (let i = 0; i <= 120; i++) {
      const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      if (isAvail(d)) return d;
    }
    return null;
  };
  const fmtLong = (d: Date) => d.toLocaleDateString(loc(), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const fmtShort = (d: Date) => d.toLocaleDateString(loc(), { weekday: 'short', day: 'numeric', month: 'short' });

  function renderSelects() {
    monthSel.innerHTML = '';
    for (let i = 0; i < 12; i++) {
      const o = document.createElement('option');
      o.value = String(i);
      o.textContent = new Date(2026, i, 1).toLocaleDateString(loc(), { month: 'long' });
      monthSel.append(o);
    }
    yearSel.innerHTML = '';
    for (const yr of [today.getFullYear(), today.getFullYear() + 1]) {
      const o = document.createElement('option');
      o.value = String(yr);
      o.textContent = new Date(yr, 0, 1).toLocaleDateString(loc(), { year: 'numeric' });
      yearSel.append(o);
    }
    monthSel.value = String(m);
    yearSel.value = String(y);
  }

  function renderWeek() {
    weekEl.innerHTML = WEEK.map((w) => `<span>${w[lang()]}</span>`).join('');
  }

  function renderGrid() {
    const first = new Date(y, m, 1);
    const offset = (first.getDay() + 1) % 7; // week starts on Saturday
    const days = new Date(y, m + 1, 0).getDate();
    let html = '';
    for (let i = 0; i < offset; i++) html += '<span class="cal-pad"></span>';
    for (let d = 1; d <= days; d++) {
      const date = new Date(y, m, d);
      const av = isAvail(date);
      const cls = ['cal-day', av ? 'is-avail' : '', sel && sameDay(sel, date) ? 'is-sel' : '', sameDay(date, today) ? 'is-today' : ''].filter(Boolean).join(' ');
      const n = date.toLocaleDateString(loc(), { day: 'numeric' });
      html += `<button type="button" class="${cls}" data-date="${y}-${m}-${d}" ${av ? '' : 'disabled'} aria-label="${fmtLong(date)}" aria-pressed="${!!(sel && sameDay(sel, date))}">${n}</button>`;
    }
    grid.innerHTML = html;
    const ym = y * 12 + m;
    prev.disabled = ym <= today.getFullYear() * 12 + today.getMonth();
    next.disabled = ym >= maxDate.getFullYear() * 12 + maxDate.getMonth();
    monthSel.value = String(m);
    yearSel.value = String(y);
    const n = findNext();
    nextAvail.hidden = !n;
    nextLabel.textContent = n ? `${S[lang()].next}: ${fmtShort(n)}` : S[lang()].none;
  }

  function renderSummary() {
    const l = lang();
    $('[data-s-doc]').textContent = doc ? doc.name[l] : '—';
    $('[data-s-date]').textContent = sel ? fmtLong(sel) : '—';
    $('[data-s-time]').textContent = doc ? doc.time[l] : '—';
    $('[data-s-fee]').textContent = doc ? (doc.fee > 0 ? `৳ ${doc.fee.toLocaleString(loc())}` : S[l].free) : '—';
  }

  const renderAll = () => { renderSelects(); renderWeek(); renderGrid(); renderSummary(); };

  function chooseDoctor(slug: string, keepDate = false) {
    doc = docs.find((d) => d.slug === slug);
    root!.querySelectorAll<HTMLElement>('[data-sum]').forEach((s) => (s.hidden = s.dataset.sum !== slug));
    cal.hidden = !doc;
    lock.hidden = !!doc;
    if (!keepDate) sel = null;
    const n = findNext();
    if (n && !keepDate) { y = n.getFullYear(); m = n.getMonth(); }
    done.hidden = true;
    form.hidden = false;
    renderAll();
  }

  dd.addEventListener('dd-change', (e) => chooseDoctor((e as CustomEvent).detail.value));

  prev.addEventListener('click', () => { m--; if (m < 0) { m = 11; y--; } renderGrid(); renderSelects(); });
  next.addEventListener('click', () => { m++; if (m > 11) { m = 0; y++; } renderGrid(); renderSelects(); });
  monthSel.addEventListener('change', () => { m = +monthSel.value; renderGrid(); });
  yearSel.addEventListener('change', () => { y = +yearSel.value; renderGrid(); });
  nextAvail.addEventListener('click', () => {
    const n = findNext();
    if (n) { sel = n; y = n.getFullYear(); m = n.getMonth(); renderGrid(); renderSummary(); }
  });
  grid.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('.cal-day.is-avail');
    if (!b) return;
    const [yy, mm, dd2] = b.dataset.date!.split('-').map(Number);
    sel = new Date(yy, mm, dd2);
    renderGrid();
    renderSummary();
    msg.hidden = true;
    if (window.matchMedia('(max-width: 900px)').matches) $('[data-step3]').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const err = (t: string) => { msg.textContent = t; msg.hidden = false; };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const l = lang();
    const f = new FormData(form);
    const name = String(f.get('name') || '').trim();
    const mobile = String(f.get('mobile') || '').replace(/[\s-]/g, '');
    const age = String(f.get('age') || '').trim();
    if (!doc) return err(S[l].needDoc);
    if (!sel) return err(S[l].needDate);
    if (!name) return err(S[l].needName);
    if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(mobile)) return err(S[l].needMobile);
    if (!age || +age < 0 || +age > 120) return err(S[l].needAge);
    msg.hidden = true;

    const hosp = root.dataset[l === 'bn' ? 'hospBn' : 'hospEn'];
    const lines = l === 'bn'
      ? [`অ্যাপয়েন্টমেন্টের অনুরোধ — ${hosp}`, `রোগীর নাম: ${name}`, `বয়স: ${age}`, `মোবাইল: ${mobile}`, `ডাক্তার: ${doc.name.bn} (${doc.spec.bn})`, `তারিখ: ${fmtLong(sel)}`, `সময়: ${doc.time.bn}`, 'অনুগ্রহ করে সিরিয়াল নিশ্চিত করুন।']
      : [`Appointment request — ${hosp}`, `Patient: ${name}`, `Age: ${age}`, `Mobile: ${mobile}`, `Doctor: ${doc.name.en} (${doc.spec.en})`, `Date: ${fmtLong(sel)}`, `Time: ${doc.time.en}`, 'Please confirm my serial.'];
    const url = `https://wa.me/${root.dataset.wa}?text=${encodeURIComponent(lines.join('\n'))}`;
    $<HTMLAnchorElement>('[data-wa-link]').href = url;
    form.hidden = true;
    done.hidden = false;
    window.open(url, '_blank', 'noopener');
  });

  document.addEventListener('langchange', () => { if (doc) renderAll(); else renderSummary(); });

  // preselect via ?doctor=slug
  const pre = new URLSearchParams(location.search).get('doctor');
  if (pre && docs.some((d) => d.slug === pre)) { setDropdown(dd, pre, true); chooseDoctor(pre); }
}
