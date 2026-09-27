export const calculateEmi = (principal, annualRate, tenureMonths) => {
  if (!principal || !annualRate || !tenureMonths) return 0;
  const p = Number(principal);
  const r = Number(annualRate) / 1200;
  const n = Number(tenureMonths);

  if (r === 0) return Math.round(p / n);
  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return Math.round(emi);
};
