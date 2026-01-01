{
  "presetInfo": {
    "name": "Classic Grand Piano",
    "version": "1.0.0",
    "type": "PIANO",
    "author": "Aliyo Momot",
    "category": "Acoustic",
    "description": "Classic grand piano sound with natural reverb"
  },
  "instrument": {
    "type": "PIANO",
    "oscillator": {
      "type": "sine",
      "detune": 0
    },
    "envelope": {
      "attack": 0.01,
      "decay": 0.3,
      "sustain": 0.7,
      "release": 1.5
    },
    "filter": {
      "type": "lowpass",
      "frequency": 3500,
      "resonance": 0.5,
      "rolloff": -12
    },
    "filterEnvelope": {
      "attack": 0.05,
      "decay": 0.2,
      "sustain": 0.5,
      "release": 0.8,
      "baseFrequency": 200,
      "octaves": 4
    },
    "brightness": 60,
    "envelopePoints": [
      { "id": 1, "value": 0 },
      { "id": 2, "value": 30 },
      { "id": 3, "value": 60 },
      { "id": 4, "value": 85 },
      { "id": 5, "value": 50 },
      { "id": 6, "value": 0 }
    ]
  },
  "effects": {
    "delay": {
      "enabled": false,
      "rate": 30,
      "decay": 40,
      "gain": 30,
      "mix": 40
    },
    "compressor": {
      "enabled": true,
      "ratio": 3,
      "threshold": -25,
      "gain": 2,
      "autoThreshold": false
    },
    "reverb": {
      "enabled": true,
      "room": true,
      "dry": false,
      "wet": true,
      "decay": 2.5,
      "wetAmount": 0.4
    }
  }
}
