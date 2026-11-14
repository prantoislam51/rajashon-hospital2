import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import "./compiler_-liHs-wz.mjs";
import { c as $$Icon, i as site, n as $$T, t as $$Base, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { t as $$PageHero } from "./PageHero_CBqc0uUX.mjs";
import { n as services, r as $$SectionHead } from "./services_qR4lryjf.mjs";
// src/pages/services.astro
var services_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Services,
	file: () => $$file,
	url: () => $$url
});
var $$Services = createComponent(($$result, $$props, $$slots) => {
	const withImg = services.filter((s) => s.image);
	const rest = services.filter((s) => !s.image);
	const steps = [
		{
			t: {
				en: "Choose",
				bn: "বেছে নিন"
			},
			d: {
				en: "Pick a doctor or a test from the website.",
				bn: "ওয়েবসাইট থেকে ডাক্তার বা টেস্ট বেছে নিন।"
			}
		},
		{
			t: {
				en: "Book",
				bn: "সিরিয়াল"
			},
			d: {
				en: "Request a serial on WhatsApp or by phone.",
				bn: "হোয়াটসঅ্যাপ বা ফোনে সিরিয়াল নিন।"
			}
		},
		{
			t: {
				en: "Visit",
				bn: "আসুন"
			},
			d: {
				en: "Come at your serial time with the preparation noted.",
				bn: "নির্দিষ্ট প্রস্তুতিসহ সিরিয়ালের সময়ে আসুন।"
			}
		},
		{
			t: {
				en: "Collect",
				bn: "রিপোর্ট নিন"
			},
			d: {
				en: "Take your report from the counter or request it on WhatsApp.",
				bn: "কাউন্টার থেকে রিপোর্ট নিন বা হোয়াটসঅ্যাপে চান।"
			}
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": {
		en: "Services",
		bn: "সেবা"
	} }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHero", $$PageHero, {
		"title": {
			en: "Our services",
			bn: "আমাদের সেবা"
		},
		"lead": {
			en: "Consultation, laboratory and imaging services for the whole family.",
			bn: "পুরো পরিবারের জন্য চিকিৎসা পরামর্শ, ল্যাবরেটরি ও ইমেজিং সেবা।"
		}
	})}${maybeRenderHead($$result)}<section class="section section-flush"><div class="wrap"><div class="simg-grid">${withImg.map((s) => renderTemplate`<article class="simg reveal"><figure><img${addAttribute(s.image, "src")}${addAttribute(s.title.en, "alt")} loading="lazy"></figure><div class="simg-body"><span class="scard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": s.icon,
		"size": 22
	})}</span><h3>${renderComponent($$result, "T", $$T, { "t": s.title })}</h3><p>${renderComponent($$result, "T", $$T, { "t": s.text })}</p>${s.key === "pathology" && renderTemplate`<a class="link-arrow" href="/tests?cat=hematology">${renderComponent($$result, "T", $$T, {
		"en": "See lab tests",
		"bn": "ল্যাব টেস্ট দেখুন"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 17
	})}</a>`}${s.key === "xray" && renderTemplate`<a class="link-arrow" href="/tests?cat=xray">${renderComponent($$result, "T", $$T, {
		"en": "See X-ray prices",
		"bn": "এক্স-রে মূল্য দেখুন"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 17
	})}</a>`}${s.key === "usg" && renderTemplate`<a class="link-arrow" href="/tests?cat=usg">${renderComponent($$result, "T", $$T, {
		"en": "See USG prices",
		"bn": "ইউএসজি মূল্য দেখুন"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 17
	})}</a>`}${s.key === "ecg" && renderTemplate`<a class="link-arrow" href="/tests?cat=ecg">${renderComponent($$result, "T", $$T, {
		"en": "See ECG & echo",
		"bn": "ইসিজি ও ইকো দেখুন"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 17
	})}</a>`}${s.key === "opd" && renderTemplate`<a class="link-arrow" href="/doctors">${renderComponent($$result, "T", $$T, {
		"en": "See doctors",
		"bn": "ডাক্তার দেখুন"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 17
	})}</a>`}${s.key === "emergency" && renderTemplate`<a class="link-arrow"${addAttribute(`tel:${site.phones[0].tel}`, "href")}>${renderComponent($$result, "T", $$T, {
		"en": "Call now",
		"bn": "এখনই কল করুন"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 17
	})}</a>`}</div></article>`)}</div></div></section><section class="section section-tint"><div class="wrap">${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Also available",
			bn: "আরও সুবিধা"
		},
		"title": {
			en: "More ways we help",
			bn: "আরও যেভাবে সহায়তা করি"
		}
	})}<div class="sgrid">${rest.map((s) => renderTemplate`<article class="scard reveal"><span class="scard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": s.icon,
		"size": 24
	})}</span><h3>${renderComponent($$result, "T", $$T, { "t": s.title })}</h3><p>${renderComponent($$result, "T", $$T, { "t": s.text })}</p></article>`)}</div></div></section><section class="section"><div class="wrap">${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Your visit",
			bn: "আপনার ভিজিট"
		},
		"title": {
			en: "How it works",
			bn: "কীভাবে কাজ করে"
		},
		"center": true
	})}<ol class="steps">${steps.map((s, i) => renderTemplate`<li class="reveal"><span class="steps-n">${i + 1}</span><h3>${renderComponent($$result, "T", $$T, { "t": s.t })}</h3><p>${renderComponent($$result, "T", $$T, { "t": s.d })}</p></li>`)}</ol></div></section>` })}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/pages/services.astro", void 0);
var $$file = "/Users/pranto/Downloads/diagnostics-center/src/pages/services.astro";
var $$url = "/services";
// \0virtual:astro:page:src/pages/services@_@astro
var page = () => services_exports;
export { page };
