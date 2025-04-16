import z from "zod";

const FIBRINOGEN_CONCENTRATION_UNIT_CASES = ["g/L", "mg/dL"] as const;
export const fibrinogenConcentrationUnitSchema = z.enum(
  FIBRINOGEN_CONCENTRATION_UNIT_CASES
);
export type FibrinogenConcentrationUnit = z.infer<
  typeof fibrinogenConcentrationUnitSchema
>;
export function convertFibrinogenConcentrationToBaseUnit(
  value: number,
  unit: FibrinogenConcentrationUnit
): number {
  switch (unit) {
    case "g/L":
      return value / 100;
    case "mg/dL":
      return value;
  }
}
