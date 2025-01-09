import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropZoneProps {
  onDrop: (files: File[]) => void;
  className?: string;
}

export const DropZone = ({ onDrop, className }: DropZoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
        isDragActive
          ? "border-primary bg-primary/5"
          : "border-gray-300 hover:border-primary/50",
        className
      )}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        {isDragActive
          ? "Drop the images here..."
          : "Drag & drop images here, or click to select"}
      </p>
    </div>
  );
};