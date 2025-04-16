import { BLUR_ENTRY_CHILD_VARIANTS } from "@/lib/animation-variants";
import { motion } from "motion/react";
import Link from "next/link";

export default function References() {
  return (
    <motion.ol
      variants={BLUR_ENTRY_CHILD_VARIANTS}
      className="ml-6 list-decimal [&>li]:mt-2 text-sm text-muted-foreground"
    >
      <li>
        <p id="ref-1">
          Schlapbach LJ, Watson RS, Sorce LR, et al. International Consensus
          Criteria for Pediatric Sepsis and Septic Shock. JAMA.
          2024;331(8):665–674. doi:
          <Link
            href="https://www.doi.org/10.1001/jama.2024.0179"
            className="font-medium underline underline-offset-4"
          >
            10.1001/jama.2024.0179
          </Link>
        </p>
      </li>
    </motion.ol>
  );
}
