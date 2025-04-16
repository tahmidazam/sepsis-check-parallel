import z from "zod";

const AGE_BANDS = [
  "lessThanOneMonth",
  "oneToLessThanTwelveMonths",
  "oneToLessThanTwoYears",
  "twoToLessThanFiveYears",
  "fiveToLessThanTwelveYears",
  "twelveToLessThanEighteenYears",
] as const;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ageBandSchema = z.enum(AGE_BANDS);
export type AgeBand = z.infer<typeof ageBandSchema>;
