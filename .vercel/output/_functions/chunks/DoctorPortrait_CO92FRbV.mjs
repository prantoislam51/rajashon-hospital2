import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead } from "./server_CkwTg0kB.mjs";
import { a as DAYS, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { t as createAstro } from "./compiler_-liHs-wz.mjs";
// src/components/DayChips.astro
createAstro("https://rajashon-hospital.example");
var $$DayChips = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DayChips;
	const { days, size = "sm" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute(`days days--${size}`, "class")} role="list">${DAYS.map((d) => {
		const on = days.includes(d.d);
		return renderTemplate`<li${addAttribute(["day", on ? "is-on" : "is-off"], "class:list")}${addAttribute(`${d.fullEn}${on ? "" : " — not available"}`, "title")}><span class="l-en">${d.en}</span><span class="l-bn">${d.bn}</span><span class="sr"><span class="l-en">${on ? " available" : " not available"}</span><span class="l-bn">${on ? " আছেন" : " নেই"}</span></span></li>`;
	})}</ul>`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/DayChips.astro", void 0);
// src/components/DoctorPortrait.astro
createAstro("https://rajashon-hospital.example");
var $$DoctorPortrait = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DoctorPortrait;
	const { doctor, eager = false } = Astro.props;
	const female = doctor.gender === "f";
	return renderTemplate`${doctor.photo ? renderTemplate`${maybeRenderHead($$result)}<img class="portrait-img"${addAttribute(doctor.photo, "src")}${addAttribute(doctor.name.en, "alt")}${addAttribute(eager ? "eager" : "lazy", "loading")} decoding="async">` : renderTemplate`<svg class="portrait-svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img"${addAttribute(doctor.name.en, "aria-label")}><rect width="400" height="500" class="p-bg"></rect><circle cx="200" cy="230" r="165" class="p-halo"></circle>${female && renderTemplate`<path d="M132 255c-10 52 2 96 20 116l30-22c-20-30-26-58-24-94z" fill="#241c18"></path>`}${female && renderTemplate`<path d="M268 255c10 52-2 96-20 116l-30-22c20-30 26-58 24-94z" fill="#241c18"></path>`}<path d="M36 500c0-96 70-150 164-156 94 6 164 60 164 156z" fill="#f6f9f8"></path><path d="M158 346 200 436 242 346z" fill="#0a6b66"></path><path d="M158 346 200 446 150 500H108zM242 346 200 446 250 500h42z" fill="#dfe9e6"></path><rect x="176" y="296" width="48" height="62" rx="22" fill="#b98763"></rect><ellipse cx="200" cy="238" rx="60" ry="73" fill="#c99a77"></ellipse>${female ? renderTemplate`<path d="M136 240c-8-78 34-106 66-106 44 0 68 32 62 106-8-34-26-52-64-52-34 0-54 18-64 52z" fill="#241c18"></path>` : renderTemplate`<path d="M139 232c-6-70 36-92 68-92 40 0 62 28 56 92-10-30-26-42-62-42-32 0-52 12-62 42z" fill="#241c18"></path>`}<path d="M152 348c-10 50 18 92 48 92s58-42 48-92" fill="none" stroke="#12302f" stroke-width="7" stroke-linecap="round" opacity=".85"></path><circle cx="248" cy="350" r="9" fill="#12302f" opacity=".85"></circle><path d="M178 258q22 16 44 0" fill="none" stroke="#7a4f37" stroke-width="4" stroke-linecap="round"></path><circle cx="180" cy="236" r="4" fill="#2a1d16"></circle><circle cx="220" cy="236" r="4" fill="#2a1d16"></circle></svg>`}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/DoctorPortrait.astro", void 0);
export { $$DayChips as n, $$DoctorPortrait as t };
