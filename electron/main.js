const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV !== 'production';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth: 1280,
    minHeight: 720,
    backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, '../assets/icon.png')
  });

  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// IPC Handlers for file operations
ipcMain.handle('dialog:openFile', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      { name: 'Audio Files', extensions: ['wav', 'mp3', 'flac', 'ogg'] },
      { name: 'Project Files', extensions: ['daw'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });
  if (canceled) {
    return null;
  }
  return filePaths[0];
});

ipcMain.handle('dialog:saveFile', async () => {
  const { canceled, filePath } = await dialog.showSaveDialog({
    filters: [
      { name: 'Project Files', extensions: ['daw'] },
      { name: 'Audio Files', extensions: ['wav', 'mp3', 'flac'] }
    ]
  });
  if (canceled) {
    return null;
  }
  return filePath;
});

// Audio device handling
ipcMain.handle('audio:getDevices', async () => {
  // This would integrate with native audio APIs
  // For now, return mock data
  return {
    inputs: ['Default Input', 'Microphone'],
    outputs: ['Default Output', 'Speakers']
  };
});

// VST Plugin scanning
ipcMain.handle('vst:scanPlugins', async () => {
  // This would scan for VST plugins on the system
  // For now, return mock data
  return [
    { name: 'Piano NI', type: 'instrument', manufacturer: 'Native Instruments' },
    { name: 'Guitar NI', type: 'instrument', manufacturer: 'Native Instruments' },
    { name: 'Bass NI', type: 'instrument', manufacturer: 'Native Instruments' }
  ];
});
