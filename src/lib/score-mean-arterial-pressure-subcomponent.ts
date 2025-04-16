import { AgeBand } from "@/lib/age-band";
import {
  MeanArterialPressureUnit,
  convertMeanArterialPressureToBaseUnit,
} from "@/lib/mean-arterial-pressure";

export function scoreMeanArterialPressureSubcomponent(
  meanArterialPressure: number | undefined,
  meanArterialPressureUnit: MeanArterialPressureUnit | undefined,
  dateOfBirth: Date | undefined
):
  | {
      ageBand: AgeBand;
      score: number;
    }
  | undefined {
  if (
    meanArterialPressure === undefined ||
    meanArterialPressureUnit === undefined ||
    dateOfBirth === undefined
  )
    return undefined;

  const ageInMs = Date.now() - dateOfBirth.getTime();
  const meanArterialPressureInBaseUnit = convertMeanArterialPressureToBaseUnit(
    meanArterialPressure,
    meanArterialPressureUnit
  );

  if (ageInMs < 2629746000) {
    const ageBand: AgeBand = "lessThanOneMonth";
    if (meanArterialPressureInBaseUnit < 17) {
      return { ageBand, score: 2 };
    } else if (meanArterialPressureInBaseUnit < 30) {
      return { ageBand, score: 1 };
    } else {
      return { ageBand, score: 0 };
    }
  } else if (ageInMs < 31556952000) {
    const ageBand: AgeBand = "oneToLessThanTwelveMonths";
    if (meanArterialPressureInBaseUnit < 25) {
      return { ageBand, score: 2 };
    } else if (meanArterialPressureInBaseUnit < 39) {
      return { ageBand, score: 1 };
    } else {
      return { ageBand, score: 0 };
    }
  } else if (ageInMs < 63113904000) {
    const ageBand: AgeBand = "oneToLessThanTwoYears";
    if (meanArterialPressureInBaseUnit < 31) {
      return { ageBand, score: 2 };
    } else if (meanArterialPressureInBaseUnit < 43) {
      return { ageBand, score: 1 };
    } else {
      return { ageBand, score: 0 };
    }
  } else if (ageInMs < 157784760000) {
    const ageBand: AgeBand = "twoToLessThanFiveYears";
    if (meanArterialPressureInBaseUnit < 32) {
      return { ageBand, score: 2 };
    } else if (meanArterialPressureInBaseUnit < 44) {
      return { ageBand, score: 1 };
    } else {
      return { ageBand, score: 0 };
    }
  } else if (ageInMs < 378683424000) {
    const ageBand: AgeBand = "fiveToLessThanTwelveYears";
    if (meanArterialPressureInBaseUnit < 32) {
      return { ageBand, score: 2 };
    } else if (meanArterialPressureInBaseUnit < 44) {
      return { ageBand, score: 1 };
    } else {
      return { ageBand, score: 0 };
    }
  } else if (ageInMs < 568025136000) {
    const ageBand: AgeBand = "twelveToLessThanEighteenYears";
    if (meanArterialPressureInBaseUnit < 38) {
      return { ageBand, score: 2 };
    } else if (meanArterialPressureInBaseUnit < 51) {
      return { ageBand, score: 1 };
    } else {
      return { ageBand, score: 0 };
    }
  }

  return undefined;
}
