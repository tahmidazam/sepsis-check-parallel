import { SepsisCheckParallelSuccessResult } from "@/lib/sepsis-check-parallel-success-result";
import { AnimatePresence, motion } from "motion/react";

export default function ResultThumbnail({
  result,
}: {
  result: SepsisCheckParallelSuccessResult | null;
}) {
  return (
    <AnimatePresence>
      {result && (
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateY(10px)",
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            filter: "blur(0px)",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          className="flex flex-col gap-4"
        >
          <div>
            <p className="text-xs text-muted-foreground">File name</p>
            <p>{result.file.name}</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">File size</p>
            <p>
              {result.file.size} byte{result.file.size === 1 ? "" : "s"}
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Row count</p>
            <p>{result.results.length}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
