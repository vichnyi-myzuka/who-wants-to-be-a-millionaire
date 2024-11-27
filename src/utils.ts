export const formatPrize = (score: number) => {
  return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getEnglishAlphabetLetter = (index: number) => {
  return String.fromCharCode(65 + index);
};
