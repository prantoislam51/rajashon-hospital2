import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import "./compiler_-liHs-wz.mjs";
import { a as DAYS, c as $$Icon, l as renderScript, n as $$T, t as $$Base, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { t as $$PageHero } from "./PageHero_CBqc0uUX.mjs";
import { t as $$DoctorCard } from "./DoctorCard_DH7FbPDW.mjs";
import { t as $$Dropdown } from "./Dropdown_BaNJ0jZE.mjs";
import { n as specialties, t as doctors } from "./doctors_yfLoXXJh.mjs";
// src/pages/doctors.astro
var doctors_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Doctors,
	file: () => $$file,
	url: () => $$url
});
var $$Doctors = createComponent(($$result, $$props, $$slots) => {
	const specOpts = [{
		value: "all",
		label: {
			en: "All specialties",
			bn: "সব বিভাগ"
		},
		count: doctors.length
	}, ...specialties.filter((s) => doctors.some((d) => d.spec === s.key)).map((s) => ({
		value: s.key,
		label: s.label,
		count: doctors.filter((d) => d.spec === s.key).length
	}))];
	const dayOpts = [{
		value: "all",
		label: {
			en: "Any day",
			bn: "যেকোনো দিন"
		}
	}, ...DAYS.map((d) => ({
		value: String(d.d),
		label: {
			en: d.fullEn,
			bn: d.fullBn
		},
		count: doctors.filter((x) => x.days.includes(d.d)).length
	}))];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": {
		en: "Doctors",
		bn: "ডাক্তার"
	} }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHero", $$PageHero, {
		"title": {
			en: "Our doctors",
			bn: "আমাদের ডাক্তার"
		},
		"lead": {
			en: "Find a specialist, see the days they sit and request a serial. Click a doctor for full details.",
			bn: "বিশেষজ্ঞ খুঁজুন, তাঁর বসার দিন দেখুন এবং সিরিয়াল নিন। বিস্তারিত দেখতে ডাক্তারের উপর ক্লিক করুন।"
		}
	})}${maybeRenderHead($$result)}<section class="section section-flush"><div class="wrap" data-dfilter><div class="tx-bar"><label class="tx-search">${renderComponent($$result, "Icon", $$Icon, {
		"name": "search",
		"size": 20
	})}<input type="search" data-q autocomplete="off" placeholder="Search by name or specialty" data-ph-en="Search by name or specialty" data-ph-bn="নাম বা বিভাগ দিয়ে খুঁজুন" data-aria-en="Search doctors" data-aria-bn="ডাক্তার খুঁজুন" aria-label="Search doctors"></label>${renderComponent($$result, "Dropdown", $$Dropdown, {
		"id": "spec-dd",
		"options": specOpts,
		"class": "tx-dd",
		"caption": {
			en: "Specialty",
			bn: "বিভাগ"
		}
	})}${renderComponent($$result, "Dropdown", $$Dropdown, {
		"id": "day-dd",
		"options": dayOpts,
		"class": "tx-dd",
		"caption": {
			en: "Available on",
			bn: "যেদিন বসেন"
		}
	})}</div><p class="tx-meta" aria-live="polite"><span class="l-en"><b data-n>${doctors.length}</b> doctors</span><span class="l-bn"><b data-nb>${doctors.length}</b> জন ডাক্তার</span></p><div class="dgrid dgrid--page" data-grid>${doctors.map((d, i) => renderTemplate`${renderComponent($$result, "DoctorCard", $$DoctorCard, {
		"doctor": d,
		"eager": i < 4
	})}`)}</div><div class="tx-empty" data-empty hidden>${renderComponent($$result, "Icon", $$Icon, {
		"name": "search",
		"size": 28
	})}<p>${renderComponent($$result, "T", $$T, {
		"en": "No doctor matches these filters.",
		"bn": "এই ফিল্টারে কোনো ডাক্তার পাওয়া যায়নি।"
	})}</p><button type="button" class="btn btn-ghost btn-sm" data-reset>${renderComponent($$result, "T", $$T, {
		"en": "Clear filters",
		"bn": "ফিল্টার মুছুন"
	})}</button></div></div></section>` })}${renderScript($$result, "/Users/pranto/Downloads/diagnostics-center/src/pages/doctors.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/pages/doctors.astro", void 0);
var $$file = "/Users/pranto/Downloads/diagnostics-center/src/pages/doctors.astro";
var $$url = "/doctors";
// \0virtual:astro:page:src/pages/doctors@_@astro
var page = () => doctors_exports;
export { page };
