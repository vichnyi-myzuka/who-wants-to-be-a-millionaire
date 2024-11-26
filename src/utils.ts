export const formatPrize = (score: number) => {
  return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
