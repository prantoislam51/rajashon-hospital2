import type { Bi } from '../lib/i18n';

/**
 * ✏️  DEMO TESTS & PRICES — edit freely.
 * Each row:  [category, English name, Bangla name, price (৳), report code, preparation code, optional note]
 * Report/preparation codes are explained in the dictionaries below. Add new codes if you need them.
 */

export const categories: { key: string; label: Bi }[] = [
  { key: 'hematology', label: { en: 'Hematology (Blood)', bn: 'হেমাটোলজি (রক্ত)' } },
  { key: 'diabetes', label: { en: 'Diabetes', bn: 'ডায়াবেটিস' } },
  { key: 'lipid', label: { en: 'Lipid & Cardiac', bn: 'লিপিড ও হৃদরোগ' } },
  { key: 'liver', label: { en: 'Liver', bn: 'লিভার' } },
  { key: 'kidney', label: { en: 'Kidney & Electrolytes', bn: 'কিডনি ও ইলেক্ট্রোলাইট' } },
  { key: 'thyroid', label: { en: 'Thyroid & Hormone', bn: 'থাইরয়েড ও হরমোন' } },
  { key: 'serology', label: { en: 'Serology & Infection', bn: 'সেরোলজি ও সংক্রমণ' } },
  { key: 'vitamin', label: { en: 'Vitamins & Minerals', bn: 'ভিটামিন ও মিনারেল' } },
  { key: 'urine', label: { en: 'Urine & Stool', bn: 'প্রস্রাব ও মল' } },
  { key: 'micro', label: { en: 'Microbiology (Culture)', bn: 'মাইক্রোবায়োলজি (কালচার)' } },
  { key: 'tumor', label: { en: 'Tumor Markers', bn: 'টিউমার মার্কার' } },
  { key: 'xray', label: { en: 'X-Ray', bn: 'এক্স-রে' } },
  { key: 'usg', label: { en: 'Ultrasonography (USG)', bn: 'আল্ট্রাসনোগ্রাফি (USG)' } },
  { key: 'ecg', label: { en: 'ECG & Echo', bn: 'ইসিজি ও ইকো' } },
  { key: 'package', label: { en: 'Health Packages', bn: 'হেলথ প্যাকেজ' } },
];

export const reportTimes: Record<string, Bi> = {
  I: { en: 'Immediate', bn: 'তাৎক্ষণিক' },
  M30: { en: '30 minutes', bn: '৩০ মিনিট' },
  H1: { en: '1 hour', bn: '১ ঘণ্টা' },
  H2: { en: '2 hours', bn: '২ ঘণ্টা' },
  H4: { en: '4 hours', bn: '৪ ঘণ্টা' },
  S: { en: 'Same day', bn: 'একই দিন' },
  D1: { en: 'Next day', bn: 'পরের দিন' },
  D2: { en: '2 days', bn: '২ দিন' },
  D3: { en: '3 days', bn: '৩ দিন' },
  D5: { en: '5 days', bn: '৫ দিন' },
  D7: { en: '7 days', bn: '৭ দিন' },
};

export const preps: Record<string, Bi> = {
  N: { en: 'No preparation', bn: 'প্রস্তুতি লাগে না' },
  F8: { en: '8–12 hrs fasting', bn: '৮–১২ ঘণ্টা খালি পেটে' },
  F10: { en: '10–12 hrs fasting', bn: '১০–১২ ঘণ্টা খালি পেটে' },
  F6: { en: '6 hrs fasting', bn: '৬ ঘণ্টা খালি পেটে' },
  OG: { en: 'Fasting; glucose drink at the lab', bn: 'খালি পেটে; ল্যাবে গ্লুকোজ পান' },
  MU: { en: 'First morning urine preferred', bn: 'সকালের প্রথম প্রস্রাব ভালো' },
  CU: { en: 'Clean-catch midstream urine', bn: 'পরিষ্কার পাত্রে মধ্যপ্রবাহের প্রস্রাব' },
  ST: { en: 'Fresh stool in a clean container', bn: 'পরিষ্কার কৌটায় টাটকা মল' },
  AB: { en: 'Before starting antibiotics', bn: 'অ্যান্টিবায়োটিক শুরুর আগে' },
  AM: { en: 'Morning sample (8–10 AM)', bn: 'সকালের নমুনা (৮–১০টা)' },
  FB: { en: 'Full bladder — drink water, do not pass urine', bn: 'মূত্রথলি পূর্ণ রাখুন — পানি পান করুন, প্রস্রাব করবেন না' },
  XR: { en: 'Remove metal items; tell us if pregnant', bn: 'ধাতব জিনিস খুলুন; গর্ভবতী হলে জানান' },
  SP: { en: '2–3 days abstinence; fresh sample', bn: '২–৩ দিন বিরত থাকুন; টাটকা নমুনা' },
  EC: { en: 'Rest 5 minutes before the test', bn: 'পরীক্ষার আগে ৫ মিনিট বিশ্রাম' },
  SW: { en: 'Sample before cleaning/dressing', bn: 'পরিষ্কার/ড্রেসিংয়ের আগে নমুনা' },
  SU: { en: 'Deep cough sputum, early morning', bn: 'ভোরের গভীর কাশির কফ' },
};

type Row = [string, string, string, number, string, string, string?];

// prettier-ignore
const rows: Row[] = [
  // ── Hematology ──────────────────────────────────────────────
  ['hematology', 'CBC (Complete Blood Count)', 'সিবিসি (CBC)', 400, 'S', 'N'],
  ['hematology', 'Hemoglobin (Hb%)', 'হিমোগ্লোবিন (Hb%)', 150, 'H1', 'N'],
  ['hematology', 'ESR', 'ইএসআর (ESR)', 150, 'H1', 'N'],
  ['hematology', 'Platelet Count', 'প্লাটিলেট কাউন্ট', 200, 'H1', 'N'],
  ['hematology', 'TC, DC (Total & Differential Count)', 'টিসি, ডিসি (TC, DC)', 250, 'H2', 'N'],
  ['hematology', 'Absolute Eosinophil Count (AEC)', 'অ্যাবসোলিউট ইওসিনোফিল কাউন্ট', 200, 'S', 'N'],
  ['hematology', 'Hematocrit (PCV)', 'হেমাটোক্রিট (PCV)', 150, 'H2', 'N'],
  ['hematology', 'Blood Group & Rh Factor', 'ব্লাড গ্রুপ ও আরএইচ ফ্যাক্টর', 150, 'H1', 'N'],
  ['hematology', 'Reticulocyte Count', 'রেটিকুলোসাইট কাউন্ট', 300, 'S', 'N'],
  ['hematology', 'Peripheral Blood Film (PBF)', 'পেরিফেরাল ব্লাড ফিল্ম (PBF)', 400, 'S', 'N'],
  ['hematology', 'Bleeding Time & Clotting Time (BT/CT)', 'বিটি ও সিটি (BT/CT)', 200, 'H1', 'N'],
  ['hematology', 'PT / INR', 'পিটি / আইএনআর (PT/INR)', 700, 'S', 'N'],
  ['hematology', 'aPTT', 'এপিটিটি (aPTT)', 800, 'S', 'N'],
  ['hematology', 'Malaria Parasite (MP) — Smear', 'ম্যালেরিয়া পরজীবী (MP)', 300, 'H2', 'N'],

  // ── Diabetes ────────────────────────────────────────────────
  ['diabetes', 'Blood Sugar (Fasting)', 'ব্লাড সুগার (ফাস্টিং)', 120, 'H1', 'F8'],
  ['diabetes', 'Blood Sugar (Random)', 'ব্লাড সুগার (র‍্যান্ডম)', 120, 'H1', 'N'],
  ['diabetes', 'Blood Sugar (2 hrs after breakfast)', 'ব্লাড সুগার (খাবারের ২ ঘণ্টা পর)', 120, 'H1', 'N'],
  ['diabetes', 'OGTT (75 g glucose)', 'ওজিটিটি (OGTT)', 400, 'S', 'OG'],
  ['diabetes', 'HbA1c', 'এইচবিএ১সি (HbA1c)', 900, 'S', 'N'],
  ['diabetes', 'Fasting Insulin', 'ফাস্টিং ইনসুলিন', 900, 'D1', 'F8'],
  ['diabetes', 'C-Peptide', 'সি-পেপটাইড', 1500, 'D2', 'F8'],
  ['diabetes', 'Urine Microalbumin (ACR)', 'ইউরিন মাইক্রোঅ্যালবুমিন (ACR)', 700, 'S', 'MU'],

  // ── Lipid & Cardiac ─────────────────────────────────────────
  ['lipid', 'Lipid Profile', 'লিপিড প্রোফাইল', 1000, 'S', 'F10'],
  ['lipid', 'Total Cholesterol', 'টোটাল কোলেস্টেরল', 250, 'H2', 'F10'],
  ['lipid', 'Triglyceride (TG)', 'ট্রাইগ্লিসারাইড (TG)', 300, 'H2', 'F10'],
  ['lipid', 'HDL Cholesterol', 'এইচডিএল কোলেস্টেরল', 300, 'H2', 'F10'],
  ['lipid', 'LDL Cholesterol', 'এলডিএল কোলেস্টেরল', 350, 'H2', 'F10'],
  ['lipid', 'Troponin-I (Rapid)', 'ট্রোপোনিন-আই (র‍্যাপিড)', 1200, 'M30', 'N'],
  ['lipid', 'CK-MB', 'সিকে-এমবি (CK-MB)', 900, 'H2', 'N'],
  ['lipid', 'CPK (Total)', 'সিপিকে (CPK)', 600, 'H4', 'N'],
  ['lipid', 'LDH', 'এলডিএইচ (LDH)', 500, 'S', 'N'],
  ['lipid', 'hs-CRP', 'এইচএস-সিআরপি (hs-CRP)', 900, 'S', 'N'],

  // ── Liver ───────────────────────────────────────────────────
  ['liver', 'Liver Function Test (LFT)', 'লিভার ফাংশন টেস্ট (LFT)', 900, 'S', 'N'],
  ['liver', 'SGPT (ALT)', 'এসজিপিটি (ALT)', 250, 'H2', 'N'],
  ['liver', 'SGOT (AST)', 'এসজিওটি (AST)', 250, 'H2', 'N'],
  ['liver', 'Serum Bilirubin (Total & Direct)', 'সিরাম বিলিরুবিন (টোটাল ও ডাইরেক্ট)', 250, 'H2', 'N'],
  ['liver', 'Alkaline Phosphatase (ALP)', 'অ্যালকালাইন ফসফাটেজ (ALP)', 250, 'H2', 'N'],
  ['liver', 'Gamma-GT (GGT)', 'গামা-জিটি (GGT)', 350, 'S', 'N'],
  ['liver', 'Total Protein, Albumin & Globulin', 'টোটাল প্রোটিন, অ্যালবুমিন ও গ্লোবুলিন', 350, 'S', 'N'],
  ['liver', 'Serum Amylase', 'সিরাম অ্যামাইলেজ', 600, 'S', 'N'],

  // ── Kidney & Electrolytes ───────────────────────────────────
  ['kidney', 'Renal Function Test (RFT)', 'রেনাল ফাংশন টেস্ট (RFT)', 900, 'S', 'N'],
  ['kidney', 'Serum Creatinine', 'সিরাম ক্রিয়েটিনিন', 250, 'H2', 'N'],
  ['kidney', 'Blood Urea / BUN', 'ব্লাড ইউরিয়া / BUN', 250, 'H2', 'N'],
  ['kidney', 'Serum Uric Acid', 'সিরাম ইউরিক অ্যাসিড', 250, 'H2', 'N'],
  ['kidney', 'Serum Electrolytes (Na, K, Cl, TCO₂)', 'সিরাম ইলেক্ট্রোলাইট (Na, K, Cl, TCO₂)', 700, 'H4', 'N'],
  ['kidney', 'Serum Calcium', 'সিরাম ক্যালসিয়াম', 300, 'S', 'N'],
  ['kidney', 'Serum Phosphate', 'সিরাম ফসফেট', 300, 'S', 'N'],
  ['kidney', 'Serum Magnesium', 'সিরাম ম্যাগনেসিয়াম', 400, 'S', 'N'],

  // ── Thyroid & Hormone ───────────────────────────────────────
  ['thyroid', 'TSH', 'টিএসএইচ (TSH)', 600, 'S', 'N'],
  ['thyroid', 'Free T4 (FT4)', 'ফ্রি টি৪ (FT4)', 600, 'S', 'N'],
  ['thyroid', 'Free T3 (FT3)', 'ফ্রি টি৩ (FT3)', 600, 'S', 'N'],
  ['thyroid', 'Thyroid Profile (FT3, FT4, TSH)', 'থাইরয়েড প্রোফাইল (FT3, FT4, TSH)', 1500, 'S', 'N'],
  ['thyroid', 'Anti-TPO', 'অ্যান্টি-টিপিও (Anti-TPO)', 1500, 'D1', 'N'],
  ['thyroid', 'Prolactin', 'প্রোল্যাক্টিন', 900, 'S', 'AM'],
  ['thyroid', 'FSH', 'এফএসএইচ (FSH)', 800, 'S', 'N'],
  ['thyroid', 'LH', 'এলএইচ (LH)', 800, 'S', 'N'],
  ['thyroid', 'Testosterone (Total)', 'টেস্টোস্টেরন (টোটাল)', 1200, 'D1', 'AM'],
  ['thyroid', 'Estradiol (E2)', 'ইস্ট্রাডিওল (E2)', 1000, 'D1', 'N'],
  ['thyroid', 'Serum Cortisol', 'সিরাম কর্টিসল', 1200, 'D1', 'AM'],
  ['thyroid', 'Beta-hCG (Quantitative)', 'বিটা-এইচসিজি (কোয়ান্টিটেটিভ)', 1000, 'S', 'N'],

  // ── Serology & Infection ────────────────────────────────────
  ['serology', 'HBsAg (Hepatitis B)', 'এইচবিএসএজি (HBsAg)', 400, 'H2', 'N'],
  ['serology', 'Anti-HBs (Hepatitis B Antibody)', 'অ্যান্টি-এইচবিএস (Anti-HBs)', 800, 'S', 'N'],
  ['serology', 'Anti-HCV (Hepatitis C)', 'অ্যান্টি-এইচসিভি (Anti-HCV)', 800, 'S', 'N'],
  ['serology', 'HIV I & II (Screening)', 'এইচআইভি ১ ও ২ (স্ক্রিনিং)', 700, 'S', 'N'],
  ['serology', 'VDRL / TPHA', 'ভিডিআরএল / টিপিএইচএ', 400, 'S', 'N'],
  ['serology', 'Widal Test', 'উইডাল টেস্ট', 350, 'S', 'N'],
  ['serology', 'Typhoid IgM (Typhidot)', 'টাইফয়েড আইজিএম (টাইফিডট)', 800, 'S', 'N'],
  ['serology', 'Dengue NS1 Antigen', 'ডেঙ্গু এনএস১ অ্যান্টিজেন', 1000, 'H2', 'N'],
  ['serology', 'Dengue IgG / IgM', 'ডেঙ্গু আইজিজি / আইজিএম', 1200, 'H2', 'N'],
  ['serology', 'RA Factor', 'আরএ ফ্যাক্টর (RA)', 450, 'S', 'N'],
  ['serology', 'ASO Titre', 'এএসও টাইটার (ASO)', 500, 'S', 'N'],
  ['serology', 'CRP (Qualitative / Quantitative)', 'সিআরপি (CRP)', 500, 'H2', 'N'],
  ['serology', 'H. pylori Antigen (Stool)', 'এইচ. পাইলোরি অ্যান্টিজেন (মল)', 800, 'S', 'ST'],
  ['serology', 'ANA (Antinuclear Antibody)', 'এএনএ (ANA)', 1500, 'D2', 'N'],

  // ── Vitamins & Minerals ─────────────────────────────────────
  ['vitamin', 'Vitamin D (25-OH)', 'ভিটামিন ডি (25-OH)', 2500, 'D1', 'N'],
  ['vitamin', 'Vitamin B12', 'ভিটামিন বি১২', 1800, 'D1', 'N'],
  ['vitamin', 'Serum Ferritin', 'সিরাম ফেরিটিন', 1200, 'S', 'N'],
  ['vitamin', 'Serum Iron', 'সিরাম আয়রন', 600, 'S', 'F8'],
  ['vitamin', 'TIBC', 'টিআইবিসি (TIBC)', 700, 'S', 'F8'],
  ['vitamin', 'Serum Folate', 'সিরাম ফোলেট', 1500, 'D1', 'N'],
  ['vitamin', 'Serum Zinc', 'সিরাম জিঙ্ক', 1000, 'D2', 'N'],

  // ── Urine & Stool ───────────────────────────────────────────
  ['urine', 'Urine R/E', 'ইউরিন আর/ই (R/E)', 200, 'S', 'MU'],
  ['urine', 'Stool R/E', 'স্টুল আর/ই (R/E)', 200, 'S', 'ST'],
  ['urine', 'Stool for Occult Blood', 'স্টুল অকাল্ট ব্লাড', 300, 'S', 'ST'],
  ['urine', 'Urine Pregnancy Test (UPT)', 'ইউরিন প্রেগন্যান্সি টেস্ট (UPT)', 150, 'M30', 'MU'],
  ['urine', 'Urine Sugar & Ketone', 'ইউরিন সুগার ও কিটোন', 100, 'H1', 'N'],
  ['urine', '24-hour Urine Protein', '২৪ ঘণ্টার ইউরিন প্রোটিন', 600, 'D1', 'N'],
  ['urine', 'Semen Analysis', 'সিমেন অ্যানালাইসিস', 600, 'S', 'SP'],

  // ── Microbiology ────────────────────────────────────────────
  ['micro', 'Urine C/S', 'ইউরিন কালচার ও সেনসিটিভিটি (C/S)', 900, 'D3', 'CU'],
  ['micro', 'Blood C/S', 'ব্লাড কালচার ও সেনসিটিভিটি (C/S)', 1500, 'D5', 'AB'],
  ['micro', 'Stool C/S', 'স্টুল কালচার ও সেনসিটিভিটি (C/S)', 900, 'D3', 'ST'],
  ['micro', 'Sputum C/S', 'স্পুটাম কালচার ও সেনসিটিভিটি (C/S)', 900, 'D3', 'SU'],
  ['micro', 'Sputum for AFB', 'স্পুটাম এএফবি (AFB)', 300, 'D1', 'SU'],
  ['micro', 'Throat Swab C/S', 'থ্রোট সোয়াব কালচার (C/S)', 800, 'D3', 'AB'],
  ['micro', 'Wound / Pus Swab C/S', 'ক্ষত / পুঁজ সোয়াব কালচার (C/S)', 900, 'D3', 'SW'],

  // ── Tumor Markers ───────────────────────────────────────────
  ['tumor', 'PSA (Total)', 'পিএসএ (PSA)', 1500, 'D1', 'N'],
  ['tumor', 'CEA', 'সিইএ (CEA)', 1800, 'D2', 'N'],
  ['tumor', 'CA-125', 'সিএ-১২৫ (CA-125)', 2000, 'D2', 'N'],
  ['tumor', 'CA 19-9', 'সিএ ১৯-৯ (CA 19-9)', 2000, 'D2', 'N'],
  ['tumor', 'AFP (Alpha-fetoprotein)', 'এএফপি (AFP)', 1600, 'D2', 'N'],

  // ── X-Ray ───────────────────────────────────────────────────
  ['xray', 'Chest X-Ray (P/A view)', 'বুকের এক্স-রে (P/A)', 500, 'I', 'XR'],
  ['xray', 'Abdomen X-Ray (Plain)', 'পেটের এক্স-রে (প্লেইন)', 600, 'I', 'XR'],
  ['xray', 'KUB X-Ray', 'কেইউবি এক্স-রে (KUB)', 600, 'I', 'XR'],
  ['xray', 'Skull X-Ray', 'মাথার খুলির এক্স-রে', 600, 'I', 'XR'],
  ['xray', 'Paranasal Sinuses (PNS) X-Ray', 'পিএনএস এক্স-রে (সাইনাস)', 600, 'I', 'XR'],
  ['xray', 'Cervical Spine X-Ray', 'ঘাড়ের (সার্ভাইক্যাল) এক্স-রে', 800, 'I', 'XR'],
  ['xray', 'Lumbosacral Spine X-Ray', 'কোমরের (এলএস স্পাইন) এক্স-রে', 800, 'I', 'XR'],
  ['xray', 'Pelvis / Hip X-Ray', 'পেলভিস / হিপ এক্স-রে', 700, 'I', 'XR'],
  ['xray', 'Knee Joint X-Ray', 'হাঁটুর জয়েন্টের এক্স-রে', 600, 'I', 'XR'],
  ['xray', 'Hand / Wrist X-Ray', 'হাত / কব্জির এক্স-রে', 500, 'I', 'XR'],

  // ── Ultrasonography ─────────────────────────────────────────
  ['usg', 'USG Whole Abdomen', 'পুরো পেটের আল্ট্রাসনোগ্রাফি', 1000, 'I', 'FB'],
  ['usg', 'USG Upper Abdomen', 'ঊর্ধ্ব পেটের আল্ট্রাসনোগ্রাফি', 800, 'I', 'F6'],
  ['usg', 'USG Lower Abdomen', 'নিম্ন পেটের আল্ট্রাসনোগ্রাফি', 800, 'I', 'FB'],
  ['usg', 'USG KUB & Prostate', 'কিডনি, মূত্রথলি ও প্রস্টেট', 900, 'I', 'FB'],
  ['usg', 'USG Pelvis (Female)', 'পেলভিক আল্ট্রাসনোগ্রাফি (মহিলা)', 900, 'I', 'FB'],
  ['usg', 'USG Pregnancy Profile', 'গর্ভাবস্থার আল্ট্রাসনোগ্রাফি', 900, 'I', 'FB'],
  ['usg', 'Fetal Anomaly Scan', 'ফিটাল অ্যানোমালি স্ক্যান', 2500, 'I', 'N'],
  ['usg', 'USG Thyroid / Neck', 'থাইরয়েড / ঘাড়ের আল্ট্রাসনোগ্রাফি', 900, 'I', 'N'],
  ['usg', 'USG Breast', 'স্তনের আল্ট্রাসনোগ্রাফি', 1000, 'I', 'N'],
  ['usg', 'USG Scrotum', 'অণ্ডকোষের আল্ট্রাসনোগ্রাফি', 900, 'I', 'N'],

  // ── ECG & Echo ──────────────────────────────────────────────
  ['ecg', 'ECG (12 lead)', 'ইসিজি (১২ লিড)', 300, 'I', 'EC'],
  ['ecg', 'Echocardiogram (2D & M-mode)', 'ইকোকার্ডিওগ্রাম (2D ও M-mode)', 2000, 'I', 'N'],
  ['ecg', 'Echocardiogram with Colour Doppler', 'কালার ডপলারসহ ইকোকার্ডিওগ্রাম', 2500, 'I', 'N'],
  ['ecg', 'Exercise Tolerance Test (ETT)', 'এক্সারসাইজ টলারেন্স টেস্ট (ETT)', 3000, 'I', 'N'],

  // ── Health Packages ─────────────────────────────────────────
  ['package', 'Basic Health Check', 'বেসিক হেলথ চেক', 1999, 'S', 'F10', 'CBC, ESR, fasting sugar, creatinine, SGPT, urine R/E, ECG'],
  ['package', 'Diabetes Care Package', 'ডায়াবেটিস কেয়ার প্যাকেজ', 1800, 'S', 'F10', 'Fasting sugar, HbA1c, lipid profile, creatinine, urine R/E, urine ACR'],
  ['package', 'Heart Check Package', 'হার্ট চেক প্যাকেজ', 3500, 'S', 'F10', 'Lipid profile, fasting sugar, creatinine, ECG, echocardiogram'],
  ['package', "Women's Wellness Package", 'নারী স্বাস্থ্য প্যাকেজ', 3800, 'S', 'F10', 'CBC, TSH, fasting sugar, vitamin D, ferritin, USG pelvis'],
  ['package', 'Executive Health Package', 'এক্সিকিউটিভ হেলথ প্যাকেজ', 6500, 'D1', 'F10', 'CBC, LFT, RFT, lipid profile, HbA1c, thyroid profile, urine R/E, ECG, USG whole abdomen, chest X-ray'],
];

export type TestItem = {
  id: string;
  cat: string;
  name: Bi;
  price: number;
  report: Bi;
  prep: Bi;
  note?: string;
};

export const tests: TestItem[] = rows.map(([cat, en, bn, price, rep, prep, note], i) => ({
  id: `t${i + 1}`,
  cat,
  name: { en, bn },
  price,
  report: reportTimes[rep],
  prep: preps[prep],
  note,
}));

/** A handful of everyday tests shown on the home page. */
export const popularNames = [
  'CBC (Complete Blood Count)',
  'Urine R/E',
  'Blood Sugar (Fasting)',
  'HbA1c',
  'Lipid Profile',
  'Liver Function Test (LFT)',
  'Thyroid Profile (FT3, FT4, TSH)',
  'USG Whole Abdomen',
];
