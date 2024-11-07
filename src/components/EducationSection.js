import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import useFieldArray from '../hooks/useFieldArray';
import { validateEducation } from '../utils/validation';

const EducationSection = ({ education, setEducation }) => {
  const {
    fields: educationList,
    append,
    remove,
    update
  } = useFieldArray(education);

  const handleAddEducation = () => {
    append({
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      gpa: ''
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = {
      ...educationList[index],
      [field]: value,
      ...(field === 'current' && value && { endDate: '' })
    };

    const errors = validateEducation(updatedEducation);
    updatedEducation.errors = errors;

    update(index, updatedEducation);
    setEducation(educationList);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Education</h2>
      <p className="text-gray-600 mb-4">
        Add your educational background, starting with your most recent degree.
      </p>

      {educationList.map((edu, index) => (
        <div key={index} className="mb-6 border-b pb-6 last:border-0">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Education {index + 1}</h3>
            <button
              onClick={() => remove(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                className={`w-full p-3 bg-gray-50 rounded-lg border ${
                  edu.errors?.degree ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="e.g. Bachelor of Science in Computer Science"
              />
              {edu.errors?.degree && (
                <p className="text-red-500 text-sm mt-1">{edu.errors.degree}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                className={`w-full p-3 bg-gray-50 rounded-lg border ${
                  edu.errors?.institution ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="e.g. Harvard University"
              />
              {edu.errors?.institution && (
                <p className="text-red-500 text-sm mt-1">{edu.errors.institution}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Start Date</label>
              <input
                type="date"
                value={edu.startDate}
                onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                className={`w-full p-3 bg-gray-50 rounded-lg border ${
                  edu.errors?.startDate ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {edu.errors?.startDate && (
                <p className="text-red-500 text-sm mt-1">{edu.errors.startDate}</p>
              )}
            </div>

            {!edu.current && (
              <div>
                <label className="block text-gray-600 mb-2">End Date</label>
                <input
                  type="date"
                  value={edu.endDate}
                  onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                  className={`w-full p-3 bg-gray-50 rounded-lg border ${
                    edu.errors?.endDate ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {edu.errors?.endDate && (
                  <p className="text-red-500 text-sm mt-1">{edu.errors.endDate}</p>
                )}
              </div>
            )}

            <div className="col-span-2">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  checked={edu.current}
                  onChange={(e) => handleEducationChange(index, 'current', e.target.checked)}
                  className="mr-2"
                />
                I am currently studying here
              </label>
            </div>

            <div className="col-span-2">
              <label className="block text-gray-600 mb-2">Description</label>
              <textarea
                value={edu.description}
                onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[100px]"
                placeholder="Describe your academic achievements and relevant coursework..."
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleAddEducation}
        className="flex items-center text-blue-500 hover:text-blue-600"
      >
        <Plus size={18} className="mr-2" />
        Add education
      </button>
    </div>
  );
};

export default EducationSection;