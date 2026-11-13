import type { Bi } from '../lib/i18n';
import { bnDigits } from '../lib/i18n';

/**
 * ✏️  EDIT THIS FILE to change hospital details everywhere on the site.
 * Everything with { en, bn } has an English and a Bangla version.
 */

const phone = (local: string) => ({
  display: { en: local, bn: bnDigits(local) } as Bi,
  tel: '+88' + local.replace(/-/g, ''),
});

export const site = {
  name: {
    en: 'Rajashon Hospital & Diagnostic Center',
    bn: 'রাজাসন হসপিটাল এন্ড ডায়াগনস্টিক সেন্টার',
  } as Bi,
  short: { en: 'Rajashon', bn: 'রাজাসন' } as Bi,
  sub: { en: 'Hospital & Diagnostic Center', bn: 'হসপিটাল এন্ড ডায়াগনস্টিক সেন্টার' } as Bi,

  // From the signboard: "সিরিয়ালের জন্য"
  phones: [phone('01334-945270'), phone('01334-945271'), phone('01334-945272')],
  // WhatsApp number in international format, digits only (no +).
  whatsapp: '8801334945270',
  // The signboard prints "www.rajashonhospital@gmail.com" – the "www." looks like a typo, so it is dropped here.
  email: 'rajashonhospital@gmail.com',

  address: {
    en: 'Holding No. 163, Madhya Rajashon, Birulia Road, Savar, Dhaka',
    bn: 'হোল্ডিং নং-১৬৩, মধ্য রাজাসন, বিরুলিয়া রোড, সাভার, ঢাকা',
  } as Bi,
  landmark: {
    en: 'Adjacent to Rajashon Government Primary School',
    bn: 'রাজাসন সরকারী প্রাথমিক স্কুল সংলগ্ন',
  } as Bi,
  mapQuery: 'Rajashon Hospital & Diagnostic Center, Birulia Road, Savar, Dhaka',

  // Demo opening hours – change to the real ones.
  hours: [
    { days: { en: 'Saturday – Thursday', bn: 'শনিবার – বৃহস্পতিবার' } as Bi, time: { en: '8:00 AM – 10:00 PM', bn: 'সকাল ৮:০০ – রাত ১০:০০' } as Bi },
    { days: { en: 'Friday', bn: 'শুক্রবার' } as Bi, time: { en: '8:00 AM – 1:00 PM, 4:00 PM – 10:00 PM', bn: 'সকাল ৮:০০ – দুপুর ১:০০, বিকেল ৪:০০ – রাত ১০:০০' } as Bi },
  ],
  emergency: { en: 'Emergency & ambulance: call any serial number above', bn: 'জরুরি ও অ্যাম্বুলেন্সের জন্য উপরের যেকোনো নম্বরে কল করুন' } as Bi,

  // Optional: show a DGHS licence line on the About page, e.g. 'DGHS Licence No. XXXX'. Leave '' to hide.
  license: { en: '', bn: '' } as Bi,

  // Shows a small "demo content" bar on every page. Set to false before publishing.
  showDemoBanner: true,
};

/**
 * Photos. The files below are placeholder illustrations.
 * To use real photos: put your .jpg/.webp files in /public/images/ and change the `src` paths here.
 */
export const images = {
  building: '/images/about/building.svg',
  slides: [
    { src: '/images/slides/slide-1.svg', title: { en: 'Our hospital building', bn: 'আমাদের হসপিটাল ভবন' } as Bi, text: { en: 'Easy to reach on Birulia Road, Savar.', bn: 'সাভারের বিরুলিয়া রোডে সহজে পৌঁছানো যায়।' } as Bi },
    { src: '/images/slides/slide-2.svg', title: { en: 'Pathology laboratory', bn: 'প্যাথলজি ল্যাবরেটরি' } as Bi, text: { en: 'Blood, urine and stool tests with timely reports.', bn: 'রক্ত, প্রস্রাব ও মলের পরীক্ষা, নির্দিষ্ট সময়ে রিপোর্ট।' } as Bi },
    { src: '/images/slides/slide-3.svg', title: { en: 'X-ray & ultrasonography', bn: 'এক্স-রে ও আল্ট্রাসনোগ্রাফি' } as Bi, text: { en: 'Imaging handled by trained technicians and radiologists.', bn: 'প্রশিক্ষিত টেকনিশিয়ান ও রেডিওলজিস্টের মাধ্যমে ইমেজিং।' } as Bi },
    { src: '/images/slides/slide-4.svg', title: { en: 'Doctors & patient care', bn: 'ডাক্তার ও রোগীসেবা' } as Bi, text: { en: 'Specialist consultation with a clear serial system.', bn: 'সুস্পষ্ট সিরিয়াল ব্যবস্থায় বিশেষজ্ঞ চিকিৎসা।' } as Bi },
  ],
};
