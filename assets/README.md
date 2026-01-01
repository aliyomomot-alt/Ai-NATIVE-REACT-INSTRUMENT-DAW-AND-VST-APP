# Downloadable DAW, NI, and VST Files

This directory contains sample files for use with the AI Native React Instrument DAW application.

## Directory Structure

```
assets/
├── projects/          # DAW project files (.daw)
├── instruments/       # Native Instruments presets (.ni)
├── vst-configs/       # VST plugin configurations (.vst)
└── presets/          # Quick-load effect presets (.preset)
```

## File Types

### 1. DAW Project Files (.daw)

These are complete project files that can be loaded into the DAW application.

**Available Projects:**
- `sample-piano-project.daw` - A piano composition template
- `electronic-template.daw` - Electronic music production template

**How to Use:**
1. Open AI Native DAW application
2. Click File → Open Project
3. Navigate to `assets/projects/`
4. Select a .daw file
5. The project will load with all tracks, instruments, and effects

### 2. Native Instruments Presets (.ni)

Pre-configured instrument settings for various sounds.

**Available Presets:**
- `piano-classic-grand.ni` - Classic grand piano sound
- `guitar-electric-rock.ni` - Rock electric guitar
- `bass-deep-sub.ni` - Deep sub bass for electronic music
- `synth-analog-lead.ni` - Classic analog lead synthesizer

**How to Use:**
1. In the DAW, select an instrument track
2. Click the instrument selector dropdown
3. Click "Load Preset"
4. Navigate to `assets/instruments/`
5. Select a .ni file
6. The instrument parameters will update automatically

### 3. VST Plugin Configurations (.vst)

Professional effect plugin configurations.

**Available VST Configs:**
- `reverb-pro.vst` - Professional reverb with room simulation
- `compressor-dynamics.vst` - Dynamics compressor with auto-threshold
- `delay-echo.vst` - Creative delay effect with stereo width

**How to Use:**
1. Add an effect to a track
2. Click "Load VST"
3. Navigate to `assets/vst-configs/`
4. Select a .vst file
5. The VST will be loaded with default parameters

### 4. Effect Presets (.preset)

Quick-load presets for common effects.

**Available Presets:**
- `studio-reverb.preset` - Professional studio reverb
- `vocal-compressor.preset` - Optimized for vocals
- `creative-delay.preset` - Experimental delay effect

**How to Use:**
1. Select an effect on a track
2. Click "Load Preset"
3. Navigate to `assets/presets/`
4. Select a .preset file
5. Effect parameters will update instantly

## File Format Specifications

### DAW Project File Format

```json
{
  "projectInfo": {
    "name": "Project Name",
    "version": "1.0.0",
    "author": "Author Name",
    "created": "2026-01-01",
    "description": "Project description"
  },
  "settings": {
    "tempo": 120,
    "timeSignature": "4/4",
    "sampleRate": 44100,
    "bitDepth": 24
  },
  "tracks": [...],
  "mixer": {...},
  "automation": {...}
}
```

### NI Preset File Format

```json
{
  "presetInfo": {
    "name": "Preset Name",
    "type": "PIANO|GUITAR|BASS|SYNTH|DRUM|WIND",
    "category": "Category",
    "description": "Description"
  },
  "instrument": {
    "oscillator": {...},
    "envelope": {...},
    "filter": {...}
  },
  "effects": {...}
}
```

### VST Config File Format

```json
{
  "vstInfo": {
    "name": "VST Name",
    "manufacturer": "Manufacturer",
    "category": "Effect",
    "type": "reverb|compressor|delay"
  },
  "parameters": {...},
  "presets": [...],
  "compatibility": {...}
}
```

## Creating Your Own Files

### Create a DAW Project

1. Set up your tracks and instruments in the DAW
2. Configure effects and mixer settings
3. Click File → Save Project As
4. Choose location and filename
5. File will be saved as .daw format

### Create an NI Preset

1. Configure an instrument with desired settings
2. Adjust oscillator, envelope, and filter parameters
3. Click "Save Preset" in the instrument panel
4. Enter preset name and description
5. File will be saved as .ni format

### Create a VST Config

1. Load a VST plugin
2. Configure all parameters to desired values
3. Click "Export Config" in VST panel
4. Enter configuration name
5. File will be saved as .vst format

## Compatibility

All files are compatible with:
- AI Native React Instrument DAW v1.0.0+
- VST 2.4 compatible hosts
- Platforms: Windows, macOS, Linux

## File Locations

When the application is running, files can be loaded from:
- `assets/projects/` - Project files
- `assets/instruments/` - NI presets
- `assets/vst-configs/` - VST configurations
- `assets/presets/` - Effect presets

## Technical Notes

- All files use JSON format for easy editing
- Files can be manually edited in any text editor
- Backup your files before editing
- Invalid JSON will prevent files from loading
- Check console logs for loading errors

## Support

For issues with file loading or compatibility:
1. Check file format is valid JSON
2. Verify file extension is correct
3. Ensure file is in the correct directory
4. Check application console for error messages

Created by Aliyo Momot © 2026
