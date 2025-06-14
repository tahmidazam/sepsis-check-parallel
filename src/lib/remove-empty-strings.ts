export function removeEmptyStrings<T extends Record<string, any>>(
  obj: T
): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== "")
  ) as Partial<T>;
}
