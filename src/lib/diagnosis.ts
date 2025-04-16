import z from "zod";

export const DIAGNOSES_CASES = [
  "no-diagnosis",
  "no-sepsis",
  "sepsis",
  "septic-shock",
] as const;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const diagnosisSchema = z.enum(DIAGNOSES_CASES);
export type Diagnosis = z.infer<typeof diagnosisSchema>;
