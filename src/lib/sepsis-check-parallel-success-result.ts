import { ParseMeta } from "papaparse";
import { PhoenixSepsisCriteriaResult } from "@/lib/score-schema";

export type SepsisCheckParallelSuccessResult = {
  results: PhoenixSepsisCriteriaResult[];
  file: File;
  meta: ParseMeta;
};
