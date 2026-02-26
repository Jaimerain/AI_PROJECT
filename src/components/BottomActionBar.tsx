import React from 'react';
import './BottomActionBar.css';

const BottomActionBar: React.FC = () => {
  return (
    <div className="bottom-action-bar">
      <div className="action-group">
        <button className="action-btn secondary" title="设置">
          <div className="btn-icon">⚙️</div>
          <span>设置</span>
        </button>
        <button className="action-btn secondary" title="帮助">
          <div className="btn-icon">❓</div>
          <span>帮助</span>
        </button>
        <button className="action-btn secondary" title="反馈">
          <div className="btn-icon">💬</div>
          <span>反馈</span>
        </button>
      </div>
      
      <div className="action-group">
        <button className="action-btn primary" title="开始使用">
          <span>开始使用</span>
        </button>
      </div>
    </div>
  );
};

export default BottomActionBar;
