import Papa from "papaparse";
import { useCallback } from "react";

export function useDownloader<T>(
  data: T[],
  filename: string = "data",
  format: "csv" | "json" = "csv"
) {
  const getBlob = useCallback(() => {
    switch (format) {
      case "csv":
        const csv = Papa.unparse(data);
        return new Blob([csv], { type: "text/csv;charset=utf-8;" });
      case "json":
        return new Blob([JSON.stringify(data, null, 2)], {
          type: "application/json",
        });
    }
  }, [data, format]);

  const download = () => {
    const blob = getBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.${format}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return download;
}
