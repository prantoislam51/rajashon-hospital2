import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import "./compiler_-liHs-wz.mjs";
import { n as $$T, t as $$Base, u as createComponent } from "./Base_DOxPmu1Z.mjs";
// src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": {
		en: "Page not found",
		bn: "পেজ পাওয়া যায়নি"
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section"><div class="wrap wrap--narrow" style="text-align:center"><p class="eyebrow">404</p><h1>${renderComponent($$result, "T", $$T, {
		"en": "This page does not exist",
		"bn": "এই পেজটি নেই"
	})}</h1><p class="lead">${renderComponent($$result, "T", $$T, {
		"en": "The link may be old. Let’s take you home.",
		"bn": "লিংকটি পুরনো হতে পারে। চলুন হোমে ফিরি।"
	})}</p><a class="btn btn-primary" href="/">${renderComponent($$result, "T", $$T, {
		"en": "Go to home",
		"bn": "হোমে যান"
	})}</a></div></section>` })}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/pages/404.astro", void 0);
var $$file = "/Users/pranto/Downloads/diagnostics-center/src/pages/404.astro";
var $$url = "/404";
// \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
export { page };
