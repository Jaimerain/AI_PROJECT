import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.tsx';
import PrintCard from './components/PrintCard.tsx';
import FeatureGrid from './components/FeatureGrid.tsx';
import BottomActionBar from './components/BottomActionBar.tsx';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="main-container">
        <Sidebar />
        <div className="content-area">
          <PrintCard />
          <FeatureGrid />
        </div>
        <BottomActionBar />
      </div>
    </div>
  );
};

export default App;
