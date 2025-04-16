export function scoreNeurologicalComponent(
  glasgowComaScale: number | undefined,
  pupilState: string | undefined
): number | undefined {
  if (glasgowComaScale === undefined || pupilState === undefined)
    return undefined;

  if (pupilState === "fixed-bilaterally") {
    return 2;
  } else {
    if (glasgowComaScale <= 10) {
      return 1;
    } else {
      return 0;
    }
  }
}
