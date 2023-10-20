const FACTORS = [1, 10, 100, 1000, 10000, 100000, 1000000];

export const roundNumber = (value: number, precision = 0) => {
  const factor = FACTORS[precision] ?? Math.pow(10, precision);

  return Math.round(value * factor) / factor;
};
