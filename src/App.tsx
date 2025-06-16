import  { useState } from 'react';
import ImageDisplay from './components/ImageDisplay';

function App() {
  const [prompt, setPrompt] = useState('A beautiful landscape');

  return (
    <div className="app">
      <div className="prompt-container">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your image prompt..."
          className="prompt-input"
        />
      </div>
      <ImageDisplay prompt={prompt} />
      
      <style>{`
        .app {
          min-height: 100vh;
          background: #f5f5f5;
          padding: 2rem;
        }
        
        .prompt-container {
          max-width: 600px;
          margin: 0 auto 2rem auto;
        }
        
        .prompt-input {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          border: 2px solid #ddd;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s;
        }
        
        .prompt-input:focus {
          border-color: #3498db;
        }
      `}</style>
    </div>
  );
}

export default App;
