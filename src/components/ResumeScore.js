import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const ResumeScore = ({ score }) => {
  const getScoreColor = (score) => {
    if (score < 30) return 'red';
    if (score < 70) return 'yellow';
    return 'green';
  };

  const colorScheme = {
    red: {
      bg: 'bg-red-50',
      text: 'text-red-600',
      progressBg: 'bg-red-500'
    },
    yellow: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
      progressBg: 'bg-yellow-500'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      progressBg: 'bg-green-500'
    }
  };

  const colors = colorScheme[getScoreColor(score)];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded text-sm ${colors.bg} ${colors.text}`}>
            {score}%
          </span>
          <span className="text-gray-600">Your resume score</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-blue-500 flex items-center gap-2">
            Improve score <ChevronDown className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-gray-500">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 ease-out ${colors.progressBg}`}
          style={{ width: `${score}%` }}
        />
      </div>
      
      <div className="mt-2 text-sm text-gray-500">
        {score < 30 && (
          <p>Your resume needs improvement. Follow our suggestions to increase your score.</p>
        )}
        {score >= 30 && score < 70 && (
          <p>Good progress! Keep adding more details to make your resume stand out.</p>
        )}
        {score >= 70 && (
          <p>Excellent! Your resume is well-detailed and ready to impress.</p>
        )}
      </div>
    </div>
  );
};

export default ResumeScore;