import {
  FibrinogenConcentrationUnit,
  convertFibrinogenConcentrationToBaseUnit,
} from "@/lib/fibrinogen-concentration";

export function scoreFibrinogenConcentrationSubcomponent(
  fibrinogenConcentration: number | undefined,
  fibrinogenConcentrationUnit: FibrinogenConcentrationUnit | undefined
): number | undefined {
  if (
    fibrinogenConcentration === undefined ||
    fibrinogenConcentrationUnit === undefined
  )
    return undefined;

  const fibrinogenConcentrationInBaseUnit =
    convertFibrinogenConcentrationToBaseUnit(
      fibrinogenConcentration,
      fibrinogenConcentrationUnit
    );

  if (fibrinogenConcentrationInBaseUnit < 100) {
    return 1;
  } else {
    return 0;
  }
}
