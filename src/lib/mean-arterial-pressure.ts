import z from "zod";

const MEAN_ARTERIAL_PRESSURE_UNIT_CASES = ["kPa", "mmHg"] as const;
export const meanArterialPressureUnitSchema = z.enum(
  MEAN_ARTERIAL_PRESSURE_UNIT_CASES
);
export type MeanArterialPressureUnit = z.infer<
  typeof meanArterialPressureUnitSchema
>;

export function convertMeanArterialPressureToBaseUnit(
  value: number,
  unit: MeanArterialPressureUnit
): number {
  switch (unit) {
    case "kPa":
      return value * 7.50062;
    case "mmHg":
      return value;
  }
}
