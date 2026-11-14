import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import "./compiler_-liHs-wz.mjs";
import { c as $$Icon, l as renderScript, n as $$T, s as taka, t as $$Base, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { t as $$PageHero } from "./PageHero_CBqc0uUX.mjs";
import { r as tests, t as categories } from "./tests_D0g04CAl.mjs";
import { t as $$Dropdown } from "./Dropdown_BaNJ0jZE.mjs";
// src/components/TestsExplorer.astro
var $$TestsExplorer = createComponent(($$result, $$props, $$slots) => {
	const catLabel = Object.fromEntries(categories.map((c) => [c.key, c.label]));
	const counts = Object.fromEntries(categories.map((c) => [c.key, tests.filter((t) => t.cat === c.key).length]));
	const options = [{
		value: "all",
		label: {
			en: "All categories",
			bn: "সব ক্যাটাগরি"
		},
		count: tests.length
	}, ...categories.map((c) => ({
		value: c.key,
		label: c.label,
		count: counts[c.key]
	}))];
	return renderTemplate`${maybeRenderHead($$result)}<div class="tx" data-tests><div class="tx-bar"><label class="tx-search">${renderComponent($$result, "Icon", $$Icon, {
		"name": "search",
		"size": 20
	})}<input type="search" data-q autocomplete="off" placeholder="Search a test, e.g. CBC, sugar" data-ph-en="Search a test, e.g. CBC, sugar" data-ph-bn="টেস্ট খুঁজুন, যেমন: সিবিসি, সুগার" data-aria-en="Search tests" data-aria-bn="টেস্ট খুঁজুন" aria-label="Search tests"><button type="button" class="tx-clear" data-clear hidden data-aria-en="Clear search" data-aria-bn="মুছুন" aria-label="Clear search">${renderComponent($$result, "Icon", $$Icon, {
		"name": "close",
		"size": 16
	})}</button></label>${renderComponent($$result, "Dropdown", $$Dropdown, {
		"id": "cat-dd",
		"options": options,
		"class": "tx-dd",
		"caption": {
			en: "Category",
			bn: "ক্যাটাগরি"
		}
	})}</div><p class="tx-meta" aria-live="polite"><span class="l-en"><b data-n>${tests.length}</b> tests</span><span class="l-bn"><b data-nb>${tests.length}</b> টি টেস্ট</span><span class="tx-sep">·</span><span class="l-en">Prices in BDT</span><span class="l-bn">মূল্য টাকায়</span></p><div class="tx-table-wrap"><table class="ttable"><thead><tr><th>${renderComponent($$result, "T", $$T, {
		"en": "Test",
		"bn": "টেস্ট"
	})}</th><th>${renderComponent($$result, "T", $$T, {
		"en": "Category",
		"bn": "ধরন"
	})}</th><th class="num">${renderComponent($$result, "T", $$T, {
		"en": "Price",
		"bn": "মূল্য"
	})}</th><th>${renderComponent($$result, "T", $$T, {
		"en": "Report",
		"bn": "রিপোর্ট"
	})}</th><th>${renderComponent($$result, "T", $$T, {
		"en": "Preparation",
		"bn": "প্রস্তুতি"
	})}</th></tr></thead><tbody>${tests.map((t) => renderTemplate`<tr data-row${addAttribute(t.cat, "data-cat")}${addAttribute(`${t.name.en} ${t.name.bn} ${catLabel[t.cat].en} ${catLabel[t.cat].bn} ${t.note ?? ""}`.toLowerCase(), "data-s")}><td class="c-name"><strong>${renderComponent($$result, "T", $$T, { "t": t.name })}</strong>${t.note && renderTemplate`<small>${t.note}</small>`}</td><td class="c-cat"><span class="chip">${renderComponent($$result, "T", $$T, { "t": catLabel[t.cat] })}</span></td><td class="c-price num">${renderComponent($$result, "T", $$T, { "t": taka(t.price) })}</td><td class="c-rep"><span class="cell-l">${renderComponent($$result, "T", $$T, {
		"en": "Report",
		"bn": "রিপোর্ট"
	})}</span>${renderComponent($$result, "T", $$T, { "t": t.report })}</td><td class="c-prep"><span class="cell-l">${renderComponent($$result, "T", $$T, {
		"en": "Preparation",
		"bn": "প্রস্তুতি"
	})}</span>${renderComponent($$result, "T", $$T, { "t": t.prep })}</td></tr>`)}</tbody></table><div class="tx-empty" hidden>${renderComponent($$result, "Icon", $$Icon, {
		"name": "search",
		"size": 28
	})}<p>${renderComponent($$result, "T", $$T, {
		"en": "No test matches your search.",
		"bn": "আপনার অনুসন্ধানে কোনো টেস্ট পাওয়া যায়নি।"
	})}</p><button type="button" class="btn btn-ghost btn-sm" data-reset>${renderComponent($$result, "T", $$T, {
		"en": "Show all tests",
		"bn": "সব টেস্ট দেখুন"
	})}</button></div></div><nav class="tx-pagination" data-pagination aria-label="Tests pagination" hidden><button type="button" class="tx-page-btn tx-page-prev" data-page-prev data-aria-en="Previous page" data-aria-bn="আগের পাতা" aria-label="Previous page">${renderComponent($$result, "Icon", $$Icon, {
		"name": "chevl",
		"size": 18
	})}<span class="l-en">Back</span><span class="l-bn">আগের</span></button><div class="tx-page-numbers" data-page-numbers></div><button type="button" class="tx-page-btn tx-page-next" data-page-next data-aria-en="Next page" data-aria-bn="পরের পাতা" aria-label="Next page"><span class="l-en">Next</span><span class="l-bn">পরের</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "chevr",
		"size": 18
	})}</button></nav><p class="tx-note">${renderComponent($$result, "Icon", $$Icon, {
		"name": "info",
		"size": 16
	})}<span class="l-en">Prices and report times are indicative and may change. Please call before visiting for the latest rates.</span><span class="l-bn">মূল্য ও রিপোর্টের সময় নির্দেশক এবং পরিবর্তনযোগ্য। সর্বশেষ মূল্যের জন্য আসার আগে কল করুন।</span></p></div>${renderScript($$result, "/Users/pranto/Downloads/diagnostics-center/src/components/TestsExplorer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/TestsExplorer.astro", void 0);
// src/pages/tests.astro
var tests_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tests,
	file: () => $$file,
	url: () => $$url
});
var $$Tests = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": {
		en: "Tests & Prices",
		bn: "টেস্ট ও মূল্য"
	} }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHero", $$PageHero, {
		"title": {
			en: "Tests & prices",
			bn: "টেস্ট ও মূল্য"
		},
		"lead": {
			en: "Search the full list or choose a category. Every test shows its price, report time and preparation.",
			bn: "পূর্ণ তালিকা খুঁজুন বা ক্যাটাগরি বেছে নিন। প্রতিটি টেস্টের মূল্য, রিপোর্টের সময় ও প্রস্তুতি দেওয়া আছে।"
		}
	})}${maybeRenderHead($$result)}<section class="section section-flush"><div class="wrap">${renderComponent($$result, "TestsExplorer", $$TestsExplorer, {})}</div></section><section class="wrap"><div class="cta"><div><h2>${renderComponent($$result, "T", $$T, {
		"en": "Not sure which test you need?",
		"bn": "কোন টেস্ট দরকার বুঝতে পারছেন না?"
	})}</h2><p>${renderComponent($$result, "T", $$T, {
		"en": "Your doctor’s prescription decides the tests. You can also book a doctor first.",
		"bn": "কোন টেস্ট লাগবে তা ডাক্তারের প্রেসক্রিপশনই ঠিক করে। আপনি আগে ডাক্তারের সিরিয়ালও নিতে পারেন।"
	})}</p></div><a class="btn btn-light btn-lg" href="/appointment">${renderComponent($$result, "Icon", $$Icon, {
		"name": "calendar",
		"size": 20
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Book a doctor",
		"bn": "ডাক্তারের সিরিয়াল"
	})}</a></div></section>` })}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/pages/tests.astro", void 0);
var $$file = "/Users/pranto/Downloads/diagnostics-center/src/pages/tests.astro";
var $$url = "/tests";
// \0virtual:astro:page:src/pages/tests@_@astro
var page = () => tests_exports;
export { page };
