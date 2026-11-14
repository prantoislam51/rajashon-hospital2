// import { setDropdown } from './dropdown';

// type Bi = { en: string; bn: string };
// type Doc = { slug: string; name: Bi; spec: Bi; specKey: string; days: number[]; time: Bi; fee: number };
// type L = 'en' | 'bn';

// const root = document.querySelector<HTMLElement>('[data-book]');
// if (root) {
//   const docs: Doc[] = JSON.parse(document.getElementById('book-data')!.textContent || '[]');
//   const lang = (): L => (document.documentElement.lang === 'bn' ? 'bn' : 'en');
//   const loc = () => (lang() === 'bn' ? 'bn-BD' : 'en-GB');

//   const WEEK: { d: number; en: string; bn: string }[] = [
//     { d: 6, en: 'Sat', bn: 'শনি' }, { d: 0, en: 'Sun', bn: 'রবি' }, { d: 1, en: 'Mon', bn: 'সোম' },
//     { d: 2, en: 'Tue', bn: 'মঙ্গল' }, { d: 3, en: 'Wed', bn: 'বুধ' }, { d: 4, en: 'Thu', bn: 'বৃহ.' }, { d: 5, en: 'Fri', bn: 'শুক্র' },
//   ];
//   const S = {
//     en: { next: 'Next available', none: 'No available day soon', needDoc: 'Please choose a doctor.', needDate: 'Please pick a date from the green days.', needName: 'Please enter the patient’s name.', needMobile: 'Enter a valid mobile number (e.g. 01XXXXXXXXX).', needAge: 'Please enter the age.', free: 'Ask at counter' },
//     bn: { next: 'পরবর্তী সিরিয়ালের দিন', none: 'কাছাকাছি কোনো দিন নেই', needDoc: 'অনুগ্রহ করে ডাক্তার নির্বাচন করুন।', needDate: 'অনুগ্রহ করে সবুজ দিনগুলো থেকে তারিখ নির্বাচন করুন।', needName: 'রোগীর নাম লিখুন।', needMobile: 'সঠিক মোবাইল নম্বর দিন (যেমন 01XXXXXXXXX)।', needAge: 'বয়স লিখুন।', free: 'কাউন্টারে জানুন' },
//   };

//   const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
//   const catDd = root.querySelector<HTMLElement>('#cat-dd');
//   const dd = $('#doc-dd');
//   const cal = $('[data-cal]');
//   const lock = $('[data-lock]');
//   const grid = $('.cal-grid');
//   const weekEl = $('.cal-week');
//   const monthSel = $<HTMLSelectElement>('[data-month]');
//   const yearSel = $<HTMLSelectElement>('[data-year]');
//   const prev = $<HTMLButtonElement>('[data-prev]');
//   const next = $<HTMLButtonElement>('[data-next]');
//   const nextAvail = $<HTMLButtonElement>('[data-next-avail]');
//   const nextLabel = $('[data-next-label]');
//   const form = $<HTMLFormElement>('[data-form]');
//   const msg = $('[data-msg]');
//   const done = $('[data-done]');

//   const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
//   const today = startOfDay(new Date());
//   const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 120);
//   const sameDay = (a: Date, b: Date) => a.getTime() === b.getTime();

//   let doc: Doc | undefined;
//   let sel: Date | null = null;
//   let y = today.getFullYear();
//   let m = today.getMonth();

//   const isAvail = (d: Date) => !!doc && doc.days.includes(d.getDay()) && d >= today && d <= maxDate;
//   const findNext = (): Date | null => {
//     if (!doc) return null;
//     for (let i = 0; i <= 120; i++) {
//       const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
//       if (isAvail(d)) return d;
//     }
//     return null;
//   };
//   const fmtLong = (d: Date) => d.toLocaleDateString(loc(), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
//   const fmtShort = (d: Date) => d.toLocaleDateString(loc(), { weekday: 'short', day: 'numeric', month: 'short' });

//   function renderSelects() {
//     monthSel.innerHTML = '';
//     for (let i = 0; i < 12; i++) {
//       const o = document.createElement('option');
//       o.value = String(i);
//       o.textContent = new Date(2026, i, 1).toLocaleDateString(loc(), { month: 'long' });
//       monthSel.append(o);
//     }
//     yearSel.innerHTML = '';
//     for (const yr of [today.getFullYear(), today.getFullYear() + 1]) {
//       const o = document.createElement('option');
//       o.value = String(yr);
//       o.textContent = new Date(yr, 0, 1).toLocaleDateString(loc(), { year: 'numeric' });
//       yearSel.append(o);
//     }
//     monthSel.value = String(m);
//     yearSel.value = String(y);
//   }

//   function renderWeek() {
//     weekEl.innerHTML = WEEK.map((w) => `<span>${w[lang()]}</span>`).join('');
//   }

//   function renderGrid() {
//     const first = new Date(y, m, 1);
//     const offset = (first.getDay() + 1) % 7; // week starts on Saturday
//     const days = new Date(y, m + 1, 0).getDate();
//     let html = '';
//     for (let i = 0; i < offset; i++) html += '<span class="cal-pad"></span>';
//     for (let d = 1; d <= days; d++) {
//       const date = new Date(y, m, d);
//       const av = isAvail(date);
//       const cls = ['cal-day', av ? 'is-avail' : '', sel && sameDay(sel, date) ? 'is-sel' : '', sameDay(date, today) ? 'is-today' : ''].filter(Boolean).join(' ');
//       const n = date.toLocaleDateString(loc(), { day: 'numeric' });
//       html += `<button type="button" class="${cls}" data-date="${y}-${m}-${d}" ${av ? '' : 'disabled'} aria-label="${fmtLong(date)}" aria-pressed="${!!(sel && sameDay(sel, date))}">${n}</button>`;
//     }
//     grid.innerHTML = html;
//     const ym = y * 12 + m;
//     prev.disabled = ym <= today.getFullYear() * 12 + today.getMonth();
//     next.disabled = ym >= maxDate.getFullYear() * 12 + maxDate.getMonth();
//     monthSel.value = String(m);
//     yearSel.value = String(y);
//     const n = findNext();
//     nextAvail.hidden = !n;
//     nextLabel.textContent = n ? `${S[lang()].next}: ${fmtShort(n)}` : S[lang()].none;
//   }

//   function renderSummary() {
//     const l = lang();
//     $('[data-s-doc]').textContent = doc ? doc.name[l] : '—';
//     $('[data-s-date]').textContent = sel ? fmtLong(sel) : '—';
//     $('[data-s-time]').textContent = doc ? doc.time[l] : '—';
//     $('[data-s-fee]').textContent = doc ? (doc.fee > 0 ? `৳ ${doc.fee.toLocaleString(loc())}` : S[l].free) : '—';
//   }

//   const renderAll = () => { renderSelects(); renderWeek(); renderGrid(); renderSummary(); };

//   function chooseDoctor(slug: string, keepDate = false) {
//     doc = docs.find((d) => d.slug === slug);
//     root!.querySelectorAll<HTMLElement>('[data-sum]').forEach((s) => (s.hidden = s.dataset.sum !== slug));
//     cal.hidden = !doc;
//     lock.hidden = !!doc;
//     if (!keepDate) sel = null;
//     const n = findNext();
//     if (n && !keepDate) { y = n.getFullYear(); m = n.getMonth(); }
//     done.hidden = true;
//     form.hidden = false;
//     renderAll();
//   }

//   dd.addEventListener('dd-change', (e) => chooseDoctor((e as CustomEvent).detail.value));

//   function filterDoctorsByCategory(cat: string) {
//     const items = dd.querySelectorAll<HTMLElement>('.dd-panel li[data-cat]');
//     let count = 0;
//     items.forEach((li) => {
//       const match = !cat || cat === 'all' || li.dataset.cat === cat;
//       li.hidden = !match;
//       if (match) count++;
//     });
//     const emptyLi = dd.querySelector<HTMLElement>('.dd-empty');
//     if (emptyLi) emptyLi.hidden = count > 0;

//     if (doc && cat && cat !== 'all' && doc.specKey !== cat) {
//       setDropdown(dd, '', true);
//       chooseDoctor('');
//     }
//   }

//   if (catDd) {
//     catDd.addEventListener('dd-change', (e) => {
//       filterDoctorsByCategory((e as CustomEvent).detail.value);
//     });
//   }

//   prev.addEventListener('click', () => { m--; if (m < 0) { m = 11; y--; } renderGrid(); renderSelects(); });
//   next.addEventListener('click', () => { m++; if (m > 11) { m = 0; y++; } renderGrid(); renderSelects(); });
//   monthSel.addEventListener('change', () => { m = +monthSel.value; renderGrid(); });
//   yearSel.addEventListener('change', () => { y = +yearSel.value; renderGrid(); });
//   nextAvail.addEventListener('click', () => {
//     const n = findNext();
//     if (n) { sel = n; y = n.getFullYear(); m = n.getMonth(); renderGrid(); renderSummary(); }
//   });
//   grid.addEventListener('click', (e) => {
//     const b = (e.target as HTMLElement).closest<HTMLButtonElement>('.cal-day.is-avail');
//     if (!b) return;
//     const [yy, mm, dd2] = b.dataset.date!.split('-').map(Number);
//     sel = new Date(yy, mm, dd2);
//     renderGrid();
//     renderSummary();
//     msg.hidden = true;
//     if (window.matchMedia('(max-width: 900px)').matches) $('[data-step3]').scrollIntoView({ behavior: 'smooth', block: 'start' });
//   });

//   const err = (t: string) => { msg.textContent = t; msg.hidden = false; };

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const l = lang();
//     const f = new FormData(form);
//     const name = String(f.get('name') || '').trim();
//     const mobile = String(f.get('mobile') || '').replace(/[\s-]/g, '');
//     const age = String(f.get('age') || '').trim();
//     if (!doc) return err(S[l].needDoc);
//     if (!sel) return err(S[l].needDate);
//     if (!name) return err(S[l].needName);
//     if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(mobile)) return err(S[l].needMobile);
//     if (!age || +age < 0 || +age > 120) return err(S[l].needAge);
//     msg.hidden = true;

//     const hosp = root.dataset[l === 'bn' ? 'hospBn' : 'hospEn'];
//     const lines = l === 'bn'
//       ? [`অ্যাপয়েন্টমেন্টের অনুরোধ — ${hosp}`, `রোগীর নাম: ${name}`, `বয়স: ${age}`, `মোবাইল: ${mobile}`, `ডাক্তার: ${doc.name.bn} (${doc.spec.bn})`, `তারিখ: ${fmtLong(sel)}`, `সময়: ${doc.time.bn}`, 'অনুগ্রহ করে সিরিয়াল নিশ্চিত করুন।']
//       : [`Appointment request — ${hosp}`, `Patient: ${name}`, `Age: ${age}`, `Mobile: ${mobile}`, `Doctor: ${doc.name.en} (${doc.spec.en})`, `Date: ${fmtLong(sel)}`, `Time: ${doc.time.en}`, 'Please confirm my serial.'];
//     const url = `https://wa.me/${root.dataset.wa}?text=${encodeURIComponent(lines.join('\n'))}`;
//     $<HTMLAnchorElement>('[data-wa-link]').href = url;
//     form.hidden = true;
//     done.hidden = false;
//     window.open(url, '_blank', 'noopener');
//   });

//   document.addEventListener('langchange', () => { if (doc) renderAll(); else renderSummary(); });

//   // preselect category via ?cat=key or ?spec=key
//   const params = new URLSearchParams(location.search);
//   const preCat = params.get('cat') || params.get('spec');
//   if (preCat && catDd && catDd.querySelector(`.dd-opt[data-value="${CSS.escape(preCat)}"]`)) {
//     setDropdown(catDd, preCat, true);
//     filterDoctorsByCategory(preCat);
//   }

//   // preselect via ?doctor=slug
//   const pre = params.get('doctor');
//   if (pre && docs.some((d) => d.slug === pre)) {
//     const matchedDoc = docs.find((d) => d.slug === pre);
//     if (matchedDoc && (!preCat || preCat === 'all')) {
//       if (catDd && catDd.querySelector(`.dd-opt[data-value="${CSS.escape(matchedDoc.specKey)}"]`)) {
//         setDropdown(catDd, matchedDoc.specKey, true);
//         filterDoctorsByCategory(matchedDoc.specKey);
//       }
//     }
//     setDropdown(dd, pre, true);
//     chooseDoctor(pre);
//   }
// }







import { setDropdown } from './dropdown';

type Bi = { en: string; bn: string };
type Doc = {
  slug: string;
  name: Bi;
  spec: Bi;
  specKey: string;
  days: number[];
  time: Bi;
  fee: number;
};
type L = 'en' | 'bn';

const root = document.querySelector<HTMLElement>('[data-book]');

if (root) {
  const dataElement = document.getElementById('book-data');
  const docs: Doc[] = JSON.parse(dataElement?.textContent || '[]');

  const lang = (): L =>
    document.documentElement.lang === 'bn' ? 'bn' : 'en';

  const loc = () => (lang() === 'bn' ? 'bn-BD' : 'en-GB');

  const WEEK: { d: number; en: string; bn: string }[] = [
    { d: 6, en: 'Sat', bn: 'শনি' },
    { d: 0, en: 'Sun', bn: 'রবি' },
    { d: 1, en: 'Mon', bn: 'সোম' },
    { d: 2, en: 'Tue', bn: 'মঙ্গল' },
    { d: 3, en: 'Wed', bn: 'বুধ' },
    { d: 4, en: 'Thu', bn: 'বৃহ.' },
    { d: 5, en: 'Fri', bn: 'শুক্র' },
  ];

  const S = {
    en: {
      next: 'Next available',
      none: 'No available day soon',
      needDoc: 'Please choose a doctor.',
      needDate: 'Please pick a date from the green days.',
      needName: 'Please enter the patient’s name.',
      needMobile: 'Enter a valid mobile number (e.g. 01XXXXXXXXX).',
      needAge: 'Please enter a valid age.',
      free: 'Ask at counter',
      sending: 'Submitting appointment...',
      successTitle: 'Appointment submitted successfully!',
      successText: 'Your appointment request has been saved.',
      appointmentId: 'Appointment ID',
      failed: 'Appointment submission failed. Please try again.',
    },
    bn: {
      next: 'পরবর্তী সিরিয়ালের দিন',
      none: 'কাছাকাছি কোনো দিন নেই',
      needDoc: 'অনুগ্রহ করে ডাক্তার নির্বাচন করুন।',
      needDate: 'অনুগ্রহ করে সবুজ দিনগুলো থেকে তারিখ নির্বাচন করুন।',
      needName: 'রোগীর নাম লিখুন।',
      needMobile: 'সঠিক মোবাইল নম্বর দিন (যেমন 01XXXXXXXXX)।',
      needAge: 'সঠিক বয়স লিখুন।',
      free: 'কাউন্টারে জানুন',
      sending: 'অ্যাপয়েন্টমেন্ট জমা হচ্ছে...',
      successTitle: 'অ্যাপয়েন্টমেন্ট সফলভাবে জমা হয়েছে!',
      successText: 'আপনার অ্যাপয়েন্টমেন্টের তথ্য সংরক্ষণ করা হয়েছে।',
      appointmentId: 'অ্যাপয়েন্টমেন্ট আইডি',
      failed: 'অ্যাপয়েন্টমেন্ট জমা হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।',
    },
  };

  const $ = <T extends HTMLElement>(selector: string): T => {
    const element = root!.querySelector<T>(selector);
    if (!element) throw new Error(`Appointment element not found: ${selector}`);
    return element;
  };

  const catDd = root.querySelector<HTMLElement>('#cat-dd');
  const dd = $('#doc-dd');
  const cal = $('[data-cal]');
  const lock = $('[data-lock]');
  const grid = $('.cal-grid');
  const weekEl = $('.cal-week');
  const monthSel = $('[data-month]') as HTMLSelectElement;
  const yearSel = $('[data-year]') as HTMLSelectElement;
  const prev = $('[data-prev]') as HTMLButtonElement;
  const next = $('[data-next]') as HTMLButtonElement;
  const nextAvail = $('[data-next-avail]') as HTMLButtonElement;
  const nextLabel = $('[data-next-label]');
  const form = $('[data-form]') as HTMLFormElement;
  const msg = $('[data-msg]');
  const done = $('[data-done]');
  const submitButton = form.querySelector<HTMLButtonElement>(
    'button[type="submit"]'
  );

  const startOfDay = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const today = startOfDay(new Date());
  const maxDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 120
  );

  const sameDay = (a: Date, b: Date) => a.getTime() === b.getTime();

  let doc: Doc | undefined;
  let sel: Date | null = null;
  let y = today.getFullYear();
  let m = today.getMonth();
  let submitting = false;

  const isAvail = (d: Date) =>
    !!doc && doc.days.includes(d.getDay()) && d >= today && d <= maxDate;

  const findNext = (): Date | null => {
    if (!doc) return null;

    for (let i = 0; i <= 120; i++) {
      const d = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + i
      );

      if (isAvail(d)) return d;
    }

    return null;
  };

  const fmtLong = (d: Date) =>
    d.toLocaleDateString(loc(), {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  const fmtShort = (d: Date) =>
    d.toLocaleDateString(loc(), {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });

  // Use a stable local calendar date for Google Sheets.
  const toISODate = (d: Date) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  function renderSelects() {
    monthSel.innerHTML = '';

    for (let i = 0; i < 12; i++) {
      const option = document.createElement('option');
      option.value = String(i);
      option.textContent = new Date(2026, i, 1).toLocaleDateString(loc(), {
        month: 'long',
      });
      monthSel.append(option);
    }

    yearSel.innerHTML = '';

    for (const year of [today.getFullYear(), today.getFullYear() + 1]) {
      const option = document.createElement('option');
      option.value = String(year);
      option.textContent = new Date(year, 0, 1).toLocaleDateString(loc(), {
        year: 'numeric',
      });
      yearSel.append(option);
    }

    monthSel.value = String(m);
    yearSel.value = String(y);
  }

  function renderWeek() {
    weekEl.innerHTML = WEEK.map(
      (w) => `<span>${w[lang()]}</span>`
    ).join('');
  }

  function renderGrid() {
    const first = new Date(y, m, 1);
    const offset = (first.getDay() + 1) % 7;
    const days = new Date(y, m + 1, 0).getDate();

    let html = '';

    for (let i = 0; i < offset; i++) {
      html += '<span class="cal-pad"></span>';
    }

    for (let day = 1; day <= days; day++) {
      const date = new Date(y, m, day);
      const available = isAvail(date);

      const classes = [
        'cal-day',
        available ? 'is-avail' : '',
        sel && sameDay(sel, date) ? 'is-sel' : '',
        sameDay(date, today) ? 'is-today' : '',
      ]
        .filter(Boolean)
        .join(' ');

      const number = date.toLocaleDateString(loc(), { day: 'numeric' });

      html += `
        <button
          type="button"
          class="${classes}"
          data-date="${y}-${m}-${day}"
          ${available ? '' : 'disabled'}
          aria-label="${fmtLong(date)}"
          aria-pressed="${!!(sel && sameDay(sel, date))}"
        >${number}</button>
      `;
    }

    grid.innerHTML = html;

    const yearMonth = y * 12 + m;
    prev.disabled =
      yearMonth <= today.getFullYear() * 12 + today.getMonth();

    next.disabled =
      yearMonth >= maxDate.getFullYear() * 12 + maxDate.getMonth();

    monthSel.value = String(m);
    yearSel.value = String(y);

    const upcoming = findNext();

    nextAvail.hidden = !upcoming;
    nextLabel.textContent = upcoming
      ? `${S[lang()].next}: ${fmtShort(upcoming)}`
      : S[lang()].none;
  }

  function renderSummary() {
    const currentLang = lang();

    $('[data-s-doc]').textContent = doc ? doc.name[currentLang] : '—';
    $('[data-s-date]').textContent = sel ? fmtLong(sel) : '—';
    $('[data-s-time]').textContent = doc ? doc.time[currentLang] : '—';

    $('[data-s-fee]').textContent = doc
      ? doc.fee > 0
        ? `৳ ${doc.fee.toLocaleString(loc())}`
        : S[currentLang].free
      : '—';
  }

  const renderAll = () => {
    renderSelects();
    renderWeek();
    renderGrid();
    renderSummary();
  };

  function chooseDoctor(slug: string, keepDate = false) {
    doc = docs.find((d) => d.slug === slug);

    root!.querySelectorAll<HTMLElement>('[data-sum]').forEach((item) => {
      item.hidden = item.dataset.sum !== slug;
    });

    cal.hidden = !doc;
    lock.hidden = !!doc;

    if (!keepDate) sel = null;

    const upcoming = findNext();

    if (upcoming && !keepDate) {
      y = upcoming.getFullYear();
      m = upcoming.getMonth();
    }

    done.hidden = true;
    form.hidden = false;
    renderAll();
  }

  dd.addEventListener('dd-change', (event) => {
    chooseDoctor((event as CustomEvent).detail.value);
  });

  function filterDoctorsByCategory(category: string) {
    const items = dd.querySelectorAll<HTMLElement>('.dd-panel li[data-cat]');
    let count = 0;

    items.forEach((item) => {
      const matches =
        !category || category === 'all' || item.dataset.cat === category;

      item.hidden = !matches;
      if (matches) count++;
    });

    const emptyItem = dd.querySelector<HTMLElement>('.dd-empty');

    if (emptyItem) emptyItem.hidden = count > 0;

    if (doc && category && category !== 'all' && doc.specKey !== category) {
      setDropdown(dd, '', true);
      chooseDoctor('');
    }
  }

  if (catDd) {
    catDd.addEventListener('dd-change', (event) => {
      filterDoctorsByCategory((event as CustomEvent).detail.value);
    });
  }

  prev.addEventListener('click', () => {
    m--;
    if (m < 0) {
      m = 11;
      y--;
    }
    renderGrid();
    renderSelects();
  });

  next.addEventListener('click', () => {
    m++;
    if (m > 11) {
      m = 0;
      y++;
    }
    renderGrid();
    renderSelects();
  });

  monthSel.addEventListener('change', () => {
    m = Number(monthSel.value);
    renderGrid();
  });

  yearSel.addEventListener('change', () => {
    y = Number(yearSel.value);
    renderGrid();
  });

  nextAvail.addEventListener('click', () => {
    const upcoming = findNext();

    if (upcoming) {
      sel = upcoming;
      y = upcoming.getFullYear();
      m = upcoming.getMonth();
      renderGrid();
      renderSummary();
    }
  });

  grid.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
      '.cal-day.is-avail'
    );

    if (!button) return;

    const [year, month, day] = button.dataset.date!.split('-').map(Number);

    sel = new Date(year, month, day);

    renderGrid();
    renderSummary();

    msg.hidden = true;

    if (window.matchMedia('(max-width: 900px)').matches) {
      $('[data-step3]').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });

  const err = (message: string) => {
    msg.textContent = message;
    msg.hidden = false;
  };

  function setSubmitting(value: boolean) {
    submitting = value;

    if (submitButton) {
      submitButton.disabled = value;
      submitButton.setAttribute('aria-busy', String(value));
    }

    const status = form.querySelector<HTMLElement>('[data-submit-label]');

    if (status) {
      status.textContent = value ? S[lang()].sending : (
        lang() === 'bn' ? 'অ্যাপয়েন্টমেন্ট জমা দিন' : 'Submit Appointment'
      );
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (submitting) return;

    const currentLang = lang();
    const formData = new FormData(form);

    const name = String(formData.get('name') || '').trim();
    const mobile = String(formData.get('mobile') || '').replace(/[\s-]/g, '');
    const age = String(formData.get('age') || '').trim();

    if (!doc) return err(S[currentLang].needDoc);
    if (!sel) return err(S[currentLang].needDate);
    if (!name) return err(S[currentLang].needName);

    if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(mobile)) {
      return err(S[currentLang].needMobile);
    }

    if (!age || !Number.isInteger(Number(age)) || Number(age) < 0 || Number(age) > 120) {
      return err(S[currentLang].needAge);
    }

    msg.hidden = true;
    setSubmitting(true);

    const hospitalName =
      root.dataset[currentLang === 'bn' ? 'hospBn' : 'hospEn'] || '';

    const payload = {
      hospitalName,
      patientName: name,
      mobile,
      age: Number(age),
      doctorName: doc.name.en,
      doctorSlug: doc.slug,
      doctorSpecialty: doc.spec.en,
      specialtyKey: doc.specKey,
      appointmentDate: toISODate(sel),
      appointmentTime: doc.time.en,
      appointmentFee: doc.fee,
    };

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true || !result.appointmentId) {
        throw new Error(result.message || S[currentLang].failed);
      }

      // Show success only after the server confirms the Sheet save.
      form.hidden = true;
      done.hidden = false;

      const title = done.querySelector<HTMLElement>('[data-done-title]');
      const detail = done.querySelector<HTMLElement>('[data-done-detail]');
      const idLabel = done.querySelector<HTMLElement>('[data-id-label]');
      const idValue = done.querySelector<HTMLElement>('[data-appointment-id]');

      if (title) title.textContent = S[currentLang].successTitle;
      if (detail) detail.textContent = S[currentLang].successText;
      if (idLabel) idLabel.textContent = S[currentLang].appointmentId;
      if (idValue) idValue.textContent = String(result.appointmentId);

    } catch (error) {
      console.error('Appointment submission error:', error);

      const message =
        error instanceof Error ? error.message : S[currentLang].failed;

      err(message || S[currentLang].failed);

    } finally {
      setSubmitting(false);
    }
  });

  document.addEventListener('langchange', () => {
    if (doc) renderAll();
    else renderSummary();
  });

  // Preselect category via ?cat=key or ?spec=key
  const params = new URLSearchParams(location.search);
  const preCat = params.get('cat') || params.get('spec');

  if (
    preCat &&
    catDd &&
    catDd.querySelector(`.dd-opt[data-value="${CSS.escape(preCat)}"]`)
  ) {
    setDropdown(catDd, preCat, true);
    filterDoctorsByCategory(preCat);
  }

  // Preselect doctor via ?doctor=slug
  const pre = params.get('doctor');

  if (pre && docs.some((d) => d.slug === pre)) {
    const matchedDoc = docs.find((d) => d.slug === pre);

    if (matchedDoc && (!preCat || preCat === 'all')) {
      if (
        catDd &&
        catDd.querySelector(
          `.dd-opt[data-value="${CSS.escape(matchedDoc.specKey)}"]`
        )
      ) {
        setDropdown(catDd, matchedDoc.specKey, true);
        filterDoctorsByCategory(matchedDoc.specKey);
      }
    }

    setDropdown(dd, pre, true);
    chooseDoctor(pre);
  } else {
    renderAll();
  }
}

