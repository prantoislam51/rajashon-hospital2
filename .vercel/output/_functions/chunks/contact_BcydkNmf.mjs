import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import "./compiler_-liHs-wz.mjs";
import { c as $$Icon, i as site, n as $$T, t as $$Base, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { t as $$PageHero } from "./PageHero_CBqc0uUX.mjs";
// src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	const map = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
	const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": {
		en: "Contact",
		bn: "যোগাযোগ"
	} }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHero", $$PageHero, {
		"title": {
			en: "Contact us",
			bn: "যোগাযোগ"
		},
		"lead": {
			en: "Call for a serial, message us on WhatsApp or visit us on Birulia Road.",
			bn: "সিরিয়ালের জন্য কল করুন, হোয়াটসঅ্যাপে মেসেজ দিন অথবা বিরুলিয়া রোডে চলে আসুন।"
		}
	})}${maybeRenderHead($$result)}<section class="section section-flush"><div class="wrap contact-grid"><div class="contact-list"><article class="ccard"><span class="ccard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": "phone",
		"size": 22
	})}</span><h3>${renderComponent($$result, "T", $$T, {
		"en": "Serial numbers",
		"bn": "সিরিয়ালের নম্বর"
	})}</h3><ul>${site.phones.map((p) => renderTemplate`<li><a${addAttribute(`tel:${p.tel}`, "href")}>${renderComponent($$result, "T", $$T, { "t": p.display })}</a></li>`)}</ul><a class="btn btn-primary btn-sm"${addAttribute(`https://wa.me/${site.whatsapp}`, "href")} target="_blank" rel="noopener">${renderComponent($$result, "Icon", $$Icon, {
		"name": "whatsapp",
		"size": 17
	})} WhatsApp</a></article><article class="ccard"><span class="ccard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": "pin",
		"size": 22
	})}</span><h3>${renderComponent($$result, "T", $$T, {
		"en": "Address",
		"bn": "ঠিকানা"
	})}</h3><p>${renderComponent($$result, "T", $$T, { "t": site.address })}</p><p class="muted">${renderComponent($$result, "T", $$T, { "t": site.landmark })}</p></article><article class="ccard"><span class="ccard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": "mail",
		"size": 22
	})}</span><h3>${renderComponent($$result, "T", $$T, {
		"en": "Email",
		"bn": "ইমেইল"
	})}</h3><p><a${addAttribute(`mailto:${site.email}`, "href")}>${site.email}</a></p></article><article class="ccard"><span class="ccard-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": "clock",
		"size": 22
	})}</span><h3>${renderComponent($$result, "T", $$T, {
		"en": "Opening hours",
		"bn": "খোলার সময়"
	})}</h3><ul class="hours">${site.hours.map((h) => renderTemplate`<li><strong>${renderComponent($$result, "T", $$T, { "t": h.days })}</strong><span>${renderComponent($$result, "T", $$T, { "t": h.time })}</span></li>`)}</ul><p class="em">${renderComponent($$result, "Icon", $$Icon, {
		"name": "ambulance",
		"size": 17
	})} ${renderComponent($$result, "T", $$T, { "t": site.emergency })}</p></article></div><div class="map"><iframe title="Map"${addAttribute(map, "src")} loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a class="btn btn-ghost btn-sm map-link"${addAttribute(mapLink, "href")} target="_blank" rel="noopener">${renderComponent($$result, "Icon", $$Icon, {
		"name": "external",
		"size": 16
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Open in Google Maps",
		"bn": "গুগল ম্যাপে খুলুন"
	})}</a></div></div></section>` })}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/pages/contact.astro", void 0);
var $$file = "/Users/pranto/Downloads/diagnostics-center/src/pages/contact.astro";
var $$url = "/contact";
// \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
export { page };
