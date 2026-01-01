import React, { useState, useEffect } from 'react';
import audioEngine from '../../utils/audioEngine';
import './TransportControls.css';

interface TransportControlsProps {
  onPlay?: () => void;
  onStop?: () => void;
  onRecord?: () => void;
}

export const TransportControls: React.FC<TransportControlsProps> = ({
  onPlay,
  onStop,
  onRecord,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [tempo, setTempo] = useState(120);
  const [position, setPosition] = useState('0:0:0');

  useEffect(() => {
    audioEngine.setTempo(tempo);
  }, [tempo]);

  useEffect(() => {
    let intervalId: number;
    if (isPlaying) {
      intervalId = window.setInterval(() => {
        setPosition(audioEngine.getPosition());
      }, 100);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying]);

  const handlePlay = async () => {
    if (!isPlaying) {
      await audioEngine.start();
      audioEngine.startTransport();
      setIsPlaying(true);
      onPlay?.();
    }
  };

  const handleStop = () => {
    audioEngine.stopTransport();
    setIsPlaying(false);
    setIsRecording(false);
    setPosition('0:0:0');
    onStop?.();
  };

  const handlePause = () => {
    if (isPlaying) {
      audioEngine.pauseTransport();
      setIsPlaying(false);
    }
  };

  const handleRecord = () => {
    setIsRecording(!isRecording);
    onRecord?.();
  };

  return (
    <div className="transport-controls">
      <div className="control-buttons">
        <button onClick={handleStop} className="control-btn stop-btn" title="Stop">
          ⏹
        </button>
        <button onClick={handlePlay} className="control-btn play-btn" disabled={isPlaying} title="Play">
          ▶
        </button>
        <button onClick={handlePause} className="control-btn pause-btn" disabled={!isPlaying} title="Pause">
          ⏸
        </button>
        <button 
          onClick={handleRecord} 
          className={`control-btn record-btn ${isRecording ? 'recording' : ''}`}
          title="Record"
        >
          ⏺
        </button>
      </div>
      <div className="tempo-control">
        <label>BPM:</label>
        <input
          type="number"
          value={tempo}
          onChange={(e) => setTempo(Number(e.target.value))}
          min="40"
          max="240"
          className="tempo-input"
        />
      </div>
      <div className="position-display">
        <span className="position-label">Position:</span>
        <span className="position-value">{position}</span>
      </div>
    </div>
  );
};
