export const formatPrize = (score: number) => {
  return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getEnglishAlphabetLetter = (index: number) => {
  return String.fromCharCode(65 + index);
};

export const compareArrays = <T>(a: T[], b: T[]) => {
  const aSorted = a.slice().sort();
  const bSorted = b.slice().sort();

  return (
    aSorted.length === bSorted.length &&
    aSorted.every((element, index) => {
      console.log(element, bSorted[index]);
      return element === bSorted[index];
    })
  );
};
