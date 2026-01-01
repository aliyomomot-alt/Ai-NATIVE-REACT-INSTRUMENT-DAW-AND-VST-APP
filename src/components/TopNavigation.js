import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, var(--dark-navy) 0%, var(--dark-black) 100%);
  border-bottom: 2px solid var(--primary-cyan);
  padding: 8px 12px;
  min-height: 50px;
  gap: 8px;
  flex-wrap: wrap;
`;

const NavButton = styled.button`
  padding: 6px 12px;
  background: var(--dark-gray);
  color: var(--primary-cyan);
  border: 1px solid var(--primary-cyan);
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  transition: all 0.2s;
  
  &:hover {
    background: var(--primary-cyan);
    color: var(--dark-black);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 255, 255, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const NavButtonYellow = styled(NavButton)`
  color: var(--secondary-yellow);
  border-color: var(--secondary-yellow);
  
  &:hover {
    background: var(--secondary-yellow);
    color: var(--dark-black);
    box-shadow: 0 4px 8px rgba(255, 255, 0, 0.3);
  }
`;

const NavButtonPink = styled(NavButton)`
  color: var(--accent-pink);
  border-color: var(--accent-pink);
  
  &:hover {
    background: var(--accent-pink);
    color: var(--dark-black);
    box-shadow: 0 4px 8px rgba(255, 0, 255, 0.3);
  }
`;

const NavButtonOrange = styled(NavButton)`
  color: var(--accent-orange);
  border-color: var(--accent-orange);
  
  &:hover {
    background: var(--accent-orange);
    color: var(--dark-black);
    box-shadow: 0 4px 8px rgba(255, 165, 0, 0.3);
  }
`;

const TopNavigation = () => {
  return (
    <Nav>
      <NavButton>AI Module</NavButton>
      <NavButton>VFDC Body Shape</NavButton>
      <NavButton>TFDC Body Shape</NavButton>
      <NavButtonYellow>Native React Node Cabin Panel</NavButtonYellow>
      <NavButton>HSD Body Shape</NavButton>
      <NavButtonPink>Mixer</NavButtonPink>
      <NavButton>Instrument Panel NI</NavButton>
      <NavButton>Automation DAW Sync</NavButton>
      <NavButtonOrange>NI DAW</NavButtonOrange>
      <NavButtonOrange>NI VST</NavButtonOrange>
      <NavButtonYellow>PayPal Aliyo Momot</NavButtonYellow>
    </Nav>
  );
};

export default TopNavigation;
