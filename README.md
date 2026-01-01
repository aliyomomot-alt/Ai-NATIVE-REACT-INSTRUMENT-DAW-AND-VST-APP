# AI Native React Instrument DAW with NI and VST Support

A comprehensive Digital Audio Workstation (DAW) with Native Instruments (NI) and VST support built as a cross-platform desktop application using React and Electron.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Created by **Aliyo Momot © 2026**

## 📥 Download Center

**[📥 Download Templates, Presets & Files →](assets/DOWNLOADS.md)**

Access 16 downloadable files including:
- 2 DAW project templates
- 6 Native Instruments presets
- 3 VST plugin configurations
- 3 Effect presets
- Complete documentation

[**View Web Download Page →**](https://htmlpreview.github.io/?https://raw.githubusercontent.com/aliyomomot-alt/Ai-NATIVE-REACT-INSTRUMENT-DAW-AND-VST-APP/copilot/create-daw-app-structure/assets/downloads.html)

## 🎵 Features

### Core Components

- **Top Navigation Bar** with modules:
  - AI Module
  - VFDC Body Shape (Virtual Frequency Domain Controller)
  - TFDC Body Shape (Time Frequency Domain Controller)
  - Native React Node Cabin Panel
  - HSD Body Shape (Harmonic Spectral Display)
  - Mixer
  - Instrument Panel NI
  - Automation DAW Sync
  - NI DAW & NI VST support
  - PayPal integration

- **Left Sidebar** featuring:
  - Type & Request input field
  - Mode selectors (D MOTHERBOARD, D RAM, D ROM, D WLAN)
  - Audio processing toggles (SUPERSONIC-AUDIOCAED, AUTOMATION, DTI-CHAT)
  - Waveform shape selectors
  - 9-channel fader controls (Channels 1-8 + MAIN)

- **Main Instrument Panel** with:
  - Instrument selection (Piano, Guitar, Bass, Synth, Drum, Wind)
  - Brightness/tone control
  - Waveform display with 6 EQ envelope points
  - Delay effect (Rate, Decay, Gain, Mix controls)
  - Compressor (Ratio, Threshold, Gain, Auto Threshold)
  - Room ambience (ROOM/DRY/WET REVERB toggles)
  - Edit window with ZOOM and automation

- **Right Sidebar** for:
  - CREATE INSTRUMENT PANEL CABIN button
  - Quick access to instruments (PIANO NI, GUITAR NI, BASS NI, WIND NI, SYNC NI, DRUM NI)
  - Panel cabin management (3 expandable cabins)

- **Bottom Control Panel** with:
  - Collaboration tools (COLLABO, PROFILE, DTI, ZOOM)
  - Communication features (SMS, CALL, EMAIL, VIDEO CHAT)
  - Integrated CHAT

### Technical Features

- **Audio Processing**: Web Audio API integration via Tone.js
- **State Management**: Redux Toolkit for global state
- **Real-time Controls**: Interactive sliders, faders, and toggles
- **Cross-Platform**: Electron for Windows, macOS, and Linux
- **VST Plugin Infrastructure**: Ready for VST plugin integration
- **MIDI Support**: Foundation for MIDI input/output
- **Project Management**: Save/load functionality structure

## 🎨 Color Scheme

- **Primary**: Cyan (#00FFFF)
- **Secondary**: Bright Yellow (#FFFF00)
- **Accent**: Hot Pink (#FF00FF)
- **Highlights**: Orange (#FFA500)
- **Dark sections**: Navy Blue (#000080), Black (#000000)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
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

### Development

Run the application in development mode:

```bash
npm run electron-dev
```

This will:
- Start the React development server on http://localhost:3000
- Launch the Electron window with hot reload

### Building for Production

Build the React app:
```bash
npm run build
```

Build the Electron application for your platform:
```bash
npm run electron-build
```

Build for all platforms (Windows, macOS, Linux):
```bash
npm run electron-build-all
```

The built applications will be in the `dist` folder.

## 📁 Project Structure

```
Ai-NATIVE-REACT-INSTRUMENT-DAW-AND-VST-APP/
├── assets/              # Downloadable files
│   ├── projects/        # DAW project files (.daw)
│   ├── instruments/     # Native Instruments presets (.ni)
│   ├── vst-configs/     # VST plugin configurations (.vst)
│   ├── presets/         # Quick-load effect presets (.preset)
│   ├── manifest.json    # Index of all downloadable files
│   └── README.md        # Documentation for downloadable files
├── electron/
│   ├── main.js          # Electron main process
│   └── preload.js       # Preload script for IPC
├── public/
│   └── index.html       # HTML entry point
├── src/
│   ├── components/      # React components
│   │   ├── TopNavigation.js
│   │   ├── LeftSidebar.js
│   │   ├── MainInstrumentPanel.js
│   │   ├── RightSidebar.js
│   │   └── BottomControlPanel.js
│   ├── redux/           # State management
│   │   ├── store.js
│   │   ├── dawSlice.js
│   │   ├── instrumentSlice.js
│   │   └── mixerSlice.js
│   ├── utils/           # Utilities
│   │   └── audioEngine.js
│   ├── styles/          # Global styles
│   │   └── index.css
│   ├── App.js           # Main App component
│   └── index.js         # React entry point
├── package.json
└── README.md
```

## 🔧 Technology Stack

- **Frontend**: React 18
- **Desktop Framework**: Electron 28
- **Audio Library**: Tone.js
- **State Management**: Redux Toolkit
- **Styling**: Styled Components
- **Waveform Visualization**: WaveSurfer.js
- **Build Tool**: React Scripts
- **Packaging**: Electron Builder

## 🎹 Usage

### Basic Workflow

1. **Select an Instrument**: Choose from Piano, Guitar, Bass, Synth, Drum, or Wind in the main instrument panel
2. **Adjust Parameters**: Use the brightness slider and envelope points to shape your sound
3. **Add Effects**: Configure delay, compressor, and reverb settings
4. **Mix Channels**: Use the left sidebar faders to balance your channels
5. **Control Playback**: Use the automation and synchronization features
6. **Create Cabins**: Add new instrument panel cabins from the right sidebar

### Working with Downloadable Files

The `assets/` directory contains ready-to-use files:

**DAW Projects** (`.daw` files):
- Load complete project templates with pre-configured tracks
- `sample-piano-project.daw` - Piano composition starter
- `electronic-template.daw` - Electronic music production template

**NI Instrument Presets** (`.ni` files):
- `piano-classic-grand.ni` - Classic grand piano
- `guitar-electric-rock.ni` - Rock electric guitar
- `bass-deep-sub.ni` - Deep sub bass
- `synth-analog-lead.ni` - Analog lead synth
- `wind-orchestral.ni` - Orchestral wind
- `drum-electronic.ni` - Electronic drums

**VST Configurations** (`.vst` files):
- `reverb-pro.vst` - Professional reverb with presets
- `compressor-dynamics.vst` - Dynamics compressor
- `delay-echo.vst` - Creative delay effect

**Effect Presets** (`.preset` files):
- `studio-reverb.preset` - Studio reverb settings
- `vocal-compressor.preset` - Vocal compression
- `creative-delay.preset` - Experimental delay

See [`assets/README.md`](assets/README.md) for detailed information on using these files.

### Keyboard Shortcuts (Future Implementation)

- `Space`: Play/Pause
- `Ctrl+S`: Save Project
- `Ctrl+O`: Open Project
- `Ctrl+Z`: Undo
- `Ctrl+Y`: Redo

## 🔌 VST Plugin Support

The application includes infrastructure for VST plugin support. To add VST plugins:

1. Place VST plugins in the system's VST directory
2. The app will scan and list available plugins
3. Select and load plugins from the NI VST menu

*Note: Native VST hosting requires platform-specific native modules.*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Aliyo Momot**

Created with ❤️ in 2026

## 🙏 Acknowledgments

- Native Instruments for inspiration
- The open-source audio community
- React and Electron teams

## 📞 Support

For support, email support@aliyomomot.com or open an issue in the repository.

---

**AI Native DAW** - Bringing professional audio production to everyone.
