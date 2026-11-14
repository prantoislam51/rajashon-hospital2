import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import { t as createAstro } from "./compiler_-liHs-wz.mjs";
import { n as $$T, u as createComponent } from "./Base_DOxPmu1Z.mjs";
// src/components/PageHero.astro
createAstro("https://rajashon-hospital.example");
var $$PageHero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageHero;
	const { title, lead, eyebrow } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="page-hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">${renderComponent($$result, "T", $$T, {
		"en": "Home",
		"bn": "হোম"
	})}</a><span>/</span><span aria-current="page">${renderComponent($$result, "T", $$T, { "t": title })}</span></nav>${eyebrow && renderTemplate`<p class="eyebrow">${renderComponent($$result, "T", $$T, { "t": eyebrow })}</p>`}<h1>${renderComponent($$result, "T", $$T, { "t": title })}</h1>${lead && renderTemplate`<p class="lead">${renderComponent($$result, "T", $$T, { "t": lead })}</p>`}</div></section>`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/PageHero.astro", void 0);
export { $$PageHero as t };
