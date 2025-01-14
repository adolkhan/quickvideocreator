from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import time

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/generate-video', methods=['POST'])
def generate_video():
    try:
        # Get form data
        prompt = request.form.get('prompt', '')
        duration = request.form.get('duration', '15')
        style = request.form.get('style', 'modern')
        
        # Handle uploaded images
        images = []
        for key in request.files:
            file = request.files[key]
            # In a real implementation, you would save the file and process it
            images.append(file.filename)
        
        # Log received data for debugging
        print(f"Received request - Prompt: {prompt}, Duration: {duration}, Style: {style}")
        print(f"Received {len(images)} images: {images}")
        
        # Mock video generation
        time.sleep(3)  # Simulate processing time
        
        # Mock storyboard frames
        storyboard_frames = [
            {"timestamp": 0, "description": "Opening scene", "imageUrl": "/placeholder.svg"},
            {"timestamp": 5, "description": "Transition", "imageUrl": "/placeholder.svg"},
            {"timestamp": 10, "description": "Closing scene", "imageUrl": "/placeholder.svg"}
        ]
        
        return jsonify({
            "videoUrl": "/placeholder.svg",
            "storyboardFrames": storyboard_frames
        })
        
    except Exception as e:
        print(f"Error processing request: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')