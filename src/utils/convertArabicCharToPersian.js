
const arabicToPersianMap = {
  ك: "ک",
  دِ: "د",
  بِ: "ب",
  زِ: "ز",
  ذِ: "ذ",
  شِ: "ش",
  سِ: "س",
  ى: "ی",
  ي: "ی",
  "١": "۱",
  "٢": "۲",
  "٣": "۳",
  "٤": "۴",
  "٥": "۵",
  "٦": "۶",
  "٧": "۷",
  "٨": "۸",
  "٩": "۹",
  "٠": "۰",
};

const convertArabicCharToPersian = (value) => {
  if (!value) return;

  const arrayOfChar = value.split("");
  let result = [];
  arrayOfChar.forEach((item) => {
    if (arabicToPersianMap[item]) {
      result.push(arabicToPersianMap[item]);
    } else result.push(item);
  });

  return result.join("");
};
export default convertArabicCharToPersian;
