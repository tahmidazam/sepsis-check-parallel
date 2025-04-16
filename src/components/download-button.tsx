"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SepsisCheckParallelSuccessResult } from "@/lib/sepsis-check-parallel-success-result";
import { useDownloader } from "@/lib/use-downloader";
import { useState } from "react";
import { toast } from "sonner";

type DownloadButtonProps = {
  result: SepsisCheckParallelSuccessResult | null;
} & ButtonProps;

export default function DownloadButton({
  result,
  children,
  ...props
}: DownloadButtonProps) {
  const [format, setFormat] = useState<"csv" | "json">("csv");

  const download = useDownloader(result?.results ?? [], "batch", format);

  const onDownloadClick = () => {
    download();

    toast.success("Downloaded results");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" {...props}>
          {children}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Download results</AlertDialogTitle>
          <AlertDialogDescription>
            Choose a file format to download the results in.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Select
          value={format}
          onValueChange={(value) => setFormat(value as "csv" | "json")}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a file format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="csv">Comma Separated Values (CSV)</SelectItem>
            <SelectItem value="json">
              JavaScript Object Notation (JSON)
            </SelectItem>
          </SelectContent>
        </Select>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDownloadClick}>
            Download
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
