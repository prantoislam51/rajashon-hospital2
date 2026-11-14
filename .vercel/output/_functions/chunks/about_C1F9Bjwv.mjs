import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import "./compiler_-liHs-wz.mjs";
import { c as $$Icon, i as site, n as $$T, o as num, r as images, t as $$Base, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { t as $$PageHero } from "./PageHero_CBqc0uUX.mjs";
import { n as services, r as $$SectionHead } from "./services_qR4lryjf.mjs";
import { t as doctors } from "./doctors_yfLoXXJh.mjs";
import { r as tests } from "./tests_D0g04CAl.mjs";
// src/pages/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	url: () => $$url
});
var $$About = createComponent(($$result, $$props, $$slots) => {
	const gallery = services.filter((s) => s.image).map((s) => ({
		img: s.image,
		title: s.title,
		text: s.text
	}));
	const values = [
		{
			icon: "shield",
			t: {
				en: "Honest information",
				bn: "সৎ তথ্য"
			},
			d: {
				en: "Doctor schedules and test prices are published openly and kept current.",
				bn: "ডাক্তারের সময়সূচি ও টেস্ট মূল্য খোলাখুলি প্রকাশিত এবং হালনাগাদ থাকে।"
			}
		},
		{
			icon: "clock",
			t: {
				en: "Respect for time",
				bn: "সময়ের প্রতি সম্মান"
			},
			d: {
				en: "Serials in advance and clear report times so you plan your day.",
				bn: "আগাম সিরিয়াল ও স্পষ্ট রিপোর্টের সময়, যাতে আপনি দিনের পরিকল্পনা করতে পারেন।"
			}
		},
		{
			icon: "heart",
			t: {
				en: "Patient comfort",
				bn: "রোগীর স্বস্তি"
			},
			d: {
				en: "Clean rooms, polite staff and privacy during examinations.",
				bn: "পরিচ্ছন্ন কক্ষ, বিনয়ী কর্মী এবং পরীক্ষার সময় গোপনীয়তা।"
			}
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": {
			en: "About us",
			bn: "পরিচিতি"
		},
		"description": site.name
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHero", $$PageHero, {
		"title": {
			en: "About us",
			bn: "আমাদের পরিচিতি"
		},
		"eyebrow": site.sub,
		"lead": {
			en: "A neighbourhood hospital and diagnostic centre for Rajashon, Birulia and greater Savar.",
			bn: "রাজাসন, বিরুলিয়া ও সাভার এলাকার মানুষের জন্য একটি হসপিটাল ও ডায়াগনস্টিক সেন্টার।"
		}
	})}${maybeRenderHead($$result)}<section class="section"><div class="wrap about-grid"><div class="about-photo reveal"><img${addAttribute(images.building, "src")}${addAttribute(site.name.en, "alt")}><div class="about-badge"><strong>${renderComponent($$result, "T", $$T, { "t": site.short })}</strong><span>${renderComponent($$result, "T", $$T, { "t": site.sub })}</span></div></div><div class="about-copy reveal"><p class="eyebrow">${renderComponent($$result, "T", $$T, {
		"en": "Who we are",
		"bn": "আমরা কারা"
	})}</p><h2>${renderComponent($$result, "T", $$T, { "t": site.name })}</h2><p>${renderComponent($$result, "T", $$T, { "t": {
		en: "We started with a simple idea: people in Savar should not need to travel far for a trustworthy diagnosis. Today our building brings consultation rooms, a pathology laboratory and imaging services together.",
		bn: "আমাদের ভাবনা সহজ: নির্ভরযোগ্য রোগনির্ণয়ের জন্য সাভারের মানুষকে দূরে যেতে হওয়া উচিত নয়। আজ আমাদের ভবনে চেম্বার, প্যাথলজি ল্যাব ও ইমেজিং সেবা একসাথে রয়েছে।"
	} })}</p><p>${renderComponent($$result, "T", $$T, { "t": {
		en: "Our address is Holding No. 163, Madhya Rajashon, Birulia Road, Savar, Dhaka — adjacent to Rajashon Government Primary School.",
		bn: "আমাদের ঠিকানা হোল্ডিং নং-১৬৩, মধ্য রাজাসন, বিরুলিয়া রোড, সাভার, ঢাকা — রাজাসন সরকারী প্রাথমিক স্কুল সংলগ্ন।"
	} })}</p>${(site.license.en || site.license.bn) && renderTemplate`<p class="licence">${renderComponent($$result, "Icon", $$Icon, {
		"name": "shield",
		"size": 18
	})} ${renderComponent($$result, "T", $$T, { "t": site.license })}</p>`}<ul class="facts"><li><strong>${renderComponent($$result, "T", $$T, { "t": num(doctors.length) })}</strong><span>${renderComponent($$result, "T", $$T, {
		"en": "Doctors",
		"bn": "ডাক্তার"
	})}</span></li><li><strong>${renderComponent($$result, "T", $$T, { "t": num(tests.length) })}</strong><span>${renderComponent($$result, "T", $$T, {
		"en": "Tests & packages",
		"bn": "টেস্ট ও প্যাকেজ"
	})}</span></li><li><strong>${renderComponent($$result, "T", $$T, {
		"en": "7",
		"bn": "৭"
	})}</strong><span>${renderComponent($$result, "T", $$T, {
		"en": "Days a week",
		"bn": "দিন সপ্তাহে"
	})}</span></li></ul></div></div></section><section class="section section-tint"><div class="wrap">${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Our services in pictures",
			bn: "ছবিতে আমাদের সেবা"
		},
		"title": {
			en: "What happens inside",
			bn: "ভেতরে কী কী হয়"
		}
	})}<div class="story">${gallery.map((g, i) => renderTemplate`<article${addAttribute([
		"story-row",
		"reveal",
		{ rev: i % 2 === 1 }
	], "class:list")}><figure><img${addAttribute(g.img, "src")}${addAttribute(g.title.en, "alt")} loading="lazy"></figure><div><span class="story-n">0${i + 1}</span><h3>${renderComponent($$result, "T", $$T, { "t": g.title })}</h3><p>${renderComponent($$result, "T", $$T, { "t": g.text })}</p></div></article>`)}</div></div></section><section class="section"><div class="wrap">${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "How we work",
			bn: "আমরা যেভাবে কাজ করি"
		},
		"title": {
			en: "Our promises to patients",
			bn: "রোগীদের প্রতি আমাদের অঙ্গীকার"
		},
		"center": true
	})}<div class="vgrid">${values.map((v) => renderTemplate`<article class="vcard reveal"><span class="ccard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": v.icon,
		"size": 22
	})}</span><h3>${renderComponent($$result, "T", $$T, { "t": v.t })}</h3><p>${renderComponent($$result, "T", $$T, { "t": v.d })}</p></article>`)}</div></div></section><section class="wrap"><div class="cta"><div><h2>${renderComponent($$result, "T", $$T, {
		"en": "Visit us or book ahead",
		"bn": "সরাসরি আসুন বা আগেই সিরিয়াল নিন"
	})}</h2><p>${renderComponent($$result, "T", $$T, { "t": site.address })}</p></div><div class="cta-btns"><a class="btn btn-light btn-lg" href="/appointment">${renderComponent($$result, "T", $$T, {
		"en": "Book appointment",
		"bn": "অ্যাপয়েন্টমেন্ট"
	})}</a><a class="btn btn-outline-light btn-lg" href="/contact">${renderComponent($$result, "T", $$T, {
		"en": "Contact",
		"bn": "যোগাযোগ"
	})}</a></div></div></section>` })}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/pages/about.astro", void 0);
var $$file = "/Users/pranto/Downloads/diagnostics-center/src/pages/about.astro";
var $$url = "/about";
// \0virtual:astro:page:src/pages/about@_@astro
var page = () => about_exports;
export { page };
