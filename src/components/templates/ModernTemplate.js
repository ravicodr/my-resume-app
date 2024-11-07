import React from 'react';

const ModernTemplate = ({ personalDetails, professionalSummary, skills, employmentHistory, education, websiteLinks }) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-emerald-800 text-white p-8">
        <h1 className="text-3xl font-light mb-2">
          {personalDetails.firstName || 'First'} {personalDetails.lastName || 'Last'}
        </h1>
        <h2 className="text-lg uppercase tracking-wider mb-6">
          {personalDetails.jobTitle || 'Job Title'}
        </h2>

        <div className="text-sm space-y-1">
          <p>{personalDetails.email}</p>
          <p>{personalDetails.phone}</p>
          <p>{personalDetails.city}, {personalDetails.country}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* Professional Summary */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Professional Summary
          </h3>
          <p className="text-gray-600">
            {professionalSummary}
          </p>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Experience</h3>
          <div className="space-y-4">
            {employmentHistory.map((job, index) => (
              <div key={index}>
                <h4 className="font-medium">{job.title}</h4>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-500 text-sm">{job.duration}</p>
                <p className="text-gray-600 mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <h4 className="font-medium">{edu.degree}</h4>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.duration}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModernTemplate;