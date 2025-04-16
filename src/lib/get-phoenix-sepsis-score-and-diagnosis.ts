import { Diagnosis } from "@/lib/diagnosis";
import sumDefinedElements from "@/lib/sum-defined-elements";

export function getPhoenixSepsisScoreAndDiagnosis(
  respiratoryComponentScore: number | undefined,
  cardiovascularComponentScore: number | undefined,
  coagulationComponentScore: number | undefined,
  neurologicalComponentScore: number | undefined
): {
  phoenixSepsisScore: number | undefined;
  diagnosis: Diagnosis;
} {
  const phoenixSepsisScore = sumDefinedElements([
    respiratoryComponentScore,
    cardiovascularComponentScore,
    coagulationComponentScore,
    neurologicalComponentScore,
  ]);

  if (phoenixSepsisScore === undefined) {
    return { phoenixSepsisScore, diagnosis: "no-diagnosis" };
  }

  if (phoenixSepsisScore >= 2) {
    if (cardiovascularComponentScore === undefined) {
      return { phoenixSepsisScore, diagnosis: "sepsis" };
    } else {
      if (cardiovascularComponentScore >= 1) {
        return { phoenixSepsisScore, diagnosis: "septic-shock" };
      } else {
        return { phoenixSepsisScore, diagnosis: "sepsis" };
      }
    }
  } else {
    return { phoenixSepsisScore, diagnosis: "no-sepsis" };
  }
}
