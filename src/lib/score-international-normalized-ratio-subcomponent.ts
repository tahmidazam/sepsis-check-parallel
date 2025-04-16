export function scoreInternationalNormalizedRatioSubcomponent(
  internationalNormalizedRatio: number | undefined
): number | undefined {
  if (internationalNormalizedRatio === undefined) return undefined;

  if (internationalNormalizedRatio > 1.3) {
    return 1;
  } else {
    return 0;
  }
}
