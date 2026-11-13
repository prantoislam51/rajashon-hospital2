export type Bi = { en: string; bn: string };

const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

/** Convert Latin digits in a string to Bengali digits. */
export const bnDigits = (value: string | number): string =>
  String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);

/** Format a taka amount for both languages. */
export const taka = (amount: number): Bi => {
  const n = amount.toLocaleString('en-US');
  return { en: `৳ ${n}`, bn: `৳ ${bnDigits(n)}` };
};

/** Bilingual version of a string that only contains numbers/latin text. */
export const num = (value: string | number): Bi => ({
  en: String(value),
  bn: bnDigits(value),
});

/** Week order used in Bangladesh: Saturday first. `d` is JS Date#getDay(). */
export const DAYS = [
  { d: 6, en: 'Sat', bn: 'শনি', fullEn: 'Saturday', fullBn: 'শনিবার' },
  { d: 0, en: 'Sun', bn: 'রবি', fullEn: 'Sunday', fullBn: 'রবিবার' },
  { d: 1, en: 'Mon', bn: 'সোম', fullEn: 'Monday', fullBn: 'সোমবার' },
  { d: 2, en: 'Tue', bn: 'মঙ্গল', fullEn: 'Tuesday', fullBn: 'মঙ্গলবার' },
  { d: 3, en: 'Wed', bn: 'বুধ', fullEn: 'Wednesday', fullBn: 'বুধবার' },
  { d: 4, en: 'Thu', bn: 'বৃহ.', fullEn: 'Thursday', fullBn: 'বৃহস্পতিবার' },
  { d: 5, en: 'Fri', bn: 'শুক্র', fullEn: 'Friday', fullBn: 'শুক্রবার' },
] as const;
