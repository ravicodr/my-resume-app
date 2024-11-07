import React from 'react';

const MinimalTemplate = ({ personalDetails, professionalSummary, skills, employmentHistory, education, websiteLinks }) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-8 border-b">
        <h1 className="text-4xl font-light text-gray-800 mb-2">
          {personalDetails.firstName || 'First'} {personalDetails.lastName || 'Last'}
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">
          {personalDetails.jobTitle || 'Job Title'}
        </h2>

        <div className="flex gap-4 text-sm text-gray-600">
          <p>{personalDetails.email}</p>
          <span>•</span>
          <p>{personalDetails.phone}</p>
          <span>•</span>
          <p>{personalDetails.city}, {personalDetails.country}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        <section>
          <p className="text-gray-700 text-lg leading-relaxed">
            {professionalSummary}
          </p>
        </section>

        <section>
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Skills
          </h3>
          <div className="flex flex-wrap gap-x-2 text-gray-600">
            {skills.map((skill, index) => (
              <span key={index}>
                {skill}{index < skills.length - 1 ? ' •' : ''}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Experience
          </h3>
          <div className="space-y-6">
            {employmentHistory.map((job, index) => (
              <div key={index}>
                <h4 className="text-gray-800 font-medium">{job.title}</h4>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-400 text-sm mb-2">{job.duration}</p>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <h4 className="text-gray-800 font-medium">{edu.degree}</h4>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.duration}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MinimalTemplate;