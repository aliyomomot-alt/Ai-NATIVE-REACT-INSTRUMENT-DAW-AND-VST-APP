{
  "presetInfo": {
    "name": "Electric Guitar Rock",
    "version": "1.0.0",
    "type": "GUITAR",
    "author": "Aliyo Momot",
    "category": "Electric",
    "description": "Rock electric guitar with distortion and sustain"
  },
  "instrument": {
    "type": "GUITAR",
    "oscillator": {
      "type": "triangle",
      "detune": 5
    },
    "envelope": {
      "attack": 0.005,
      "decay": 0.2,
      "sustain": 0.8,
      "release": 0.5
    },
    "filter": {
      "type": "lowpass",
      "frequency": 4000,
      "resonance": 1.2,
      "rolloff": -24
    },
    "filterEnvelope": {
      "attack": 0.01,
      "decay": 0.15,
      "sustain": 0.7,
      "release": 0.4,
      "baseFrequency": 300,
      "octaves": 3
    },
    "brightness": 80,
    "envelopePoints": [
      { "id": 1, "value": 0 },
      { "id": 2, "value": 50 },
      { "id": 3, "value": 80 },
      { "id": 4, "value": 90 },
      { "id": 5, "value": 70 },
      { "id": 6, "value": 0 }
    ]
  },
  "effects": {
    "delay": {
      "enabled": true,
      "rate": 40,
      "decay": 60,
      "gain": 50,
      "mix": 50
    },
    "compressor": {
      "enabled": true,
      "ratio": 6,
      "threshold": -18,
      "gain": 4,
      "autoThreshold": false
    },
    "reverb": {
      "enabled": true,
      "room": true,
      "dry": false,
      "wet": false,
      "decay": 1.5,
      "wetAmount": 0.3
    }
  }
}
