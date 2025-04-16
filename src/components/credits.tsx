import { BLUR_ENTRY_CHILD_VARIANTS } from "@/lib/animation-variants";
import { motion } from "motion/react";
import Link from "next/link";

export default function Credits() {
  return (
    <motion.p
      variants={BLUR_ENTRY_CHILD_VARIANTS}
      className="text-sm text-muted-foreground"
    >
      Built by{" "}
      <Link
        className="font-medium underline underline-offset-4"
        href="https://www.github.com/tahmidazam"
      >
        Tahmid Azam
      </Link>{" "}
      in collaboration with{" "}
      <Link
        className="font-medium underline underline-offset-4"
        href="mailto:di260@cam.ac.uk"
      >
        Dr David Inwald
      </Link>{" "}
      and{" "}
      <Link
        href="mailto:linw2@cam.ac.uk"
        className="font-medium underline underline-offset-4"
      >
        Laura Wood
      </Link>
      .
    </motion.p>
  );
}
