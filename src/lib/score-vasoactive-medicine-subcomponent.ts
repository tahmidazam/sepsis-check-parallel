export function scoreVasoactiveMedicineSubcomponent(
  vasoactiveMedicationCount: number | undefined
): number | undefined {
  if (vasoactiveMedicationCount === undefined) return undefined;

  const score = Math.min(vasoactiveMedicationCount, 2);

  return score;
}
