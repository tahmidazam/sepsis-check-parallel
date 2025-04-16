import {
  DDimerConcentrationUnit,
  convertDDimerConcentrationToBaseUnit,
} from "@/lib/d-dimer-concentration";

export function scoreDDimerConcentrationSubcomponent(
  dDimerConcentration: number | undefined,
  dDimerConcentrationUnit: DDimerConcentrationUnit | undefined
): number | undefined {
  if (
    dDimerConcentration === undefined ||
    dDimerConcentrationUnit === undefined
  )
    return undefined;

  const dDimerConcentrationInBaseUnit = convertDDimerConcentrationToBaseUnit(
    dDimerConcentration,
    dDimerConcentrationUnit
  );

  if (dDimerConcentrationInBaseUnit > 2) {
    return 1;
  } else {
    return 0;
  }
}
