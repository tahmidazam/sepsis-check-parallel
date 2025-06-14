import {
  PhoenixSepsisCriteriaResult,
  phoenixSepsisCriteriaResultSchema,
} from "@/lib/score-schema";
import Papa from "papaparse";
import z from "zod";
import { removeEmptyStrings } from "./remove-empty-strings";

export function handleCSVFile(file: File): Promise<{
  results: PhoenixSepsisCriteriaResult[];
  meta: Papa.ParseMeta;
}> {
  return new Promise((resolve, reject) => {
    const handleComplete = (results: Papa.ParseResult<unknown>) => {
      try {
        const parseResult = z.array(phoenixSepsisCriteriaResultSchema).parse(
          results.data.map((row) => {
            return removeEmptyStrings(row as Record<string, unknown>);
          })
        );

        if (results.errors.length > 0) reject(results.errors);

        resolve({
          results: parseResult,
          meta: results.meta,
        });
      } catch (error) {
        reject(error);
      }
    };

    Papa.parse(file, { complete: handleComplete, error: reject, header: true });
  });
}
