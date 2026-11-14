import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import "./compiler_-liHs-wz.mjs";
import { c as $$Icon, i as site, n as $$T, t as $$Base, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { t as $$PageHero } from "./PageHero_CBqc0uUX.mjs";
import { r as $$SectionHead, t as reportKinds } from "./services_qR4lryjf.mjs";
import { n as reportTimes } from "./tests_D0g04CAl.mjs";
// src/pages/reports.astro
var reports_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Reports,
	file: () => $$file,
	url: () => $$url
});
var $$Reports = createComponent(($$result, $$props, $$slots) => {
	const times = [
		{
			k: "I",
			what: {
				en: "X-ray, ultrasound, ECG",
				bn: "এক্স-রে, আল্ট্রাসাউন্ড, ইসিজি"
			}
		},
		{
			k: "H1",
			what: {
				en: "Blood sugar, urgent tests",
				bn: "ব্লাড সুগার, জরুরি টেস্ট"
			}
		},
		{
			k: "S",
			what: {
				en: "CBC, urine, liver, kidney, lipid",
				bn: "সিবিসি, ইউরিন, লিভার, কিডনি, লিপিড"
			}
		},
		{
			k: "D1",
			what: {
				en: "Hormones, vitamins, tumor markers",
				bn: "হরমোন, ভিটামিন, টিউমার মার্কার"
			}
		},
		{
			k: "D3",
			what: {
				en: "Culture & sensitivity",
				bn: "কালচার ও সেনসিটিভিটি"
			}
		}
	];
	const faq = [
		{
			q: {
				en: "How do I collect my report?",
				bn: "রিপোর্ট কীভাবে নেব?"
			},
			a: {
				en: "Show your receipt at the report counter. If you cannot come, call us and we can send a copy on WhatsApp.",
				bn: "রিপোর্ট কাউন্টারে রশিদ দেখান। আসতে না পারলে কল করুন, আমরা হোয়াটসঅ্যাপে কপি পাঠাতে পারি।"
			}
		},
		{
			q: {
				en: "Do I need to fast before blood tests?",
				bn: "রক্ত পরীক্ষার আগে কি খালি পেটে থাকতে হবে?"
			},
			a: {
				en: "Only for some tests such as fasting sugar and lipid profile. Each test on our price list shows its preparation.",
				bn: "শুধু কিছু টেস্টে, যেমন ফাস্টিং সুগার ও লিপিড প্রোফাইল। মূল্যতালিকায় প্রতিটি টেস্টের প্রস্তুতি দেওয়া আছে।"
			}
		},
		{
			q: {
				en: "Who explains my report?",
				bn: "রিপোর্ট কে ব্যাখ্যা করবেন?"
			},
			a: {
				en: "Please show it to your treating doctor. Reports are not a diagnosis on their own.",
				bn: "অনুগ্রহ করে চিকিৎসক ডাক্তারকে দেখান। রিপোর্ট নিজে থেকে রোগনির্ণয় নয়।"
			}
		},
		{
			q: {
				en: "Can I get a home sample collection?",
				bn: "বাসা থেকে নমুনা নেওয়া যায় কি?"
			},
			a: {
				en: "For elderly and bed-bound patients we can arrange it. Call to confirm.",
				bn: "বয়স্ক ও শয্যাশায়ী রোগীর জন্য ব্যবস্থা করা যায়। নিশ্চিত হতে কল করুন।"
			}
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": {
		en: "Reports",
		bn: "রিপোর্ট"
	} }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHero", $$PageHero, {
		"title": {
			en: "Reports",
			bn: "রিপোর্ট"
		},
		"lead": {
			en: "What reports we prepare, how long they take and how to collect them.",
			bn: "আমরা কী কী রিপোর্ট দিই, কত সময় লাগে এবং কীভাবে নেবেন।"
		}
	})}${maybeRenderHead($$result)}<section class="section section-flush"><div class="wrap">${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Report types",
			bn: "রিপোর্টের ধরন"
		},
		"title": {
			en: "Reports we provide",
			bn: "আমরা যেসব রিপোর্ট দিই"
		}
	})}<ul class="rk-grid rk-grid--3">${reportKinds.map((r) => renderTemplate`<li class="rk rk--card reveal"><span class="rk-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": r.icon,
		"size": 22
	})}</span><div><strong>${renderComponent($$result, "T", $$T, { "t": r.title })}</strong><small>${renderComponent($$result, "T", $$T, { "t": r.text })}</small></div></li>`)}</ul></div></section><section class="section section-tint"><div class="wrap split split--even"><div>${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Timing",
			bn: "সময়"
		},
		"title": {
			en: "When to expect your report",
			bn: "রিপোর্ট কখন পাবেন"
		}
	})}<ul class="times">${times.map((t) => renderTemplate`<li><span class="times-k">${renderComponent($$result, "T", $$T, { "t": reportTimes[t.k] })}</span><span class="times-v">${renderComponent($$result, "T", $$T, { "t": t.what })}</span></li>`)}</ul><p class="tx-note">${renderComponent($$result, "Icon", $$Icon, {
		"name": "info",
		"size": 16
	})}<span class="l-en">Times are typical for normal working hours. Exact time is printed on your receipt.</span><span class="l-bn">সময়গুলো স্বাভাবিক কর্মঘণ্টার জন্য। নির্দিষ্ট সময় রশিদে লেখা থাকে।</span></p><a class="btn btn-soft" href="/tests">${renderComponent($$result, "T", $$T, {
		"en": "See time for each test",
		"bn": "প্রতিটি টেস্টের সময় দেখুন"
	})} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 18
	})}</a></div><div>${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "Collection",
			bn: "রিপোর্ট সংগ্রহ"
		},
		"title": {
			en: "How to collect",
			bn: "কীভাবে সংগ্রহ করবেন"
		}
	})}<ol class="collect"><li><span>1</span><div><strong>${renderComponent($$result, "T", $$T, {
		"en": "At the counter",
		"bn": "কাউন্টারে"
	})}</strong><small>${renderComponent($$result, "T", $$T, {
		"en": "Bring your receipt and a phone number.",
		"bn": "রশিদ ও ফোন নম্বর সঙ্গে আনুন।"
	})}</small></div></li><li><span>2</span><div><strong>${renderComponent($$result, "T", $$T, {
		"en": "On WhatsApp",
		"bn": "হোয়াটসঅ্যাপে"
	})}</strong><small>${renderComponent($$result, "T", $$T, {
		"en": "Send your receipt number and we reply with a copy.",
		"bn": "রশিদ নম্বর পাঠান, আমরা কপি পাঠিয়ে দেব।"
	})}</small></div></li><li><span>3</span><div><strong>${renderComponent($$result, "T", $$T, {
		"en": "Show your doctor",
		"bn": "ডাক্তারকে দেখান"
	})}</strong><small>${renderComponent($$result, "T", $$T, {
		"en": "Your doctor interprets the report with your history.",
		"bn": "আপনার ইতিহাসসহ ডাক্তার রিপোর্ট ব্যাখ্যা করবেন।"
	})}</small></div></li></ol><a class="btn btn-primary"${addAttribute(`https://wa.me/${site.whatsapp}`, "href")} target="_blank" rel="noopener">${renderComponent($$result, "Icon", $$Icon, {
		"name": "whatsapp",
		"size": 18
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Ask on WhatsApp",
		"bn": "হোয়াটসঅ্যাপে জানুন"
	})}</a></div></div></section><section class="section"><div class="wrap wrap--narrow">${renderComponent($$result, "SectionHead", $$SectionHead, {
		"eyebrow": {
			en: "FAQ",
			bn: "সাধারণ প্রশ্ন"
		},
		"title": {
			en: "Common questions",
			bn: "সচরাচর জিজ্ঞাসা"
		},
		"center": true
	})}<div class="faq">${faq.map((f) => renderTemplate`<details class="reveal"><summary>${renderComponent($$result, "T", $$T, { "t": f.q })}${renderComponent($$result, "Icon", $$Icon, {
		"name": "chevd",
		"size": 18
	})}</summary><p>${renderComponent($$result, "T", $$T, { "t": f.a })}</p></details>`)}</div></div></section>` })}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/pages/reports.astro", void 0);
var $$file = "/Users/pranto/Downloads/diagnostics-center/src/pages/reports.astro";
var $$url = "/reports";
// \0virtual:astro:page:src/pages/reports@_@astro
var page = () => reports_exports;
export { page };
