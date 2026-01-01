import { useState } from 'react';
import './App.css';
import { TransportControls } from './components/TransportControls/TransportControls';
import { Synthesizer } from './components/Synthesizer/Synthesizer';
import { DrumMachine } from './components/DrumMachine/DrumMachine';
import { AIFeatures } from './components/AIFeatures/AIFeatures';
import { Effects } from './components/Effects/Effects';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎵 AI Native DAW & VST Studio</h1>
        <p className="subtitle">Professional Digital Audio Workstation with AI-Powered Music Creation</p>
      </header>

      <main className="app-main">
        <section className="section">
          <TransportControls
            onPlay={() => setIsPlaying(true)}
            onStop={() => setIsPlaying(false)}
          />
        </section>

        <section className="section">
          <AIFeatures />
        </section>

        <section className="section">
          <Synthesizer isPlaying={isPlaying} />
        </section>

        <section className="section">
          <DrumMachine />
        </section>

        <section className="section">
          <Effects />
        </section>
      </main>

      <footer className="app-footer">
        <p>Built with React, TypeScript, Tone.js & AI 🚀</p>
      </footer>
    </div>
  );
}

export default App;
