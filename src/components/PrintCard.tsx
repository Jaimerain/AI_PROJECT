import React, { useState } from 'react';
import './PrintCard.css';

const PrintCard: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.onchange = (e) => {
      const selectedFiles = Array.from((e.target as HTMLInputElement).files || []);
      setFiles(prev => [...prev, ...selectedFiles]);
    };
    input.click();
  };

  return (
    <div className="print-card">
      <div className="print-card-header">
        <div className="print-title">
          <h3>打印</h3>
        </div>
        <div className="print-actions">
          <button className="action-btn" title="裁剪">
            <div className="scissor-icon"></div>
          </button>
          <button className="action-btn" title="更多">
            <div className="more-icon"></div>
          </button>
        </div>
      </div>
      
      <div 
        className={`drop-zone ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleFileSelect}
      >
        <div className="drop-zone-content">
          <div className="upload-icon"></div>
          <p className="drop-zone-text">
            可拖拽多个文件或文件夹至此，或点击添加
          </p>
        </div>
      </div>
      
      <button className="add-files-btn">
        添加文件
      </button>
    </div>
  );
};

export default PrintCard;
