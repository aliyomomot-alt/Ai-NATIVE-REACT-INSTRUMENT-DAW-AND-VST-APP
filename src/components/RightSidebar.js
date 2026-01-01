import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { togglePanelCabin } from '../redux/instrumentSlice';

const Sidebar = styled.aside`
  width: 200px;
  background: var(--dark-gray);
  border-left: 2px solid var(--primary-cyan);
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CreateButton = styled.button`
  padding: 16px;
  background: linear-gradient(135deg, var(--accent-pink), var(--accent-orange));
  color: white;
  border: 2px solid var(--secondary-yellow);
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 8px rgba(255, 0, 255, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 0, 255, 0.5);
  }
  
  &:active {
    transform: translateY(0);
  }
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

const InstrumentButton = styled.button`
  padding: 12px;
  background: var(--dark-black);
  color: ${props => props.color || 'var(--primary-cyan)'};
  border: 2px solid ${props => props.color || 'var(--primary-cyan)'};
  border-radius: 6px;
  font-size: 11px;
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.color || 'var(--primary-cyan)'};
    color: var(--dark-black);
    transform: scale(1.05);
  }
`;

const CabinSection = styled.div`
  background: var(--dark-navy);
  border: 1px solid var(--primary-cyan);
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CabinButton = styled.button`
  padding: 10px;
  background: ${props => props.active ? 'var(--primary-cyan)' : 'var(--dark-black)'};
  color: ${props => props.active ? 'var(--dark-black)' : 'var(--primary-cyan)'};
  border: 1px solid var(--primary-cyan);
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: var(--primary-cyan);
    color: var(--dark-black);
  }
`;

const RightSidebar = () => {
  const dispatch = useDispatch();
  const panelCabins = useSelector(state => state.instrument.panelCabins);
  
  const instruments = [
    { name: 'PIANO NI', color: 'var(--primary-cyan)' },
    { name: 'GUITAR NI', color: 'var(--accent-orange)' },
    { name: 'BASS NI', color: 'var(--accent-pink)' },
    { name: 'WIND NI', color: 'var(--secondary-yellow)' },
    { name: 'SYNC NI', color: 'var(--primary-cyan)' },
    { name: 'DRUM NI', color: 'var(--accent-orange)' },
    { name: 'OTHERS', color: 'var(--light-gray)' }
  ];
  
  return (
    <Sidebar>
      <CreateButton>
        CREATE INSTRUMENT<br />PANEL CABIN
      </CreateButton>
      
      <Section>
        <SectionTitle>Quick Access</SectionTitle>
        {instruments.map(inst => (
          <InstrumentButton key={inst.name} color={inst.color}>
            {inst.name}
          </InstrumentButton>
        ))}
      </Section>
      
      <Section>
        <SectionTitle>Panel Cabins</SectionTitle>
        <CabinSection>
          {panelCabins.map(cabin => (
            <CabinButton
              key={cabin.id}
              active={cabin.active}
              onClick={() => dispatch(togglePanelCabin(cabin.id))}
            >
              {cabin.name}
            </CabinButton>
          ))}
        </CabinSection>
      </Section>
    </Sidebar>
  );
};

export default RightSidebar;
