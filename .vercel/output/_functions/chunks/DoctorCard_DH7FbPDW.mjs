import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import { t as createAstro } from "./compiler_-liHs-wz.mjs";
import { c as $$Icon, i as site, l as renderScript, n as $$T, o as num, s as taka, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { n as $$DayChips, t as $$DoctorPortrait } from "./DoctorPortrait_CO92FRbV.mjs";
// src/components/DoctorCard.astro
createAstro("https://rajashon-hospital.example");
var $$DoctorCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DoctorCard;
	const { doctor: d, eager = false } = Astro.props;
	const id = `dr-${d.slug}`;
	const exp = num(d.experience);
	return renderTemplate`${maybeRenderHead($$result)}<article class="dcard reveal" data-doctor${addAttribute(d.spec, "data-spec")}${addAttribute(d.days.join(","), "data-days")}${addAttribute(`${d.name.en} ${d.name.bn} ${d.specialty.en} ${d.specialty.bn} ${d.degrees.en}`.toLowerCase(), "data-search")}><div class="dcard-photo">${renderComponent($$result, "DoctorPortrait", $$DoctorPortrait, {
		"doctor": d,
		"eager": eager
	})}</div><div class="dcard-body"><p class="dcard-spec">${renderComponent($$result, "T", $$T, { "t": d.specialty })}</p><h3 class="dcard-name"><button type="button" class="dcard-open"${addAttribute(id, "data-dr-open")}>${renderComponent($$result, "T", $$T, { "t": d.name })}</button></h3><p class="dcard-deg">${renderComponent($$result, "T", $$T, { "t": d.degrees })}</p>${renderComponent($$result, "DayChips", $$DayChips, { "days": d.days })}<p class="dcard-time">${renderComponent($$result, "Icon", $$Icon, {
		"name": "clock",
		"size": 15
	})} ${renderComponent($$result, "T", $$T, { "t": d.time })}</p><div class="dcard-actions"><a class="btn btn-primary btn-sm"${addAttribute(`/appointment?doctor=${d.slug}`, "href")}>${renderComponent($$result, "T", $$T, {
		"en": "Book",
		"bn": "সিরিয়াল নিন"
	})}</a><button type="button" class="btn btn-ghost btn-sm"${addAttribute(id, "data-dr-open")}>${renderComponent($$result, "T", $$T, {
		"en": "Profile",
		"bn": "বিস্তারিত"
	})}</button></div></div></article><dialog class="dmodal"${addAttribute(id, "id")}${addAttribute(`${id}-t`, "aria-labelledby")}><div class="dm-in"><button type="button" class="dm-close icon-btn" data-dr-close data-aria-en="Close" data-aria-bn="বন্ধ করুন" aria-label="Close">${renderComponent($$result, "Icon", $$Icon, { "name": "close" })}</button><div class="dm-photo">${renderComponent($$result, "DoctorPortrait", $$DoctorPortrait, { "doctor": d })}</div><div class="dm-body"><p class="dm-spec">${renderComponent($$result, "T", $$T, { "t": d.specialty })}</p><h2${addAttribute(`${id}-t`, "id")}>${renderComponent($$result, "T", $$T, { "t": d.name })}</h2><p class="dm-desig">${renderComponent($$result, "T", $$T, { "t": d.designation })}</p><dl class="dm-facts"><div><dt>${renderComponent($$result, "Icon", $$Icon, {
		"name": "cap",
		"size": 17
	})}${renderComponent($$result, "T", $$T, {
		"en": "Degrees",
		"bn": "ডিগ্রি"
	})}</dt><dd>${renderComponent($$result, "T", $$T, { "t": d.degrees })}</dd></div><div><dt>${renderComponent($$result, "Icon", $$Icon, {
		"name": "stethoscope",
		"size": 17
	})}${renderComponent($$result, "T", $$T, {
		"en": "Specialty",
		"bn": "বিশেষজ্ঞতা"
	})}</dt><dd>${renderComponent($$result, "T", $$T, { "t": d.specialty })}</dd></div><div><dt>${renderComponent($$result, "Icon", $$Icon, {
		"name": "award",
		"size": 17
	})}${renderComponent($$result, "T", $$T, {
		"en": "Experience",
		"bn": "অভিজ্ঞতা"
	})}</dt><dd>${renderComponent($$result, "T", $$T, {
		"en": `${exp.en}+ years`,
		"bn": `${exp.bn}+ বছর`
	})}</dd></div>${d.bmdc && renderTemplate`<div><dt>${renderComponent($$result, "Icon", $$Icon, {
		"name": "shield",
		"size": 17
	})}${renderComponent($$result, "T", $$T, {
		"en": "BMDC Reg. No.",
		"bn": "বিএমডিসি রেজি. নং"
	})}</dt><dd>${d.bmdc}</dd></div>`}${d.fee > 0 && renderTemplate`<div><dt>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tag",
		"size": 17
	})}${renderComponent($$result, "T", $$T, {
		"en": "Consultation fee",
		"bn": "পরামর্শ ফি"
	})}</dt><dd>${renderComponent($$result, "T", $$T, { "t": taka(d.fee) })}</dd></div>`}</dl><h3 class="dm-h">${renderComponent($$result, "T", $$T, {
		"en": "Visiting days & time",
		"bn": "রোগী দেখার দিন ও সময়"
	})}</h3>${renderComponent($$result, "DayChips", $$DayChips, {
		"days": d.days,
		"size": "md"
	})}<p class="dm-time">${renderComponent($$result, "Icon", $$Icon, {
		"name": "clock",
		"size": 17
	})} ${renderComponent($$result, "T", $$T, { "t": d.time })}</p><p class="dm-about">${renderComponent($$result, "T", $$T, { "t": d.about })}</p><div class="dm-actions"><a class="btn btn-primary"${addAttribute(`/appointment?doctor=${d.slug}`, "href")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "calendar",
		"size": 18
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Book appointment",
		"bn": "অ্যাপয়েন্টমেন্ট নিন"
	})}</a><a class="btn btn-ghost"${addAttribute(`tel:${site.phones[0].tel}`, "href")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "phone",
		"size": 18
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Call for serial",
		"bn": "সিরিয়ালের জন্য কল"
	})}</a></div></div></div></dialog>${renderScript($$result, "/Users/pranto/Downloads/diagnostics-center/src/components/DoctorCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/DoctorCard.astro", void 0);
export { $$DoctorCard as t };
