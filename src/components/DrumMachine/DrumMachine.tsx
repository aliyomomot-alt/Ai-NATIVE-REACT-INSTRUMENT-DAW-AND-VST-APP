import React, { useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';
import './DrumMachine.css';

interface DrumPattern {
  kick: boolean[];
  snare: boolean[];
  hihat: boolean[];
  clap: boolean[];
}

const STEPS = 16;

export const DrumMachine: React.FC = () => {
  const [pattern, setPattern] = useState<DrumPattern>({
    kick: new Array(STEPS).fill(false),
    snare: new Array(STEPS).fill(false),
    hihat: new Array(STEPS).fill(false),
    clap: new Array(STEPS).fill(false),
  });
  
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const drumsRef = useRef<{
    kick: Tone.MembraneSynth;
    snare: Tone.NoiseSynth;
    hihat: Tone.MetalSynth;
    clap: Tone.NoiseSynth;
  } | null>(null);
  
  const sequenceRef = useRef<Tone.Sequence | null>(null);

  useEffect(() => {
    // Initialize drum sounds
    drumsRef.current = {
      kick: new Tone.MembraneSynth({
        pitchDecay: 0.05,
        octaves: 10,
        oscillator: { type: 'sine' },
        envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 1.4 }
      }).toDestination(),
      
      snare: new Tone.NoiseSynth({
        noise: { type: 'white' },
        envelope: { attack: 0.001, decay: 0.2, sustain: 0 }
      }).toDestination(),
      
      hihat: new Tone.MetalSynth({
        envelope: { attack: 0.001, decay: 0.1, release: 0.01 },
        harmonicity: 5.1,
        modulationIndex: 32,
        resonance: 4000,
        octaves: 1.5
      }).toDestination(),
      
      clap: new Tone.NoiseSynth({
        noise: { type: 'white' },
        envelope: { attack: 0.001, decay: 0.15, sustain: 0 }
      }).toDestination()
    };

    drumsRef.current.kick.volume.value = -10;
    drumsRef.current.snare.volume.value = -15;
    drumsRef.current.hihat.volume.value = -20;
    drumsRef.current.clap.volume.value = -15;

    return () => {
      sequenceRef.current?.dispose();
      Object.values(drumsRef.current || {}).forEach(drum => drum.dispose());
    };
  }, []);

  useEffect(() => {
    if (sequenceRef.current) {
      sequenceRef.current.dispose();
    }

    sequenceRef.current = new Tone.Sequence(
      (time, step) => {
        setCurrentStep(step);
        
        if (pattern.kick[step] && drumsRef.current) {
          drumsRef.current.kick.triggerAttackRelease('C1', '8n', time);
        }
        if (pattern.snare[step] && drumsRef.current) {
          drumsRef.current.snare.triggerAttackRelease('8n', time);
        }
        if (pattern.hihat[step] && drumsRef.current) {
          drumsRef.current.hihat.triggerAttackRelease('8n', time);
        }
        if (pattern.clap[step] && drumsRef.current) {
          drumsRef.current.clap.triggerAttackRelease('8n', time);
        }
      },
      [...Array(STEPS).keys()],
      '16n'
    );

    if (isPlaying) {
      sequenceRef.current.start(0);
    }

    return () => {
      sequenceRef.current?.stop();
    };
  }, [pattern, isPlaying]);

  const toggleStep = (instrument: keyof DrumPattern, step: number) => {
    setPattern(prev => ({
      ...prev,
      [instrument]: prev[instrument].map((val, idx) => idx === step ? !val : val)
    }));
  };

  const handlePlayPause = () => {
    if (!isPlaying) {
      Tone.Transport.start();
    } else {
      Tone.Transport.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const clearPattern = () => {
    setPattern({
      kick: new Array(STEPS).fill(false),
      snare: new Array(STEPS).fill(false),
      hihat: new Array(STEPS).fill(false),
      clap: new Array(STEPS).fill(false),
    });
  };

  const randomizePattern = () => {
    setPattern({
      kick: Array.from({ length: STEPS }, () => Math.random() > 0.7),
      snare: Array.from({ length: STEPS }, () => Math.random() > 0.75),
      hihat: Array.from({ length: STEPS }, () => Math.random() > 0.5),
      clap: Array.from({ length: STEPS }, () => Math.random() > 0.85),
    });
  };

  return (
    <div className="drum-machine">
      <div className="drum-header">
        <h3>🥁 AI Drum Machine</h3>
        <div className="drum-controls">
          <button onClick={handlePlayPause} className={`btn ${isPlaying ? 'playing' : ''}`}>
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
          <button onClick={randomizePattern} className="btn">🎲 AI Generate</button>
          <button onClick={clearPattern} className="btn">🗑 Clear</button>
        </div>
      </div>

      <div className="sequencer">
        {(Object.keys(pattern) as Array<keyof DrumPattern>).map(instrument => (
          <div key={instrument} className="drum-row">
            <div className="drum-label">{instrument.toUpperCase()}</div>
            <div className="drum-steps">
              {pattern[instrument].map((active, step) => (
                <button
                  key={step}
                  className={`step ${active ? 'active' : ''} ${currentStep === step ? 'current' : ''}`}
                  onClick={() => toggleStep(instrument, step)}
                >
                  {step % 4 === 0 && <span className="step-number">{step + 1}</span>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
