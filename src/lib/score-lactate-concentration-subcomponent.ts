import {
  LactateConcentrationUnit,
  convertLactateConcentrationToBaseUnit,
} from "@/lib/lactate-concentration";

export function scoreLactateConcentrationSubcomponent(
  lactateConcentration: number | undefined,
  lactateConcentrationUnit: LactateConcentrationUnit | undefined
): number | undefined {
  if (
    lactateConcentration === undefined ||
    lactateConcentrationUnit === undefined
  )
    return undefined;

  const lactateConcentrationInBaseUnit = convertLactateConcentrationToBaseUnit(
    lactateConcentration,
    lactateConcentrationUnit
  );

  if (lactateConcentrationInBaseUnit > 11) {
    return 2;
  } else if (lactateConcentrationInBaseUnit > 5) {
    return 1;
  } else {
    return 0;
  }
}
