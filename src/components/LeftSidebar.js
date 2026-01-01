import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setMode, toggleAutomation } from '../redux/dawSlice';
import { setChannelVolume, setMainVolume } from '../redux/mixerSlice';

const Sidebar = styled.aside`
  width: 240px;
  background: var(--dark-gray);
  border-right: 2px solid var(--primary-cyan);
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionTitle = styled.h3`
  color: var(--secondary-yellow);
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

const Input = styled.input`
  padding: 8px;
  background: var(--dark-black);
  border: 1px solid var(--primary-cyan);
  border-radius: 4px;
  color: var(--primary-cyan);
  font-size: 12px;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-yellow);
    box-shadow: 0 0 8px rgba(255, 255, 0, 0.3);
  }
`;

const ModeButton = styled.button`
  padding: 8px;
  background: ${props => props.active ? 'var(--primary-cyan)' : 'var(--dark-black)'};
  color: ${props => props.active ? 'var(--dark-black)' : 'var(--primary-cyan)'};
  border: 1px solid var(--primary-cyan);
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  transition: all 0.2s;
  
  &:hover {
    background: var(--primary-cyan);
    color: var(--dark-black);
  }
`;

const ToggleButton = styled(ModeButton)`
  border-color: ${props => props.active ? 'var(--secondary-yellow)' : 'var(--primary-cyan)'};
  background: ${props => props.active ? 'var(--secondary-yellow)' : 'var(--dark-black)'};
  color: ${props => props.active ? 'var(--dark-black)' : 'var(--secondary-yellow)'};
  
  &:hover {
    background: var(--secondary-yellow);
    color: var(--dark-black);
  }
`;

const WaveformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const WaveformButton = styled.button`
  width: 50px;
  height: 50px;
  background: var(--dark-black);
  border: 1px solid var(--primary-cyan);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-cyan);
  font-size: 20px;
  transition: all 0.2s;
  
  &:hover {
    background: var(--primary-cyan);
    color: var(--dark-black);
    transform: scale(1.05);
  }
`;

const FaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FaderLabel = styled.label`
  color: var(--primary-cyan);
  font-size: 10px;
  font-weight: bold;
`;

const Fader = styled.input`
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: var(--dark-black);
  outline: none;
  border-radius: 2px;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: var(--primary-cyan);
    cursor: pointer;
    border-radius: 50%;
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: var(--primary-cyan);
    cursor: pointer;
    border-radius: 50%;
    border: none;
  }
`;

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.daw.mode);
  const automation = useSelector(state => state.daw.automation);
  const channels = useSelector(state => state.mixer.channels);
  const mainVolume = useSelector(state => state.mixer.mainVolume);
  
  const modes = ['D MOTHERBOARD', 'D RAM', 'D ROM', 'D WLAN'];
  const waveforms = ['△', '□', '○', '◇', '☆', '◆'];
  
  return (
    <Sidebar>
      <Section>
        <SectionTitle>Type &amp; Request</SectionTitle>
        <Input type="text" placeholder="Enter command..." />
      </Section>
      
      <Section>
        <SectionTitle>Mode Selection</SectionTitle>
        {modes.map(m => (
          <ModeButton
            key={m}
            active={mode === m}
            onClick={() => dispatch(setMode(m))}
          >
            {m}
          </ModeButton>
        ))}
      </Section>
      
      <Section>
        <SectionTitle>Audio Processing</SectionTitle>
        <ToggleButton active={false}>SUPERSONIC-AUDIOCAED</ToggleButton>
        <ToggleButton 
          active={automation}
          onClick={() => dispatch(toggleAutomation())}
        >
          AUTOMATION
        </ToggleButton>
        <ToggleButton active={false}>DTI-CHAT</ToggleButton>
      </Section>
      
      <Section>
        <SectionTitle>Waveform Shapes</SectionTitle>
        <WaveformGrid>
          {waveforms.map((shape, i) => (
            <WaveformButton key={i}>
              {shape}
            </WaveformButton>
          ))}
        </WaveformGrid>
      </Section>
      
      <Section>
        <SectionTitle>Channel Faders</SectionTitle>
        {channels.map(channel => (
          <FaderContainer key={channel.id}>
            <FaderLabel>CH {channel.id}: {channel.volume}%</FaderLabel>
            <Fader
              type="range"
              min="0"
              max="100"
              value={channel.volume}
              onChange={(e) => dispatch(setChannelVolume({ 
                id: channel.id, 
                volume: parseInt(e.target.value) 
              }))}
            />
          </FaderContainer>
        ))}
        <FaderContainer>
          <FaderLabel>MAIN: {mainVolume}%</FaderLabel>
          <Fader
            type="range"
            min="0"
            max="100"
            value={mainVolume}
            onChange={(e) => dispatch(setMainVolume(parseInt(e.target.value)))}
          />
        </FaderContainer>
      </Section>
    </Sidebar>
  );
};

export default LeftSidebar;
