import React from 'react';

const ResumePreview = ({ 
  personalDetails, 
  profileImage,
  professionalSummary,
  selectedSkills,
  employmentHistory,
  education,
  websiteLinks 
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      {/* Header */}
      <div className="flex items-start gap-6 mb-8">
        {profileImage && (
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold mb-2">
            {personalDetails.firstName} {personalDetails.lastName}
          </h1>
          <p className="text-gray-600">{personalDetails.jobTitle}</p>
          <div className="mt-2 text-sm text-gray-500">
            <p>{personalDetails.email}</p>
            <p>{personalDetails.phone}</p>
            <p>{personalDetails.city}, {personalDetails.country}</p>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
        <p className="text-gray-700">{professionalSummary}</p>
      </div>

      {/* Skills */}
      {selectedSkills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Employment History */}
      {employmentHistory.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Employment History</h2>
          {employmentHistory.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500 text-sm">
                {job.startDate} - {job.current ? 'Present' : job.endDate}
              </p>
              <p className="text-gray-700 mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500 text-sm">
                {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
              </p>
              <p className="text-gray-700 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Website Links */}
      {websiteLinks.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Links</h2>
          <div className="flex flex-wrap gap-3">
            {websiteLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 underline text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;