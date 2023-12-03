const ARABIC_INDIC_DIGITS = /[\u0660-\u0669]/g;
const EXTENDED_ARABIC_INDIC_DIGITS = /[\u06f0-\u06f9]/g;

export const convertArabicNumToEnglishNum = (value) => {
  const falsyValues = [undefined, null, "", false];

  if (falsyValues.includes(value)) return value;

  if (!value.toString()?.match(/^([A-Za-z0-9\s]*)$/g)) {
    return String(value)
      .replace(ARABIC_INDIC_DIGITS, (char) => char.charCodeAt(0) - 0x0660)
      .replace(EXTENDED_ARABIC_INDIC_DIGITS, (char) => char.charCodeAt(0) - 0x06f0);
  }

  return value;
};
