import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import PrintCard from './components/PrintCard';
import FeatureGrid from './components/FeatureGrid';
import BottomActionBar from './components/BottomActionBar';

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
