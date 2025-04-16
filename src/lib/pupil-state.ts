import z from "zod";

const PUPIL_STATE_CASES = ["reactive", "fixed-bilaterally"] as const;
export const pupilStateSchema = z.enum(PUPIL_STATE_CASES);
