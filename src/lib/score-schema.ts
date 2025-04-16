import { calculateSpO2ToFiO2Ratio } from "@/lib/calculate-spo2-to-fio2-ratio";
import { getPhoenixSepsisScoreAndDiagnosis } from "@/lib/get-phoenix-sepsis-score-and-diagnosis";
import { scoreCardiovascularComponent } from "@/lib/score-cardiovascular-component";
import { scoreCoagulationComponent } from "@/lib/score-coagulation-component";
import { scoreDDimerConcentrationSubcomponent } from "@/lib/score-d-dimer-concentration-subcomponent";
import { scoreFibrinogenConcentrationSubcomponent } from "@/lib/score-fibrinogen-concentration-subcomponent";
import { scoreInternationalNormalizedRatioSubcomponent } from "@/lib/score-international-normalized-ratio-subcomponent";
import { scoreLactateConcentrationSubcomponent } from "@/lib/score-lactate-concentration-subcomponent";
import { scoreMeanArterialPressureSubcomponent } from "@/lib/score-mean-arterial-pressure-subcomponent";
import { scoreNeurologicalComponent } from "@/lib/score-neurological-component";
import { scorePlateletConcentrationSubcomponent } from "@/lib/score-platelet-concentration-subcomponent";
import { scoreRespiratoryComponent } from "@/lib/score-respiratory-component";
import { scoreVasoactiveMedicineSubcomponent } from "@/lib/score-vasoactive-medicine-subcomponent";
import { variablesSchema } from "@/lib/variables-schema";
import z from "zod";

export const phoenixSepsisCriteriaResultSchema = variablesSchema.transform(
  (variables) => {
    const {
      dateOfBirth,
      saturationOfPeripheralOxygen,
      fractionOfInspiredOxygen,
      respiratorySupport,
      vasoactiveMedicationCount,
      lactateConcentration,
      lactateConcentrationUnit,
      meanArterialPressure,
      meanArterialPressureUnit,
      plateletConcentration,
      plateletConcentrationUnit,
      internationalNormalizedRatio,
      dDimerConcentration,
      dDimerConcentrationUnit,
      fibrinogenConcentration,
      fibrinogenConcentrationUnit,
      glasgowComaScale,
      pupilState,
    } = variables;

    const spO2ToFiO2Ratio = calculateSpO2ToFiO2Ratio(
      saturationOfPeripheralOxygen,
      fractionOfInspiredOxygen
    );

    const respiratoryComponentScore = scoreRespiratoryComponent(
      spO2ToFiO2Ratio,
      respiratorySupport
    );

    const vasoactiveMedicationSubcomponentScore =
      scoreVasoactiveMedicineSubcomponent(vasoactiveMedicationCount);

    const lactateConcentrationSubcomponentScore =
      scoreLactateConcentrationSubcomponent(
        lactateConcentration,
        lactateConcentrationUnit
      );

    const meanArterialPressureSubcomponent =
      scoreMeanArterialPressureSubcomponent(
        meanArterialPressure,
        meanArterialPressureUnit,
        dateOfBirth
      );

    const ageBand = meanArterialPressureSubcomponent?.ageBand;
    const meanArterialPressureSubcomponentScore =
      meanArterialPressureSubcomponent?.score;

    const cardiovascularComponentScore = scoreCardiovascularComponent(
      vasoactiveMedicationSubcomponentScore,
      lactateConcentrationSubcomponentScore,
      meanArterialPressureSubcomponentScore
    );

    const plateletConcentrationSubcomponentScore =
      scorePlateletConcentrationSubcomponent(
        plateletConcentration,
        plateletConcentrationUnit
      );

    const internationalNormalizedRatioSubcomponentScore =
      scoreInternationalNormalizedRatioSubcomponent(
        internationalNormalizedRatio
      );

    const dDimerConcentrationSubcomponentScore =
      scoreDDimerConcentrationSubcomponent(
        dDimerConcentration,
        dDimerConcentrationUnit
      );

    const fibrinogenConcentrationSubcomponentScore =
      scoreFibrinogenConcentrationSubcomponent(
        fibrinogenConcentration,
        fibrinogenConcentrationUnit
      );

    const coagulationComponentScore = scoreCoagulationComponent(
      plateletConcentrationSubcomponentScore,
      internationalNormalizedRatioSubcomponentScore,
      dDimerConcentrationSubcomponentScore,
      fibrinogenConcentrationSubcomponentScore
    );

    const neurologicalComponentScore = scoreNeurologicalComponent(
      glasgowComaScale,
      pupilState
    );

    const phoenixSepsisScoreAndDiagnosis = getPhoenixSepsisScoreAndDiagnosis(
      respiratoryComponentScore,
      cardiovascularComponentScore,
      coagulationComponentScore,
      neurologicalComponentScore
    );

    const phoenixSepsisScore =
      phoenixSepsisScoreAndDiagnosis.phoenixSepsisScore;
    const diagnosis = phoenixSepsisScoreAndDiagnosis.diagnosis;

    return {
      ...variables,
      spO2ToFiO2Ratio: spO2ToFiO2Ratio,
      respiratoryComponentScore: respiratoryComponentScore,
      vasoactiveMedicationSubcomponentScore:
        vasoactiveMedicationSubcomponentScore,
      lactateConcentrationSubcomponentScore:
        lactateConcentrationSubcomponentScore,
      ageBand: ageBand,
      meanArterialPressureSubcomponentScore:
        meanArterialPressureSubcomponentScore,
      cardiovascularComponentScore: cardiovascularComponentScore,
      plateletConcentrationSubcomponentScore:
        plateletConcentrationSubcomponentScore,
      internationalNormalizedRatioSubcomponentScore:
        internationalNormalizedRatioSubcomponentScore,
      dDimerConcentrationSubcomponentScore:
        dDimerConcentrationSubcomponentScore,
      fibrinogenConcentrationSubcomponentScore:
        fibrinogenConcentrationSubcomponentScore,
      coagulationComponentScore: coagulationComponentScore,
      neurologicalComponentScore: neurologicalComponentScore,
      phoenixSepsisScore: phoenixSepsisScore,
      diagnosis: diagnosis,
    };
  }
);
export type PhoenixSepsisCriteriaResult = z.infer<
  typeof phoenixSepsisCriteriaResultSchema
>;
