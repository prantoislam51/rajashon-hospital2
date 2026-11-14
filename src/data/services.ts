import type { Bi } from '../lib/i18n';

/** ✏️  DEMO SERVICES — keep the ones you really offer and delete the rest. */
export type Service = {
  key: string;
  icon: string;
  title: Bi;
  text: Bi;
  image?: string;
};

export const services: Service[] = [
  {
    key: 'opd', icon: 'stethoscope',
    // 📸 SERVICE PHOTO: Outdoor Consultation / Doctor Chamber
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Outdoor Consultation', bn: 'আউটডোর চিকিৎসা' },
    text: { en: 'Consult specialist doctors by serial. Check each doctor’s weekly schedule and book ahead.', bn: 'সিরিয়ালের মাধ্যমে বিশেষজ্ঞ ডাক্তারের পরামর্শ। প্রতিটি ডাক্তারের সাপ্তাহিক সময়সূচি দেখে আগেই সিরিয়াল নিন।' },
  },
  {
    key: 'pathology', icon: 'flask',
    // 📸 SERVICE PHOTO: Pathology Laboratory
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Pathology Laboratory', bn: 'প্যাথলজি ল্যাবরেটরি' },
    text: { en: 'Hematology, biochemistry, hormone, serology, urine, stool and culture tests.', bn: 'হেমাটোলজি, বায়োকেমিস্ট্রি, হরমোন, সেরোলজি, প্রস্রাব, মল ও কালচার পরীক্ষা।' },
  },
  {
    key: 'xray', icon: 'xray',
    // 📸 SERVICE PHOTO: X-Ray
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'X-Ray', bn: 'এক্স-রে' },
    text: { en: 'Chest, abdomen, spine, skull and limb X-rays with same-visit reports.', bn: 'বুক, পেট, মেরুদণ্ড, মাথা ও হাত-পায়ের এক্স-রে, একই ভিজিটে রিপোর্ট।' },
  },
  {
    key: 'usg', icon: 'usg',
    // 📸 SERVICE PHOTO: Ultrasonography
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Ultrasonography', bn: 'আল্ট্রাসনোগ্রাফি' },
    text: { en: 'Abdomen, pelvis, pregnancy, thyroid and small-parts ultrasound.', bn: 'পেট, পেলভিস, গর্ভাবস্থা, থাইরয়েডসহ বিভিন্ন অঙ্গের আল্ট্রাসনোগ্রাফি।' },
  },
  {
    key: 'ecg', icon: 'pulse',
    // 📸 SERVICE PHOTO: ECG & Echocardiography
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'ECG & Echocardiography', bn: 'ইসিজি ও ইকোকার্ডিওগ্রাফি' },
    text: { en: 'Heart tracing and echo with specialist review for chest pain and BP.', bn: 'বুকে ব্যথা ও উচ্চ রক্তচাপের রোগীর জন্য ইসিজি, ইকো ও বিশেষজ্ঞ পর্যালোচনা।' },
  },
  {
    key: 'emergency', icon: 'ambulance',
    // 📸 SERVICE PHOTO: Emergency & Ambulance
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Emergency & Ambulance', bn: 'জরুরি সেবা ও অ্যাম্বুলেন্স' },
    text: { en: 'Call ahead for emergency care and ambulance support.', bn: 'জরুরি চিকিৎসা ও অ্যাম্বুলেন্স সহায়তার জন্য আগে থেকে কল করুন।' },
  },
  {
    key: 'indoor', icon: 'bed',
    title: { en: 'Indoor Admission', bn: 'ইনডোর / ভর্তি সেবা' },
    text: { en: 'Admission, observation and nursing care under a consultant.', bn: 'কনসালটেন্টের তত্ত্বাবধানে ভর্তি, পর্যবেক্ষণ ও নার্সিং সেবা।' },
  },
  {
    key: 'surgery', icon: 'shield',
    title: { en: 'Minor & Major Surgery', bn: 'ছোট ও বড় অপারেশন' },
    text: { en: 'General, gynecological and orthopedic procedures in a clean operation theatre.', bn: 'পরিচ্ছন্ন অপারেশন থিয়েটারে সাধারণ, গাইনি ও অর্থোপেডিক অপারেশন।' },
  },
  {
    key: 'home', icon: 'home',
    title: { en: 'Home Sample Collection', bn: 'বাসা থেকে নমুনা সংগ্রহ' },
    text: { en: 'Call to arrange blood sample collection at home for elderly and bed-bound patients.', bn: 'বয়স্ক ও শয্যাশায়ী রোগীর জন্য কল করে বাসা থেকে রক্তের নমুনা সংগ্রহের ব্যবস্থা।' },
  },
  {
    key: 'pharmacy', icon: 'pill',
    title: { en: 'Pharmacy', bn: 'ফার্মেসি' },
    text: { en: 'Prescribed medicines and basic supplies available in the building.', bn: 'ভবনের ভেতরেই প্রেসক্রিপশনের ওষুধ ও প্রয়োজনীয় সামগ্রী।' },
  },
];

export const reportKinds = [
  { icon: 'droplet', title: { en: 'Blood & biochemistry', bn: 'রক্ত ও বায়োকেমিস্ট্রি' }, text: { en: 'CBC, sugar, lipid, liver, kidney, thyroid and more.', bn: 'সিবিসি, সুগার, লিপিড, লিভার, কিডনি, থাইরয়েড ইত্যাদি।' } },
  { icon: 'flask', title: { en: 'Urine, stool & culture', bn: 'প্রস্রাব, মল ও কালচার' }, text: { en: 'Routine examination and culture sensitivity.', bn: 'রুটিন পরীক্ষা এবং কালচার ও সেনসিটিভিটি।' } },
  { icon: 'xray', title: { en: 'X-ray reports', bn: 'এক্স-রে রিপোর্ট' }, text: { en: 'Film or digital copy with a radiologist’s note.', bn: 'ফিল্ম বা ডিজিটাল কপি, সঙ্গে রেডিওলজিস্টের মন্তব্য।' } },
  { icon: 'usg', title: { en: 'Ultrasonography reports', bn: 'আল্ট্রাসনোগ্রাফি রিপোর্ট' }, text: { en: 'Printed report with key images.', bn: 'প্রধান ছবিসহ প্রিন্টেড রিপোর্ট।' } },
  { icon: 'pulse', title: { en: 'ECG & echo reports', bn: 'ইসিজি ও ইকো রিপোর্ট' }, text: { en: 'Tracing and a cardiologist’s interpretation.', bn: 'ট্রেসিং এবং কার্ডিওলজিস্টের ব্যাখ্যা।' } },
  { icon: 'shield', title: { en: 'Health-check summaries', bn: 'হেলথ-চেক সামারি' }, text: { en: 'One combined summary for package tests.', bn: 'প্যাকেজ পরীক্ষার একটি সম্মিলিত সারসংক্ষেপ।' } },
];
