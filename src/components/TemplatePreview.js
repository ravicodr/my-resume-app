import React from 'react';

const defaultPersonalDetails = {
  firstName: '',
  lastName: '',
  jobTitle: '',
  email: '',
  phone: '',
  city: '',
  country: ''
};

const TemplatePreview = ({ 
  personalDetails = defaultPersonalDetails, 
  professionalSummary = '', 
  skills = [], 
  employmentHistory = [], 
  education = [], 
  websiteLinks = [],
  profileImage = null
}) => {
  const details = { ...defaultPersonalDetails, ...personalDetails };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      {/* Header with Profile */}
      <div className="flex items-center justify-center mb-6">
        {profileImage && (
          <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            {details.firstName || 'Your'} {details.lastName || 'Name'}
          </h1>
          <p className="text-gray-600">{details.jobTitle || 'Your Job Title'}</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-6 text-sm text-gray-600 flex flex-wrap gap-4 justify-center">
        {details.email && (
          <span>✉️ {details.email}</span>
        )}
        {details.phone && (
          <span>📱 {details.phone}</span>
        )}
        {(details.city || details.country) && (
          <span>📍 {[details.city, details.country].filter(Boolean).join(', ')}</span>
        )}
      </div>

      {/* Professional Summary */}
      {professionalSummary && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-blue-600 border-b pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700">{professionalSummary}</p>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-blue-600 border-b pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
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
          <h2 className="text-lg font-semibold mb-3 text-blue-600 border-b pb-1">
            Employment History
          </h2>
          {employmentHistory.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium">{job.title}</h3>
              <p className="text-gray-600 text-sm">{job.company}</p>
              <p className="text-gray-500 text-sm">{job.startDate} - {job.endDate}</p>
              <p className="text-gray-700 mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-blue-600 border-b pb-1">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium">{edu.degree}</h3>
              <p className="text-gray-600 text-sm">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}

      {/* Website Links */}
      {websiteLinks.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-blue-600 border-b pb-1">
            Links
          </h2>
          <div className="flex flex-wrap gap-3">
            {websiteLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="text-blue-500 hover:text-blue-600 underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!profileImage && 
       !details.firstName && 
       !details.lastName && 
       !professionalSummary && 
       skills.length === 0 && 
       employmentHistory.length === 0 && 
       education.length === 0 && 
       websiteLinks.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          <p>Start filling out your details to see your resume preview here</p>
        </div>
      )}
    </div>
  );
};

export default TemplatePreview;