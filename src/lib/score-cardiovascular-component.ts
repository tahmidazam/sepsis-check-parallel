import sumDefinedElements from "@/lib/sum-defined-elements";

export function scoreCardiovascularComponent(
  vasoactiveMedicationCountSubcomponent: number | undefined,
  lactateConcentrationSubcomponent: number | undefined,
  meanArterialPressureSubcomponent: number | undefined
): number | undefined {
  return sumDefinedElements([
    vasoactiveMedicationCountSubcomponent,
    lactateConcentrationSubcomponent,
    meanArterialPressureSubcomponent,
  ]);
}
