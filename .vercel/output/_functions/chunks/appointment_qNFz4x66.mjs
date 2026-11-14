import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as addAttribute, d as renderTemplate, f as maybeRenderHead, i as renderComponent, t as spreadAttributes, y as unescapeHTML } from "./server_CkwTg0kB.mjs";
import { t as createAstro } from "./compiler_-liHs-wz.mjs";
import { c as $$Icon, i as site, l as renderScript, n as $$T, t as $$Base, u as createComponent } from "./Base_DOxPmu1Z.mjs";
import { t as $$PageHero } from "./PageHero_CBqc0uUX.mjs";
import { n as specialties, t as doctors } from "./doctors_yfLoXXJh.mjs";
import { t as $$Dropdown } from "./Dropdown_BaNJ0jZE.mjs";
import { n as $$DayChips, t as $$DoctorPortrait } from "./DoctorPortrait_CO92FRbV.mjs";
// src/components/Field.astro
createAstro("https://rajashon-hospital.example");
var $$Field = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Field;
	const { label, name, type = "text", required = false, placeholder, pattern, inputmode, autocomplete, rows, min, max, hint, class: cls = "" } = Astro.props;
	const attrs = {
		name,
		required,
		pattern,
		inputmode,
		autocomplete,
		min,
		max,
		"data-l-en": label.en,
		"data-l-bn": label.bn,
		"data-ph-en": placeholder?.en,
		"data-ph-bn": placeholder?.bn,
		placeholder: placeholder?.en
	};
	return renderTemplate`${maybeRenderHead($$result)}<label${addAttribute(`field ${cls}`, "class")}><span class="field-l">${renderComponent($$result, "T", $$T, { "t": label })}${required && renderTemplate`<i aria-hidden="true">*</i>`}</span>${rows ? renderTemplate`<textarea${spreadAttributes(attrs)}${addAttribute(rows, "rows")}></textarea>` : renderTemplate`<input${spreadAttributes(attrs)}${addAttribute(type, "type")}>`}${hint && renderTemplate`<small class="field-h">${renderComponent($$result, "T", $$T, { "t": hint })}</small>`}</label>`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/Field.astro", void 0);
// src/components/AppointmentBooking.astro
var $$AppointmentBooking = createComponent(($$result, $$props, $$slots) => {
	const catOptions = [{
		value: "all",
		label: {
			en: "All categories (optional)",
			bn: "সব ক্যাটাগরি (ঐচ্ছিক)"
		},
		count: doctors.length
	}, ...specialties.filter((s) => doctors.some((d) => d.spec === s.key)).map((s) => ({
		value: s.key,
		label: s.label,
		count: doctors.filter((d) => d.spec === s.key).length
	}))];
	const options = [{
		value: "",
		label: {
			en: "Select a doctor",
			bn: "ডাক্তার নির্বাচন করুন"
		}
	}, ...doctors.map((d) => ({
		value: d.slug,
		label: d.name,
		sub: d.specialty,
		category: d.spec
	}))];
	const data = doctors.map((d) => ({
		slug: d.slug,
		name: d.name,
		spec: d.specialty,
		specKey: d.spec,
		days: d.days,
		time: d.time,
		fee: d.fee
	}));
	return renderTemplate`${maybeRenderHead($$result)}<div class="book" data-book${addAttribute(site.whatsapp, "data-wa")}${addAttribute(site.name.en, "data-hosp-en")}${addAttribute(site.name.bn, "data-hosp-bn")}><script type="application/json" id="book-data">${unescapeHTML(JSON.stringify(data))}<\/script><div class="book-main"><!-- Step 1 --><section class="bpanel"><header class="bpanel-h"><span class="step">1</span><h2>${renderComponent($$result, "T", $$T, {
		"en": "Choose a doctor",
		"bn": "ডাক্তার নির্বাচন করুন"
	})}</h2></header><div class="book-filters">${renderComponent($$result, "Dropdown", $$Dropdown, {
		"id": "cat-dd",
		"options": catOptions,
		"selected": "all",
		"class": "dd-wide",
		"caption": {
			en: "Category (Optional)",
			bn: "ক্যাটাগরি (ঐচ্ছিক)"
		}
	})}${renderComponent($$result, "Dropdown", $$Dropdown, {
		"id": "doc-dd",
		"options": options,
		"selected": "",
		"class": "dd-wide",
		"caption": {
			en: "Doctor",
			bn: "ডাক্তার"
		},
		"emptyText": {
			en: "No doctor in this category",
			bn: "এই ক্যাটাগরিতে কোনো ডাক্তার নেই"
		}
	})}</div><div class="dsum-wrap">${doctors.map((d) => renderTemplate`<div class="dsum"${addAttribute(d.slug, "data-sum")} hidden><div class="dsum-photo">${renderComponent($$result, "DoctorPortrait", $$DoctorPortrait, { "doctor": d })}</div><div class="dsum-body"><strong>${renderComponent($$result, "T", $$T, { "t": d.name })}</strong><span class="dsum-spec">${renderComponent($$result, "T", $$T, { "t": d.specialty })}</span><span class="dsum-deg">${renderComponent($$result, "T", $$T, { "t": d.degrees })}</span>${renderComponent($$result, "DayChips", $$DayChips, { "days": d.days })}<span class="dsum-time">${renderComponent($$result, "Icon", $$Icon, {
		"name": "clock",
		"size": 15
	})} ${renderComponent($$result, "T", $$T, { "t": d.time })}</span></div></div>`)}</div></section><!-- Step 2 --><section class="bpanel" data-step2><header class="bpanel-h"><span class="step">2</span><h2>${renderComponent($$result, "T", $$T, {
		"en": "Pick a date",
		"bn": "তারিখ নির্বাচন করুন"
	})}</h2></header><div class="cal-lock" data-lock>${renderComponent($$result, "Icon", $$Icon, {
		"name": "calendar",
		"size": 22
	})}<p>${renderComponent($$result, "T", $$T, {
		"en": "Select a doctor first to see the available days.",
		"bn": "আগে ডাক্তার নির্বাচন করুন, তাহলে সিরিয়ালের উপলব্ধ দিনগুলো দেখা যাবে।"
	})}</p></div><div class="cal" data-cal hidden><div class="cal-top"><button type="button" class="icon-btn" data-prev data-aria-en="Previous month" data-aria-bn="আগের মাস" aria-label="Previous month">${renderComponent($$result, "Icon", $$Icon, { "name": "chevl" })}</button><div class="cal-sel"><select data-month aria-label="Month"></select><select data-year aria-label="Year"></select></div><button type="button" class="icon-btn" data-next data-aria-en="Next month" data-aria-bn="পরের মাস" aria-label="Next month">${renderComponent($$result, "Icon", $$Icon, { "name": "chevr" })}</button></div><div class="cal-week" aria-hidden="true"></div><div class="cal-grid" role="grid"></div><div class="cal-foot"><ul class="legend"><li><i class="lg lg-on"></i>${renderComponent($$result, "T", $$T, {
		"en": "Doctor available",
		"bn": "ডাক্তার আছেন"
	})}</li><li><i class="lg lg-off"></i>${renderComponent($$result, "T", $$T, {
		"en": "Not available",
		"bn": "নেই"
	})}</li><li><i class="lg lg-sel"></i>${renderComponent($$result, "T", $$T, {
		"en": "Selected",
		"bn": "নির্বাচিত"
	})}</li></ul><button type="button" class="btn btn-soft btn-sm" data-next-avail>${renderComponent($$result, "Icon", $$Icon, {
		"name": "calendar",
		"size": 16
	})} <span data-next-label></span></button></div></div></section><!-- Step 3 --><section class="bpanel" data-step3><header class="bpanel-h"><span class="step">3</span><h2>${renderComponent($$result, "T", $$T, {
		"en": "Patient details",
		"bn": "রোগীর তথ্য"
	})}</h2></header><form class="bform" data-form novalidate>${renderComponent($$result, "Field", $$Field, {
		"label": {
			en: "Patient name",
			bn: "রোগীর নাম"
		},
		"name": "name",
		"required": true,
		"autocomplete": "name",
		"placeholder": {
			en: "Full name",
			bn: "পূর্ণ নাম"
		}
	})}${renderComponent($$result, "Field", $$Field, {
		"label": {
			en: "Mobile number",
			bn: "মোবাইল নম্বর"
		},
		"name": "mobile",
		"type": "tel",
		"required": true,
		"inputmode": "tel",
		"autocomplete": "tel",
		"placeholder": {
			en: "01XXXXXXXXX",
			bn: "01XXXXXXXXX"
		}
	})}${renderComponent($$result, "Field", $$Field, {
		"label": {
			en: "Age",
			bn: "বয়স"
		},
		"name": "age",
		"type": "number",
		"required": true,
		"inputmode": "numeric",
		"min": 0,
		"max": 120,
		"placeholder": {
			en: "Years",
			bn: "বছর"
		},
		"class": "field-age"
	})}<p class="form-msg" data-msg role="alert" hidden></p><button class="btn btn-primary btn-lg" type="submit">${renderComponent($$result, "Icon", $$Icon, {
		"name": "check",
		"size": 20
	})}<span data-submit-label>${renderComponent($$result, "T", $$T, {
		"en": "Submit Appointment",
		"bn": "অ্যাপয়েন্টমেন্ট জমা দিন"
	})}</span></button><p class="form-hint">${renderComponent($$result, "T", $$T, {
		"en": "Your appointment details will be securely submitted for confirmation.",
		"bn": "আপনার অ্যাপয়েন্টমেন্টের তথ্য জমা হবে এবং যাচাই করে নিশ্চিত করা হবে।"
	})}</p></form><div class="book-done" data-done hidden><span class="done-ic">${renderComponent($$result, "Icon", $$Icon, {
		"name": "check",
		"size": 26
	})}</span><h3 data-done-title>${renderComponent($$result, "T", $$T, {
		"en": "Appointment submitted successfully!",
		"bn": "অ্যাপয়েন্টমেন্ট সফলভাবে জমা হয়েছে!"
	})}</h3><p data-done-detail>${renderComponent($$result, "T", $$T, {
		"en": "Your appointment request has been saved.",
		"bn": "আপনার অ্যাপয়েন্টমেন্টের তথ্য সংরক্ষণ করা হয়েছে।"
	})}</p><div class="appointment-id"><span data-id-label>${renderComponent($$result, "T", $$T, {
		"en": "Appointment ID",
		"bn": "অ্যাপয়েন্টমেন্ট আইডি"
	})}</span><strong data-appointment-id>—</strong></div></div></section></div><aside class="book-aside"><div class="sumcard"><h3>${renderComponent($$result, "T", $$T, {
		"en": "Your appointment",
		"bn": "আপনার অ্যাপয়েন্টমেন্ট"
	})}</h3><dl><div><dt>${renderComponent($$result, "Icon", $$Icon, {
		"name": "user",
		"size": 16
	})}${renderComponent($$result, "T", $$T, {
		"en": "Doctor",
		"bn": "ডাক্তার"
	})}</dt><dd data-s-doc>—</dd></div><div><dt>${renderComponent($$result, "Icon", $$Icon, {
		"name": "calendar",
		"size": 16
	})}${renderComponent($$result, "T", $$T, {
		"en": "Date",
		"bn": "তারিখ"
	})}</dt><dd data-s-date>—</dd></div><div><dt>${renderComponent($$result, "Icon", $$Icon, {
		"name": "clock",
		"size": 16
	})}${renderComponent($$result, "T", $$T, {
		"en": "Time",
		"bn": "সময়"
	})}</dt><dd data-s-time>—</dd></div><div><dt>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tag",
		"size": 16
	})}${renderComponent($$result, "T", $$T, {
		"en": "Fee",
		"bn": "ফি"
	})}</dt><dd data-s-fee>—</dd></div></dl></div><div class="helpcard"><h3>${renderComponent($$result, "T", $$T, {
		"en": "Prefer to call?",
		"bn": "কল করতে চান?"
	})}</h3><p>${renderComponent($$result, "T", $$T, {
		"en": "Call us for a serial or to change an appointment.",
		"bn": "সিরিয়াল নিতে বা পরিবর্তন করতে কল করুন।"
	})}</p><ul>${site.phones.map((p) => renderTemplate`<li><a${addAttribute(`tel:${p.tel}`, "href")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "phone",
		"size": 16
	})} ${renderComponent($$result, "T", $$T, { "t": p.display })}</a></li>`)}</ul></div></aside></div>${renderScript($$result, "/Users/pranto/Downloads/diagnostics-center/src/components/AppointmentBooking.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/components/AppointmentBooking.astro", void 0);
// src/pages/appointment.astro
var appointment_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Appointment,
	file: () => $$file,
	url: () => $$url
});
var $$Appointment = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": {
		en: "Appointment",
		bn: "অ্যাপয়েন্টমেন্ট"
	} }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHero", $$PageHero, {
		"title": {
			en: "Book an appointment",
			bn: "অ্যাপয়েন্টমেন্টের অনুরোধ"
		},
		"lead": {
			en: "Choose a doctor, pick one of the green days and send your details. We will confirm your serial on WhatsApp.",
			bn: "ডাক্তার বেছে নিন, সবুজ দিনগুলোর একটি নির্বাচন করুন এবং তথ্য পাঠান। আমরা হোয়াটসঅ্যাপে সিরিয়াল নিশ্চিত করব।"
		}
	})}${maybeRenderHead($$result)}<section class="section section-flush"><div class="wrap">${renderComponent($$result, "AppointmentBooking", $$AppointmentBooking, {})}</div></section>` })}`;
}, "/Users/pranto/Downloads/diagnostics-center/src/pages/appointment.astro", void 0);
var $$file = "/Users/pranto/Downloads/diagnostics-center/src/pages/appointment.astro";
var $$url = "/appointment";
// \0virtual:astro:page:src/pages/appointment@_@astro
var page = () => appointment_exports;
export { page };
