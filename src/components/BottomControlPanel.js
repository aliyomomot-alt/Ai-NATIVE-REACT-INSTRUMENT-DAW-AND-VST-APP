import React from 'react';
import styled from 'styled-components';

const BottomPanel = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, var(--dark-navy) 0%, var(--dark-black) 100%);
  border-top: 2px solid var(--primary-cyan);
  padding: 12px 16px;
  min-height: 60px;
  gap: 12px;
  flex-wrap: wrap;
`;

const ControlGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ControlButton = styled.button`
  padding: 8px 16px;
  background: var(--dark-gray);
  color: ${props => props.color || 'var(--primary-cyan)'};
  border: 1px solid ${props => props.color || 'var(--primary-cyan)'};
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;
  min-width: 80px;
  
  &:hover {
    background: ${props => props.color || 'var(--primary-cyan)'};
    color: var(--dark-black);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px ${props => props.color ? `${props.color}40` : 'rgba(0, 255, 255, 0.3)'};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const IconButton = styled(ControlButton)`
  min-width: 50px;
  padding: 8px 12px;
  font-size: 16px;
`;

const Separator = styled.div`
  width: 1px;
  height: 30px;
  background: var(--primary-cyan);
  opacity: 0.3;
`;

const Copyright = styled.span`
  color: var(--light-gray);
  font-size: 10px;
  margin-left: auto;
`;

const BottomControlPanel = () => {
  return (
    <BottomPanel>
      <ControlGroup>
        <ControlButton color="var(--accent-pink)">COLLABO</ControlButton>
        <ControlButton color="var(--secondary-yellow)">PROFILE</ControlButton>
        <ControlButton color="var(--accent-orange)">DTI</ControlButton>
        <ControlButton>ZOOM</ControlButton>
      </ControlGroup>
      
      <Separator />
      
      <ControlGroup>
        <IconButton color="var(--secondary-yellow)" title="SMS">📱</IconButton>
        <IconButton color="var(--accent-pink)" title="Call">📞</IconButton>
        <IconButton color="var(--primary-cyan)" title="Email">📧</IconButton>
        <IconButton color="var(--accent-orange)" title="Video Chat">📹</IconButton>
        <IconButton color="var(--secondary-yellow)" title="Chat">💬</IconButton>
      </ControlGroup>
      
      <Separator />
      
      <ControlGroup>
        <ControlButton color="var(--accent-orange)">CHAT</ControlButton>
      </ControlGroup>
      
      <Copyright>Created by Aliyo Momot © 2026</Copyright>
    </BottomPanel>
  );
};

export default BottomControlPanel;
