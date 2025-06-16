import React from 'react';
import { usePollinationsImage } from '@pollinations/react';

interface ImageDisplayProps {
  prompt: string;
  width?: number;
  height?: number;
  seed?: number;
  model?: string;
  enhance?: boolean;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  prompt,
  width = 1024,
  height = 720,
  seed = 42,
  model = 'flux',
  enhance = false
}) => {
  const imageUrl = usePollinationsImage(prompt, {
    width,
    height,
    seed,
    model,
    nologo: true,  // Remove the Pollinations watermark
    enhance
  });

  return (
    <div className="image-container">
      <div className="image-box">
        <h3>Generated Image: {prompt}</h3>
        {imageUrl ? (
          <img src={imageUrl} alt={prompt} className="generated-image" />
        ) : (
          <div className="loading">
            <p>Generating your image...</p>
            <div className="spinner"></div>
          </div>
        )}
      </div>
      <style>{`
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }
        
        .image-box {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          max-width: 90vw;
          text-align: center;
        }
        
        .generated-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
        
        .loading {
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        h3 {
          margin-bottom: 1.5rem;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default ImageDisplay; 