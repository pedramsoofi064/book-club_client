export const formatFileSize = (size, config = { language: "en", isRounded: false }) => {
  const unitsMapper = [
    { unit: "B", label: "بایت" },
    { unit: "KB", label: "کیلوبایت" },
    { unit: "MB", label: "مگابایت" },
    { unit: "GB", label: "گیگابایت" },
  ];

  const unitIndex = Math.floor(Math.log(size) / Math.log(1024));
  const sizeByUnit = size / Math.pow(1024, unitIndex);

  const roundedSize = config.isRounded ? Math.round(sizeByUnit) : sizeByUnit.toFixed(2);

  const formattedSize =
    roundedSize +
    " " +
    (config.language === "en" ? unitsMapper[unitIndex].unit : unitsMapper[unitIndex].label);

  return {
    unit: unitsMapper[unitIndex].unit,
    label: unitsMapper[unitIndex].label,
    sizeByUnit,
    formattedSize,
  };
};
