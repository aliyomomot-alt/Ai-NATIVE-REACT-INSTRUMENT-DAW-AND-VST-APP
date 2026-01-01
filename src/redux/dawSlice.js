import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projectName: 'Untitled Project',
  isPlaying: false,
  tempo: 120,
  timeSignature: '4/4',
  currentTime: 0,
  zoom: 1,
  mode: 'D MOTHERBOARD',
  automation: false,
  vstPlugins: [],
  audioDevices: {
    inputs: [],
    outputs: []
  }
};

export const dawSlice = createSlice({
  name: 'daw',
  initialState,
  reducers: {
    setProjectName: (state, action) => {
      state.projectName = action.payload;
    },
    togglePlayback: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setTempo: (state, action) => {
      state.tempo = action.payload;
    },
    setTimeSignature: (state, action) => {
      state.timeSignature = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setZoom: (state, action) => {
      state.zoom = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleAutomation: (state) => {
      state.automation = !state.automation;
    },
    setVSTPlugins: (state, action) => {
      state.vstPlugins = action.payload;
    },
    setAudioDevices: (state, action) => {
      state.audioDevices = action.payload;
    }
  }
});

export const {
  setProjectName,
  togglePlayback,
  setTempo,
  setTimeSignature,
  setCurrentTime,
  setZoom,
  setMode,
  toggleAutomation,
  setVSTPlugins,
  setAudioDevices
} = dawSlice.actions;

export default dawSlice.reducer;
