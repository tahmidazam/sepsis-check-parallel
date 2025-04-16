import { dDimerConcentrationUnitSchema } from "@/lib/d-dimer-concentration";
import { fibrinogenConcentrationUnitSchema } from "@/lib/fibrinogen-concentration";
import { lactateConcentrationUnitSchema } from "@/lib/lactate-concentration";
import { meanArterialPressureUnitSchema } from "@/lib/mean-arterial-pressure";
import { plateletConcentrationUnitSchema } from "@/lib/platelet-concentration";
import { pupilStateSchema } from "@/lib/pupil-state";
import { respiratorySupportSchema } from "@/lib/respiratory-support";
import { isFuture, isValid, parse } from "date-fns";
import z from "zod";

export const variablesSchema = z.object({
  dateOfBirth: z
    .string()
    .transform((string) => {
      const parsed = parse(string, "dd/MM/yyyy", new Date());
      if (!isValid(parsed)) throw new Error("Invalid date format");
      if (isFuture(parsed))
        throw new Error("Date of birth cannot be in the future");
      return parsed;
    })
    .optional(),
  saturationOfPeripheralOxygen: z.coerce.number().min(0).max(100).optional(),
  fractionOfInspiredOxygen: z.coerce.number().min(0).max(1).optional(),
  respiratorySupport: respiratorySupportSchema.optional(),
  vasoactiveMedicationCount: z.coerce.number().int().min(0).optional(),
  lactateConcentration: z.coerce.number().min(0).optional(),
  lactateConcentrationUnit: lactateConcentrationUnitSchema.optional(),
  meanArterialPressure: z.coerce.number().min(0).optional(),
  meanArterialPressureUnit: meanArterialPressureUnitSchema.optional(),
  plateletConcentration: z.coerce.number().min(0).optional(),
  plateletConcentrationUnit: plateletConcentrationUnitSchema.optional(),
  internationalNormalizedRatio: z.coerce.number().min(0).optional(),
  dDimerConcentration: z.coerce.number().min(0).optional(),
  dDimerConcentrationUnit: dDimerConcentrationUnitSchema.optional(),
  fibrinogenConcentration: z.coerce.number().min(0).optional(),
  fibrinogenConcentrationUnit: fibrinogenConcentrationUnitSchema.optional(),
  glasgowComaScale: z.coerce.number().int().min(3).max(15).optional(),
  pupilState: pupilStateSchema.optional(),
});
export type Variables = z.infer<typeof variablesSchema>;
