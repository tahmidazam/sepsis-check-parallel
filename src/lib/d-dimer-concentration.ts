import z from "zod";

const D_DIMER_CONCENTRATION_UNIT_CASES = [
  "mg/L FEU",
  "mcg/L FEU",
  "ng/mL FEU",
] as const;
export const dDimerConcentrationUnitSchema = z.enum(
  D_DIMER_CONCENTRATION_UNIT_CASES
);
export type DDimerConcentrationUnit = z.infer<
  typeof dDimerConcentrationUnitSchema
>;

export function convertDDimerConcentrationToBaseUnit(
  value: number,
  unit: DDimerConcentrationUnit
): number {
  switch (unit) {
    case "mg/L FEU":
      return value;
    case "mcg/L FEU":
      return value / 10e3;
    case "ng/mL FEU":
      return value / 10e6;
  }
}
