import React from 'react';
import ModernTemplate from './ModernTemplate';
import MinimalTemplate from './MinimalTemplate';

const templates = {
  modern: ModernTemplate,
  minimal: MinimalTemplate
};

export const TemplatePreview = ({ selectedTemplate, ...props }) => {
  const Template = templates[selectedTemplate] || ModernTemplate;
  return <Template {...props} />;
};

const TemplateSelector = ({ selectedTemplate, onTemplateChange }) => {
  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Select Template</h3>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onTemplateChange('modern')}
          className={`p-4 rounded border ${
            selectedTemplate === 'modern'
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-200 hover:border-blue-500'
          }`}
        >
          <div className="aspect-[8.5/11] bg-gray-100 mb-2 rounded">
            <img src="/api/placeholder/150/200" alt="Modern template" className="w-full rounded" />
          </div>
          <span>Modern</span>
        </button>
        <button
          onClick={() => onTemplateChange('minimal')}
          className={`p-4 rounded border ${
            selectedTemplate === 'minimal'
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-200 hover:border-blue-500'
          }`}
        >
          <div className="aspect-[8.5/11] bg-gray-100 mb-2 rounded">
            <img src="/api/placeholder/150/200" alt="Minimal template" className="w-full rounded" />
          </div>
          <span>Minimal</span>
        </button>
      </div>
    </div>
  );
};

export default TemplateSelector;