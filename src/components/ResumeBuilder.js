



// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   ChevronDown,
//   ChevronUp,
//   Download,
//   Plus,
//   Edit,
//   Bold,
//   Italic,
//   Underline,
//   List,
//   Link2,
//   HelpCircle,
//   Upload,
//   MinusCircle,
//   PlusCircle,
//   MoreHorizontal
// } from 'lucide-react';

// const ResumeBuilder = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState('Untitled');
//   const [showLanguages, setShowLanguages] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     code: 'US',
//     name: 'English',
//     flag: '🇺🇸'
//   });
//   const [resumeScore] = useState(10);
//   const [showMoreDetails, setShowMoreDetails] = useState(false);
//   const [professionalSummary, setProfessionalSummary] = useState(
//     'Curious science teacher with 8+ years of experience and a track record of...'
//   );
//   const [profileImage, setProfileImage] = useState(null);
//   const fileInputRef = useRef(null);

//   const languages = [
//     { code: 'US', name: 'English', flag: '🇺🇸' },
//     { code: 'UK', name: 'English (UK)', flag: '🇬🇧' },
//     { code: 'NZ', name: 'New Zealand (NZ)', flag: '🇳🇿' },
//     { code: 'ES', name: 'Español', flag: '🇪🇸' },
//     { code: 'MX', name: 'Español (MX)', flag: '🇲🇽' },
//   ];

//   const skills = [
//     "Knowledgeable in User Interface/User Experience",
//     "Software Troubleshooting",
//     "Software Logic",
//     "Programming",
//     "Advanced Analytical Thinking Skills",
//     "Adaptability",
//     "JavaScript",
//     "Java",
//     "Python",
//     "SQL"
//   ];

//   const handleTitleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleTitleBlur = () => {
//     setIsEditing(false);
//   };

//   const handleTitleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       setIsEditing(false);
//     }
//   };

//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setShowLanguages(false);
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 border-b bg-white">
//         <div className="flex items-center space-x-4">
//           <Link to="/dashboard">
//             <button className="p-2">☰</button>
//           </Link>
//           <span className="font-medium">Dashboard</span>
//         </div>
        
//         <div className="text-center relative">
//           <div className="flex items-center gap-2">
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={title}
//                 onChange={handleTitleChange}
//                 onBlur={handleTitleBlur}
//                 onKeyDown={handleTitleKeyDown}
//                 className="text-xl border-b border-blue-500 focus:outline-none px-2"
//                 autoFocus
//               />
//             ) : (
//               <h1 
//                 className="text-xl cursor-pointer hover:text-gray-600 flex items-center gap-2"
//                 onClick={handleTitleEdit}
//               >
//                 {title}
//                 <button className="text-gray-400 hover:text-gray-600">
//                   <Edit size={16} />
//                 </button>
//               </h1>
//             )}
//           </div>
          
//           <div className="relative">
//             <button 
//               className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 mt-1 px-3 py-1 rounded-md hover:bg-gray-50"
//               onClick={() => setShowLanguages(!showLanguages)}
//             >
//               <span className="text-lg">{selectedLanguage.flag}</span>
//               <span>{selectedLanguage.name}</span>
//               <ChevronDown size={16} />
//             </button>

//             {showLanguages && (
//               <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-50">
//                 {languages.map((language) => (
//                   <button
//                     key={language.code}
//                     className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                     onClick={() => handleLanguageSelect(language)}
//                   >
//                     <span className="text-lg">{language.flag}</span>
//                     <span>{language.name}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <button className="p-2">
//               <MinusCircle size={20} />
//             </button>
//             <span className="font-medium">Aa</span>
//             <button className="p-2">
//               <PlusCircle size={20} />
//             </button>
//           </div>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">
//             <span className="flex items-center gap-2">
//               <Download size={16} />
//               Download PDF
//             </span>
//           </button>
//           <button className="p-2">
//             <MoreHorizontal size={24} />
//           </button>
//         </div>
//       </div>

//       <div className="p-6 max-w-4xl mx-auto">
//         {/* Resume Score */}
//         <div className="mb-6">
//           <div className="flex justify-between items-center mb-2">
//             <div className="flex items-center gap-2">
//               <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded text-sm">
//                 {resumeScore}%
//               </span>
//               <span className="text-gray-600">Your resume score</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <button className="text-blue-500 flex items-center">
//                 Improve resume <ChevronDown size={16} className="ml-1" />
//               </button>
//               <button>
//                 <HelpCircle size={20} className="text-gray-400" />
//               </button>
//             </div>
//           </div>

//           {/* Progress bar */}
//           <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
//             <div 
//               className="h-full transition-all duration-500 ease-out bg-pink-500"
//               style={{ width: `${resumeScore}%` }}
//             />
//           </div>
//         </div>

//         {/* Tailor Resume Notice */}
//         <div className="bg-blue-50 p-4 rounded-lg mb-6">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <span>🎯</span>
//               <span>Tailor this resume for the job, and get more interviews</span>
//             </div>
//             <button className="text-blue-500">Try it ›</button>
//           </div>
//         </div>

//         {/* Personal Details */}
//         <div className="bg-white rounded-lg p-6 mb-6">
//           <h2 className="text-lg font-medium mb-6">Personal details</h2>
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-gray-600 mb-2">Job Title</label>
//               <input
//                 type="text"
//                 placeholder="The role you want"
//                 className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
//               />
//             </div>
//             <div className="flex justify-start items-end">
//               <input 
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleImageUpload}
//                 accept="image/*"
//                 className="hidden"
//               />
//               <button 
//                 onClick={() => fileInputRef.current.click()}
//                 className="flex items-center text-blue-500"
//               >
//                 <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-2">
//                   👤
//                 </div>
//                 Upload photo
//               </button>
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-2">First Name</label>
//               <input
//                 type="text"
//                 className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-2">Last Name</label>
//               <input
//                 type="text"
//                 className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-2">Email</label>
//               <input
//                 type="email"
//                 className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-2">Phone</label>
//               <input
//                 type="tel"
//                 className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-2">Country</label>
//               <input
//                 type="text"
//                 className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-2">City</label>
//               <input
//                 type="text"
//                 className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
//               />
//             </div>
//           </div>

          
//           <button 
//             onClick={() => setShowMoreDetails(!showMoreDetails)}
//             className="text-blue-500 mt-6 flex items-center"
//           >
//             {showMoreDetails ? (
//               <>
//                 Hide additional details
//                 <ChevronUp size={16} className="ml-1" />
//               </>
//             ) : (
//               <>
//                 Add more details
//                 <ChevronDown size={16} className="ml-1" />
//               </>
//             )}
//           </button>
//         </div>

//         {/* Professional Summary */}
//         <div className="bg-white rounded-lg p-6 mb-6">
//           <h2 className="text-lg font-medium mb-2">Professional Summary</h2>
//           <p className="text-gray-600 mb-4">
//             Write 2-4 short, energetic sentences about how great you are. Mention your achievements, skills and experience.
//           </p>
//           <div className="mb-4">
//             <div className="flex space-x-2 mb-2 border-b pb-2">
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Bold size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Italic size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Underline size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <List size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Link2 size={16} />
//               </button>
//               <div className="flex-grow"></div>
//               <button className="text-blue-500 flex items-center">
//                 Get help with writing
//                 <Plus size={16} className="ml-1" />
//               </button>
//             </div>
//             <textarea
//               value={professionalSummary}
//               onChange={(e) => setProfessionalSummary(e.target.value)}
//               className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[100px]"
//             />
//             <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
//               <span>Recruiter tip: write 400-600 characters to increase interview chances</span>
//               <span>0 / 400+</span>
//             </div>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div className="bg-white rounded-lg p-6 mb-6">
//           <h2 className="text-lg font-medium mb-2">Skills</h2>
//           <p className="text-gray-600 mb-4">
//             Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing.
//           </p>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {skills.map((skill, index) => (
//               <div key={index} className="bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2">
//                 {skill}
//                 <Plus size={16} className="text-gray-400" />
//               </div>
//             ))}
//           </div>
//           <button className="text-blue-500 flex items-center">
//             <Plus size={16} className="mr-1" />
//             Add skill
//           </button>
//         </div>

     

//         {/* Employment History */}
//         <div className="bg-white rounded-lg shadow p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Employment History</h2>
//           <p className="text-gray-600 mb-4">
//             Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).
//           </p>
//           <button className="flex items-center text-blue-500 space-x-1">
//             <Plus size={16} />
//             <span>Add employment</span>
//           </button>
//         </div>

//         {/* Education */}
//         <div className="bg-white rounded-lg shadow p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Education</h2>
//           <p className="text-gray-600 mb-4">
//             A varied education on your resume sums up the value that your learnings and background will bring to job.
//           </p>
//           <button className="flex items-center text-blue-500 space-x-1">
//             <Plus size={16} />
//             <span>Add education</span>
//           </button>
//         </div>

//         {/* Websites & Social Links */}
//         <div className="bg-white rounded-lg shadow p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Websites & Social Links</h2>
//           <p className="text-gray-600 mb-4">
//             You can add links to websites you want hiring managers to see! Perhaps it will be a link to your portfolio, LinkedIn profile, or personal website
//           </p>
//           <button className="flex items-center text-blue-500 space-x-1">
//             <Plus size={16} />
//             <span>Add link</span>
//           </button>
//         </div>

//         {/* Additional Sections */}
//         <div className="bg-white rounded-lg p-6">
//           <h2 className="text-lg font-medium mb-4">Add Section</h2>
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { icon: "📄", text: "Custom Section" },
//               { icon: "📚", text: "Courses" },
//               { icon: "🎯", text: "Extra-curricular Activities" },
//               { icon: "💼", text: "Internships" },
//               { icon: "⭐", text: "Hobbies" },
//               { icon: "🌍", text: "Languages" },
//               { icon: "👥", text: "References" }
//             ].map((item, index) => (
//               <button
//                 key={index}
//                 className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg text-gray-600"
//               >
//                 <span className="text-xl">{item.icon}</span>
//                 <span>{item.text}</span>
//               </button>
//             )
//           )}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-8 pb-8 text-center text-gray-500 text-sm">
//           <p>Need help building your resume? Check out our guides and examples.</p>
//           <div className="flex justify-center gap-4 mt-4">
//             <button className="text-blue-500 hover:underline">Resume Writing Guide</button>
//             <button className="text-blue-500 hover:underline">Resume Examples</button>
//             <button className="text-blue-500 hover:underline">Help Center</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;


// ResumeBuilder.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   ChevronDown,
//   Download,
//   Plus,
//   Edit,
//   Bold,
//   Italic,
//   Underline,
//   List,
//   Link2,
//   HelpCircle,
//   MinusCircle,
//   PlusCircle,
//   MoreHorizontal
// } from 'lucide-react';
// import PersonalDetails from './PersonalDetails';



// const ResumeBuilder = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState('Untitled');
//   const [showLanguages, setShowLanguages] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     code: 'US',
//     name: 'English',
//     flag: '🇺🇸'
//   });
//   const [resumeScore] = useState(10);
//   const [professionalSummary, setProfessionalSummary] = useState(
//     'Curious science teacher with 8+ years of experience and a track record of...'
//   );
//   const [profileImage, setProfileImage] = useState(null);
  
//   // New personalDetails state
//   const [personalDetails, setPersonalDetails] = useState({
//     jobTitle: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: '',
//     address: '',
//     postalCode: '',
//     drivingLicense: '',
//     nationality: '',
//     placeOfBirth: '',
//     dateOfBirth: ''
//   });



//   const languages = [
//     { code: 'US', name: 'English', flag: '🇺🇸' },
//     { code: 'UK', name: 'English (UK)', flag: '🇬🇧' },
//     { code: 'NZ', name: 'New Zealand (NZ)', flag: '🇳🇿' },
//     { code: 'ES', name: 'Español', flag: '🇪🇸' },
//     { code: 'MX', name: 'Español (MX)', flag: '🇲🇽' },
//   ];

//   const skills = [
//     "Knowledgeable in User Interface/User Experience",
//     "Software Troubleshooting",
//     "Software Logic",
//     "Programming",
//     "Advanced Analytical Thinking Skills",
//     "Adaptability",
//     "JavaScript",
//     "Java",
//     "Python",
//     "SQL"
//   ];

//   const handleTitleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleTitleBlur = () => {
//     setIsEditing(false);
//   };

//   const handleTitleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       setIsEditing(false);
//     }
//   };

//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setShowLanguages(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
    
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 border-b bg-white">
//         <div className="flex items-center space-x-4">
//           <Link to="/dashboard">
//             <button className="p-2">☰</button>
//           </Link>
//           <span className="font-medium">Dashboard</span>
//         </div>
        
//         <div className="text-center relative">
//           <div className="flex items-center gap-2">
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={title}
//                 onChange={handleTitleChange}
//                 onBlur={handleTitleBlur}
//                 onKeyDown={handleTitleKeyDown}
//                 className="text-xl border-b border-blue-500 focus:outline-none px-2"
//                 autoFocus
//               />
//             ) : (
//               <h1 
//                 className="text-xl cursor-pointer hover:text-gray-600 flex items-center gap-2"
//                 onClick={handleTitleEdit}
//               >
//                 {title}
//                 <button className="text-gray-400 hover:text-gray-600">
//                   <Edit size={16} />
//                 </button>
//               </h1>
//             )}
//           </div>
          
//           <div className="relative">
//             <button 
//               className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 mt-1 px-3 py-1 rounded-md hover:bg-gray-50"
//               onClick={() => setShowLanguages(!showLanguages)}
//             >
//               <span className="text-lg">{selectedLanguage.flag}</span>
//               <span>{selectedLanguage.name}</span>
//               <ChevronDown size={16} />
//             </button>

//             {showLanguages && (
//               <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-50">
//                 {languages.map((language) => (
//                   <button
//                     key={language.code}
//                     className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                     onClick={() => handleLanguageSelect(language)}
//                   >
//                     <span className="text-lg">{language.flag}</span>
//                     <span>{language.name}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <button className="p-2">
//               <MinusCircle size={20} />
//             </button>
//             <span className="font-medium">Aa</span>
//             <button className="p-2">
//               <PlusCircle size={20} />
//             </button>
//           </div>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">
//             <span className="flex items-center gap-2">
//               <Download size={16} />
//               Download PDF
//             </span>
//           </button>
//           <button className="p-2">
//             <MoreHorizontal size={24} />
//           </button>
//         </div>
//       </div>

//       <div className="p-6 max-w-4xl mx-auto">
//         {/* Resume Score */}
//         <div className="mb-6">
//           <div className="flex justify-between items-center mb-2">
//             <div className="flex items-center gap-2">
//               <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded text-sm">
//                 {resumeScore}%
//               </span>
//               <span className="text-gray-600">Your resume score</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <button className="text-blue-500 flex items-center">
//                 Improve resume <ChevronDown size={16} className="ml-1" />
//               </button>
//               <button>
//                 <HelpCircle size={20} className="text-gray-400" />
//               </button>
//             </div>
//           </div>

//           {/* Progress bar */}
//           <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
//             <div 
//               className="h-full transition-all duration-500 ease-out bg-pink-500"
//               style={{ width: `${resumeScore}%` }}
//             />
//           </div>
//         </div>

//         {/* Tailor Resume Notice */}
//         <div className="bg-blue-50 p-4 rounded-lg mb-6">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <span>🎯</span>
//               <span>Tailor this resume for the job, and get more interviews</span>
//             </div>
//             <button className="text-blue-500">Try it ›</button>
//           </div>
//         </div>

//         {/* Personal Details Component */}
//         <PersonalDetails
//           personalDetails={personalDetails}
//           setPersonalDetails={setPersonalDetails}
//           profileImage={profileImage}
//           setProfileImage={setProfileImage}
//         />

//         {/* Professional Summary */}
//         <div className="bg-white rounded-lg p-6 mb-6">
//           <h2 className="text-lg font-medium mb-2">Professional Summary</h2>
//           <p className="text-gray-600 mb-4">
//             Write 2-4 short, energetic sentences about how great you are. Mention your achievements, skills and experience.
//           </p>
//           <div className="mb-4">
//             <div className="flex space-x-2 mb-2 border-b pb-2">
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Bold size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Italic size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Underline size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <List size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Link2 size={16} />
//               </button>
//               <div className="flex-grow"></div>
//               <button className="text-blue-500 flex items-center">
//                 Get help with writing
//                 <Plus size={16} className="ml-1" />
//               </button>
//             </div>
//             <textarea
//               value={professionalSummary}
//               onChange={(e) => setProfessionalSummary(e.target.value)}
//               className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[100px]"
//             />
//             <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
//               <span>Recruiter tip: write 400-600 characters to increase interview chances</span>
//               <span>0 / 400+</span>
//             </div>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div className="bg-white rounded-lg p-6 mb-6">
//           <h2 className="text-lg font-medium mb-2">Skills</h2>
//           <p className="text-gray-600 mb-4">
//             Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing.
//           </p>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {skills.map((skill, index) => (
//               <div key={index} className="bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2">
//                 {skill}
//                 <Plus size={16} className="text-gray-400" />
//               </div>
//             ))}
//           </div>
//           <button className="text-blue-500 flex items-center">
//             <Plus size={16} className="mr-1" />
//             Add skill
//           </button>
//         </div>

//         {/* Employment History */}
//         <div className="bg-white rounded-lg shadow p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Employment History</h2>
//           <p className="text-gray-600 mb-4">
//             Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).
//           </p>
//           <button className="flex items-center text-blue-500 space-x-1">
//             <Plus size={16} />
//             <span>Add employment</span>
//           </button>
//         </div>

//         {/* Education */}
//         <div className="bg-white rounded-lg shadow p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Education</h2>
//           <p className="text-gray-600 mb-4">
//             A varied education on your resume sums up the value that your learnings and background will bring to job.
//           </p>
//           <button className="flex items-center text-blue-500 space-x-1">
//             <Plus size={16} />
//             <span>Add education</span>
//           </button>
//         </div>

//         {/* Websites & Social Links */}
//         <div className="bg-white rounded-lg shadow p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Websites & Social Links</h2>
//           <p className="text-gray-600 mb-4">
//             You can add links to websites you want hiring managers to see! Perhaps it will be a link to your portfolio, LinkedIn profile, or personal website
//           </p>
//           <button className="flex items-center text-blue-500 space-x-1">
//             <Plus size={16} />
//             <span>Add link</span>
//           </button>
//         </div>

//         {/* Additional Sections */}
//         <div className="bg-white rounded-lg p-6">
//           <h2 className="text-lg font-medium mb-4">Add Section</h2>
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { icon: "📄", text: "Custom Section" },
//               { icon: "📚", text: "Courses" },
//               { icon: "🎯", text: "Extra-curricular Activities" },
//               { icon: "💼", text: "Internships" },
//               { icon: "⭐", text: "Hobbies" },
//               { icon: "🌍", text: "Languages" },
//               { icon: "👥", text: "References" }
//             ].map((item, index) => (
//               <button
//                 key={index}
//                 className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg text-gray-600"
//               >
//                 <span className="text-xl">{item.icon}</span>
//                 <span>{item.text}</span>
//               </button>
//             ))}
//           </div>
//         </div>

     

//         {/* Footer */}
//         <div className="mt-8 pb-8 text-center text-gray-500 text-sm">
//           <p>Need help building your resume? Check out our guides and examples.</p>
//           <div className="flex justify-center gap-4 mt-4">
//             <button className="text-blue-500 hover:underline">Resume Writing Guide</button>
//             <button className="text-blue-500 hover:underline">Resume Examples</button>
//             <button className="text-blue-500 hover:underline">Help Center</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;

//working code 

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   ChevronDown,
//   Download,
//   Plus,
//   Edit,
//   Bold,
//   Italic,
//   Underline,
//   List,
//   Link2,
//   HelpCircle,
//   MinusCircle,
//   PlusCircle,
//   MoreHorizontal
// } from 'lucide-react';
// import PersonalDetails from './PersonalDetails';



// const ResumeBuilder = () => {

//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState('Untitled');
//   const [showLanguages, setShowLanguages] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     code: 'US',
//     name: 'English',
//     flag: '🇺🇸'
//   });
//   const [resumeScore] = useState(10);
//   const [professionalSummary, setProfessionalSummary] = useState(
//     'Curious science teacher with 8+ years of experience and a track record of...'
//   );
//   const [profileImage, setProfileImage] = useState(null);
  
//   // New personalDetails state
//   const [personalDetails, setPersonalDetails] = useState({
//     jobTitle: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: '',
//     address: '',
//     postalCode: '',
//     drivingLicense: '',
//     nationality: '',
//     placeOfBirth: '',
//     dateOfBirth: ''
//   });



//   const languages = [
//     { code: 'US', name: 'English', flag: '🇺🇸' },
//     { code: 'UK', name: 'English (UK)', flag: '🇬🇧' },
//     { code: 'NZ', name: 'New Zealand (NZ)', flag: '🇳🇿' },
//     { code: 'ES', name: 'Español', flag: '🇪🇸' },
//     { code: 'MX', name: 'Español (MX)', flag: '🇲🇽' },
//   ];

//   const skills = [
//     "Knowledgeable in User Interface/User Experience",
//     "Software Troubleshooting",
//     "Software Logic",
//     "Programming",
//     "Advanced Analytical Thinking Skills",
//     "Adaptability",
//     "JavaScript",
//     "Java",
//     "Python",
//     "SQL"
//   ];

//   const handleTitleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleTitleBlur = () => {
//     setIsEditing(false);
//   };

//   const handleTitleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       setIsEditing(false);
//     }
//   };

//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setShowLanguages(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
   
    
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 border-b bg-white">
//         <div className="flex items-center space-x-4">
//           <Link to="/dashboard">
//             <button className="p-2">☰</button>
//           </Link>
//           <span className="font-medium">Dashboard</span>
//         </div>
        
//         <div className="text-center relative">
//           <div className="flex items-center gap-2">
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={title}
//                 onChange={handleTitleChange}
//                 onBlur={handleTitleBlur}
//                 onKeyDown={handleTitleKeyDown}
//                 className="text-xl border-b border-blue-500 focus:outline-none px-2"
//                 autoFocus
//               />
//             ) : (
//               <h1 
//                 className="text-xl cursor-pointer hover:text-gray-600 flex items-center gap-2"
//                 onClick={handleTitleEdit}
//               >
//                 {title}
//                 <button className="text-gray-400 hover:text-gray-600">
//                   <Edit size={16} />
//                 </button>
//               </h1>
//             )}
//           </div>
          
//           <div className="relative">
//             <button 
//               className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 mt-1 px-3 py-1 rounded-md hover:bg-gray-50"
//               onClick={() => setShowLanguages(!showLanguages)}
//             >
//               <span className="text-lg">{selectedLanguage.flag}</span>
//               <span>{selectedLanguage.name}</span>
//               <ChevronDown size={16} />
//             </button>

//             {showLanguages && (
//               <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-50">
//                 {languages.map((language) => (
//                   <button
//                     key={language.code}
//                     className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                     onClick={() => handleLanguageSelect(language)}
//                   >
//                     <span className="text-lg">{language.flag}</span>
//                     <span>{language.name}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <button className="p-2">
//               <MinusCircle size={20} />
//             </button>
//             <span className="font-medium">Aa</span>
//             <button className="p-2">
//               <PlusCircle size={20} />
//             </button>
//           </div>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">
//             <span className="flex items-center gap-2">
//               <Download size={16} />
//               Download PDF
//             </span>
//           </button>
//           <button className="p-2">
//             <MoreHorizontal size={24} />
//           </button>
//         </div>
//       </div>

//       <div className="p-6 max-w-4xl mx-auto">
//         {/* Resume Score */}
//         <div className="mb-6">
//           <div className="flex justify-between items-center mb-2">
//             <div className="flex items-center gap-2">
//               <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded text-sm">
//                 {resumeScore}%
//               </span>
//               <span className="text-gray-600">Your resume score</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <button className="text-blue-500 flex items-center">
//                 Improve resume <ChevronDown size={16} className="ml-1" />
//               </button>
//               <button>
//                 <HelpCircle size={20} className="text-gray-400" />
//               </button>
//             </div>
//           </div>
        


//           {/* Progress bar */}
//           <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
//             <div 
//               className="h-full transition-all duration-500 ease-out bg-pink-500"
//               style={{ width: `${resumeScore}%` }}
//             />
//            </div>
//         </div>

//         {/* Tailor Resume Notice */}
//         <div className="bg-blue-50 p-4 rounded-lg mb-6">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <span>🎯</span>
//               <span>Tailor this resume for the job, and get more interviews</span>
//             </div>
//             <button className="text-blue-500">Try it ›</button>
//           </div>
//         </div>

//         {/* Personal Details Component */}
//         <PersonalDetails
//           personalDetails={personalDetails}
//           setPersonalDetails={setPersonalDetails}
//           profileImage={profileImage}
//           setProfileImage={setProfileImage}
//         />

//         {/* Professional Summary */}
//         <div className="bg-white rounded-lg p-6 mb-6">
//           <h2 className="text-lg font-medium mb-2">Professional Summary</h2>
//           <p className="text-gray-600 mb-4">
//             Write 2-4 short, energetic sentences about how great you are. Mention your achievements, skills and experience.
//           </p>
//           <div className="mb-4">
//             <div className="flex space-x-2 mb-2 border-b pb-2">
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Bold size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Italic size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Underline size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <List size={16} />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Link2 size={16} />
//               </button>
//               <div className="flex-grow"></div>
//               <button className="text-blue-500 flex items-center">
//                 Get help with writing
//                 <Plus size={16} className="ml-1" />
//               </button>
//             </div>
//             <textarea
//               value={professionalSummary}
//               onChange={(e) => setProfessionalSummary(e.target.value)}
//               className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[100px]"
//             />
//             <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
//               <span>Recruiter tip: write 400-600 characters to increase interview chances</span>
//               <span>0 / 400+</span>
//             </div>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div className="bg-white rounded-lg p-6 mb-6">
//           <h2 className="text-lg font-medium mb-2">Skills</h2>
//           <p className="text-gray-600 mb-4">
//             Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing.
//           </p>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {skills.map((skill, index) => (
//               <div key={index} className="bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2">
//                 {skill}
//                 <Plus size={16} className="text-gray-400" />
//               </div>
//             ))}
//           </div>
//           <button className="text-blue-500 flex items-center">
//             <Plus size={16} className="mr-1" />
//             Add skill
//           </button>
//         </div>

//         {/* Employment History */}
//         <div className="bg-white rounded-lg shadow p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Employment History</h2>
//           <p className="text-gray-600 mb-4">
//             Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).
//           </p>
//           <button className="flex items-center text-blue-500 space-x-1">
//             <Plus size={16} />
//             <span>Add employment</span>
//           </button>
//         </div>

//         {/* Education */}
//         <div className="bg-white rounded-lg shadow p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Education</h2>
//           <p className="text-gray-600 mb-4">
//             A varied education on your resume sums up the value that your learnings and background will bring to job.
//           </p>
//           <button className="flex items-center text-blue-500 space-x-1">
//             <Plus size={16} />
//             <span>Add education</span>
//           </button>
//         </div>

//         {/* Websites & Social Links */}
//         <div className="bg-white rounded-lg shadow p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Websites & Social Links</h2>
//           <p className="text-gray-600 mb-4">
//             You can add links to websites you want hiring managers to see! Perhaps it will be a link to your portfolio, LinkedIn profile, or personal website
//           </p>
//           <button className="flex items-center text-blue-500 space-x-1">
//             <Plus size={16} />
//             <span>Add link</span>
//           </button>
//         </div>

//         {/* Additional Sections */}
//         <div className="bg-white rounded-lg p-6">
//           <h2 className="text-lg font-medium mb-4">Add Section</h2>
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { icon: "📄", text: "Custom Section" },
//               { icon: "📚", text: "Courses" },
//               { icon: "🎯", text: "Extra-curricular Activities" },
//               { icon: "💼", text: "Internships" },
//               { icon: "⭐", text: "Hobbies" },
//               { icon: "🌍", text: "Languages" },
//               { icon: "👥", text: "References" }
//             ].map((item, index) => (
//               <button
//                 key={index}
//                 className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg text-gray-600"
//               >
//                 <span className="text-xl">{item.icon}</span>
//                 <span>{item.text}</span>
//               </button>
//             ))}
//           </div>
//         </div>

     

//         {/* Footer */}
//         <div className="mt-8 pb-8 text-center text-gray-500 text-sm">
//           <p>Need help building your resume? Check out our guides and examples.</p>
//           <div className="flex justify-center gap-4 mt-4">
//             <button className="text-blue-500 hover:underline">Resume Writing Guide</button>
//             <button className="text-blue-500 hover:underline">Resume Examples</button>
//             <button className="text-blue-500 hover:underline">Help Center</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




// export default ResumeBuilder;

// score bar working and split function
// import React, { useState, useRef } from 'react';
// import { 
//   Plus, 
//   ChevronDown,
//   ChevronUp, 
//   HelpCircle, 
//   Download, 
//   MoreHorizontal, 
//   Layout, 
//   AlertCircle,
//   Upload,
//   Bold,
//   Italic,
//   Underline,
//   List,
//   Link2,
//   MinusCircle,
//   PlusCircle,
//   Edit
// } from 'lucide-react';

// const ResumeBuilder = () => {
//   // States
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState('Untitled');
//   const [showLanguages, setShowLanguages] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     code: 'US',
//     name: 'English',
//     flag: '🇺🇸'
//   });

//   const [personalDetails, setPersonalDetails] = useState({
//     jobTitle: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: '',
//     address: '',
//     postalCode: '',
//     drivingLicense: '',
//     nationality: '',
//     placeOfBirth: '',
//     dateOfBirth: ''
//   });

//   const [showMoreDetails, setShowMoreDetails] = useState(false);
//   const [professionalSummary, setProfessionalSummary] = useState(
//     'Curious science teacher with 8+ years of experience and a track record of...'
//   );
//   const [profileImage, setProfileImage] = useState(null);
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [employmentHistory, setEmploymentHistory] = useState([]);
//   const [education, setEducation] = useState([]);
//   const [websiteLinks, setWebsiteLinks] = useState([]);
//   const fileInputRef = useRef(null);

//   // Constants
//   const skills = [
//     "Communication",
//     "Good Communication",
//     "Excellent Communication Skills",
//     "Team Player",
//     "Leadership Skills",
//     "Adaptability",
//     "Critical thinking and problem solving",
//     "Time Management Skills",
//     "Teamwork",
//     "Ability to Work in a Team"
//   ];

//   const languages = [
//     { code: 'US', name: 'English', flag: '🇺🇸' },
//     { code: 'UK', name: 'English (UK)', flag: '🇬🇧' },
//     { code: 'NZ', name: 'New Zealand (NZ)', flag: '🇳🇿' },
//     { code: 'ES', name: 'Español', flag: '🇪🇸' },
//     { code: 'MX', name: 'Español (MX)', flag: '🇲🇽' }
//   ];

//   // Handlers
//   const handleSkillSelect = (skill) => {
//     if (!selectedSkills.includes(skill)) {
//       setSelectedSkills([...selectedSkills, skill]);
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleTitleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleTitleBlur = () => {
//     setIsEditing(false);
//   };

//   const handleTitleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       setIsEditing(false);
//     }
//   };

//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setShowLanguages(false);
//   };

//   // Calculate resume score
//   const calculateScore = () => {
//     let score = 0;
    
//     // Personal details (25%)
//     const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
//     const personalDetailsScore = requiredFields.reduce((acc, field) => {
//       return acc + (personalDetails[field] ? 6.25 : 0);
//     }, 0);
//     score += personalDetailsScore;

//     // Professional Summary (15%)
//     const summaryLength = professionalSummary?.length || 0;
//     const summaryScore = Math.min((summaryLength / 200) * 15, 15);
//     score += summaryScore;

//     // Profile Image (5%)
//     if (profileImage) {
//       score += 5;
//     }

//     // Skills (15%)
//     const skillsScore = Math.min((selectedSkills.length / 5) * 15, 15);
//     score += skillsScore;

//     // Employment History (25%)
//     const employmentScore = Math.min((employmentHistory.length / 2) * 25, 25);
//     score += employmentScore;

//     // Education (15%)
//     const educationScore = Math.min((education.length / 1) * 15, 15);
//     score += educationScore;

//     return Math.round(score);
//   };

//   const resumeScore = calculateScore();

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 flex">
//         {/* Left side - Form */}
//         <div className="flex-1 overflow-auto">
//           {/* Header */}
//           <div className="flex justify-between items-center p-4 border-b bg-white">
//             <div className="flex items-center space-x-4">
//               <button className="p-2">☰</button>
//               <span className="font-medium">Dashboard</span>
//             </div>
            
//             <div className="text-center relative">
//               <div className="flex items-center gap-2">
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     value={title}
//                     onChange={handleTitleChange}
//                     onBlur={handleTitleBlur}
//                     onKeyDown={handleTitleKeyDown}
//                     className="text-xl border-b border-blue-500 focus:outline-none px-2"
//                     autoFocus
//                   />
//                 ) : (
//                   <h1 
//                     className="text-xl cursor-pointer hover:text-gray-600 flex items-center gap-2"
//                     onClick={handleTitleEdit}
//                   >
//                     {title}
//                     <button className="text-gray-400 hover:text-gray-600">
//                       <Edit className="w-4 h-4" />
//                     </button>
//                   </h1>
//                 )}
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                 <span className="flex items-center gap-2">
//                   <Download className="w-4 h-4" />
//                   Download PDF
//                 </span>
//               </button>
//             </div>
//           </div>

//           <div className="p-6 max-w-4xl mx-auto">
//             {/* Resume Score */}
//             <div className="mb-6">
//               <div className="flex justify-between items-center mb-2">
//                 <div className="flex items-center gap-2">
//                   <span className={`px-2 py-1 rounded text-sm ${
//                     resumeScore < 30 ? 'text-red-600 bg-red-50' :
//                     resumeScore < 70 ? 'text-yellow-600 bg-yellow-50' :
//                     'text-green-600 bg-green-50'
//                   }`}>
//                     {resumeScore}%
//                   </span>
//                   <span className="text-gray-600">Your resume score</span>
//                 </div>
//                 <button className="text-blue-500 flex items-center gap-2">
//                   Improve resume <ChevronDown className="w-4 h-4" />
//                 </button>
//               </div>
//               <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full transition-all duration-500 ease-out"
//                   style={{ 
//                     width: `${resumeScore}%`,
//                     backgroundColor: resumeScore < 30 ? '#ef4444' : 
//                                    resumeScore < 70 ? '#eab308' : '#22c55e'
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right side - Preview */}
//         <div className="w-[600px] bg-gray-100 p-6 sticky top-0 h-screen overflow-auto border-l">
//           <div className="mb-4">
//             <h2 className="text-lg font-semibold">Resume Preview</h2>
//             <p className="text-sm text-gray-600">Live preview of your resume</p>
//           </div>
          
//           <div className="bg-white shadow-lg rounded-lg p-8">
//             {/* Preview Content */}
//             <div className="flex items-start gap-6 mb-8">
//               {profileImage && (
//                 <img 
//                   src={profileImage} 
//                   alt="Profile" 
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//               )}
//               <div>
//                 <h1 className="text-2xl font-bold mb-2">
//                   {personalDetails.firstName} {personalDetails.lastName}
//                 </h1>
//                 <p className="text-gray-600">{personalDetails.jobTitle}</p>
//                 <div className="mt-2 text-sm text-gray-500">
//                   <p>{personalDetails.email}</p>
//                   <p>{personalDetails.phone}</p>
//                   <p>{personalDetails.city}, {personalDetails.country}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ResumeBuilder;

// working littil bit
// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ChevronDown,
//   Download,
//   Plus,
//   Edit,
//   Bold,
//   Italic,
//   Underline,
//   List,
//   Link2,
//   HelpCircle,
//   MinusCircle,
//   PlusCircle,
//   MoreHorizontal,
//   ChevronUp,
//   AlertCircle,
//   Upload
// } from 'lucide-react';
// import PersonalDetails from './PersonalDetails';
 
// const ResumeBuilder = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState('Untitled');
//   const [showLanguages, setShowLanguages] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     code: 'US',
//     name: 'English',
//     flag: '🇺🇸'
//   });
//   const [activeTab, setActiveTab] = useState('details'); // New state for active tab
 
//   const [personalDetails, setPersonalDetails] = useState({
//     jobTitle: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: '',
//     address: '',
//     postalCode: '',
//     drivingLicense: '',
//     nationality: '',
//     placeOfBirth: '',
//     dateOfBirth: ''
//   });
 
//   const [resumeScore, setResumeScore] = useState(10);
//   const [professionalSummary, setProfessionalSummary] = useState(
//     'Curious science teacher with 8+ years of experience and a track record of...'
//   );
//   const [profileImage, setProfileImage] = useState(null);
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [employmentHistory, setEmploymentHistory] = useState([]);
//   const [education, setEducation] = useState([]);
//   const fileInputRef = useRef(null);
 
//   const languages = [
//     { code: 'US', name: 'English', flag: '🇺🇸' },
//     { code: 'UK', name: 'English (UK)', flag: '🇬🇧' },
//     { code: 'NZ', name: 'New Zealand (NZ)', flag: '🇳🇿' },
//     { code: 'ES', name: 'Español', flag: '🇪🇸' },
//     { code: 'MX', name: 'Español (MX)', flag: '🇲🇽' },
//   ];
 
//   const skills = [
//     "Knowledgeable in User Interface/User Experience",
//     "Software Troubleshooting",
//     "Software Logic",
//     "Programming",
//     "Advanced Analytical Thinking Skills",
//     "Adaptability",
//     "JavaScript",
//     "Java",
//     "Python",
//     "SQL"
//   ];
 
//   const handleTitleEdit = () => setIsEditing(true);
//   const handleTitleChange = (e) => setTitle(e.target.value);
//   const handleTitleBlur = () => setIsEditing(false);
//   const handleTitleKeyDown = (e) => e.key === 'Enter' && setIsEditing(false);
//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setShowLanguages(false);
//   };
 
//   const handleSkillSelect = (skill) => {
//     if (!selectedSkills.includes(skill)) {
//       setSelectedSkills([...selectedSkills, skill]);
//     }
//   };
 
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setProfileImage(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };
 
//   const calculateScore = () => {
//     let score = 0;
//     const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
//     const personalDetailsScore = requiredFields.reduce((acc, field) => acc + (personalDetails[field] ? 6.25 : 0), 0);
//     score += personalDetailsScore;
 
//     const summaryScore = Math.min((professionalSummary?.length / 200) * 15, 15);
//     score += summaryScore;
//     score += profileImage ? 5 : 0;
//     const skillsScore = Math.min((selectedSkills.length / 5) * 15, 15);
//     score += skillsScore;
//     const employmentScore = Math.min((employmentHistory.length / 2) * 25, 25);
//     score += employmentScore;
//     const educationScore = Math.min((education.length / 1) * 15, 15);
//     score += educationScore;
 
//     setResumeScore(Math.round(score));
//   };
 
//   return (
// <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
// <div className="w-1/4 bg-gray-100 p-4 overflow-auto h-screen sticky top-0">
// <h2 className="text-lg font-semibold">Resume Preview</h2>
// <p className="text-sm text-gray-600">Live preview of your resume</p>
// <div className="bg-white shadow-lg rounded-lg p-8 mt-4">
//           {profileImage && <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover" />}
// <div>
// <h1 className="text-2xl font-bold mb-2">{personalDetails.firstName} {personalDetails.lastName}</h1>
// <p className="text-gray-600">{personalDetails.jobTitle}</p>
// <p>{personalDetails.email}</p>
// <p>{personalDetails.phone}</p>
// <p>{personalDetails.city}, {personalDetails.country}</p>
// </div>
// <div className="flex flex-wrap gap-2 mt-4">
//             {selectedSkills.map((skill, index) => (
// <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{skill}</span>
//             ))}
// </div>
// </div>
// </div>
 
//       {/* Main Content */}
// <div className="flex-1 overflow-y-auto">
// <div className="p-4 border-b bg-white sticky top-0 z-10 flex justify-between">
// <h1 className="text-xl">Resume Builder</h1>
// <div className="flex items-center gap-4">
// <Link to="/dashboard" className="text-blue-500">Dashboard</Link>
// <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
// <Download size={16} /> Download PDF
// </button>
// </div>
// </div>
 
//         <div className="p-6 max-w-4xl mx-auto">
//           {/* Tabs */}
// <div className="mb-6 flex border-b">
//             {['details', 'summary', 'skills', 'employment', 'education'].map((tab) => (
// <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 font-medium ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
// >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
// </button>
//             ))}
// </div>
 
//           {/* Tab Content */}
//           {activeTab === 'details' && (
// <PersonalDetails
//               personalDetails={personalDetails}
//               setPersonalDetails={setPersonalDetails}
//               profileImage={profileImage}
//               setProfileImage={setProfileImage}
//             />
//           )}
 
//           {activeTab === 'summary' && (
// <div className="bg-white rounded-lg p-6">
// <h2 className="text-lg font-medium mb-2">Professional Summary</h2>
// <textarea
//                 value={professionalSummary}
//                 onChange={(e) => setProfessionalSummary(e.target.value)}
//                 className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[100px]"
//               />
// </div>
//           )}
 
//           {activeTab === 'skills' && (
// <div className="bg-white rounded-lg p-6">
// <h2 className="text-lg font-medium mb-2">Skills</h2>
// <div className="flex flex-wrap gap-2 mb-4">
//                 {skills.map((skill, index) => (
// <button key={index} onClick={() => handleSkillSelect(skill)} className="bg-gray-50 px-4 py-2 rounded-lg">
//                     {skill} <Plus size={16} className="text-gray-400" />
// </button>
//                 ))}
// </div>
// <div className="flex flex-wrap gap-2">
//                 {selectedSkills.map((skill, index) => (
// <div key={index} className="bg-gray-100 px-4 py-2 rounded-lg">
//                     {skill}
// <MinusCircle onClick={() => setSelectedSkills(selectedSkills.filter((_, i) => i !== index))} />
// </div>
//                 ))}
// </div>
// </div>
//           )}
 
//           {activeTab === 'employment' && (
// <div className="bg-white rounded-lg p-6">
// <h2 className="text-lg font-medium mb-2">Employment History</h2>
//               {/* Implement Employment History Section */}
// </div>
//           )}
 
//           {activeTab === 'education' && (
// <div className="bg-white rounded-lg p-6">
// <h2 className="text-lg font-medium mb-2">Education</h2>
//               {/* Implement Education Section */}
// </div>
//           )}
// </div>
// </div>
// </div>
//   );
// };
 
// export default ResumeBuilder;


// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ChevronDown,
//   Download,
//   Plus,
//   Edit,
//   Bold,
//   Italic,
//   Underline,
//   List,
//   Link2,
//   HelpCircle,
//   MinusCircle,
//   PlusCircle,
//   MoreHorizontal,
//   ChevronUp,
//   AlertCircle,
//   Upload
// } from 'lucide-react';
// import PersonalDetails from './PersonalDetails';
 
// const ResumeBuilder = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState('Untitled');
//   const [showLanguages, setShowLanguages] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     code: 'US',
//     name: 'English',
//     flag: '🇺🇸'
//   });
//   const [activeTab, setActiveTab] = useState('details');
 
//   const [personalDetails, setPersonalDetails] = useState({
//     jobTitle: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: '',
//     address: '',
//     postalCode: '',
//     drivingLicense: '',
//     nationality: '',
//     placeOfBirth: '',
//     dateOfBirth: ''
//   });
 
//   const [resumeScore, setResumeScore] = useState(10);
//   const [professionalSummary, setProfessionalSummary] = useState(
//     'Curious science teacher with 8+ years of experience and a track record of...'
//   );
//   const [profileImage, setProfileImage] = useState(null);
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [employmentHistory, setEmploymentHistory] = useState([]);
//   const [education, setEducation] = useState([]);
//   const fileInputRef = useRef(null);
 
//   const languages = [
//     { code: 'US', name: 'English', flag: '🇺🇸' },
//     { code: 'UK', name: 'English (UK)', flag: '🇬🇧' },
//     { code: 'NZ', name: 'New Zealand (NZ)', flag: '🇳🇿' },
//     { code: 'ES', name: 'Español', flag: '🇪🇸' },
//     { code: 'MX', name: 'Español (MX)', flag: '🇲🇽' },
//   ];
 
//   const skills = [
//     "Knowledgeable in User Interface/User Experience",
//     "Software Troubleshooting",
//     "Software Logic",
//     "Programming",
//     "Advanced Analytical Thinking Skills",
//     "Adaptability",
//     "JavaScript",
//     "Java",
//     "Python",
//     "SQL"
//   ];
 
//   const handleTitleEdit = () => setIsEditing(true);
//   const handleTitleChange = (e) => setTitle(e.target.value);
//   const handleTitleBlur = () => setIsEditing(false);
//   const handleTitleKeyDown = (e) => e.key === 'Enter' && setIsEditing(false);
//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setShowLanguages(false);
//   };
 
//   const handleSkillSelect = (skill) => {
//     if (!selectedSkills.includes(skill)) {
//       setSelectedSkills([...selectedSkills, skill]);
//     }
//   };
 
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setProfileImage(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };
 
//   // Calculate resume completion score
//   const calculateScore = () => {
//     let score = 0;
//     const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
//     const personalDetailsScore = requiredFields.reduce((acc, field) => acc + (personalDetails[field] ? 6.25 : 0), 0);
//     score += personalDetailsScore;
 
//     const summaryScore = Math.min((professionalSummary?.length / 200) * 15, 15);
//     score += summaryScore;
//     score += profileImage ? 5 : 0;
//     const skillsScore = Math.min((selectedSkills.length / 5) * 15, 15);
//     score += skillsScore;
//     const employmentScore = Math.min((employmentHistory.length / 2) * 25, 25);
//     score += employmentScore;
//     const educationScore = Math.min((education.length / 1) * 15, 15);
//     score += educationScore;
 
//     setResumeScore(Math.round(score));
//   };
 
//   useEffect(() => {
//     calculateScore();
//   }, [personalDetails, professionalSummary, profileImage, selectedSkills, employmentHistory, education]);
 
//   return (
// <div className="min-h-screen bg-gray-50 flex">
//       {/* Main Content (now on the left) */}
// <div className="flex-1 overflow-y-auto">
//         {/* Progress Bar */}
// <div className="relative w-full h-2 bg-gray-200">
// <div
//             className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300"
//             style={{ width: `${resumeScore}%` }}
//           />
// </div>
 
//         <div className="p-4 border-b bg-white sticky top-0 z-10 flex justify-between">
// <h1 className="text-xl">Resume Builder</h1>
// <div className="flex items-center gap-4">
// <Link to="/dashboard" className="text-blue-500">Dashboard</Link>
// <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
// <Download size={16} /> Download PDF
// </button>
// </div>
// </div>
 
//         <div className="p-6 max-w-4xl mx-auto">
//           {/* Tabs */}
// <div className="mb-6 flex border-b">
//             {['details', 'summary', 'skills', 'employment', 'education'].map((tab) => (
// <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 font-medium ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
// >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
// </button>
//             ))}
// </div>
 
//           {/* Tab Content */}
//           {activeTab === 'details' && (
// <PersonalDetails
//               personalDetails={personalDetails}
//               setPersonalDetails={setPersonalDetails}
//               profileImage={profileImage}
//               setProfileImage={setProfileImage}
//             />
//           )}
 
//           {activeTab === 'summary' && (
// <div className="bg-white rounded-lg p-6">
// <h2 className="text-lg font-medium mb-2">Professional Summary</h2>
// <textarea
//                 value={professionalSummary}
//                 onChange={(e) => setProfessionalSummary(e.target.value)}
//                 className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[100px]"
//               />
// </div>
//           )}
 
//           {activeTab === 'skills' && (
// <div className="bg-white rounded-lg p-6">
// <h2 className="text-lg font-medium mb-2">Skills</h2>
// <div className="flex flex-wrap gap-2 mb-4">
//                 {skills.map((skill, index) => (
// <button key={index} onClick={() => handleSkillSelect(skill)} className="bg-gray-50 px-4 py-2 rounded-lg">
//                     {skill} <Plus size={16} className="text-gray-400" />
// </button>
//                 ))}
// </div>
// <div className="flex flex-wrap gap-2">
//                 {selectedSkills.map((skill, index) => (
// <div key={index} className="bg-gray-100 px-4 py-2 rounded-lg">
//                     {skill}
// <MinusCircle onClick={() => setSelectedSkills(selectedSkills.filter((_, i) => i !== index))} />
// </div>
//                 ))}
// </div>
// </div>
//           )}
 
//           {activeTab === 'employment' && (
// <div className="bg-white rounded-lg p-6">
// <h2 className="text-lg font-medium mb-2">Employment History</h2>
//               {/* Implement Employment History Section */}
// </div>
//           )}
 
//           {activeTab === 'education' && (
// <div className="bg-white rounded-lg p-6">
// <h2 className="text-lg font-medium mb-2">Education</h2>
//               {/* Implement Education Section */}
// </div>
//           )}
// </div>
// </div>
 
//       {/* Sidebar (now on the right) */}
// <div className="w-1/4 bg-gray-100 p-4 overflow-auto h-screen sticky top-0">
// <h2 className="text-lg font-semibold">Resume Preview</h2>
// <p className="text-sm text-gray-600">Live preview of your resume</p>
// <div className="bg-white shadow-lg rounded-lg p-8 mt-4">
//           {profileImage && <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover" />}
// <div>
// <h1 className="text-2xl font-bold mb-2">{personalDetails.firstName} {personalDetails.lastName}</h1>
// <p className="text-gray-600">{personalDetails.jobTitle}</p>
// <p>{personalDetails.email}</p>
// <p>{personalDetails.phone}</p>
// <p>{personalDetails.city}, {personalDetails.country}</p>
// </div>
// <div className="flex flex-wrap gap-2 mt-4">
//             {selectedSkills.map((skill, index) => (
// <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{skill}</span>
//             ))}
// </div>
// </div>
// </div>
// </div>
//   );
// };
 
// export default ResumeBuilder;



//working code 2 with score bar and split functionality
// ResumeBuilder.js
// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   ChevronDown,
//   Download,
//   Plus,
//   Edit,
//   Bold,
//   Italic,
//   Underline,
//   List,
//   Link2,
//   HelpCircle,
//   MinusCircle,
//   PlusCircle,
//   MoreHorizontal,
//   Layout
// } from 'lucide-react';

// import TopToolbar from './TopToolbar';
// import ResumeScore from './ResumeScore';
// import ResumeEditor from './ResumeEditor';
// import ResumePreview from './ResumePreview';
// import PersonalDetails from './PersonalDetails';
// import { calculateResumeScore } from '../utils/scoreCalculator';

// const ResumeBuilder = () => {
//   // States
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState('Untitled');
//   const [showLanguages, setShowLanguages] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     code: 'US',
//     name: 'English',
//     flag: '🇺🇸'
//   });

//   const [personalDetails, setPersonalDetails] = useState({
//     jobTitle: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: '',
//     address: '',
//     postalCode: '',
//     drivingLicense: '',
//     nationality: '',
//     placeOfBirth: '',
//     dateOfBirth: ''
//   });

//   const [showMoreDetails, setShowMoreDetails] = useState(false);
//   const [professionalSummary, setProfessionalSummary] = useState(
//     'Curious science teacher with 8+ years of experience and a track record of...'
//   );
//   const [profileImage, setProfileImage] = useState(null);
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [employmentHistory, setEmploymentHistory] = useState([]);
//   const [education, setEducation] = useState([]);
//   const [websiteLinks, setWebsiteLinks] = useState([]);
//   const fileInputRef = useRef(null);

//   // Constants
//   const skills = [
//     "Knowledgeable in User Interface/User Experience",
//     "Software Troubleshooting",
//     "Software Logic",
//     "Programming",
//     "Advanced Analytical Thinking Skills",
//     "Adaptability",
//     "JavaScript",
//     "Java",
//     "Python",
//     "SQL"
//   ];

//   const languages = [
//     { code: 'US', name: 'English', flag: '🇺🇸' },
//     { code: 'UK', name: 'English (UK)', flag: '🇬🇧' },
//     { code: 'NZ', name: 'New Zealand (NZ)', flag: '🇳🇿' },
//     { code: 'ES', name: 'Español', flag: '🇪🇸' },
//     { code: 'MX', name: 'Español (MX)', flag: '🇲🇽' }
//   ];

//   // Handlers
//   const handleSkillSelect = (skill) => {
//     if (!selectedSkills.includes(skill)) {
//       setSelectedSkills([...selectedSkills, skill]);
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleTitleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleTitleBlur = () => {
//     setIsEditing(false);
//   };

//   const handleTitleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       setIsEditing(false);
//     }
//   };

//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setShowLanguages(false);
//   };

//   // Calculate resume score
//   const resumeScore = calculateResumeScore({
//     personalDetails,
//     professionalSummary,
//     profileImage,
//     selectedSkills,
//     employmentHistory,
//     education
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Left side - Form */}
//       <div className="flex-1 overflow-auto">
//         <TopToolbar 
//           title={title}
//           isEditing={isEditing}
//           setIsEditing={setIsEditing}
//           handleTitleChange={handleTitleChange}
//           handleTitleBlur={handleTitleBlur}
//           handleTitleKeyDown={handleTitleKeyDown}
//           showLanguages={showLanguages}
//           setShowLanguages={setShowLanguages}
//           selectedLanguage={selectedLanguage}
//           handleLanguageSelect={handleLanguageSelect}
//           languages={languages}
//         />

//         <div className="p-6 max-w-4xl mx-auto">
//           <ResumeScore score={resumeScore} />

//           {/* Tailor Resume Notice */}
//           <div className="bg-blue-50 p-4 rounded-lg mb-6">
//             <div className="flex justify-between items-center">
//               <div className="flex items-center gap-2">
//                 <span>🎯</span>
//                 <span>Tailor this resume for the job, and get more interviews</span>
//               </div>
//               <button className="text-blue-500">Try it ›</button>
//             </div>
//           </div>

//           {/* Personal Details */}
//           <PersonalDetails
//             personalDetails={personalDetails}
//             setPersonalDetails={setPersonalDetails}
//             profileImage={profileImage}
//             setProfileImage={setProfileImage}
//             showMoreDetails={showMoreDetails}
//             setShowMoreDetails={setShowMoreDetails}
//           />

//           {/* Professional Summary */}
//           <div className="bg-white rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-medium mb-2">Professional Summary</h2>
//             <p className="text-gray-600 mb-4">
//               Write 2-4 short, energetic sentences about how great you are. Mention your achievements, skills and experience.
//             </p>
//             <div className="mb-4">
//               <div className="flex space-x-2 mb-2 border-b pb-2">
//                 <button className="p-2 hover:bg-gray-100 rounded">
//                   <Bold size={16} />
//                 </button>
//                 <button className="p-2 hover:bg-gray-100 rounded">
//                   <Italic size={16} />
//                 </button>
//                 <button className="p-2 hover:bg-gray-100 rounded">
//                   <Underline size={16} />
//                 </button>
//                 <button className="p-2 hover:bg-gray-100 rounded">
//                   <List size={16} />
//                 </button>
//                 <button className="p-2 hover:bg-gray-100 rounded">
//                   <Link2 size={16} />
//                 </button>
//                 <div className="flex-grow"></div>
//                 <button className="text-blue-500 flex items-center">
//                   Get help with writing
//                   <Plus size={16} className="ml-1" />
//                 </button>
//               </div>
//               <textarea
//                 value={professionalSummary}
//                 onChange={(e) => setProfessionalSummary(e.target.value)}
//                 className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[100px]"
//               />
//               <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
//                 <span>Recruiter tip: write 400-600 characters to increase interview chances</span>
//                 <span>0 / 400+</span>
//               </div>
//             </div>
//           </div>

//           {/* Skills Section */}
//           <div className="bg-white rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-medium mb-2">Skills</h2>
//             <p className="text-gray-600 mb-4">
//               Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing.
//             </p>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {skills.map((skill, index) => (
//                 <div 
//                   key={index} 
//                   className="bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleSkillSelect(skill)}
//                 >
//                   {skill}
//                   <Plus size={16} className="text-gray-400" />
//                 </div>
//               ))}
//             </div>
//             <button className="text-blue-500 flex items-center">
//               <Plus size={16} className="mr-1" />
//               Add skill
//             </button>
//           </div>

//           {/* Employment History */}
//           <div className="bg-white rounded-lg shadow p-6 mb-6">
//             <h2 className="text-xl font-semibold mb-2">Employment History</h2>
//             <p className="text-gray-600 mb-4">
//               Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).
//             </p>
//             <button className="flex items-center text-blue-500 space-x-1">
//               <Plus size={16} />
//               <span>Add employment</span>
//             </button>
//           </div>

//           {/* Education */}
//           <div className="bg-white rounded-lg shadow p-6 mb-6">
//             <h2 className="text-xl font-semibold mb-2">Education</h2>
//             <p className="text-gray-600 mb-4">
//               A varied education on your resume sums up the value that your learnings and background will bring to job.
//             </p>
//             <button className="flex items-center text-blue-500 space-x-1">
//               <Plus size={16} />
//               <span>Add education</span>
//             </button>
//           </div>

//           {/* Websites & Social Links */}
//           <div className="bg-white rounded-lg shadow p-6 mb-6">
//             <h2 className="text-xl font-semibold mb-2">Websites & Social Links</h2>
//             <p className="text-gray-600 mb-4">
//               You can add links to websites you want hiring managers to see! Perhaps it will be a link to your portfolio, LinkedIn profile, or personal website
//             </p>
//             <button className="flex items-center text-blue-500 space-x-1">
//               <Plus size={16} />
//               <span>Add link</span>
//             </button>
//           </div>

//           {/* Additional Sections */}
//           <div className="bg-white rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-medium mb-4">Add Section</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { icon: "📄", text: "Custom Section" },
//                 { icon: "📚", text: "Courses" },
//                 { icon: "🎯", text: "Extra-curricular Activities" },
//                 { icon: "💼", text: "Internships" },
//                 { icon: "⭐", text: "Hobbies" },
//                 { icon: "🌍", text: "Languages" },
//                 { icon: "👥", text: "References" }
//               ].map((item, index) => (
//                 <button
//                   key={index}
//                   className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg text-gray-600"
//                 >
//                   <span className="text-xl">{item.icon}</span>
//                   <span>{item.text}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="mt-8 pb-8 text-center text-gray-500 text-sm">
//             <p>Need help building your resume? Check out our guides and examples.</p>
//             <div className="flex justify-center gap-4 mt-4">
//               <button className="text-blue-500 hover:underline">Resume Writing Guide</button>
//               <button className="text-blue-500 hover:underline">Resume Examples</button>
//               <button className="text-blue-500 hover:underline">Help Center</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right side - Preview */}
//       <ResumePreview 
//         personalDetails={personalDetails}
//         profileImage={profileImage}
//         professionalSummary={professionalSummary}
//         selectedSkills={selectedSkills}
//         employmentHistory={employmentHistory}
//         education={education}
//         websiteLinks={websiteLinks}
//       />
//     </div>
//   );
// };

// export default ResumeBuilder;

import React, { useState, useRef, useCallback } from 'react';

import { 
  
  Plus,
  
  Bold,
  Italic,
  Underline,
  List as ListIcon,
  Link2,

  MinusCircle,
  
  Loader
} from 'lucide-react';


import TopToolbar from './TopToolbar';
import ResumeScore from './ResumeScore';
import ResumePreview from './ResumePreview';
import PersonalDetails from './PersonalDetails';
import EmploymentSection from './EmploymentSection';
import EducationSection from './EducationSection';
import { calculateResumeScore } from '../utils/scoreCalculator';
import { validatePersonalDetails } from '../utils/validation'; // Fix the import syntax
import { useFormValidation } from '../hooks/useFormValidation';

const ResumeBuilder = () => {
  // Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Form states
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('Untitled');
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'US',
    name: 'English',
    flag: '🇺🇸'
  });

  // Form validation states
  const {
    values: personalDetails,
    errors: personalDetailsErrors,
    handleChange: handlePersonalDetailsChange,
    handleBlur: handlePersonalDetailsBlur,
    handleSubmit: handlePersonalDetailsSubmit
  } = useFormValidation({
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
  }, validatePersonalDetails);

  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [professionalSummary, setProfessionalSummary] = useState(
    'Curious science teacher with 8+ years of experience and a track record of...'
  );
  const [profileImage, setProfileImage] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [employmentHistory, setEmploymentHistory] = useState([]);
  const [education, setEducation] = useState([]);
  const [websiteLinks, setWebsiteLinks] = useState([]);
  const fileInputRef = useRef(null);

  // Error states
  const [imageError, setImageError] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  // Constants
  const skills = [
    "Knowledgeable in User Interface/User Experience",
    "Software Troubleshooting",
    "Software Logic",
    "Programming",
    "Advanced Analytical Thinking Skills",
    "Adaptability",
    "JavaScript",
    "Java",
    "Python",
    "SQL"
  ];

  const languages = [
    { code: 'US', name: 'English', flag: '🇺🇸' },
    { code: 'UK', name: 'English (UK)', flag: '🇬🇧' },
    { code: 'NZ', name: 'New Zealand (NZ)', flag: '🇳🇿' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'MX', name: 'Español (MX)', flag: '🇲🇽' }
  ];

  // Handlers
  const handleSkillSelect = useCallback((skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills(prev => [...prev, skill]);
    }
  }, [selectedSkills]);

  const handleSkillRemove = useCallback((skillToRemove) => {
    setSelectedSkills(prev => prev.filter(skill => skill !== skillToRemove));
  }, []);

  const handleImageUpload = async (event) => {
    try {
      setIsUploading(true);
      setImageError(null);
      const file = event.target.files[0];
      
      if (!file) return;

      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Please upload an image file');
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('Image size should be less than 5MB');
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setIsUploading(false);
      };
      reader.onerror = () => {
        throw new Error('Failed to read file');
      };
      reader.readAsDataURL(file);
    } catch (error) {
      setImageError(error.message);
      setIsUploading(false);
    }
  };

  const handleSaveResume = async () => {
    try {
      setIsSaving(true);
      setSubmitError(null);

      // Validate all sections
      const personalDetailsValid = await handlePersonalDetailsSubmit();
      
      if (!personalDetailsValid) {
        throw new Error('Please fill in all required personal details');
      }

      // Here you would typically make an API call to save the resume
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Success notification can be added here
      
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  // Calculate resume score
  const resumeScore = calculateResumeScore({
    personalDetails,
    professionalSummary,
    profileImage,
    selectedSkills,
    employmentHistory,
    education
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Form */}
      <div className="flex-1 overflow-auto">
        <TopToolbar 
          title={title}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          handleTitleChange={(e) => setTitle(e.target.value)}
          handleTitleBlur={() => setIsEditing(false)}
          handleTitleKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
          showLanguages={showLanguages}
          setShowLanguages={setShowLanguages}
          selectedLanguage={selectedLanguage}
          handleLanguageSelect={setSelectedLanguage}
          languages={languages}
          onSave={handleSaveResume}
          isSaving={isSaving}
        />

        <div className="p-6 max-w-4xl mx-auto">
          <ResumeScore score={resumeScore} />

          {submitError && (
            <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-lg">
              {submitError}
            </div>
          )}

          {/* Personal Details */}
          <PersonalDetails
            personalDetails={personalDetails}
            errors={personalDetailsErrors}
            onChange={handlePersonalDetailsChange}
            onBlur={handlePersonalDetailsBlur}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            showMoreDetails={showMoreDetails}
            setShowMoreDetails={setShowMoreDetails}
            onImageUpload={handleImageUpload}
            isUploading={isUploading}
            imageError={imageError}
            fileInputRef={fileInputRef}
          />

          {/* Professional Summary */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-lg font-medium mb-2">Professional Summary</h2>
            <p className="text-gray-600 mb-4">
              Write 2-4 short, energetic sentences about your achievements, skills and experience.
            </p>
            <div className="mb-4">
              <div className="flex space-x-2 mb-2 border-b pb-2">
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Bold size={16} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Italic size={16} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Underline size={16} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <ListIcon size={16} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Link2 size={16} />
                </button>
                <div className="flex-grow" />
                <button className="text-blue-500 flex items-center">
                  Get help with writing
                  <Plus size={16} className="ml-1" />
                </button>
              </div>
              <textarea
                value={professionalSummary}
                onChange={(e) => setProfessionalSummary(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[100px]"
              />
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>Recruiter tip: write 400-600 characters to increase interview chances</span>
                <span>{professionalSummary.length} / 600</span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-lg font-medium mb-2">Skills</h2>
            <p className="text-gray-600 mb-4">
              Choose 5 important skills that show you fit the position.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg flex items-center gap-2"
                >
                  {skill}
                  <button 
                    onClick={() => handleSkillRemove(skill)}
                    className="hover:text-blue-700"
                  >
                    <MinusCircle size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                !selectedSkills.includes(skill) && (
                  <button
                    key={index}
                    onClick={() => handleSkillSelect(skill)}
                    className="bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded-lg flex items-center gap-2"
                  >
                    {skill}
                    <Plus size={16} className="text-gray-400" />
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Employment History */}
          <EmploymentSection
            employment={employmentHistory}
            setEmployment={setEmploymentHistory}
          />

          {/* Education */}
          <EducationSection
            education={education}
            setEducation={setEducation}
          />

          {/* Website Links */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-2">Websites & Social Links</h2>
            <p className="text-gray-600 mb-4">
              Add your portfolio, LinkedIn, or other relevant links.
            </p>
            <div className="space-y-4">
              {websiteLinks.map((link, index) => (
                <div key={index} className="flex gap-4">
                  <input
                    type="text"
                    value={link.label}
                    onChange={(e) => {
                      const newLinks = [...websiteLinks];
                      newLinks[index].label = e.target.value;
                      setWebsiteLinks(newLinks);
                    }}
                    placeholder="Label (e.g., Portfolio)"
                    className="flex-1 p-3 bg-gray-50 rounded-lg border"
                  />
                  <input
                    type="url"
                    value={link.url}
                    onChange={(e) => {
                      const newLinks = [...websiteLinks];
                      newLinks[index].url = e.target.value;
                      setWebsiteLinks(newLinks);
                    }}
                    placeholder="URL (e.g., https://...)"
                    className="flex-1 p-3 bg-gray-50 rounded-lg border"
                  />
                  <button
                    onClick={() => {
                      setWebsiteLinks(websiteLinks.filter((_, i) => i !== index));
                    }}
                    className="text-red-500 hover:text-red-600 p-2"
                  >
                    <MinusCircle size={20} />
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  setWebsiteLinks([...websiteLinks, { label: '', url: '' }]);
                }}
                className="flex items-center text-blue-500 hover:text-blue-600"
              >
                <Plus size={20} className="mr-2" />
                Add link
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Preview */}
      <div className="w-[600px] bg-gray-100 p-6 sticky top-0 h-screen overflow-auto border-l">
        <ResumePreview 
          personalDetails={personalDetails}
          profileImage={profileImage}
          professionalSummary={professionalSummary}
          selectedSkills={selectedSkills}
          employmentHistory={employmentHistory}
          education={education}
          websiteLinks={websiteLinks}
        />
      </div>
    </div>
  );
};

export default ResumeBuilder;