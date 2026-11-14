import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import "./compiler_-liHs-wz.mjs";
import { c as $$Icon, i as site, l as renderScript, n as $$T, o as num, r as images, s as taka, t as $$Base, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { n as services, r as $$SectionHead, t as reportKinds } from "./services_qR4lryjf.mjs";
import { t as $$DoctorCard } from "./DoctorCard_DH7FbPDW.mjs";
import { r as tests, t as categories } from "./tests_D0g04CAl.mjs";
import { t as doctors } from "./doctors_yfLoXXJh.mjs";
// src/components/HeroSlider.astro
var $$HeroSlider = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="slider" data-slider><div class="slider-frame">${images.slides.map((s, i) => renderTemplate`<figure${addAttribute(["slide", { "is-active": i === 0 }], "class:list")}${addAttribute(i === 0 ? "false" : "true", "aria-hidden")}><img${addAttribute(s.src, "src")}${addAttribute(s.title.en, "alt")}${addAttribute(i === 0 ? "eager" : "lazy", "loading")} decoding="async" draggable="false"><figcaption><strong>${renderComponent($$result, "T", $$T, { "t": s.title })}</strong><span>${renderComponent($$result, "T", $$T, { "t": s.text })}</span></figcaption></figure>`)}<div class="slider-ctl"><button type="button" class="icon-btn" data-prev data-aria-en="Previous photo" data-aria-bn="আগের ছবি" aria-label="Previous photo">${renderComponent($$result, "Icon", $$Icon, { "name": "chevl" })}</button><button type="button" class="icon-btn" data-next data-aria-en="Next photo" data-aria-bn="পরের ছবি" aria-label="Next photo">${renderComponent($$result, "Icon", $$Icon, { "name": "chevr" })}</button></div></div><div class="slider-dots" role="tablist">${images.slides.map((_, i) => renderTemplate`<button type="button" role="tab"${addAttribute(i, "data-dot")}${addAttribute(i === 0 ? "true" : "false", "aria-selected")}${addAttribute(`Photo ${i + 1}`, "aria-label")}></button>`)}</div></div>${renderScript($$result, "/Users/pranto/Downloads/diagnostics-center/src/components/HeroSlider.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/HeroSlider.astro", void 0);
// src/components/TestsPreview.astro
var $$TestsPreview = createComponent(($$result, $$props, $$slots) => {
	const picks = [
		"CBC (Complete Blood Count)",
		"Urine R/E",
		"Blood Sugar (Fasting)",
		"HbA1c",
		"Lipid Profile",
		"Liver Function Test (LFT)",
		"USG Whole Abdomen",
		"ECG (12 lead)"
	].map((n) => tests.find((t) => t.name.en === n)).filter(Boolean);
	const featured = categories.filter((c) => [
		"hematology",
		"diabetes",
		"xray",
		"usg",
		"thyroid",
		"package"
	].includes(c.key));
	return renderTemplate`${maybeRenderHead($$result)}<div class="tp"><ul class="tp-list">${picks.map((t) => renderTemplate`<li><span class="tp-name">${renderComponent($$result, "T", $$T, { "t": t.name })}<small>${renderComponent($$result, "T", $$T, { "t": t.report })}</small></span><span class="tp-price">${renderComponent($$result, "T", $$T, { "t": taka(t.price) })}</span></li>`)}</ul><div class="tp-cats"><p class="tp-cap">${renderComponent($$result, "T", $$T, {
		"en": "Browse by category",
		"bn": "ক্যাটাগরি অনুযায়ী দেখুন"
	})}</p><div class="tp-chips">${featured.map((c) => renderTemplate`<a class="chip chip-link"${addAttribute(`/tests?cat=${c.key}`, "href")}>${renderComponent($$result, "T", $$T, { "t": c.label })}</a>`)}<a class="chip chip-link chip-more" href="/tests">${renderComponent($$result, "T", $$T, {
		"en": "All categories",
		"bn": "সব ক্যাটাগরি"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 15
	})}</a></div></div></div>`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/TestsPreview.astro", void 0);
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const top = doctors.filter((d) => d.featured).slice(0, 4);
	const nDoc = num(doctors.length);
	const nTests = num(`${Math.floor(tests.length / 10) * 10}`);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": {
			en: "Home",
			bn: "হোম"
		},
		"description": {
			en: `${site.name.en} — doctors, tests and appointments in Savar, Dhaka.`,
			bn: site.name.bn
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><p class="eyebrow">${renderComponent($$result, "T", $$T, {
		"en": "Savar, Dhaka",
		"bn": "সাভার, ঢাকা"
	})}</p><h1>${renderComponent($$result, "T", $$T, {
		"html": true,
		"en": "Careful diagnosis,<br/>caring treatment,<br/><em>close to home.</em>",
		"bn": "নির্ভুল পরীক্ষা,<br/>যত্নশীল চিকিৎসা,<br/><em>আপনার কাছেই।</em>"
	})}</h1><p class="lead">${renderComponent($$result, "T", $$T, { "t": {
		en: "Rajashon Hospital & Diagnostic Center brings specialist doctors, a pathology laboratory and imaging together on Birulia Road — with clear serials, fair prices and timely reports.",
		bn: "রাজাসন হসপিটাল এন্ড ডায়াগনস্টিক সেন্টারে বিরুলিয়া রোডে একই জায়গায় বিশেষজ্ঞ ডাক্তার, প্যাথলজি ল্যাব ও ইমেজিং — সুস্পষ্ট সিরিয়াল, ন্যায্য মূল্য ও সময়মতো রিপোর্ট।"
	} })}</p><div class="hero-cta"><a class="btn btn-primary btn-lg" href="/appointment">${renderComponent($$result, "Icon", $$Icon, {
		"name": "calendar",
		"size": 20
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Book appointment",
		"bn": "অ্যাপয়েন্টমেন্ট নিন"
	})}</a><a class="btn btn-ghost btn-lg" href="/tests">${renderComponent($$result, "T", $$T, {
		"en": "Tests & prices",
		"bn": "টেস্ট ও মূল্য"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 18
	})}</a></div><a class="hero-call"${addAttribute(`tel:${site.phones[0].tel}`, "href")}><span class="hero-call-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": "phone",
		"size": 20
	})}</span><span><small>${renderComponent($$result, "T", $$T, {
		"en": "Serial hotline",
		"bn": "সিরিয়ালের জন্য"
	})}</small><strong>${renderComponent($$result, "T", $$T, { "t": site.phones[0].display })}</strong></span></a></div><div class="hero-media">${renderComponent($$result, "HeroSlider", $$HeroSlider, {})}</div></div><div class="wrap"><ul class="stats reveal"><li><strong>${renderComponent($$result, "T", $$T, { "t": nDoc })}+</strong><span>${renderComponent($$result, "T", $$T, {
		"en": "Specialist doctors",
		"bn": "বিশেষজ্ঞ ডাক্তার"
	})}</span></li><li><strong>${renderComponent($$result, "T", $$T, { "t": nTests })}+</strong><span>${renderComponent($$result, "T", $$T, {
		"en": "Tests available",
		"bn": "টেস্ট সুবিধা"
	})}</span></li><li><strong>${renderComponent($$result, "T", $$T, {
		"en": "7 days",
		"bn": "৭ দিন"
	})}</strong><span>${renderComponent($$result, "T", $$T, {
		"en": "Open every week",
		"bn": "সপ্তাহজুড়ে খোলা"
	})}</span></li><li><strong>${renderComponent($$result, "T", $$T, {
		"en": "Same day",
		"bn": "একই দিন"
	})}</strong><span>${renderComponent($$result, "T", $$T, {
		"en": "Most routine reports",
		"bn": "অধিকাংশ রুটিন রিপোর্ট"
	})}</span></li></ul></div></section><section class="section"><div class="wrap about-grid"><div class="about-photo reveal"><img${addAttribute(images.building, "src")}${addAttribute(site.name.en, "alt")} loading="lazy"><div class="about-badge"><strong>${renderComponent($$result, "T", $$T, { "t": site.short })}</strong><span>${renderComponent($$result, "T", $$T, { "t": site.sub })}</span></div></div><div class="about-copy reveal"><p class="eyebrow">${renderComponent($$result, "T", $$T, {
		"en": "About us",
		"bn": "আমাদের সম্পর্কে"
	})}</p><h2>${renderComponent($$result, "T", $$T, {
		"en": "One building for your doctor, your tests and your reports.",
		"bn": "ডাক্তার, পরীক্ষা ও রিপোর্ট — সবকিছু একই ভবনে।"
	})}</h2><p>${renderComponent($$result, "T", $$T, { "t": {
		en: "We are located on Birulia Road in Madhya Rajashon, Savar, beside Rajashon Government Primary School. Patients can consult a specialist, get tested and collect the report without travelling across town.",
		bn: "আমরা সাভারের মধ্য রাজাসনে বিরুলিয়া রোডে, রাজাসন সরকারী প্রাথমিক বিদ্যালয় সংলগ্ন। বিশেষজ্ঞ দেখানো, পরীক্ষা করানো ও রিপোর্ট নেওয়া — সবকিছু শহরজুড়ে ছোটাছুটি ছাড়াই করা যায়।"
	} })}</p><ul class="ticks"><li>${renderComponent($$result, "Icon", $$Icon, {
		"name": "check",
		"size": 18
	})}${renderComponent($$result, "T", $$T, {
		"en": "Clear doctor schedules and online serial requests",
		"bn": "ডাক্তারের স্পষ্ট সময়সূচি ও অনলাইনে সিরিয়ালের অনুরোধ"
	})}</li><li>${renderComponent($$result, "Icon", $$Icon, {
		"name": "check",
		"size": 18
	})}${renderComponent($$result, "T", $$T, {
		"en": "Published test prices — no surprises at the counter",
		"bn": "প্রকাশিত টেস্ট মূল্য — কাউন্টারে অবাক হওয়ার কিছু নেই"
	})}</li><li>${renderComponent($$result, "Icon", $$Icon, {
		"name": "check",
		"size": 18
	})}${renderComponent($$result, "T", $$T, {
		"en": "Pathology, X-ray, ultrasound and ECG in-house",
		"bn": "প্যাথলজি, এক্স-রে, আল্ট্রাসাউন্ড ও ইসিজি নিজস্ব ব্যবস্থায়"
	})}</li></ul><a class="btn btn-soft" href="/about">${renderComponent($$result, "T", $$T, {
		"en": "Read more about us",
		"bn": "আরও জানুন"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 18
	})}</a></div></div></section><section class="section section-tint"><div class="wrap">${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Our doctors",
			bn: "আমাদের ডাক্তার"
		},
		"title": {
			en: "Meet our specialist doctors",
			bn: "আমাদের বিশেষজ্ঞ ডাক্তারগণ"
		},
		"href": "/doctors",
		"cta": {
			en: "All doctors",
			bn: "সব ডাক্তার"
		},
		"text": {
			en: "Green days show when each doctor sees patients. Open a profile for degrees and timings.",
			bn: "সবুজ দিনগুলোতে ডাক্তার রোগী দেখেন। ডিগ্রি ও সময় দেখতে প্রোফাইল খুলুন।"
		}
	})}<div class="dgrid">${top.map((d, i) => renderTemplate`${renderComponent($$result, "DoctorCard", $$DoctorCard, {
		"doctor": d,
		"eager": i < 2
	})}`)}</div></div></section><section class="section"><div class="wrap">${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Contact",
			bn: "যোগাযোগ"
		},
		"title": {
			en: "Reach us any day of the week",
			bn: "সপ্তাহের যেকোনো দিন যোগাযোগ করুন"
		}
	})}<div class="cgrid"><article class="ccard reveal"><span class="ccard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": "phone",
		"size": 22
	})}</span><h3>${renderComponent($$result, "T", $$T, {
		"en": "Serial & enquiries",
		"bn": "সিরিয়াল ও জিজ্ঞাসা"
	})}</h3><ul>${site.phones.map((p) => renderTemplate`<li><a${addAttribute(`tel:${p.tel}`, "href")}>${renderComponent($$result, "T", $$T, { "t": p.display })}</a></li>`)}</ul><a class="link-arrow"${addAttribute(`https://wa.me/${site.whatsapp}`, "href")} target="_blank" rel="noopener">${renderComponent($$result, "Icon", $$Icon, {
		"name": "whatsapp",
		"size": 17
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Chat on WhatsApp",
		"bn": "হোয়াটসঅ্যাপে মেসেজ"
	})}</a></article><article class="ccard reveal"><span class="ccard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": "pin",
		"size": 22
	})}</span><h3>${renderComponent($$result, "T", $$T, {
		"en": "Find us",
		"bn": "ঠিকানা"
	})}</h3><p>${renderComponent($$result, "T", $$T, { "t": site.address })}</p><p class="muted">${renderComponent($$result, "T", $$T, { "t": site.landmark })}</p><a class="link-arrow" href="/contact">${renderComponent($$result, "T", $$T, {
		"en": "Map & directions",
		"bn": "ম্যাপ ও দিকনির্দেশনা"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 17
	})}</a></article><article class="ccard reveal"><span class="ccard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": "clock",
		"size": 22
	})}</span><h3>${renderComponent($$result, "T", $$T, {
		"en": "Opening hours",
		"bn": "খোলার সময়"
	})}</h3><ul class="hours">${site.hours.map((h) => renderTemplate`<li><strong>${renderComponent($$result, "T", $$T, { "t": h.days })}</strong><span>${renderComponent($$result, "T", $$T, { "t": h.time })}</span></li>`)}</ul></article></div></div></section><section class="section section-tint"><div class="wrap split"><div>${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Reports",
			bn: "রিপোর্ট"
		},
		"title": {
			en: "What we report",
			bn: "আমরা যেসব রিপোর্ট দিই"
		},
		"href": "/reports",
		"cta": {
			en: "About reports",
			bn: "রিপোর্ট সম্পর্কে"
		}
	})}<ul class="rk-grid">${reportKinds.map((r) => renderTemplate`<li class="rk reveal"><span class="rk-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": r.icon,
		"size": 20
	})}</span><div><strong>${renderComponent($$result, "T", $$T, { "t": r.title })}</strong><small>${renderComponent($$result, "T", $$T, { "t": r.text })}</small></div></li>`)}</ul></div><div>${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Tests & prices",
			bn: "টেস্ট ও মূল্য"
		},
		"title": {
			en: "Popular tests",
			bn: "জনপ্রিয় টেস্ট"
		},
		"href": "/tests",
		"cta": {
			en: "Full price list",
			bn: "পূর্ণ মূল্যতালিকা"
		}
	})}${renderComponent($$result, "TestsPreview", $$TestsPreview, {})}</div></div></section><section class="section"><div class="wrap">${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Services",
			bn: "সেবা"
		},
		"title": {
			en: "Everything a diagnostic centre should offer",
			bn: "একটি ডায়াগনস্টিক সেন্টারের প্রয়োজনীয় সব সেবা"
		},
		"href": "/services",
		"cta": {
			en: "All services",
			bn: "সব সেবা"
		}
	})}<div class="sgrid">${services.slice(0, 6).map((s) => renderTemplate`<a class="scard reveal" href="/services"><span class="scard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": s.icon,
		"size": 24
	})}</span><h3>${renderComponent($$result, "T", $$T, { "t": s.title })}</h3><p>${renderComponent($$result, "T", $$T, { "t": s.text })}</p></a>`)}</div></div></section><section class="wrap"><div class="cta"><div><h2>${renderComponent($$result, "T", $$T, {
		"en": "Need to see a doctor this week?",
		"bn": "এই সপ্তাহে ডাক্তার দেখাতে চান?"
	})}</h2><p>${renderComponent($$result, "T", $$T, {
		"en": "Choose a doctor, pick a green day and send your request on WhatsApp in under a minute.",
		"bn": "ডাক্তার বেছে নিন, সবুজ দিন নির্বাচন করুন এবং এক মিনিটেই হোয়াটসঅ্যাপে অনুরোধ পাঠান।"
	})}</p></div><a class="btn btn-light btn-lg" href="/appointment">${renderComponent($$result, "Icon", $$Icon, {
		"name": "calendar",
		"size": 20
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Book appointment",
		"bn": "অ্যাপয়েন্টমেন্ট নিন"
	})}</a></div></section>` })}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/pages/index.astro", void 0);
var $$file = "/Users/pranto/Downloads/diagnostics-center/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
