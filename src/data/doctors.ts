import type { Bi } from '../lib/i18n';

/**
 * ✏️  DEMO DOCTORS — replace with your real doctors.
 *
 * days: weekdays the doctor sits, using JS numbers: 0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat
 * photo: path in /public (e.g. '/images/doctors/dr-rahman.jpg'). Leave '' to show a neutral illustration.
 * bmdc: BMDC registration number. Leave '' to hide it.
 */
export type Doctor = {
  slug: string;
  name: Bi;
  gender: 'm' | 'f';
  specialty: Bi;
  spec: string; // filter key
  degrees: Bi;
  designation: Bi;
  experience: number; // years
  bmdc: string;
  days: number[];
  time: Bi;
  fee: number;
  about: Bi;
  photo: string;
  featured?: boolean;
};

export const specialties: { key: string; label: Bi }[] = [
  { key: 'medicine', label: { en: 'Medicine', bn: 'মেডিসিন' } },
  { key: 'gynae', label: { en: 'Gynecology & Obstetrics', bn: 'গাইনি ও প্রসূতি' } },
  { key: 'child', label: { en: 'Child Specialist', bn: 'শিশু বিশেষজ্ঞ' } },
  { key: 'surgery', label: { en: 'General Surgery', bn: 'সার্জারি' } },
  { key: 'cardiology', label: { en: 'Cardiology', bn: 'হৃদরোগ' } },
  { key: 'ortho', label: { en: 'Orthopedics', bn: 'অর্থোপেডিক্স' } },
  { key: 'skin', label: { en: 'Dermatology', bn: 'চর্ম ও যৌনরোগ' } },
  { key: 'ent', label: { en: 'ENT', bn: 'নাক, কান ও গলা' } },
  { key: 'neuro', label: { en: 'Neuromedicine', bn: 'স্নায়ুরোগ' } },
  { key: 'radiology', label: { en: 'Radiology & Imaging', bn: 'রেডিওলজি ও ইমেজিং' } },
];

export const doctors: Doctor[] = [
  {
    slug: 'dr-sample-medicine',
    name: { en: 'Dr. Md. Anwar Hossain', bn: 'ডা. মো. আনোয়ার হোসেন' },
    gender: 'm',
    specialty: { en: 'Medicine Specialist', bn: 'মেডিসিন বিশেষজ্ঞ' },
    spec: 'medicine',
    degrees: { en: 'MBBS, BCS (Health), MD (Internal Medicine)', bn: 'এমবিবিএস, বিসিএস (স্বাস্থ্য), এমডি (মেডিসিন)' },
    designation: { en: 'Consultant, Internal Medicine', bn: 'কনসালটেন্ট, মেডিসিন' },
    experience: 14, bmdc: '', days: [6, 0, 2, 4],
    time: { en: '5:00 PM – 9:00 PM', bn: 'বিকেল ৫:০০ – রাত ৯:০০' },
    fee: 800,
    about: {
      en: 'Treats fever, diabetes, high blood pressure, gastric and liver problems, and long-term illnesses in adults.',
      bn: 'জ্বর, ডায়াবেটিস, উচ্চ রক্তচাপ, গ্যাস্ট্রিক, লিভারের সমস্যা ও প্রাপ্তবয়স্কদের দীর্ঘমেয়াদি রোগের চিকিৎসা করেন।',
    },
    photo: '', featured: true,
  },
  {
    slug: 'dr-sample-gynae',
    name: { en: 'Dr. Nusrat Jahan', bn: 'ডা. নুসরাত জাহান' },
    gender: 'f',
    specialty: { en: 'Gynecology & Obstetrics', bn: 'গাইনি ও প্রসূতি বিশেষজ্ঞ' },
    spec: 'gynae',
    degrees: { en: 'MBBS, FCPS (Gynecology & Obstetrics)', bn: 'এমবিবিএস, এফসিপিএস (গাইনি ও অবস)' },
    designation: { en: 'Assistant Professor, Gynecology', bn: 'সহকারী অধ্যাপক, গাইনি' },
    experience: 11, bmdc: '', days: [6, 1, 3],
    time: { en: '4:00 PM – 8:00 PM', bn: 'বিকেল ৪:০০ – রাত ৮:০০' },
    fee: 1000,
    about: {
      en: 'Antenatal and postnatal care, normal and caesarean delivery, menstrual and fertility problems.',
      bn: 'গর্ভকালীন ও প্রসবোত্তর সেবা, নরমাল ও সিজারিয়ান ডেলিভারি, মাসিক ও বন্ধ্যাত্ব সংক্রান্ত সমস্যার চিকিৎসা।',
    },
    photo: '', featured: true,
  },
  {
    slug: 'dr-sample-child',
    name: { en: 'Dr. Tanvir Ahmed', bn: 'ডা. তানভীর আহমেদ' },
    gender: 'm',
    specialty: { en: 'Child Specialist', bn: 'শিশু বিশেষজ্ঞ' },
    spec: 'child',
    degrees: { en: 'MBBS, DCH, MD (Pediatrics)', bn: 'এমবিবিএস, ডিসিএইচ, এমডি (শিশু)' },
    designation: { en: 'Consultant, Pediatrics', bn: 'কনসালটেন্ট, শিশুরোগ' },
    experience: 9, bmdc: '', days: [6, 0, 1, 2, 3, 4],
    time: { en: '10:00 AM – 1:00 PM', bn: 'সকাল ১০:০০ – দুপুর ১:০০' },
    fee: 700,
    about: {
      en: 'Newborn care, vaccination, growth and nutrition, childhood fever, cough, diarrhoea and allergy.',
      bn: 'নবজাতকের যত্ন, টিকা, শিশুর বৃদ্ধি ও পুষ্টি, জ্বর, কাশি, ডায়রিয়া ও অ্যালার্জির চিকিৎসা।',
    },
    photo: '', featured: true,
  },
  {
    slug: 'dr-sample-cardiology',
    name: { en: 'Dr. Shafiqul Islam', bn: 'ডা. শফিকুল ইসলাম' },
    gender: 'm',
    specialty: { en: 'Cardiology', bn: 'হৃদরোগ বিশেষজ্ঞ' },
    spec: 'cardiology',
    degrees: { en: 'MBBS, MD (Cardiology)', bn: 'এমবিবিএস, এমডি (কার্ডিওলজি)' },
    designation: { en: 'Associate Professor, Cardiology', bn: 'সহযোগী অধ্যাপক, কার্ডিওলজি' },
    experience: 16, bmdc: '', days: [0, 3],
    time: { en: '6:00 PM – 9:00 PM', bn: 'সন্ধ্যা ৬:০০ – রাত ৯:০০' },
    fee: 1200,
    about: {
      en: 'Chest pain, high blood pressure, heart failure, rhythm problems; ECG and echocardiography review.',
      bn: 'বুকে ব্যথা, উচ্চ রক্তচাপ, হার্ট ফেইলিউর, হৃদস্পন্দনের সমস্যা; ইসিজি ও ইকো রিপোর্ট পর্যালোচনা।',
    },
    photo: '', featured: true,
  },
  {
    slug: 'dr-sample-surgery',
    name: { en: 'Dr. Kamrul Hasan', bn: 'ডা. কামরুল হাসান' },
    gender: 'm',
    specialty: { en: 'General & Laparoscopic Surgery', bn: 'সার্জারি ও ল্যাপারোস্কোপি বিশেষজ্ঞ' },
    spec: 'surgery',
    degrees: { en: 'MBBS, FCPS (Surgery)', bn: 'এমবিবিএস, এফসিপিএস (সার্জারি)' },
    designation: { en: 'Consultant Surgeon', bn: 'কনসালটেন্ট সার্জন' },
    experience: 12, bmdc: '', days: [6, 1, 4],
    time: { en: '5:30 PM – 8:30 PM', bn: 'বিকেল ৫:৩০ – রাত ৮:৩০' },
    fee: 900,
    about: {
      en: 'Hernia, appendix, gallstone, piles and other general surgical problems.',
      bn: 'হার্নিয়া, অ্যাপেন্ডিক্স, পিত্তথলির পাথর, পাইলসসহ সাধারণ সার্জারির চিকিৎসা।',
    },
    photo: '',
  },
  {
    slug: 'dr-sample-ortho',
    name: { en: 'Dr. Mizanur Rahman', bn: 'ডা. মিজানুর রহমান' },
    gender: 'm',
    specialty: { en: 'Orthopedics', bn: 'অর্থোপেডিক্স বিশেষজ্ঞ' },
    spec: 'ortho',
    degrees: { en: 'MBBS, MS (Orthopedic Surgery)', bn: 'এমবিবিএস, এমএস (অর্থোপেডিক সার্জারি)' },
    designation: { en: 'Consultant, Orthopedics', bn: 'কনসালটেন্ট, অর্থোপেডিক্স' },
    experience: 10, bmdc: '', days: [0, 2, 5],
    time: { en: '4:00 PM – 7:00 PM', bn: 'বিকেল ৪:০০ – সন্ধ্যা ৭:০০' },
    fee: 900,
    about: {
      en: 'Fractures, joint and back pain, sports injury and bone disorders.',
      bn: 'হাড় ভাঙা, জয়েন্ট ও কোমরের ব্যথা, খেলাধুলার আঘাত ও হাড়ের রোগের চিকিৎসা।',
    },
    photo: '',
  },
  {
    slug: 'dr-sample-skin',
    name: { en: 'Dr. Farhana Akter', bn: 'ডা. ফারহানা আক্তার' },
    gender: 'f',
    specialty: { en: 'Dermatology', bn: 'চর্ম ও যৌনরোগ বিশেষজ্ঞ' },
    spec: 'skin',
    degrees: { en: 'MBBS, DDV, MD (Dermatology)', bn: 'এমবিবিএস, ডিডিভি, এমডি (চর্মরোগ)' },
    designation: { en: 'Consultant, Dermatology', bn: 'কনসালটেন্ট, চর্মরোগ' },
    experience: 8, bmdc: '', days: [6, 2, 4],
    time: { en: '3:00 PM – 6:00 PM', bn: 'বিকেল ৩:০০ – সন্ধ্যা ৬:০০' },
    fee: 800,
    about: {
      en: 'Eczema, acne, fungal infection, allergy, hair and nail problems.',
      bn: 'একজিমা, ব্রণ, ফাঙ্গাল ইনফেকশন, অ্যালার্জি এবং চুল ও নখের সমস্যার চিকিৎসা।',
    },
    photo: '',
  },
  {
    slug: 'dr-sample-ent',
    name: { en: 'Dr. Rezaul Karim', bn: 'ডা. রেজাউল করিম' },
    gender: 'm',
    specialty: { en: 'ENT Specialist', bn: 'নাক, কান ও গলা বিশেষজ্ঞ' },
    spec: 'ent',
    degrees: { en: 'MBBS, BCS (Health), MS (ENT)', bn: 'এমবিবিএস, বিসিএস (স্বাস্থ্য), এমএস (ইএনটি)' },
    designation: { en: 'Assistant Professor, ENT', bn: 'সহকারী অধ্যাপক, ইএনটি' },
    experience: 13, bmdc: '', days: [1, 3, 5],
    time: { en: '5:00 PM – 8:00 PM', bn: 'বিকেল ৫:০০ – রাত ৮:০০' },
    fee: 800,
    about: {
      en: 'Sinusitis, tonsil, ear infection, hearing problems, nasal and throat disorders.',
      bn: 'সাইনাস, টনসিল, কানের ইনফেকশন, শ্রবণ সমস্যা এবং নাক ও গলার রোগের চিকিৎসা।',
    },
    photo: '',
  },
  {
    slug: 'dr-sample-neuro',
    name: { en: 'Dr. Sabrina Sultana', bn: 'ডা. সাবরিনা সুলতানা' },
    gender: 'f',
    specialty: { en: 'Neuromedicine', bn: 'স্নায়ুরোগ বিশেষজ্ঞ' },
    spec: 'neuro',
    degrees: { en: 'MBBS, MD (Neurology)', bn: 'এমবিবিএস, এমডি (নিউরোলজি)' },
    designation: { en: 'Assistant Professor, Neurology', bn: 'সহকারী অধ্যাপক, নিউরোলজি' },
    experience: 9, bmdc: '', days: [5, 6],
    time: { en: '6:00 PM – 9:00 PM', bn: 'সন্ধ্যা ৬:০০ – রাত ৯:০০' },
    fee: 1200,
    about: {
      en: 'Headache, migraine, epilepsy, stroke follow-up, numbness and nerve-related problems.',
      bn: 'মাথাব্যথা, মাইগ্রেন, মৃগীরোগ, স্ট্রোক-পরবর্তী ফলো-আপ, অসাড়তা ও স্নায়ুজনিত সমস্যার চিকিৎসা।',
    },
    photo: '',
  },
  {
    slug: 'dr-sample-radiology',
    name: { en: 'Dr. Asif Mahmud', bn: 'ডা. আসিফ মাহমুদ' },
    gender: 'm',
    specialty: { en: 'Radiology & Imaging', bn: 'রেডিওলজি ও ইমেজিং বিশেষজ্ঞ' },
    spec: 'radiology',
    degrees: { en: 'MBBS, MD (Radiology & Imaging)', bn: 'এমবিবিএস, এমডি (রেডিওলজি ও ইমেজিং)' },
    designation: { en: 'Consultant Radiologist', bn: 'কনসালটেন্ট রেডিওলজিস্ট' },
    experience: 10, bmdc: '', days: [6, 0, 1, 2, 3, 4],
    time: { en: '11:00 AM – 8:00 PM', bn: 'সকাল ১১:০০ – রাত ৮:০০' },
    fee: 0,
    about: {
      en: 'Performs and reports ultrasonography and X-ray studies for all age groups.',
      bn: 'সব বয়সের রোগীর আল্ট্রাসনোগ্রাফি ও এক্স-রে পরীক্ষা এবং রিপোর্ট প্রদান করেন।',
    },
    photo: '',
  },
];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);
