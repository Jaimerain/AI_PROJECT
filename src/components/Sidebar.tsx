import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-icon"></div>
          </div>
        </div>
      </div>
      
      <div className="sidebar-nav">
        <div className="nav-section">
          <div className="nav-item active">
            <div className="nav-icon home-icon"></div>
          </div>
          <div className="nav-group">
            <div className="nav-item">
              <div className="nav-icon device-icon"></div>
            </div>
            <div className="nav-item">
              <div className="nav-icon scan-icon"></div>
            </div>
            <div className="nav-item">
              <div className="nav-icon ticket-icon"></div>
            </div>
            <div className="nav-item">
              <div className="nav-icon meeting-icon"></div>
            </div>
          </div>
        </div>
        
        <div className="nav-section bottom">
          <div className="nav-item">
            <div className="nav-icon settings-icon"></div>
          </div>
          <div className="nav-item">
            <div className="nav-icon help-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
