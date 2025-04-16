"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { handleCSVFile } from "@/lib/handle-file";
import { openJSONInNewTab } from "@/lib/open-json-in-new-tab";
import { SepsisCheckParallelSuccessResult } from "@/lib/sepsis-check-parallel-success-result";
import { ChangeEvent, useRef } from "react";
import { toast } from "sonner";

export type ImportFromCSVButtonProps = ButtonProps & {
  setResult: (setResult: SepsisCheckParallelSuccessResult) => void;
};

export default function ImportFromCSVButton({
  setResult,
  children,
  ...props
}: ImportFromCSVButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      toast.error("No file selected");
      return;
    }

    try {
      const { results, meta } = await handleCSVFile(file);

      setResult({
        results,
        file,
        meta,
      });

      toast.success("CSV file parsed");
    } catch (error) {
      toast.error("An error occurred parsing the CSV file", {
        action: {
          label: "Open",
          onClick: () => openJSONInNewTab(error as object),
        },
      });
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        accept=".csv"
        onChange={onInputChange}
        ref={inputRef}
        hidden
      />

      <Button onClick={onButtonClick} {...props}>
        {children}
      </Button>
    </>
  );
}
