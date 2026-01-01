# 🎵 AI Native React Instrument DAW and VST App

A professional Digital Audio Workstation (DAW) built with React, TypeScript, and Tone.js, featuring AI-powered music creation capabilities and VST-like virtual instruments.

## ✨ Features

### 🎹 Virtual Instruments
- **AI Synthesizer**: Polyphonic synthesizer with multiple waveforms (sine, square, sawtooth, triangle)
- **Drum Machine**: 16-step sequencer with 4 drum tracks (kick, snare, hi-hat, clap)
- **ADSR Envelope Controls**: Fine-tune attack, decay, sustain, and release parameters
- **Interactive Piano Keyboard**: Play notes with mouse or touch

### 🤖 AI-Powered Features
- **Melody Generator**: AI algorithms create musical melodies with natural phrasing
- **Chord Progression**: Automatic harmonic progression generation
- **Rhythm Patterns**: Intelligent drum pattern creation
- **Music Composition Tips**: AI-powered suggestions for better music production

### 🎛️ Effects Rack
- **Reverb**: Add spatial depth to your sounds
- **Delay**: Echo and rhythmic delay effects
- **Distortion**: Add warmth and saturation

### 🎚️ Transport Controls
- Play, pause, stop, and record controls
- BPM adjustment (40-240 BPM)
- Position tracking (bars:beats:sixteenths)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aliyomomot-alt/Ai-NATIVE-REACT-INSTRUMENT-DAW-AND-VST-APP.git
cd Ai-NATIVE-REACT-INSTRUMENT-DAW-AND-VST-APP
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tone.js** - Web Audio framework for music synthesis
- **Web Audio API** - Browser audio processing

## 📖 Usage

### Creating Music

1. **Start the Transport**: Click the play button in the transport controls
2. **Play the Synthesizer**: Click on the piano keys to play notes
3. **Create Drum Patterns**: Click on the step sequencer to activate drum hits
4. **Generate AI Melodies**: Use the AI features panel to generate melodies and chords
5. **Add Effects**: Adjust the effects rack to add reverb, delay, or distortion

### AI Features

- **Generate Melody**: Creates a new melodic sequence using AI algorithms
- **Play Melody**: Auditions the generated melody
- **Chord Progression**: Plays a harmonic chord progression
- **AI Generate (Drums)**: Creates random drum patterns

### Synthesizer Controls

- **Waveform**: Select oscillator type (sine, square, sawtooth, triangle)
- **Attack**: Time for sound to reach peak volume
- **Decay**: Time for sound to drop from peak to sustain level
- **Sustain**: Level maintained while key is held
- **Release**: Time for sound to fade after key release

## 🎯 Project Structure

```
src/
├── components/
│   ├── TransportControls/    # Play, stop, tempo controls
│   ├── Synthesizer/           # Virtual synthesizer instrument
│   ├── DrumMachine/           # Step sequencer for drums
│   ├── AIFeatures/            # AI-powered music generation
│   └── Effects/               # Audio effects rack
├── utils/
│   └── audioEngine.ts         # Tone.js audio engine wrapper
├── App.tsx                    # Main application component
├── App.css                    # Application styles
└── main.tsx                   # Application entry point
```

## 🔧 Development

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 🌟 Features Coming Soon

- MIDI file import/export
- Audio recording and export
- More synthesizer types
- Advanced effects (EQ, compression, filters)
- Project save/load functionality
- Multi-track recording
- Waveform visualization
- More AI generation models

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Tone.js for the excellent Web Audio framework
- React team for the amazing UI library
- The open-source community for inspiration and tools

---

**Built with ❤️ using React, TypeScript, and AI**
