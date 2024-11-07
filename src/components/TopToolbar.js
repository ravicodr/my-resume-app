import React, { useState } from 'react';
import { Download, MoreHorizontal, Settings, HelpCircle, LogOut } from 'lucide-react';

const TopToolbar = () => {
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const user = {
    name: "Ravindra Jadhav",
    email: "rjadha757@gmail.com"
  };

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 bg-slate-600 text-white">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-500 rounded">
          <div className="grid grid-cols-2 gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            ))}
          </div>
          <span className="text-sm">Select template</span>
        </button>
        
        <div className="flex items-center gap-3 text-sm">
          <button className="hover:bg-slate-500 p-1 rounded">
            <span className="text-lg px-1">−</span>
          </button>
          <span className="font-medium">Aa</span>
          <button className="hover:bg-slate-500 p-1 rounded">
            <span className="text-lg px-1">+</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded text-sm">
          <Download className="w-4 h-4" />
          Download PDF
        </button>
        
        <div className="relative">
          <button 
            className="p-1.5 hover:bg-slate-500 rounded"
            onClick={() => setShowExportMenu(!showExportMenu)}
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
          
          {showExportMenu && (
            <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg z-50 py-1">
              <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left flex items-center gap-2">
                <span className="text-gray-400">📄</span>
                Export to DOCX
              </button>
              <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left flex items-center gap-2">
                <span className="text-gray-400">📝</span>
                Export to TXT
              </button>
            </div>
          )}
        </div>

        <div className="relative">
          <button 
            className="p-1.5 hover:bg-slate-500 rounded"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <span className="block w-5 h-5 rounded-full border-2 border-white"></span>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-1 w-64 bg-white rounded-lg shadow-lg z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="font-medium text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
              <div className="py-1">
                <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Account Settings
                </button>
                <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  FAQ
                </button>
                <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};