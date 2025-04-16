import z from "zod";

const PLATELET_CONCENTRATION_UNIT_CASES = ["x10^3/mcL", "x10^9/L"] as const;
export const plateletConcentrationUnitSchema = z.enum(
  PLATELET_CONCENTRATION_UNIT_CASES
);
export type PlateletConcentrationUnit = z.infer<
  typeof plateletConcentrationUnitSchema
>;

export function convertPlateletConcentrationToBaseUnit(
  value: number,
  unit: PlateletConcentrationUnit
): number {
  switch (unit) {
    case "x10^3/mcL":
    case "x10^9/L":
      return value;
  }
}
