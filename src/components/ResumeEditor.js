import React, { useState } from 'react';
import TopToolbar from './TopToolbar';
import SplitScreenLayout from './SplitScreenLayout';
import ResumePreview from './ResumePreview';
import ResumeBuilder from './ResumeBuilder';

const ResumeEditor = () => {
  const [title, setTitle] = useState('Untitled');
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <TopToolbar 
        title={title}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleTitleChange={handleTitleChange}
        handleTitleBlur={handleTitleBlur}
        handleTitleKeyDown={handleTitleKeyDown}
      />
      <SplitScreenLayout>
        <ResumeBuilder />
        <ResumePreview />
      </SplitScreenLayout>
    </div>
  );
};

export default ResumeEditor;
