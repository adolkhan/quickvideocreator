import React, { useState } from "react";
import { DropZone } from "@/components/DropZone";
import { ImagePreview } from "@/components/ImagePreview";
import { VideoSettings } from "@/components/VideoSettings";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [images, setImages] = useState<File[]>([]);
  const [prompt, setPrompt] = useState("");
  const [duration, setDuration] = useState(15);
  const [style, setStyle] = useState("modern");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleDrop = (files: File[]) => {
    setImages((prev) => [...prev, ...files]);
    toast({
      title: "Images added",
      description: `Added ${files.length} image${files.length > 1 ? "s" : ""}`,
    });
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleGenerate = async () => {
    if (images.length === 0) {
      toast({
        title: "No images selected",
        description: "Please add at least one image to generate a video",
        variant: "destructive",
      });
      return;
    }

    if (!prompt.trim()) {
      toast({
        title: "No prompt provided",
        description: "Please provide a description for your video",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    // TODO: Implement actual video generation
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsGenerating(false);
    
    toast({
      title: "Video generated!",
      description: "Your video has been generated successfully",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Video Generator</h1>
          <p className="text-lg text-gray-600">
            Transform your images into stunning videos in seconds
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <DropZone onDrop={handleDrop} />
            <ImagePreview images={images} onRemove={handleRemoveImage} />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Describe your video
              </label>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a description of how you want your video to look..."
                className="h-32"
              />
            </div>

            <VideoSettings
              duration={duration}
              onDurationChange={setDuration}
              style={style}
              onStyleChange={setStyle}
            />

            <Button
              onClick={handleGenerate}
              className="w-full"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Video"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;