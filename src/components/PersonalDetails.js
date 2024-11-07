import React from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const PersonalDetails = ({ 
  personalDetails, 
  setPersonalDetails, 
  profileImage, 
  setProfileImage,
  showMoreDetails,
  setShowMoreDetails 
}) => {
  const handleChange = (field, value) => {
    setPersonalDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-lg font-medium mb-6">Personal details</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-600 mb-2">Job Title</label>
          <input
            type="text"
            value={personalDetails.jobTitle}
            onChange={(e) => handleChange('jobTitle', e.target.value)}
            placeholder="The role you want"
            className="w-full p-3 bg-gray-50 border rounded-lg"
          />
        </div>
        
        <div className="flex justify-center items-center">
          <input 
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setProfileImage(reader.result);
                };
                reader.readAsDataURL(file);
              }
            }}
            className="hidden"
            id="profile-upload"
          />
          <label 
            htmlFor="profile-upload"
            className="flex flex-col items-center text-blue-500 gap-2 cursor-pointer"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-4xl">👤</span>
              )}
            </div>
            <span>{profileImage ? 'Change photo' : 'Upload photo'}</span>
          </label>
        </div>

        {/* Basic Fields */}
        <div>
          <label className="block text-gray-600 mb-2">First Name</label>
          <input
            type="text"
            value={personalDetails.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            placeholder="First name"
            className="w-full p-3 bg-gray-50 border rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-gray-600 mb-2">Last Name</label>
          <input
            type="text"
            value={personalDetails.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            placeholder="Last name"
            className="w-full p-3 bg-gray-50 border rounded-lg"
          />
        </div>

        {/* More fields... */}
        <div>
          <label className="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            value={personalDetails.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Email"
            className="w-full p-3 bg-gray-50 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-2">Phone</label>
          <input
            type="tel"
            value={personalDetails.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="Phone number"
            className="w-full p-3 bg-gray-50 border rounded-lg"
          />
        </div>
      </div>

      <button 
        onClick={() => setShowMoreDetails(!showMoreDetails)}
        className="flex items-center text-blue-500 mt-6 gap-2"
      >
        {showMoreDetails ? (
          <>
            <ChevronUp className="w-4 h-4" />
            <span>Hide additional details</span>
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4" />
            <span>Add more details</span>
          </>
        )}
      </button>
    </div>
  );
};

export default PersonalDetails;