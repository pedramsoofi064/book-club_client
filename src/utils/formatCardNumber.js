const formatCardNumber = (cardNumber, separator = " - ") => {
  if (!cardNumber) return cardNumber;
  return cardNumber
    .toString()
    .match(/.{1,4}/g)
    .reverse()
    .join(separator);
};

export default formatCardNumber;
