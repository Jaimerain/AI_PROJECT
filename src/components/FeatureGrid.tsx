import React from 'react';
import './FeatureGrid.css';

interface FeatureCard {
  id: string;
  title: string;
  icon: string;
  gradient: string;
  description?: string;
}

const FeatureGrid: React.FC = () => {
  const features: FeatureCard[] = [
    {
      id: 'scan',
      title: '扫描',
      icon: '📷',
      gradient: 'linear-gradient(-20.95deg, #C387FF 3.01%, #E4C7FF 99.77%)',
    },
    {
      id: 'ticket',
      title: '票据',
      icon: '🎫',
      gradient: 'linear-gradient(-24.5deg, #FF7C40 0%, #FFD5C7 93.7%)',
    },
    {
      id: 'meeting',
      title: '会务管理',
      icon: '👥',
      gradient: 'linear-gradient(-20.95deg, #6C0F99 3.01%, #C387FF 99.77%)',
    },
    {
      id: 'id-card',
      title: '证件照',
      icon: '📷',
      gradient: 'linear-gradient(-20.95deg, #4392FF 3.01%, #B3D1FF 99.77%)',
    },
    {
      id: 'smart-hd',
      title: '智能高清',
      icon: '✨',
      gradient: 'linear-gradient(-20.95deg, #4392FF 3.01%, #B3D1FF 99.77%)',
    },
    {
      id: 'ocr',
      title: 'OCR识别',
      icon: '🔍',
      gradient: 'linear-gradient(-20.95deg, #4392FF 3.01%, #B3D1FF 99.77%)',
    },
  ];

  return (
    <div className="feature-grid">
      <div className="feature-row">
        {features.slice(0, 3).map((feature) => (
          <FeatureCardItem key={feature.id} feature={feature} />
        ))}
      </div>
      <div className="feature-row">
        {features.slice(3, 6).map((feature) => (
          <FeatureCardItem key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  feature: FeatureCard;
}

const FeatureCardItem: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="feature-card" style={{ background: feature.gradient }}>
      <div className="feature-icon">
        <span className="icon-emoji">{feature.icon}</span>
      </div>
      <div className="feature-title">
        <h4>{feature.title}</h4>
      </div>
    </div>
  );
};

export default FeatureGrid;
