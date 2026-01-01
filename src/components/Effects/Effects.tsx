import React, { useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';
import './Effects.css';

export const Effects: React.FC = () => {
  const [reverbMix, setReverbMix] = useState(0);
  const [delayMix, setDelayMix] = useState(0);
  const [delayTime, setDelayTime] = useState(0.25);
  const [distortion, setDistortion] = useState(0);

  const effectsRef = useRef<{
    reverb: Tone.Reverb;
    delay: Tone.FeedbackDelay;
    distortion: Tone.Distortion;
  } | null>(null);

  useEffect(() => {
    // Initialize effects chain
    const reverb = new Tone.Reverb({ decay: 2, wet: 0 });
    const delay = new Tone.FeedbackDelay({ delayTime: 0.25, feedback: 0.3, wet: 0 });
    const dist = new Tone.Distortion({ distortion: 0, wet: 1 });

    reverb.generate().catch((err) => {
      console.error('Failed to generate reverb:', err);
    });

    // Chain effects to destination
    dist.chain(delay, reverb, Tone.Destination);

    effectsRef.current = {
      reverb,
      delay,
      distortion: dist,
    };

    return () => {
      reverb.dispose();
      delay.dispose();
      dist.dispose();
    };
  }, []);

  useEffect(() => {
    if (effectsRef.current) {
      effectsRef.current.reverb.wet.value = reverbMix / 100;
    }
  }, [reverbMix]);

  useEffect(() => {
    if (effectsRef.current) {
      effectsRef.current.delay.wet.value = delayMix / 100;
      effectsRef.current.delay.delayTime.value = delayTime;
    }
  }, [delayMix, delayTime]);

  useEffect(() => {
    if (effectsRef.current) {
      effectsRef.current.distortion.distortion = distortion / 100;
    }
  }, [distortion]);

  return (
    <div className="effects">
      <div className="effects-header">
        <h3>🎛️ Effects Rack</h3>
      </div>

      <div className="effects-controls">
        <div className="effect-module">
          <h4>Reverb</h4>
          <div className="control">
            <label>Mix: {reverbMix}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={reverbMix}
              onChange={(e) => setReverbMix(Number(e.target.value))}
              className="effect-slider"
            />
          </div>
        </div>

        <div className="effect-module">
          <h4>Delay</h4>
          <div className="control">
            <label>Mix: {delayMix}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={delayMix}
              onChange={(e) => setDelayMix(Number(e.target.value))}
              className="effect-slider"
            />
          </div>
          <div className="control">
            <label>Time: {delayTime.toFixed(2)}s</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={delayTime}
              onChange={(e) => setDelayTime(Number(e.target.value))}
              className="effect-slider"
            />
          </div>
        </div>

        <div className="effect-module">
          <h4>Distortion</h4>
          <div className="control">
            <label>Amount: {distortion}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={distortion}
              onChange={(e) => setDistortion(Number(e.target.value))}
              className="effect-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
