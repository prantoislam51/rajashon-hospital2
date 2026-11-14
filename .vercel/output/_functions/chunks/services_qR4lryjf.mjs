import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CkwTg0kB.mjs";
import { c as $$Icon, n as $$T, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { t as createAstro } from "./compiler_-liHs-wz.mjs";
// src/components/SectionHead.astro
createAstro("https://rajashon-hospital.example");
var $$SectionHead = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionHead;
	const { eyebrow, title, text, href, cta, center = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["sec-head", { "is-center": center }], "class:list")}><div>${eyebrow && renderTemplate`<p class="eyebrow">${renderComponent($$result, "T", $$T, { "t": eyebrow })}</p>`}<h2>${renderComponent($$result, "T", $$T, { "t": title })}</h2>${text && renderTemplate`<p class="sec-text">${renderComponent($$result, "T", $$T, { "t": text })}</p>`}</div>${href && cta && renderTemplate`<a class="link-arrow"${addAttribute(href, "href")}>${renderComponent($$result, "T", $$T, { "t": cta })} ${renderComponent($$result, "Icon", $$Icon, {
		"name": "arrow",
		"size": 18
	})}</a>`}</div>`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/SectionHead.astro", void 0);
// src/data/services.ts
var services = [
	{
		key: "opd",
		icon: "stethoscope",
		image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
		title: {
			en: "Outdoor Consultation",
			bn: "আউটডোর চিকিৎসা"
		},
		text: {
			en: "Consult specialist doctors by serial. Check each doctor’s weekly schedule and book ahead.",
			bn: "সিরিয়ালের মাধ্যমে বিশেষজ্ঞ ডাক্তারের পরামর্শ। প্রতিটি ডাক্তারের সাপ্তাহিক সময়সূচি দেখে আগেই সিরিয়াল নিন।"
		}
	},
	{
		key: "pathology",
		icon: "flask",
		image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
		title: {
			en: "Pathology Laboratory",
			bn: "প্যাথলজি ল্যাবরেটরি"
		},
		text: {
			en: "Hematology, biochemistry, hormone, serology, urine, stool and culture tests.",
			bn: "হেমাটোলজি, বায়োকেমিস্ট্রি, হরমোন, সেরোলজি, প্রস্রাব, মল ও কালচার পরীক্ষা।"
		}
	},
	{
		key: "xray",
		icon: "xray",
		image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
		title: {
			en: "X-Ray",
			bn: "এক্স-রে"
		},
		text: {
			en: "Chest, abdomen, spine, skull and limb X-rays with same-visit reports.",
			bn: "বুক, পেট, মেরুদণ্ড, মাথা ও হাত-পায়ের এক্স-রে, একই ভিজিটে রিপোর্ট।"
		}
	},
	{
		key: "usg",
		icon: "usg",
		image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
		title: {
			en: "Ultrasonography",
			bn: "আল্ট্রাসনোগ্রাফি"
		},
		text: {
			en: "Abdomen, pelvis, pregnancy, thyroid and small-parts ultrasound.",
			bn: "পেট, পেলভিস, গর্ভাবস্থা, থাইরয়েডসহ বিভিন্ন অঙ্গের আল্ট্রাসনোগ্রাফি।"
		}
	},
	{
		key: "ecg",
		icon: "pulse",
		image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
		title: {
			en: "ECG & Echocardiography",
			bn: "ইসিজি ও ইকোকার্ডিওগ্রাফি"
		},
		text: {
			en: "Heart tracing and echo with specialist review for chest pain and BP.",
			bn: "বুকে ব্যথা ও উচ্চ রক্তচাপের রোগীর জন্য ইসিজি, ইকো ও বিশেষজ্ঞ পর্যালোচনা।"
		}
	},
	{
		key: "emergency",
		icon: "ambulance",
		image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200&q=80",
		title: {
			en: "Emergency & Ambulance",
			bn: "জরুরি সেবা ও অ্যাম্বুলেন্স"
		},
		text: {
			en: "Call ahead for emergency care and ambulance support.",
			bn: "জরুরি চিকিৎসা ও অ্যাম্বুলেন্স সহায়তার জন্য আগে থেকে কল করুন।"
		}
	},
	{
		key: "indoor",
		icon: "bed",
		title: {
			en: "Indoor Admission",
			bn: "ইনডোর / ভর্তি সেবা"
		},
		text: {
			en: "Admission, observation and nursing care under a consultant.",
			bn: "কনসালটেন্টের তত্ত্বাবধানে ভর্তি, পর্যবেক্ষণ ও নার্সিং সেবা।"
		}
	},
	{
		key: "surgery",
		icon: "shield",
		title: {
			en: "Minor & Major Surgery",
			bn: "ছোট ও বড় অপারেশন"
		},
		text: {
			en: "General, gynecological and orthopedic procedures in a clean operation theatre.",
			bn: "পরিচ্ছন্ন অপারেশন থিয়েটারে সাধারণ, গাইনি ও অর্থোপেডিক অপারেশন।"
		}
	},
	{
		key: "home",
		icon: "home",
		title: {
			en: "Home Sample Collection",
			bn: "বাসা থেকে নমুনা সংগ্রহ"
		},
		text: {
			en: "Call to arrange blood sample collection at home for elderly and bed-bound patients.",
			bn: "বয়স্ক ও শয্যাশায়ী রোগীর জন্য কল করে বাসা থেকে রক্তের নমুনা সংগ্রহের ব্যবস্থা।"
		}
	},
	{
		key: "pharmacy",
		icon: "pill",
		title: {
			en: "Pharmacy",
			bn: "ফার্মেসি"
		},
		text: {
			en: "Prescribed medicines and basic supplies available in the building.",
			bn: "ভবনের ভেতরেই প্রেসক্রিপশনের ওষুধ ও প্রয়োজনীয় সামগ্রী।"
		}
	}
];
var reportKinds = [
	{
		icon: "droplet",
		title: {
			en: "Blood & biochemistry",
			bn: "রক্ত ও বায়োকেমিস্ট্রি"
		},
		text: {
			en: "CBC, sugar, lipid, liver, kidney, thyroid and more.",
			bn: "সিবিসি, সুগার, লিপিড, লিভার, কিডনি, থাইরয়েড ইত্যাদি।"
		}
	},
	{
		icon: "flask",
		title: {
			en: "Urine, stool & culture",
			bn: "প্রস্রাব, মল ও কালচার"
		},
		text: {
			en: "Routine examination and culture sensitivity.",
			bn: "রুটিন পরীক্ষা এবং কালচার ও সেনসিটিভিটি।"
		}
	},
	{
		icon: "xray",
		title: {
			en: "X-ray reports",
			bn: "এক্স-রে রিপোর্ট"
		},
		text: {
			en: "Film or digital copy with a radiologist’s note.",
			bn: "ফিল্ম বা ডিজিটাল কপি, সঙ্গে রেডিওলজিস্টের মন্তব্য।"
		}
	},
	{
		icon: "usg",
		title: {
			en: "Ultrasonography reports",
			bn: "আল্ট্রাসনোগ্রাফি রিপোর্ট"
		},
		text: {
			en: "Printed report with key images.",
			bn: "প্রধান ছবিসহ প্রিন্টেড রিপোর্ট।"
		}
	},
	{
		icon: "pulse",
		title: {
			en: "ECG & echo reports",
			bn: "ইসিজি ও ইকো রিপোর্ট"
		},
		text: {
			en: "Tracing and a cardiologist’s interpretation.",
			bn: "ট্রেসিং এবং কার্ডিওলজিস্টের ব্যাখ্যা।"
		}
	},
	{
		icon: "shield",
		title: {
			en: "Health-check summaries",
			bn: "হেলথ-চেক সামারি"
		},
		text: {
			en: "One combined summary for package tests.",
			bn: "প্যাকেজ পরীক্ষার একটি সম্মিলিত সারসংক্ষেপ।"
		}
	}
];
export { services as n, $$SectionHead as r, reportKinds as t };
