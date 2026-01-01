import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedInstrument: 'PIANO',
  brightness: 50,
  waveform: 'sine',
  envelopePoints: [
    { id: 1, value: 0 },
    { id: 2, value: 20 },
    { id: 3, value: 50 },
    { id: 4, value: 80 },
    { id: 5, value: 60 },
    { id: 6, value: 0 }
  ],
  delay: {
    rate: 50,
    decay: 50,
    gain: 50,
    mix: 50
  },
  compressor: {
    ratio: 4,
    threshold: -20,
    gain: 0,
    autoThreshold: false
  },
  reverb: {
    room: true,
    dry: false,
    wet: false
  },
  panelCabins: [
    { id: 1, name: 'Panel Cabin 1', active: true },
    { id: 2, name: 'Panel Cabin 2', active: false },
    { id: 3, name: 'Panel Cabin 3', active: false }
  ]
};

export const instrumentSlice = createSlice({
  name: 'instrument',
  initialState,
  reducers: {
    setSelectedInstrument: (state, action) => {
      state.selectedInstrument = action.payload;
    },
    setBrightness: (state, action) => {
      state.brightness = action.payload;
    },
    setWaveform: (state, action) => {
      state.waveform = action.payload;
    },
    updateEnvelopePoint: (state, action) => {
      const { id, value } = action.payload;
      const point = state.envelopePoints.find(p => p.id === id);
      if (point) {
        point.value = value;
      }
    },
    setDelayParam: (state, action) => {
      const { param, value } = action.payload;
      state.delay[param] = value;
    },
    setCompressorParam: (state, action) => {
      const { param, value } = action.payload;
      state.compressor[param] = value;
    },
    toggleAutoThreshold: (state) => {
      state.compressor.autoThreshold = !state.compressor.autoThreshold;
    },
    setReverbMode: (state, action) => {
      const { mode, value } = action.payload;
      state.reverb[mode] = value;
    },
    togglePanelCabin: (state, action) => {
      const cabin = state.panelCabins.find(c => c.id === action.payload);
      if (cabin) {
        cabin.active = !cabin.active;
      }
    }
  }
});

export const {
  setSelectedInstrument,
  setBrightness,
  setWaveform,
  updateEnvelopePoint,
  setDelayParam,
  setCompressorParam,
  toggleAutoThreshold,
  setReverbMode,
  togglePanelCabin
} = instrumentSlice.actions;

export default instrumentSlice.reducer;
