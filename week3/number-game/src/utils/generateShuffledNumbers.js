const generateNumbers = (start, count) => {
  return Array.from({ length: count }, (_, i) => start + i);
};

const shuffleNumbers = (numbers) => {
  return numbers.sort(() => Math.random() - 0.5);
};

export const generateShuffledNumbers = (start, count) => {
  const numbers = generateNumbers(start, count);
  return shuffleNumbers(numbers);
};
