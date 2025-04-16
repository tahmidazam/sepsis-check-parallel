import { BLUR_ENTRY_CHILD_VARIANTS } from "@/lib/animation-variants";
import { motion } from "motion/react";
import packageJson from "@/../package.json";
import Link from "next/link";

export default function Onboarding() {
  return (
    <>
      <motion.h2
        variants={BLUR_ENTRY_CHILD_VARIANTS}
        className="scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        Welcome to SepsisCheck Parallel
      </motion.h2>

      <motion.p
        variants={BLUR_ENTRY_CHILD_VARIANTS}
        className="text-xl text-muted-foreground"
      >
        Implementation of the Phoenix Sepsis Criteria for data science
        applications
      </motion.p>

      <motion.p variants={BLUR_ENTRY_CHILD_VARIANTS}>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          v{packageJson.version}-beta
        </code>
      </motion.p>

      <motion.p variants={BLUR_ENTRY_CHILD_VARIANTS}>
        This tool allows you to calculate the Phoenix Sepsis Score
        <sup>
          <a href="#ref-1">[1]</a>
        </sup>{" "}
        of many individuals in one go. If you&apos;d like to try the mobile
        version, visit{" "}
        <Link
          className="font-medium text-primary underline underline-offset-4"
          href="https://sepsischeck.vercel.app"
        >
          SepsisCheck
        </Link>
        .
      </motion.p>

      <motion.p variants={BLUR_ENTRY_CHILD_VARIANTS}>
        Visit the{" "}
        <Link
          href="https://docs.google.com/spreadsheets/d/1-nXe2gmts5T3OCNAvUQM4Qkq3ujIgNo7mm9aFt48yfA/edit?usp=sharing"
          className="font-medium text-primary underline underline-offset-4"
        >
          CSV template
        </Link>{" "}
        on Google Sheets, fill it out with your data, and import it below. Then
        download your results in CSV or JSON.
      </motion.p>
    </>
  );
}
