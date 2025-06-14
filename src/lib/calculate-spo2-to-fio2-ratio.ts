export function calculateSpO2ToFiO2Ratio(
  spO2: number | undefined,
  fiO2: number | undefined
): number | undefined {
  if (!spO2 || !fiO2 || spO2 > 97) return undefined;

  const spO2ToFiO2Ratio = Math.round(spO2) / Math.round(fiO2 * 100) / 100;

  return spO2ToFiO2Ratio;
}
