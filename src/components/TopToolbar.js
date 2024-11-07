import React from 'react';
import { Download, Edit, ChevronDown, MoreHorizontal } from 'lucide-react';

const TopToolbar = ({ 
  title, 
  isEditing, 
  setIsEditing, 
  handleTitleChange, 
  handleTitleBlur, 
  handleTitleKeyDown,
  showLanguages,
  setShowLanguages,
  selectedLanguage,
  handleLanguageSelect,
  languages,
  onSave,
  isSaving
}) => {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white">
      <div className="flex items-center space-x-4">
        <button className="p-2">☰</button>
        <span className="font-medium">Resume Builder</span>
      </div>
      
      <div className="text-center relative">
        <div className="flex items-center gap-2">
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              onKeyDown={handleTitleKeyDown}
              className="text-xl border-b border-blue-500 focus:outline-none px-2"
              autoFocus
            />
          ) : (
            <h1 
              className="text-xl cursor-pointer hover:text-gray-600 flex items-center gap-2"
              onClick={() => setIsEditing(true)}
            >
              {title}
              <button className="text-gray-400 hover:text-gray-600">
                <Edit className="w-4 h-4" />
              </button>
            </h1>
          )}
        </div>
        
        <div className="relative">
          <button 
            className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 mt-1 px-3 py-1 rounded-md hover:bg-gray-50"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            <span className="text-lg">{selectedLanguage.flag}</span>
            <span>{selectedLanguage.name}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {showLanguages && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-50">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => handleLanguageSelect(language)}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onSave}
          disabled={isSaving}
          className={`bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 ${
            isSaving ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
        >
          <Download className="w-4 h-4" />
          {isSaving ? 'Saving...' : 'Save & Download'}
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TopToolbar;