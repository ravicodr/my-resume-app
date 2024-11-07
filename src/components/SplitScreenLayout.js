import React from 'react';

const SplitScreenLayout = ({ children }) => {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <div className="w-1/2 overflow-y-auto border-r">
        {children[0]}
      </div>
      <div className="w-1/2 bg-gray-50">
        {children[1]}
      </div>
    </div>
  );
};

export default SplitScreenLayout;