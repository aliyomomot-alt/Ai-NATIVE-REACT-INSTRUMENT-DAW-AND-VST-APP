{
  "presetInfo": {
    "name": "Electronic Drum Kit",
    "version": "1.0.0",
    "type": "DRUM",
    "author": "Aliyo Momot",
    "category": "Electronic",
    "description": "Electronic drum kit with punchy sound"
  },
  "instrument": {
    "type": "DRUM",
    "oscillator": {
      "type": "pulse",
      "detune": 0
    },
    "envelope": {
      "attack": 0.001,
      "decay": 0.15,
      "sustain": 0.3,
      "release": 0.2
    },
    "filter": {
      "type": "lowpass",
      "frequency": 6000,
      "resonance": 1.5,
      "rolloff": -24
    },
    "filterEnvelope": {
      "attack": 0.001,
      "decay": 0.1,
      "sustain": 0.2,
      "release": 0.15,
      "baseFrequency": 500,
      "octaves": 4
    },
    "brightness": 90,
    "envelopePoints": [
      { "id": 1, "value": 0 },
      { "id": 2, "value": 100 },
      { "id": 3, "value": 60 },
      { "id": 4, "value": 40 },
      { "id": 5, "value": 20 },
      { "id": 6, "value": 0 }
    ]
  },
  "effects": {
    "delay": {
      "enabled": false,
      "rate": 20,
      "decay": 25,
      "gain": 20,
      "mix": 25
    },
    "compressor": {
      "enabled": true,
      "ratio": 8,
      "threshold": -12,
      "gain": 6,
      "autoThreshold": false
    },
    "reverb": {
      "enabled": true,
      "room": false,
      "dry": true,
      "wet": false,
      "decay": 0.8,
      "wetAmount": 0.2
    }
  }
}
