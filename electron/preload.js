const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // File operations
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  saveFile: () => ipcRenderer.invoke('dialog:saveFile'),
  
  // Audio device operations
  getAudioDevices: () => ipcRenderer.invoke('audio:getDevices'),
  
  // VST plugin operations
  scanVSTPlugins: () => ipcRenderer.invoke('vst:scanPlugins')
});
