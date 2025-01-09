import React from "react";
import { X } from "lucide-react";

interface ImagePreviewProps {
  images: File[];
  onRemove: (index: number) => void;
}

export const ImagePreview = ({ images, onRemove }: ImagePreviewProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {images.map((file, index) => (
        <div
          key={index}
          className="relative group aspect-square rounded-lg overflow-hidden"
        >
          <img
            src={URL.createObjectURL(file)}
            alt={`Preview ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => onRemove(index)}
            className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
};