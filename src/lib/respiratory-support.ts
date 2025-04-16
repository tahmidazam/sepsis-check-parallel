import z from "zod";

const RESPIRATORY_SUPPORT_CASES = ["none", "non-invasive", "invasive"] as const;
export const respiratorySupportSchema = z.enum(RESPIRATORY_SUPPORT_CASES);
export type RespiratorySupport = z.infer<typeof respiratorySupportSchema>;
