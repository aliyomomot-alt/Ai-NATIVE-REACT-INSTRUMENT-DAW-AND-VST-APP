import * as Tone from 'tone';

class AudioEngine {
  constructor() {
    this.initialized = false;
    this.synth = null;
    this.effects = {
      delay: null,
      compressor: null,
      reverb: null
    };
    this.masterVolume = null;
  }

  async initialize() {
    if (this.initialized) return;

    try {
      await Tone.start();
      console.log('Audio engine initialized');

      // Create master volume control
      this.masterVolume = new Tone.Volume(0).toDestination();

      // Create effects chain
      this.effects.delay = new Tone.FeedbackDelay('8n', 0.5).connect(this.masterVolume);
      this.effects.compressor = new Tone.Compressor(-30, 3).connect(this.effects.delay);
      this.effects.reverb = new Tone.Reverb({
        decay: 2,
        wet: 0.5
      }).connect(this.effects.compressor);

      // Create default synth
      this.synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
          type: 'sine'
        },
        envelope: {
          attack: 0.1,
          decay: 0.2,
          sustain: 0.5,
          release: 0.8
        }
      }).connect(this.effects.reverb);

      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize audio engine:', error);
    }
  }

  playNote(note, duration = '8n') {
    if (!this.initialized) {
      console.warn('Audio engine not initialized');
      return;
    }
    this.synth.triggerAttackRelease(note, duration);
  }

  setInstrument(type) {
    if (!this.initialized) return;

    const oscillatorTypes = {
      PIANO: 'sine',
      GUITAR: 'triangle',
      BASS: 'sawtooth',
      SYNTH: 'square',
      DRUM: 'pulse',
      WIND: 'sine'
    };

    if (this.synth && oscillatorTypes[type]) {
      this.synth.set({
        oscillator: {
          type: oscillatorTypes[type]
        }
      });
    }
  }

  setBrightness(value) {
    if (!this.initialized || !this.synth) return;
    
    // Map brightness to filter frequency (0-100 -> 200-8000 Hz)
    const frequency = 200 + (value / 100) * 7800;
    this.synth.set({
      filterEnvelope: {
        baseFrequency: frequency
      }
    });
  }

  setDelayParams(params) {
    if (!this.initialized || !this.effects.delay) return;

    if (params.rate !== undefined) {
      // Map rate to delay time (0-100 -> 0-1s)
      // Note: 'rate' here controls the delay time/duration
      this.effects.delay.delayTime.value = params.rate / 100;
    }
    if (params.decay !== undefined) {
      // Map decay to feedback (0-100 -> 0-0.9)
      this.effects.delay.feedback.value = (params.decay / 100) * 0.9;
    }
    if (params.gain !== undefined) {
      // Map gain to wet amount (0-100 -> 0-1)
      this.effects.delay.wet.value = params.gain / 100;
    }
  }

  setCompressorParams(params) {
    if (!this.initialized || !this.effects.compressor) return;

    if (params.threshold !== undefined) {
      this.effects.compressor.threshold.value = params.threshold;
    }
    if (params.ratio !== undefined) {
      this.effects.compressor.ratio.value = params.ratio;
    }
  }

  setReverbParams(params) {
    if (!this.initialized || !this.effects.reverb) return;

    if (params.wet !== undefined) {
      this.effects.reverb.wet.value = params.wet ? 0.7 : 0;
    }
    if (params.decay !== undefined) {
      this.effects.reverb.decay = params.decay;
    }
  }

  setMasterVolume(value) {
    if (!this.initialized || !this.masterVolume) return;
    
    // Map 0-100 to dB range (-40 to 0)
    const db = (value / 100) * 40 - 40;
    this.masterVolume.volume.value = db;
  }

  dispose() {
    if (this.synth) {
      this.synth.dispose();
    }
    Object.values(this.effects).forEach(effect => {
      if (effect) effect.dispose();
    });
    if (this.masterVolume) {
      this.masterVolume.dispose();
    }
    this.initialized = false;
  }
}

// Singleton instance
export const audioEngine = new AudioEngine();
