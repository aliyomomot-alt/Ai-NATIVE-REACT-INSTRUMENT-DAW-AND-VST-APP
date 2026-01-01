import React, { useState } from 'react';
import * as Tone from 'tone';
import './AIFeatures.css';

interface GeneratedMelody {
  notes: string[];
  durations: string[];
}

export const AIFeatures: React.FC = () => {
  const [generatedMelody, setGeneratedMelody] = useState<GeneratedMelody | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // AI-inspired melody generation (using algorithmic composition)
  const generateMelody = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const scales = {
        major: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
        minor: ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
        pentatonic: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5'],
      };

      const scale = scales.major;
      const length = 8 + Math.floor(Math.random() * 8);
      const notes: string[] = [];
      const durations: string[] = [];

      let prevNote = scale[0];
      for (let i = 0; i < length; i++) {
        // Prefer stepwise motion with occasional leaps
        const maxJump = Math.random() > 0.7 ? 4 : 2;
        const currentIndex = scale.indexOf(prevNote);
        const jump = Math.floor(Math.random() * maxJump * 2) - maxJump;
        const newIndex = Math.max(0, Math.min(scale.length - 1, currentIndex + jump));
        
        prevNote = scale[newIndex];
        notes.push(prevNote);
        
        // Varied rhythms
        const rhythms = ['8n', '8n', '4n', '8n', '8n.'];
        durations.push(rhythms[Math.floor(Math.random() * rhythms.length)]);
      }

      setGeneratedMelody({ notes, durations });
      setIsGenerating(false);
    }, 1000);
  };

  // Generate chord progression
  const generateChordProgression = () => {
    const progressions = [
      ['C4', 'E4', 'G4', 'C5'], // C major
      ['F4', 'A4', 'C5', 'F5'], // F major
      ['G4', 'B4', 'D5', 'G5'], // G major
      ['A3', 'C4', 'E4', 'A4'], // A minor
      ['D4', 'F4', 'A4', 'D5'], // D minor
      ['E4', 'G4', 'B4', 'E5'], // E minor
    ];

    return progressions;
  };

  const playMelody = async () => {
    if (!generatedMelody) return;

    await Tone.start();
    const synth = new Tone.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.05, decay: 0.2, sustain: 0.3, release: 1 }
    }).toDestination();

    const now = Tone.now();
    let time = now;

    generatedMelody.notes.forEach((note, index) => {
      synth.triggerAttackRelease(note, generatedMelody.durations[index], time);
      time += Tone.Time(generatedMelody.durations[index]).toSeconds();
    });
  };

  const playChords = async () => {
    await Tone.start();
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    
    const progressions = generateChordProgression();
    const now = Tone.now();

    progressions.forEach((chord, index) => {
      synth.triggerAttackRelease(chord, '2n', now + index * 2);
    });
  };

  const generateAIDrumPattern = () => {
    // Trigger drum machine randomization would be handled via props/state management
    console.info('AI Drum Pattern: Use the Drum Machine\'s "AI Generate" button to create patterns.');
  };

  return (
    <div className="ai-features">
      <div className="ai-header">
        <h3>🤖 AI Music Assistant</h3>
        <p>Let AI help you create amazing music</p>
      </div>

      <div className="ai-controls">
        <div className="ai-section">
          <h4>🎵 Melody Generator</h4>
          <p>Generate melodic patterns using AI algorithms</p>
          <div className="button-group">
            <button 
              onClick={generateMelody} 
              className="ai-btn primary"
              disabled={isGenerating}
            >
              {isGenerating ? '⏳ Generating...' : '✨ Generate Melody'}
            </button>
            {generatedMelody && (
              <button onClick={playMelody} className="ai-btn secondary">
                ▶ Play Melody
              </button>
            )}
          </div>
          {generatedMelody && (
            <div className="generated-result">
              <p className="result-label">Generated Notes:</p>
              <div className="notes-display">
                {generatedMelody.notes.map((note, idx) => (
                  <span key={idx} className="note-chip">
                    {note}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="ai-section">
          <h4>🎹 Chord Progression</h4>
          <p>AI-powered harmonic suggestions</p>
          <button onClick={playChords} className="ai-btn primary">
            🎼 Play Chord Progression
          </button>
        </div>

        <div className="ai-section">
          <h4>🥁 Rhythm Generator</h4>
          <p>Create intelligent drum patterns</p>
          <button onClick={generateAIDrumPattern} className="ai-btn primary">
            🎲 Generate Rhythm
          </button>
        </div>

        <div className="ai-section">
          <h4>💡 AI Tips</h4>
          <div className="ai-tips">
            <p>• Experiment with different waveforms for unique sounds</p>
            <p>• Layer drum patterns with melodic elements</p>
            <p>• Use AI-generated melodies as starting points</p>
            <p>• Combine multiple instruments for richer compositions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
