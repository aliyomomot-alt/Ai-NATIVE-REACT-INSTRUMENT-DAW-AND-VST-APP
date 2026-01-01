import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSelectedInstrument,
  setBrightness,
  updateEnvelopePoint,
  setDelayParam,
  setCompressorParam,
  toggleAutoThreshold,
  setReverbMode
} from '../redux/instrumentSlice';

const Panel = styled.div`
  flex: 1;
  background: var(--dark-black);
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PanelSection = styled.div`
  background: var(--dark-gray);
  border: 2px solid var(--primary-cyan);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h2`
  color: var(--secondary-yellow);
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

const Label = styled.label`
  color: var(--primary-cyan);
  font-size: 12px;
  font-weight: bold;
  min-width: 100px;
`;

const Select = styled.select`
  padding: 8px 12px;
  background: var(--dark-black);
  color: var(--primary-cyan);
  border: 1px solid var(--primary-cyan);
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-yellow);
    box-shadow: 0 0 8px rgba(255, 255, 0, 0.3);
  }
`;

const Slider = styled.input`
  flex: 1;
  height: 6px;
  -webkit-appearance: none;
  appearance: none;
  background: var(--dark-black);
  outline: none;
  border-radius: 3px;
  min-width: 150px;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: var(--primary-cyan);
    cursor: pointer;
    border-radius: 50%;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: var(--primary-cyan);
    cursor: pointer;
    border-radius: 50%;
    border: none;
  }
`;

const Value = styled.span`
  color: var(--secondary-yellow);
  font-size: 12px;
  font-weight: bold;
  min-width: 40px;
`;

const WaveformDisplay = styled.div`
  height: 150px;
  background: var(--dark-black);
  border: 1px solid var(--primary-cyan);
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

const EnvelopePoint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const PointLabel = styled.span`
  color: var(--primary-cyan);
  font-size: 10px;
`;

const PointSlider = styled(Slider)`
  writing-mode: bt-lr;
  -webkit-appearance: slider-vertical;
  width: 6px;
  height: 100px;
  min-width: auto;
`;

const EffectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const EffectBox = styled.div`
  background: var(--dark-navy);
  border: 1px solid var(--accent-pink);
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EffectTitle = styled.h3`
  color: var(--accent-pink);
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

const ToggleButton = styled.button`
  padding: 8px 16px;
  background: ${props => props.active ? 'var(--secondary-yellow)' : 'var(--dark-black)'};
  color: ${props => props.active ? 'var(--dark-black)' : 'var(--secondary-yellow)'};
  border: 1px solid var(--secondary-yellow);
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;
  
  &:hover {
    background: var(--secondary-yellow);
    color: var(--dark-black);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  background: var(--dark-black);
  color: var(--accent-orange);
  border: 2px solid var(--accent-orange);
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;
  
  &:hover {
    background: var(--accent-orange);
    color: var(--dark-black);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 165, 0, 0.4);
  }
`;

const MainInstrumentPanel = () => {
  const dispatch = useDispatch();
  const {
    selectedInstrument,
    brightness,
    envelopePoints,
    delay,
    compressor,
    reverb
  } = useSelector(state => state.instrument);
  
  const instruments = ['PIANO', 'GUITAR', 'BASS', 'SYNTH', 'DRUM', 'WIND'];
  
  return (
    <Panel>
      {/* Instrument Selection */}
      <PanelSection>
        <SectionTitle>Instrument Panel</SectionTitle>
        <Row>
          <Label>Instrument:</Label>
          <Select
            value={selectedInstrument}
            onChange={(e) => dispatch(setSelectedInstrument(e.target.value))}
          >
            {instruments.map(inst => (
              <option key={inst} value={inst}>{inst}</option>
            ))}
          </Select>
          <Label>Brightness:</Label>
          <Slider
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => dispatch(setBrightness(parseInt(e.target.value)))}
          />
          <Value>{brightness}%</Value>
        </Row>
      </PanelSection>
      
      {/* Waveform Display with Envelope Controls */}
      <PanelSection>
        <SectionTitle>Waveform &amp; Envelope (EQ Points)</SectionTitle>
        <WaveformDisplay>
          {envelopePoints.map(point => (
            <EnvelopePoint key={point.id}>
              <PointLabel>EQ {point.id}</PointLabel>
              <PointSlider
                type="range"
                min="0"
                max="100"
                value={point.value}
                onChange={(e) => dispatch(updateEnvelopePoint({
                  id: point.id,
                  value: parseInt(e.target.value)
                }))}
              />
              <Value>{point.value}</Value>
            </EnvelopePoint>
          ))}
        </WaveformDisplay>
      </PanelSection>
      
      {/* Effects Chain */}
      <PanelSection>
        <SectionTitle>Effects Chain</SectionTitle>
        <EffectsGrid>
          {/* Delay */}
          <EffectBox>
            <EffectTitle>Delay</EffectTitle>
            <Row>
              <Label>Rate:</Label>
              <Slider
                type="range"
                min="0"
                max="100"
                value={delay.rate}
                onChange={(e) => dispatch(setDelayParam({
                  param: 'rate',
                  value: parseInt(e.target.value)
                }))}
              />
              <Value>{delay.rate}%</Value>
            </Row>
            <Row>
              <Label>Decay:</Label>
              <Slider
                type="range"
                min="0"
                max="100"
                value={delay.decay}
                onChange={(e) => dispatch(setDelayParam({
                  param: 'decay',
                  value: parseInt(e.target.value)
                }))}
              />
              <Value>{delay.decay}%</Value>
            </Row>
            <Row>
              <Label>Gain:</Label>
              <Slider
                type="range"
                min="0"
                max="100"
                value={delay.gain}
                onChange={(e) => dispatch(setDelayParam({
                  param: 'gain',
                  value: parseInt(e.target.value)
                }))}
              />
              <Value>{delay.gain}%</Value>
            </Row>
            <Row>
              <Label>Mix:</Label>
              <Value>{delay.mix}%</Value>
            </Row>
          </EffectBox>
          
          {/* Compressor */}
          <EffectBox>
            <EffectTitle>Compressor</EffectTitle>
            <Row>
              <Label>Ratio:</Label>
              <Slider
                type="range"
                min="1"
                max="20"
                value={compressor.ratio}
                onChange={(e) => dispatch(setCompressorParam({
                  param: 'ratio',
                  value: parseInt(e.target.value)
                }))}
              />
              <Value>{compressor.ratio}:1</Value>
            </Row>
            <Row>
              <Label>Threshold:</Label>
              <Slider
                type="range"
                min="-60"
                max="0"
                value={compressor.threshold}
                onChange={(e) => dispatch(setCompressorParam({
                  param: 'threshold',
                  value: parseInt(e.target.value)
                }))}
              />
              <Value>{compressor.threshold}dB</Value>
            </Row>
            <Row>
              <Label>Gain:</Label>
              <Slider
                type="range"
                min="-20"
                max="20"
                value={compressor.gain}
                onChange={(e) => dispatch(setCompressorParam({
                  param: 'gain',
                  value: parseInt(e.target.value)
                }))}
              />
              <Value>{compressor.gain}dB</Value>
            </Row>
            <Row>
              <ToggleButton
                active={compressor.autoThreshold}
                onClick={() => dispatch(toggleAutoThreshold())}
              >
                Auto Threshold
              </ToggleButton>
            </Row>
          </EffectBox>
        </EffectsGrid>
      </PanelSection>
      
      {/* Room Ambience */}
      <PanelSection>
        <SectionTitle>Room Ambience</SectionTitle>
        <ButtonGroup>
          <ToggleButton
            active={reverb.room}
            onClick={() => dispatch(setReverbMode({ mode: 'room', value: !reverb.room }))}
          >
            ROOM
          </ToggleButton>
          <ToggleButton
            active={reverb.dry}
            onClick={() => dispatch(setReverbMode({ mode: 'dry', value: !reverb.dry }))}
          >
            DRY
          </ToggleButton>
          <ToggleButton
            active={reverb.wet}
            onClick={() => dispatch(setReverbMode({ mode: 'wet', value: !reverb.wet }))}
          >
            WET REVERB
          </ToggleButton>
        </ButtonGroup>
      </PanelSection>
      
      {/* Edit Window */}
      <PanelSection>
        <SectionTitle>Edit Window</SectionTitle>
        <ButtonGroup>
          <ActionButton>ZOOM</ActionButton>
          <ActionButton>Panel Editing</ActionButton>
          <ActionButton>AUTOMATION</ActionButton>
          <ActionButton>DTI CHAT</ActionButton>
        </ButtonGroup>
      </PanelSection>
    </Panel>
  );
};

export default MainInstrumentPanel;
