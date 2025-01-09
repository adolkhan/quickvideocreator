import React from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface VideoSettingsProps {
  duration: number;
  onDurationChange: (value: number) => void;
  style: string;
  onStyleChange: (value: string) => void;
}

export const VideoSettings = ({
  duration,
  onDurationChange,
  style,
  onStyleChange,
}: VideoSettingsProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Duration (seconds)</Label>
        <Slider
          value={[duration]}
          onValueChange={(value) => onDurationChange(value[0])}
          min={5}
          max={30}
          step={1}
        />
        <span className="text-sm text-gray-500">{duration} seconds</span>
      </div>

      <div className="space-y-2">
        <Label>Style</Label>
        <select
          value={style}
          onChange={(e) => onStyleChange(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2"
        >
          <option value="modern">Modern</option>
          <option value="cinematic">Cinematic</option>
          <option value="vintage">Vintage</option>
        </select>
      </div>
    </div>
  );
};