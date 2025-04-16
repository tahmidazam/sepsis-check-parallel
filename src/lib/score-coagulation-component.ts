import sumDefinedElements from "@/lib/sum-defined-elements";

export function scoreCoagulationComponent(
  plateletConcentrationSubcomponent: number | undefined,
  internationalNormalizedRatioSubcomponent: number | undefined,
  dDimerConcentrationSubcomponent: number | undefined,
  fibrinogenConcentrationSubcomponent: number | undefined
): number | undefined {
  return sumDefinedElements([
    plateletConcentrationSubcomponent,
    internationalNormalizedRatioSubcomponent,
    dDimerConcentrationSubcomponent,
    fibrinogenConcentrationSubcomponent,
  ]);
}
