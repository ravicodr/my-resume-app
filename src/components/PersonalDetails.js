import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const defaultPersonalDetails = {
  jobTitle: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  address: '',
  postalCode: '',
  drivingLicense: '',
  nationality: '',
  placeOfBirth: '',
  dateOfBirth: ''
};

const PersonalDetails = ({ 
  personalDetails = defaultPersonalDetails, 
  setPersonalDetails = () => {},
  profileImage = null, 
  setProfileImage = () => {}
}) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setPersonalDetails(prev => ({
      ...(prev || defaultPersonalDetails),
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-6">Personal details</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-600 mb-2">Job Title</label>
          <input
            type="text"
            placeholder="The role you want"
            className="w-full p-3 bg-gray-50 border rounded-lg"
            value={personalDetails.jobTitle || ''}
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <input 
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
          <button 
            onClick={() => fileInputRef.current.click()}
            className="flex flex-col items-center text-blue-500 gap-2"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden relative group">
              {profileImage ? (
                <>
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex items-center justify-center">
                    <span className="text-white">Change</span>
                  </div>
                </>
              ) : (
                <span className="text-gray-400 text-4xl">👤</span>
              )}
            </div>
            <span>{profileImage ? 'Change photo' : 'Upload photo'}</span>
          </button>
          {profileImage && (
            <button
              onClick={() => setProfileImage(null)}
              className="ml-4 text-red-500 text-sm hover:text-red-600"
            >
              Remove
            </button>
          )}
        </div>

        <div>
          <label className="block text-gray-600 mb-2">First Name</label>
          <input
            type="text"
            placeholder="First name"
            className="w-full p-3 bg-gray-50 border rounded-lg"
            value={personalDetails.firstName || ''}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-3 bg-gray-50 border rounded-lg"
            value={personalDetails.lastName || ''}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-50 border rounded-lg"
            value={personalDetails.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Phone</label>
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-3 bg-gray-50 border rounded-lg"
            value={personalDetails.phone || ''}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Country</label>
          <input
            type="text"
            placeholder="Country"
            className="w-full p-3 bg-gray-50 border rounded-lg"
            value={personalDetails.country || ''}
            onChange={(e) => handleInputChange('country', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">City</label>
          <input
            type="text"
            placeholder="City"
            className="w-full p-3 bg-gray-50 border rounded-lg"
            value={personalDetails.city || ''}
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
        </div>

        {showMoreDetails && (
          <>
            <div>
              <label className="block text-gray-600 mb-2">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 bg-gray-50 border rounded-lg"
                value={personalDetails.address || ''}
                onChange={(e) => handleInputChange('address', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Postal Code</label>
              <input
                type="text"
                placeholder="Postal code"
                className="w-full p-3 bg-gray-50 border rounded-lg"
                value={personalDetails.postalCode || ''}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 flex items-center">
                Driving License
                <HelpCircle className="w-4 h-4 ml-1 text-gray-400" />
              </label>
              <input
                type="text"
                placeholder="Driving license"
                className="w-full p-3 bg-gray-50 border rounded-lg"
                value={personalDetails.drivingLicense || ''}
                onChange={(e) => handleInputChange('drivingLicense', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 flex items-center">
                Nationality
                <HelpCircle className="w-4 h-4 ml-1 text-gray-400" />
              </label>
              <input
                type="text"
                placeholder="Nationality"
                className="w-full p-3 bg-gray-50 border rounded-lg"
                value={personalDetails.nationality || ''}
                onChange={(e) => handleInputChange('nationality', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Place Of Birth</label>
              <input
                type="text"
                placeholder="Place of birth"
                className="w-full p-3 bg-gray-50 border rounded-lg"
                value={personalDetails.placeOfBirth || ''}
                onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 flex items-center">
                Date Of Birth
                <HelpCircle className="w-4 h-4 ml-1 text-gray-400" />
              </label>
              <input
                type="date"
                className="w-full p-3 bg-gray-50 border rounded-lg"
                value={personalDetails.dateOfBirth || ''}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              />
            </div>
          </>
        )}
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