export default function sumDefinedElements(
  arr: (number | undefined)[]
): number | undefined {
  const definedElements = arr.filter((element) => element !== undefined);

  if (definedElements.length === 0) return undefined;

  return definedElements.reduce((acc, element) => acc + element, 0);
}
