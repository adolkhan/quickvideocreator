import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface StoryboardFrame {
  timestamp: number;
  description: string;
  imageUrl: string;
}

const Storyboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { storyboardFrames = [], videoUrl = "" } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8 space-y-8">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Generator
          </Button>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Video Storyboard</h1>
          <p className="text-lg text-gray-600">
            Key frames from your generated video
          </p>
        </div>

        <div className="grid gap-6">
          {storyboardFrames.map((frame: StoryboardFrame, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Frame at {frame.timestamp}s</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={frame.imageUrl}
                  alt={`Frame ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-gray-600">{frame.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Storyboard;