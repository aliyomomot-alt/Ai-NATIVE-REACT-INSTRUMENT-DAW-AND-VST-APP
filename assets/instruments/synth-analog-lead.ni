{
  "presetInfo": {
    "name": "Analog Lead Synth",
    "version": "1.0.0",
    "type": "SYNTH",
    "author": "Aliyo Momot",
    "category": "Synthesizer",
    "description": "Classic analog lead synthesizer sound"
  },
  "instrument": {
    "type": "SYNTH",
    "oscillator": {
      "type": "square",
      "detune": 0
    },
    "envelope": {
      "attack": 0.05,
      "decay": 0.3,
      "sustain": 0.6,
      "release": 0.7
    },
    "filter": {
      "type": "lowpass",
      "frequency": 5000,
      "resonance": 1.8,
      "rolloff": -12
    },
    "filterEnvelope": {
      "attack": 0.02,
      "decay": 0.2,
      "sustain": 0.4,
      "release": 0.6,
      "baseFrequency": 400,
      "octaves": 5
    },
    "brightness": 85,
    "envelopePoints": [
      { "id": 1, "value": 10 },
      { "id": 2, "value": 60 },
      { "id": 3, "value": 90 },
      { "id": 4, "value": 95 },
      { "id": 5, "value": 70 },
      { "id": 6, "value": 10 }
    ]
  },
  "effects": {
    "delay": {
      "enabled": true,
      "rate": 55,
      "decay": 55,
      "gain": 55,
      "mix": 55
    },
    "compressor": {
      "enabled": true,
      "ratio": 4,
      "threshold": -22,
      "gain": 3,
      "autoThreshold": false
    },
    "reverb": {
      "enabled": true,
      "room": true,
      "dry": false,
      "wet": true,
      "decay": 2.0,
      "wetAmount": 0.5
    }
  }
}
