import { h as InvalidComponentArgs, q as AstroError } from "./errors-data_D8O-YH_F.mjs";
import { _ as addAttribute, a as Fragment, c as renderSlot, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as createRenderInstruction, p as renderHead, y as unescapeHTML } from "./server_CkwTg0kB.mjs";
import { t as createAstro } from "./compiler_-liHs-wz.mjs";
// node_modules/@astrojs/runtime/dist/internal/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
// node_modules/@astrojs/runtime/dist/internal/server/render/script.js
/**
* Relies on the `renderScript: true` compiler option
* @experimental
*/
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
// src/components/Icon.astro
createAstro("https://rajashon-hospital.example");
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { name, size = 20, class: cls = "", stroke = 1.7 } = Astro.props;
	const P = {
		phone: "<path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z\"/>",
		mail: "<rect x=\"3\" y=\"5.5\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"m3.5 7 8.5 6 8.5-6\"/>",
		pin: "<path d=\"M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/>",
		clock: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/>",
		calendar: "<rect x=\"4\" y=\"5.5\" width=\"16\" height=\"14.5\" rx=\"2\"/><path d=\"M4 10h16M8 3.5v4M16 3.5v4\"/>",
		flask: "<path d=\"M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M7.5 15h9\"/>",
		xray: "<rect x=\"4\" y=\"3.5\" width=\"16\" height=\"17\" rx=\"2\"/><path d=\"M12 7v10M8.5 9.5h7M8.5 12.5h7M9.5 15.5h5\"/>",
		usg: "<path d=\"M3 9a13 13 0 0 1 18 0M6 12.5a8.5 8.5 0 0 1 12 0M9 16a4 4 0 0 1 6 0\"/><circle cx=\"12\" cy=\"19.5\" r=\".6\"/>",
		pulse: "<path d=\"M3 12h4l2.5-6 4 12 2.5-6H21\"/>",
		heart: "<path d=\"M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z\"/>",
		stethoscope: "<path d=\"M6 3.5v5.5a4 4 0 0 0 8 0V3.5M10 13v2a5 5 0 0 0 10 0v-1.5\"/><circle cx=\"20\" cy=\"12\" r=\"1.8\"/>",
		ambulance: "<path d=\"M2.5 16.5V7h10.5v9.5M13 10h4l3.5 3.5v3H19\"/><circle cx=\"7\" cy=\"17.5\" r=\"2\"/><circle cx=\"16\" cy=\"17.5\" r=\"2\"/><path d=\"M7.7 9.3v3.4M6 11h3.4\"/>",
		pill: "<rect x=\"2.8\" y=\"8.8\" width=\"18.4\" height=\"6.4\" rx=\"3.2\" transform=\"rotate(-45 12 12)\"/><path d=\"m9.2 9.2 5.6 5.6\"/>",
		bed: "<path d=\"M3 19V6M3 15h18v4M21 15v-2.5A2.5 2.5 0 0 0 18.5 10H11v5\"/><circle cx=\"7\" cy=\"11.5\" r=\"1.8\"/>",
		shield: "<path d=\"M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z\"/><path d=\"m8.5 12 2.5 2.5 4.5-5\"/>",
		home: "<path d=\"m3 11 9-7 9 7M5 9.5V20h14V9.5M10 20v-5.5h4V20\"/>",
		file: "<path d=\"M6 3h8l4 4v14H6z\"/><path d=\"M14 3v4h4M9 12h6M9 16h6\"/>",
		search: "<circle cx=\"11\" cy=\"11\" r=\"6.5\"/><path d=\"m16 16 4.5 4.5\"/>",
		chevd: "<path d=\"m6 9 6 6 6-6\"/>",
		chevr: "<path d=\"m9 6 6 6-6 6\"/>",
		chevl: "<path d=\"m15 6-6 6 6 6\"/>",
		arrow: "<path d=\"M5 12h14M13 6l6 6-6 6\"/>",
		sun: "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8\"/>",
		moon: "<path d=\"M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z\"/>",
		globe: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18M12 3c3.2 3.2 3.2 14.8 0 18M12 3c-3.2 3.2-3.2 14.8 0 18\"/>",
		menu: "<path d=\"M4 7h16M4 12h16M4 17h16\"/>",
		close: "<path d=\"m6 6 12 12M18 6 6 18\"/>",
		check: "<path d=\"m5 12.5 4.5 4.5L19 7.5\"/>",
		user: "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c0-4 3.5-6 8-6s8 2 8 6\"/>",
		droplet: "<path d=\"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z\"/>",
		whatsapp: "<path d=\"M3.5 20.5 5 16A8.5 8.5 0 1 1 8.2 19.3z\"/><path d=\"M9 8.5c0 3.5 3 6.5 6.5 6.5l1.3-1.6-2.2-1.1-1 .9a4.2 4.2 0 0 1-2.2-2.2l.9-1-1.1-2.2z\"/>",
		star: "<path d=\"m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z\"/>",
		info: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 11v6M12 7.5h.01\"/>",
		award: "<circle cx=\"12\" cy=\"9\" r=\"5.5\"/><path d=\"m8.8 13.8-1.3 7 4.5-2.5 4.5 2.5-1.3-7\"/>",
		cap: "<path d=\"m2.5 9.5 9.5-4.5 9.5 4.5-9.5 4.5z\"/><path d=\"M6.5 11.8V16c0 1.2 2.5 2.5 5.5 2.5s5.5-1.3 5.5-2.5v-4.2\"/>",
		list: "<path d=\"M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01\"/>",
		copy: "<rect x=\"8\" y=\"8\" width=\"12\" height=\"12\" rx=\"2\"/><path d=\"M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2\"/>",
		send: "<path d=\"m21 3-9.5 18-2.5-7.5L1.5 11z\"/><path d=\"m21 3-12 10.5\"/>",
		external: "<path d=\"M14 4h6v6M20 4l-9 9M18 14v6H4V6h6\"/>",
		tag: "<path d=\"M3 12.5V4h8.5l9 9-8.5 8.5z\"/><circle cx=\"7.5\" cy=\"8.5\" r=\"1.2\"/>",
		filter: "<path d=\"M4 5h16l-6 7.5V19l-4 2v-8.5z\"/>"
	};
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(`icon ${cls}`, "class")}${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(P[name] ?? "")}` })}</svg>`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/Icon.astro", void 0);
// src/lib/i18n.ts
var BN_DIGITS = [
	"০",
	"১",
	"২",
	"৩",
	"৪",
	"৫",
	"৬",
	"৭",
	"৮",
	"৯"
];
/** Convert Latin digits in a string to Bengali digits. */
var bnDigits = (value) => String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
/** Format a taka amount for both languages. */
var taka = (amount) => {
	const n = amount.toLocaleString("en-US");
	return {
		en: `৳ ${n}`,
		bn: `৳ ${bnDigits(n)}`
	};
};
/** Bilingual version of a string that only contains numbers/latin text. */
var num = (value) => ({
	en: String(value),
	bn: bnDigits(value)
});
/** Week order used in Bangladesh: Saturday first. `d` is JS Date#getDay(). */
var DAYS = [
	{
		d: 6,
		en: "Sat",
		bn: "শনি",
		fullEn: "Saturday",
		fullBn: "শনিবার"
	},
	{
		d: 0,
		en: "Sun",
		bn: "রবি",
		fullEn: "Sunday",
		fullBn: "রবিবার"
	},
	{
		d: 1,
		en: "Mon",
		bn: "সোম",
		fullEn: "Monday",
		fullBn: "সোমবার"
	},
	{
		d: 2,
		en: "Tue",
		bn: "মঙ্গল",
		fullEn: "Tuesday",
		fullBn: "মঙ্গলবার"
	},
	{
		d: 3,
		en: "Wed",
		bn: "বুধ",
		fullEn: "Wednesday",
		fullBn: "বুধবার"
	},
	{
		d: 4,
		en: "Thu",
		bn: "বৃহ.",
		fullEn: "Thursday",
		fullBn: "বৃহস্পতিবার"
	},
	{
		d: 5,
		en: "Fri",
		bn: "শুক্র",
		fullEn: "Friday",
		fullBn: "শুক্রবার"
	}
];
// src/data/site.ts
/**
* ✏️  EDIT THIS FILE to change hospital details everywhere on the site.
* Everything with { en, bn } has an English and a Bangla version.
*/
var phone = (local) => ({
	display: {
		en: local,
		bn: bnDigits(local)
	},
	tel: "+88" + local.replace(/-/g, "")
});
var site = {
	name: {
		en: "Rajashon Hospital & Diagnostic Center",
		bn: "রাজাসন হসপিটাল এন্ড ডায়াগনস্টিক সেন্টার"
	},
	short: {
		en: "Rajashon",
		bn: "রাজাসন"
	},
	sub: {
		en: "Hospital & Diagnostic Center",
		bn: "হসপিটাল এন্ড ডায়াগনস্টিক সেন্টার"
	},
	phones: [
		phone("01334-945270"),
		phone("01334-945271"),
		phone("01334-945272")
	],
	whatsapp: "8801334945270",
	email: "rajashonhospital@gmail.com",
	address: {
		en: "Holding No. 163, Madhya Rajashon, Birulia Road, Savar, Dhaka",
		bn: "হোল্ডিং নং-১৬৩, মধ্য রাজাসন, বিরুলিয়া রোড, সাভার, ঢাকা"
	},
	landmark: {
		en: "Adjacent to Rajashon Government Primary School",
		bn: "রাজাসন সরকারী প্রাথমিক স্কুল সংলগ্ন"
	},
	mapQuery: "Rajashon Hospital & Diagnostic Center, Birulia Road, Savar, Dhaka",
	hours: [{
		days: {
			en: "Saturday – Thursday",
			bn: "শনিবার – বৃহস্পতিবার"
		},
		time: {
			en: "8:00 AM – 10:00 PM",
			bn: "সকাল ৮:০০ – রাত ১০:০০"
		}
	}, {
		days: {
			en: "Friday",
			bn: "শুক্রবার"
		},
		time: {
			en: "8:00 AM – 1:00 PM, 4:00 PM – 10:00 PM",
			bn: "সকাল ৮:০০ – দুপুর ১:০০, বিকেল ৪:০০ – রাত ১০:০০"
		}
	}],
	emergency: {
		en: "Emergency & ambulance: call any serial number above",
		bn: "জরুরি ও অ্যাম্বুলেন্সের জন্য উপরের যেকোনো নম্বরে কল করুন"
	},
	license: {
		en: "",
		bn: ""
	},
	showDemoBanner: true
};
/**
* 📸 PHOTOS & IMAGES CONFIGURATION
*
* You can use:
* 1. Direct Web URLs (e.g. 'https://cdn.example.com/photo.jpg')
* 2. Local files in /public/images/ (e.g. '/images/slides/my-slide.jpg')
*
* Search for "📸" anywhere in src/data/ to quickly jump to image settings.
*/
var images = {
	building: "https://cdn.britannica.com/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg",
	slides: [
		{
			src: "https://cdn.britannica.com/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg",
			title: {
				en: "Our hospital building",
				bn: "আমাদের হসপিটাল ভবন"
			},
			text: {
				en: "Easy to reach on Birulia Road, Savar.",
				bn: "সাভারের বিরুলিয়া রোডে সহজে পৌঁছানো যায়।"
			}
		},
		{
			src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80",
			title: {
				en: "Pathology laboratory",
				bn: "প্যাথলজি ল্যাবরেটরি"
			},
			text: {
				en: "Blood, urine and stool tests with timely reports.",
				bn: "রক্ত, প্রস্রাব ও মলের পরীক্ষা, নির্দিষ্ট সময়ে রিপোর্ট।"
			}
		},
		{
			src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80",
			title: {
				en: "X-ray & ultrasonography",
				bn: "এক্স-রে ও আল্ট্রাসনোগ্রাফি"
			},
			text: {
				en: "Imaging handled by trained technicians and radiologists.",
				bn: "প্রশিক্ষিত টেকনিশিয়ান ও রেডিওলজিস্টের মাধ্যমে ইমেজিং।"
			}
		},
		{
			src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1600&q=80",
			title: {
				en: "Doctors & patient care",
				bn: "ডাক্তার ও রোগীসেবা"
			},
			text: {
				en: "Specialist consultation with a clear serial system.",
				bn: "সুস্পষ্ট সিরিয়াল ব্যবস্থায় বিশেষজ্ঞ চিকিৎসা।"
			}
		}
	]
};
// src/components/T.astro
createAstro("https://rajashon-hospital.example");
var $$T = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$T;
	const { en, bn, t, as: Tag = "span", class: cls = "", html = false } = Astro.props;
	const E = t?.en ?? en ?? "";
	const B = t?.bn ?? bn ?? "";
	return renderTemplate`${html ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": `l-en ${cls}` }, { "default": ($$result) => renderTemplate`${unescapeHTML(E)}` })}${renderComponent($$result, "Tag", Tag, { "class": `l-bn ${cls}` }, { "default": ($$result) => renderTemplate`${unescapeHTML(B)}` })}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": `l-en ${cls}` }, { "default": ($$result) => renderTemplate`${E}` })}${renderComponent($$result, "Tag", Tag, { "class": `l-bn ${cls}` }, { "default": ($$result) => renderTemplate`${B}` })}` })}`}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/T.astro", void 0);
// src/components/Logo.astro
createAstro("https://rajashon-hospital.example");
var $$Logo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Logo;
	const { light = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a href="/"${addAttribute(["logo", { "logo--light": light }], "class:list")}${addAttribute(site.name.en, "aria-label")}><svg class="logo-mark" width="44" height="44" viewBox="0 0 44 44" aria-hidden="true"><rect width="44" height="44" rx="12" fill="currentColor" class="logo-bg"></rect><path d="M22 9.5c4.8 5.4 8.2 9.2 8.2 13.2a8.2 8.2 0 0 1-16.4 0c0-4 3.4-7.8 8.2-13.2z" fill="#fff" opacity=".18"></path><path d="M19 15h6v4h4v6h-4v4h-6v-4h-4v-6h4z" fill="#fff"></path></svg><span class="logo-text"><strong>${renderComponent($$result, "T", $$T, { "t": site.short })}</strong><small>${renderComponent($$result, "T", $$T, { "t": site.sub })}</small></span></a>`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/Logo.astro", void 0);
// src/components/Header.astro
createAstro("https://rajashon-hospital.example");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const { path } = Astro.props;
	const links = [
		{
			href: "/",
			en: "Home",
			bn: "হোম"
		},
		{
			href: "/about",
			en: "About",
			bn: "পরিচিতি"
		},
		{
			href: "/doctors",
			en: "Doctors",
			bn: "ডাক্তার"
		},
		{
			href: "/services",
			en: "Services",
			bn: "সেবা"
		},
		{
			href: "/tests",
			en: "Tests & Prices",
			bn: "টেস্ট ও মূল্য"
		},
		{
			href: "/reports",
			en: "Reports",
			bn: "রিপোর্ট"
		},
		{
			href: "/contact",
			en: "Contact",
			bn: "যোগাযোগ"
		}
	];
	const icons = {
		"/": "home",
		"/about": "info",
		"/doctors": "stethoscope",
		"/services": "heart",
		"/tests": "tag",
		"/reports": "file",
		"/contact": "phone"
	};
	const clean = (p) => p.length > 1 ? p.replace(/\/$/, "") : p;
	const active = (href) => href === "/" ? clean(path) === "/" : clean(path).startsWith(href);
	return renderTemplate`${site.showDemoBanner && renderTemplate`${maybeRenderHead($$result)}<div class="demo-bar"><span class="l-en">Demo content — doctor names, schedules, prices and photos are samples. Replace them before going live.</span><span class="l-bn">ডেমো কনটেন্ট — ডাক্তারের নাম, সময়সূচি, মূল্য ও ছবি নমুনা মাত্র। চালু করার আগে প্রকৃত তথ্য দিন।</span><button type="button" data-banner-close data-aria-en="Dismiss" data-aria-bn="বন্ধ করুন" aria-label="Dismiss">${renderComponent($$result, "Icon", $$Icon, {
		"name": "close",
		"size": 16
	})}</button></div>`}<header class="site-header"><div class="topbar"><div class="wrap topbar-in"><div class="topbar-l"><a${addAttribute(`tel:${site.phones[0].tel}`, "href")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "phone",
		"size": 15
	})} ${renderComponent($$result, "T", $$T, { "t": site.phones[0].display })}</a><span class="dot"></span><span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "pin",
		"size": 15
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Birulia Road, Savar, Dhaka",
		"bn": "বিরুলিয়া রোড, সাভার, ঢাকা"
	})}</span><span class="dot"></span><span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "clock",
		"size": 15
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Open 7 days",
		"bn": "সপ্তাহে ৭ দিন খোলা"
	})}</span></div><a class="topbar-r"${addAttribute(`https://wa.me/${site.whatsapp}`, "href")} target="_blank" rel="noopener">${renderComponent($$result, "Icon", $$Icon, {
		"name": "whatsapp",
		"size": 15
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Serial on WhatsApp",
		"bn": "হোয়াটসঅ্যাপে সিরিয়াল"
	})}</a></div></div><div class="wrap bar">${renderComponent($$result, "Logo", $$Logo, {})}<nav class="nav" aria-label="Main"><ul>${links.map((l) => renderTemplate`<li><a${addAttribute(l.href, "href")}${addAttribute(active(l.href) ? "page" : void 0, "aria-current")}>${renderComponent($$result, "T", $$T, {
		"en": l.en,
		"bn": l.bn
	})}</a></li>`)}</ul><a class="btn btn-primary nav-cta" href="/appointment">${renderComponent($$result, "Icon", $$Icon, {
		"name": "calendar",
		"size": 18
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Book Appointment",
		"bn": "অ্যাপয়েন্টমেন্ট"
	})}</a></nav><div class="tools"><div class="seg" role="group" aria-label="Language"><button type="button" data-set-lang="en">EN</button><button type="button" data-set-lang="bn">বাংলা</button></div><button type="button" class="icon-btn" data-theme-toggle data-aria-en="Toggle day / night mode" data-aria-bn="ডে / নাইট মোড পরিবর্তন" aria-label="Toggle day / night mode">${renderComponent($$result, "Icon", $$Icon, {
		"name": "moon",
		"class": "i-moon"
	})}${renderComponent($$result, "Icon", $$Icon, {
		"name": "sun",
		"class": "i-sun"
	})}</button><button type="button" class="icon-btn nav-toggle" data-nav-toggle aria-expanded="false" aria-controls="drawer" data-aria-en="Menu" data-aria-bn="মেনু" aria-label="Menu"><span class="burger" aria-hidden="true"><i></i><i></i><i></i></span></button></div></div></header><div class="nav-scrim" data-nav-scrim></div><aside class="drawer" id="drawer" aria-label="Menu" data-drawer><div class="drawer-head">${renderComponent($$result, "Logo", $$Logo, {})}<button type="button" class="icon-btn drawer-close" data-nav-close data-aria-en="Close menu" data-aria-bn="মেনু বন্ধ করুন" aria-label="Close menu">${renderComponent($$result, "Icon", $$Icon, { "name": "close" })}</button></div><nav class="drawer-nav" aria-label="Mobile"><ul>${links.map((l, i) => renderTemplate`<li${addAttribute(`--i:${i}`, "style")}><a${addAttribute(l.href, "href")}${addAttribute(active(l.href) ? "page" : void 0, "aria-current")}><span class="dn-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": icons[l.href],
		"size": 20
	})}</span><span class="dn-t">${renderComponent($$result, "T", $$T, {
		"en": l.en,
		"bn": l.bn
	})}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "chevr",
		"size": 18,
		"class": "dn-go"
	})}</a></li>`)}</ul></nav><div class="drawer-foot"${addAttribute(`--i:${links.length}`, "style")}><a class="btn btn-primary btn-lg" href="/appointment">${renderComponent($$result, "Icon", $$Icon, {
		"name": "calendar",
		"size": 20
	})} ${renderComponent($$result, "T", $$T, {
		"en": "Book Appointment",
		"bn": "অ্যাপয়েন্টমেন্ট নিন"
	})}</a><div class="drawer-call"><a${addAttribute(`tel:${site.phones[0].tel}`, "href")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "phone",
		"size": 18
	})} ${renderComponent($$result, "T", $$T, { "t": site.phones[0].display })}</a><a${addAttribute(`https://wa.me/${site.whatsapp}`, "href")} target="_blank" rel="noopener">${renderComponent($$result, "Icon", $$Icon, {
		"name": "whatsapp",
		"size": 18
	})} WhatsApp</a></div><p class="drawer-addr">${renderComponent($$result, "Icon", $$Icon, {
		"name": "pin",
		"size": 16
	})} ${renderComponent($$result, "T", $$T, { "t": site.address })}</p></div></aside>`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/Header.astro", void 0);
// src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="site-footer"><div class="wrap foot-grid"><div class="foot-brand">${renderComponent($$result, "Logo", $$Logo, { "light": true })}<p>${renderComponent($$result, "T", $$T, {
		"en": "Doctor consultation, pathology and imaging under one roof in Savar.",
		"bn": "সাভারে এক ছাদের নিচে ডাক্তারের পরামর্শ, প্যাথলজি ও ইমেজিং সেবা।"
	})}</p></div><div><h3>${renderComponent($$result, "T", $$T, {
		"en": "Quick links",
		"bn": "দ্রুত লিংক"
	})}</h3><ul class="foot-links">${[
		{
			href: "/about",
			en: "About us",
			bn: "আমাদের পরিচিতি"
		},
		{
			href: "/doctors",
			en: "Our doctors",
			bn: "আমাদের ডাক্তার"
		},
		{
			href: "/services",
			en: "Services",
			bn: "সেবাসমূহ"
		},
		{
			href: "/tests",
			en: "Tests & prices",
			bn: "টেস্ট ও মূল্য"
		},
		{
			href: "/reports",
			en: "Reports",
			bn: "রিপোর্ট"
		},
		{
			href: "/appointment",
			en: "Book appointment",
			bn: "অ্যাপয়েন্টমেন্ট"
		}
	].map((l) => renderTemplate`<li><a${addAttribute(l.href, "href")}>${renderComponent($$result, "T", $$T, {
		"en": l.en,
		"bn": l.bn
	})}</a></li>`)}</ul></div><div><h3>${renderComponent($$result, "T", $$T, {
		"en": "Contact",
		"bn": "যোগাযোগ"
	})}</h3><ul class="foot-contact"><li>${renderComponent($$result, "Icon", $$Icon, {
		"name": "pin",
		"size": 18
	})}<span>${renderComponent($$result, "T", $$T, { "t": site.address })}<br><small>${renderComponent($$result, "T", $$T, { "t": site.landmark })}</small></span></li><li>${renderComponent($$result, "Icon", $$Icon, {
		"name": "phone",
		"size": 18
	})}<span>${site.phones.map((p) => renderTemplate`<a${addAttribute(`tel:${p.tel}`, "href")}>${renderComponent($$result, "T", $$T, { "t": p.display })}</a>`)}</span></li><li>${renderComponent($$result, "Icon", $$Icon, {
		"name": "mail",
		"size": 18
	})}<a${addAttribute(`mailto:${site.email}`, "href")}>${site.email}</a></li></ul></div><div><h3>${renderComponent($$result, "T", $$T, {
		"en": "Opening hours",
		"bn": "খোলার সময়"
	})}</h3><ul class="foot-hours">${site.hours.map((h) => renderTemplate`<li><strong>${renderComponent($$result, "T", $$T, { "t": h.days })}</strong><span>${renderComponent($$result, "T", $$T, { "t": h.time })}</span></li>`)}</ul><p class="foot-em">${renderComponent($$result, "T", $$T, { "t": site.emergency })}</p></div></div><div class="wrap foot-base"><span>© ${year} ${renderComponent($$result, "T", $$T, { "t": site.name })}</span><span class="l-en">Information on this site is for guidance and does not replace a doctor’s advice.</span><span class="l-bn">এই সাইটের তথ্য নির্দেশনামূলক; এটি ডাক্তারের পরামর্শের বিকল্প নয়।</span></div></footer>`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/Footer.astro", void 0);
// src/layouts/Base.astro
createAstro("https://rajashon-hospital.example");
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { title, description } = Astro.props;
	const full = (l) => `${title[l]} · ${site.short[l]}`;
	return renderTemplate`<html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#f7f6f1"><meta name="description"${addAttribute(description?.en ?? site.name.en, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title${addAttribute(full("en"), "data-en")}${addAttribute(full("bn"), "data-bn")}>${full("en")}</title><script>
      (function () {
        var d = document.documentElement;
        try {
          var q = new URLSearchParams(location.search).get('lang');
          var l = q === 'bn' || q === 'en' ? q : localStorage.getItem('rj-lang');
          d.lang = l === 'bn' ? 'bn' : 'en';
          d.dataset.theme = localStorage.getItem('rj-theme') === 'dark' ? 'dark' : 'light';
        } catch (e) {}
      })();
    <\/script>${renderHead($$result)}</head><body><a class="skip" href="#main"><span class="l-en">Skip to content</span><span class="l-bn">মূল অংশে যান</span></a>${renderComponent($$result, "Header", $$Header, { "path": Astro.url.pathname })}<main id="main">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}${renderScript($$result, "/Users/pranto/Downloads/diagnostics-center/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/pranto/Downloads/diagnostics-center/src/layouts/Base.astro", void 0);
export { DAYS as a, $$Icon as c, site as i, renderScript as l, $$T as n, num as o, images as r, taka as s, $$Base as t, createComponent as u };
