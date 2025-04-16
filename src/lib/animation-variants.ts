export const BLUR_ENTRY_CONTAINER_VARIANTS = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // Adjust delay between each child
    },
  },
};

export const BLUR_ENTRY_CHILD_VARIANTS = {
  hidden: { opacity: 0, transform: "translateY(10px)", filter: "blur(5px)" },
  show: {
    opacity: 1,
    transform: "translateY(0px)",
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
