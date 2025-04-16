import { RespiratorySupport } from "@/lib/respiratory-support";

export function scoreRespiratoryComponent(
  spO2ToFiO2Ratio: number | undefined,
  respiratorySupport: RespiratorySupport | undefined
): number | undefined {
  if (respiratorySupport === undefined || spO2ToFiO2Ratio === undefined)
    return undefined;

  switch (respiratorySupport) {
    case "none":
      return 0;
    case "non-invasive":
      if (spO2ToFiO2Ratio < 292) {
        return 1;
      } else {
        return 0;
      }
    case "invasive":
      if (spO2ToFiO2Ratio < 148) {
        return 3;
      } else if (spO2ToFiO2Ratio < 220) {
        return 2;
      } else {
        return 0;
      }
  }
}
