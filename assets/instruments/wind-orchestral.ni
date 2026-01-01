{
  "presetInfo": {
    "name": "Orchestral Wind",
    "version": "1.0.0",
    "type": "WIND",
    "author": "Aliyo Momot",
    "category": "Orchestral",
    "description": "Orchestral wind instrument sound with natural breath"
  },
  "instrument": {
    "type": "WIND",
    "oscillator": {
      "type": "sine",
      "detune": 2
    },
    "envelope": {
      "attack": 0.08,
      "decay": 0.3,
      "sustain": 0.75,
      "release": 0.6
    },
    "filter": {
      "type": "lowpass",
      "frequency": 3000,
      "resonance": 0.8,
      "rolloff": -12
    },
    "filterEnvelope": {
      "attack": 0.06,
      "decay": 0.25,
      "sustain": 0.6,
      "release": 0.5,
      "baseFrequency": 250,
      "octaves": 3
    },
    "brightness": 65,
    "envelopePoints": [
      { "id": 1, "value": 0 },
      { "id": 2, "value": 35 },
      { "id": 3, "value": 70 },
      { "id": 4, "value": 75 },
      { "id": 5, "value": 60 },
      { "id": 6, "value": 0 }
    ]
  },
  "effects": {
    "delay": {
      "enabled": false,
      "rate": 25,
      "decay": 35,
      "gain": 25,
      "mix": 35
    },
    "compressor": {
      "enabled": true,
      "ratio": 3,
      "threshold": -22,
      "gain": 2,
      "autoThreshold": false
    },
    "reverb": {
      "enabled": true,
      "room": true,
      "dry": false,
      "wet": true,
      "decay": 3.0,
      "wetAmount": 0.5
    }
  }
}
