"use client";

import Credits from "@/components/credits";
import DownloadButton from "@/components/download-button";
import ImportFromCSVButton from "@/components/import-from-csv-button";
import Onboarding from "@/components/onboarding";
import References from "@/components/references";
import ResultThumbnail from "@/components/result-thumbnail";
import {
  BLUR_ENTRY_CHILD_VARIANTS,
  BLUR_ENTRY_CONTAINER_VARIANTS,
} from "@/lib/animation-variants";
import { SepsisCheckParallelSuccessResult } from "@/lib/sepsis-check-parallel-success-result";
import { DownloadIcon, FileIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<SepsisCheckParallelSuccessResult | null>(
    null
  );

  return (
    <motion.div
      className="max-w-lg mx-auto px-4 my-36 gap-4 flex flex-col"
      variants={BLUR_ENTRY_CONTAINER_VARIANTS}
      initial="hidden"
      animate="show"
    >
      <Onboarding />

      <Credits />

      <References />

      <div className="grid grid-cols-2 gap-4 my-4">
        <motion.div variants={BLUR_ENTRY_CHILD_VARIANTS}>
          <ImportFromCSVButton setResult={setResult} className="w-full">
            <FileIcon />
            {!result || result.results.length === 0
              ? "Import from CSV"
              : "Re-import from CSV"}
          </ImportFromCSVButton>
        </motion.div>

        <motion.div variants={BLUR_ENTRY_CHILD_VARIANTS}>
          <DownloadButton
            result={result}
            disabled={!result || result.results.length === 0}
            className="w-full"
          >
            <DownloadIcon />
            Download results
          </DownloadButton>
        </motion.div>
      </div>

      <ResultThumbnail result={result} />
    </motion.div>
  );
}
