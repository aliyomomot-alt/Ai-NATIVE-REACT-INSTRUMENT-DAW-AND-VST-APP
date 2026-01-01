import React from 'react';
import styled from 'styled-components';
import TopNavigation from './components/TopNavigation';
import LeftSidebar from './components/LeftSidebar';
import MainInstrumentPanel from './components/MainInstrumentPanel';
import RightSidebar from './components/RightSidebar';
import BottomControlPanel from './components/BottomControlPanel';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: var(--dark-black);
  overflow: hidden;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const CenterPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function App() {
  return (
    <AppContainer>
      <TopNavigation />
      <MainContent>
        <LeftSidebar />
        <CenterPanel>
          <MainInstrumentPanel />
        </CenterPanel>
        <RightSidebar />
      </MainContent>
      <BottomControlPanel />
    </AppContainer>
  );
}

export default App;
