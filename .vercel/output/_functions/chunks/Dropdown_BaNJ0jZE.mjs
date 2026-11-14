import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import { t as createAstro } from "./compiler_-liHs-wz.mjs";
import { c as $$Icon, l as renderScript, n as $$T, u as createComponent } from "./Base_DOxPmu1Z.mjs";
// src/components/Dropdown.astro
createAstro("https://rajashon-hospital.example");
var $$Dropdown = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Dropdown;
	const { id, options, selected = options[0]?.value, caption, class: cls = "", emptyText } = Astro.props;
	const cur = options.find((o) => o.value === selected) ?? options[0];
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`dd ${cls}`, "class")} data-dd${addAttribute(id, "id")}${addAttribute(cur.value, "data-value")}>${caption && renderTemplate`<span class="dd-cap">${renderComponent($$result, "T", $$T, { "t": caption })}</span>`}<button type="button" class="dd-btn" aria-haspopup="listbox" aria-expanded="false"><span class="dd-cur">${renderComponent($$result, "T", $$T, { "t": cur.label })}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "chevd",
		"size": 18,
		"class": "dd-chev"
	})}</button><ul class="dd-panel" role="listbox" hidden>${options.map((o) => renderTemplate`<li role="presentation"${addAttribute(o.category, "data-cat")}><button type="button" role="option" class="dd-opt"${addAttribute(o.value, "data-value")}${addAttribute(o.category, "data-cat")}${addAttribute(o.value === cur.value ? "true" : "false", "aria-selected")}><span class="dd-text">${renderComponent($$result, "T", $$T, { "t": o.label })}${o.sub && renderTemplate`<small>${renderComponent($$result, "T", $$T, { "t": o.sub })}</small>`}</span>${o.count !== void 0 && renderTemplate`<em class="dd-count">${o.count}</em>`}${renderComponent($$result, "Icon", $$Icon, {
		"name": "check",
		"size": 16,
		"class": "dd-tick"
	})}</button></li>`)}${emptyText && renderTemplate`<li class="dd-empty" role="presentation" hidden><span class="dd-empty-text">${renderComponent($$result, "T", $$T, { "t": emptyText })}</span></li>`}</ul></div>${renderScript($$result, "/Users/pranto/Downloads/diagnostics-center/src/components/Dropdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/Dropdown.astro", void 0);
export { $$Dropdown as t };
