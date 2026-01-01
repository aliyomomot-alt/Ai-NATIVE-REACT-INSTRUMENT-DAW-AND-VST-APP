{
  "presetInfo": {
    "name": "Deep Sub Bass",
    "version": "1.0.0",
    "type": "BASS",
    "author": "Aliyo Momot",
    "category": "Electronic",
    "description": "Deep sub bass for electronic music production"
  },
  "instrument": {
    "type": "BASS",
    "oscillator": {
      "type": "sawtooth",
      "detune": -10
    },
    "envelope": {
      "attack": 0.02,
      "decay": 0.4,
      "sustain": 0.9,
      "release": 0.3
    },
    "filter": {
      "type": "lowpass",
      "frequency": 800,
      "resonance": 2.0,
      "rolloff": -24
    },
    "filterEnvelope": {
      "attack": 0.1,
      "decay": 0.3,
      "sustain": 0.6,
      "release": 0.5,
      "baseFrequency": 100,
      "octaves": 2
    },
    "brightness": 30,
    "envelopePoints": [
      { "id": 1, "value": 0 },
      { "id": 2, "value": 20 },
      { "id": 3, "value": 40 },
      { "id": 4, "value": 60 },
      { "id": 5, "value": 40 },
      { "id": 6, "value": 0 }
    ]
  },
  "effects": {
    "delay": {
      "enabled": false,
      "rate": 20,
      "decay": 30,
      "gain": 20,
      "mix": 30
    },
    "compressor": {
      "enabled": true,
      "ratio": 8,
      "threshold": -15,
      "gain": 5,
      "autoThreshold": true
    },
    "reverb": {
      "enabled": false
    }
  }
}
