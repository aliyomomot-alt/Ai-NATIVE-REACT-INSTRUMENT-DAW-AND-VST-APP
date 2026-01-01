import React, { useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';
import './Synthesizer.css';

interface SynthesizerProps {
  isPlaying?: boolean;
}

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const octaves = [3, 4, 5];

export const Synthesizer: React.FC<SynthesizerProps> = () => {
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const [waveform, setWaveform] = useState<OscillatorType>('sine');
  const [attack, setAttack] = useState(0.1);
  const [decay, setDecay] = useState(0.2);
  const [sustain, setSustain] = useState(0.5);
  const [release, setRelease] = useState(1);
  const [activeNotes, setActiveNotes] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Initialize synth
    synthRef.current = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: waveform },
      envelope: {
        attack,
        decay,
        sustain,
        release,
      },
    }).toDestination();

    return () => {
      synthRef.current?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.set({
        oscillator: { type: waveform },
        envelope: { attack, decay, sustain, release },
      });
    }
  }, [waveform, attack, decay, sustain, release]);

  const playNote = (note: string) => {
    if (synthRef.current) {
      synthRef.current.triggerAttack(note);
      setActiveNotes((prev) => new Set(prev).add(note));
    }
  };

  const stopNote = (note: string) => {
    if (synthRef.current) {
      synthRef.current.triggerRelease(note);
      setActiveNotes((prev) => {
        const newSet = new Set(prev);
        newSet.delete(note);
        return newSet;
      });
    }
  };

  const handleMouseDown = (note: string) => {
    playNote(note);
  };

  const handleMouseUp = (note: string) => {
    stopNote(note);
  };

  const handleMouseLeave = (note: string) => {
    if (activeNotes.has(note)) {
      stopNote(note);
    }
  };

  return (
    <div className="synthesizer">
      <div className="synth-header">
        <h3>🎹 AI Synthesizer</h3>
      </div>

      <div className="synth-controls">
        <div className="control-group">
          <label>Waveform:</label>
          <select value={waveform} onChange={(e) => setWaveform(e.target.value as OscillatorType)}>
            <option value="sine">Sine</option>
            <option value="square">Square</option>
            <option value="sawtooth">Sawtooth</option>
            <option value="triangle">Triangle</option>
          </select>
        </div>

        <div className="control-group">
          <label>Attack: {attack.toFixed(2)}s</label>
          <input
            type="range"
            min="0.01"
            max="2"
            step="0.01"
            value={attack}
            onChange={(e) => setAttack(Number(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label>Decay: {decay.toFixed(2)}s</label>
          <input
            type="range"
            min="0.01"
            max="2"
            step="0.01"
            value={decay}
            onChange={(e) => setDecay(Number(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label>Sustain: {sustain.toFixed(2)}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={sustain}
            onChange={(e) => setSustain(Number(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label>Release: {release.toFixed(2)}s</label>
          <input
            type="range"
            min="0.01"
            max="3"
            step="0.01"
            value={release}
            onChange={(e) => setRelease(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="piano-keyboard">
        {octaves.map((octave) =>
          notes.map((note) => {
            const fullNote = `${note}${octave}`;
            const isBlackKey = note.includes('#');
            const isActive = activeNotes.has(fullNote);

            return (
              <button
                key={fullNote}
                className={`piano-key ${isBlackKey ? 'black-key' : 'white-key'} ${isActive ? 'active' : ''}`}
                onMouseDown={() => handleMouseDown(fullNote)}
                onMouseUp={() => handleMouseUp(fullNote)}
                onMouseLeave={() => handleMouseLeave(fullNote)}
                onTouchStart={() => handleMouseDown(fullNote)}
                onTouchEnd={() => handleMouseUp(fullNote)}
              >
                <span className="note-label">{note}</span>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};
