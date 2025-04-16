import {
  PlateletConcentrationUnit,
  convertPlateletConcentrationToBaseUnit,
} from "@/lib/platelet-concentration";

export function scorePlateletConcentrationSubcomponent(
  plateletConcentration: number | undefined,
  plateletConcentrationUnit: PlateletConcentrationUnit | undefined
): number | undefined {
  if (
    plateletConcentration === undefined ||
    plateletConcentrationUnit === undefined
  )
    return undefined;

  const plateletConcentrationInBaseUnit =
    convertPlateletConcentrationToBaseUnit(
      plateletConcentration,
      plateletConcentrationUnit
    );

  if (plateletConcentrationInBaseUnit < 100) {
    return 1;
  } else {
    return 0;
  }
}
