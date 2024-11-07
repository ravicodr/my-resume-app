import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const calculateScore = ({
  personalDetails,
  professionalSummary,
  profileImage,
  skills = [],
  employmentHistory = [],
  education = []
}) => {
  let score = 0;
  
  // Personal details (30%)
  const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'jobTitle'];
  const personalDetailsScore = requiredFields.reduce((acc, field) => {
    return acc + (personalDetails[field] ? 6 : 0);
  }, 0);
  score += personalDetailsScore;

  // Professional Summary (20%)
  const summaryLength = professionalSummary?.length || 0;
  score += Math.min((summaryLength / 200) * 20, 20);

  // Profile Image (5%)
  if (profileImage) score += 5;

  // Skills (15%)
  score += Math.min((skills.length / 5) * 15, 15);

  // Employment History (20%)
  score += Math.min((employmentHistory.length / 2) * 20, 20);

  // Education (10%)
  score += Math.min(education.length * 10, 10);

  return Math.round(score);
};

const ResumeScore = ({ resumeData }) => {
  const score = calculateScore(resumeData);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span 
            className={`px-2 py-1 rounded text-sm ${
              score < 30 ? 'bg-red-100 text-red-600' :
              score < 70 ? 'bg-yellow-100 text-yellow-600' :
              'bg-green-100 text-green-600'
            }`}
          >
            {score}%
          </span>
          <span className="text-gray-600">Your resume score</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-blue-500 flex items-center">
            Improve resume <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <button>
            <HelpCircle className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-500 ease-out"
          style={{ 
            width: `${score}%`,
            backgroundColor: score < 30 ? '#ef4444' : 
                           score < 70 ? '#eab308' : '#22c55e'
          }}
        />
      </div>
    </div>
  );
};

export default ResumeScore;