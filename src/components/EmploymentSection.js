import React from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { useFieldArray } from '../hooks/useFieldArray';
import { validateEmployment } from '../utils/validation';

const EmploymentSection = ({ employment, setEmployment }) => {
  const {
    fields: jobs,
    append,
    remove,
    update
  } = useFieldArray(employment);

  const handleAddEmployment = () => {
    append({
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      highlights: []
    });
  };

  const handleEmploymentChange = (index, field, value) => {
    const updatedJob = {
      ...jobs[index],
      [field]: value,
      // If setting current to true, clear end date
      ...(field === 'current' && value && { endDate: '' })
    };

    // Validate the updated job
    const errors = validateEmployment(updatedJob);
    updatedJob.errors = errors;

    update(index, updatedJob);
    setEmployment(jobs);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Employment History</h2>
      <p className="text-gray-600 mb-4">
        Show your relevant experience (last 10 years). Use bullet points to note your achievements.
      </p>

      {jobs.map((job, index) => (
        <div key={index} className="mb-6 border-b pb-6 last:border-0">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Position {index + 1}</h3>
            <button
              onClick={() => remove(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Job Title</label>
              <input
                type="text"
                value={job.title}
                onChange={(e) => handleEmploymentChange(index, 'title', e.target.value)}
                className={`w-full p-3 bg-gray-50 rounded-lg border ${
                  job.errors?.title ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="e.g. Senior Software Developer"
              />
              {job.errors?.title && (
                <p className="text-red-500 text-sm mt-1">{job.errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Company</label>
              <input
                type="text"
                value={job.company}
                onChange={(e) => handleEmploymentChange(index, 'company', e.target.value)}
                className={`w-full p-3 bg-gray-50 rounded-lg border ${
                  job.errors?.company ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="e.g. Google"
              />
              {job.errors?.company && (
                <p className="text-red-500 text-sm mt-1">{job.errors.company}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Location</label>
              <input
                type="text"
                value={job.location}
                onChange={(e) => handleEmploymentChange(index, 'location', e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
                placeholder="e.g. New York, NY"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Start Date</label>
              <input
                type="date"
                value={job.startDate}
                onChange={(e) => handleEmploymentChange(index, 'startDate', e.target.value)}
                className={`w-full p-3 bg-gray-50 rounded-lg border ${
                  job.errors?.startDate ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {job.errors?.startDate && (
                <p className="text-red-500 text-sm mt-1">{job.errors.startDate}</p>
              )}
            </div>

            {!job.current && (
              <div>
                <label className="block text-gray-600 mb-2">End Date</label>
                <input
                  type="date"
                  value={job.endDate}
                  onChange={(e) => handleEmploymentChange(index, 'endDate', e.target.value)}
                  className={`w-full p-3 bg-gray-50 rounded-lg border ${
                    job.errors?.endDate ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {job.errors?.endDate && (
                  <p className="text-red-500 text-sm mt-1">{job.errors.endDate}</p>
                )}
              </div>
            )}

            <div className="col-span-2">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  checked={job.current}
                  onChange={(e) => handleEmploymentChange(index, 'current', e.target.checked)}
                  className="mr-2"
                />
                I currently work here
              </label>
            </div>

            <div className="col-span-2">
              <label className="block text-gray-600 mb-2">Description</label>
              <textarea
                value={job.description}
                onChange={(e) => handleEmploymentChange(index, 'description', e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[100px]"
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleAddEmployment}
        className="flex items-center text-blue-500 hover:text-blue-600"
      >
        <Plus size={18} className="mr-2" />
        Add employment
      </button>
    </div>
  );
};

export default EmploymentSection;