import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [
    { id: 1, name: 'Channel 1', volume: 75, mute: false, solo: false },
    { id: 2, name: 'Channel 2', volume: 75, mute: false, solo: false },
    { id: 3, name: 'Channel 3', volume: 75, mute: false, solo: false },
    { id: 4, name: 'Channel 4', volume: 75, mute: false, solo: false },
    { id: 5, name: 'Channel 5', volume: 75, mute: false, solo: false },
    { id: 6, name: 'Channel 6', volume: 75, mute: false, solo: false },
    { id: 7, name: 'Channel 7', volume: 75, mute: false, solo: false },
    { id: 8, name: 'Channel 8', volume: 75, mute: false, solo: false }
  ],
  mainVolume: 80
};

export const mixerSlice = createSlice({
  name: 'mixer',
  initialState,
  reducers: {
    setChannelVolume: (state, action) => {
      const { id, volume } = action.payload;
      const channel = state.channels.find(c => c.id === id);
      if (channel) {
        channel.volume = volume;
      }
    },
    toggleChannelMute: (state, action) => {
      const channel = state.channels.find(c => c.id === action.payload);
      if (channel) {
        channel.mute = !channel.mute;
      }
    },
    toggleChannelSolo: (state, action) => {
      const channel = state.channels.find(c => c.id === action.payload);
      if (channel) {
        channel.solo = !channel.solo;
      }
    },
    setMainVolume: (state, action) => {
      state.mainVolume = action.payload;
    }
  }
});

export const {
  setChannelVolume,
  toggleChannelMute,
  toggleChannelSolo,
  setMainVolume
} = mixerSlice.actions;

export default mixerSlice.reducer;
