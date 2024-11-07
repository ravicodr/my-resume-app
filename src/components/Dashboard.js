import React from 'react';

const Dashboard = () => {
  const navItems = [
    { symbol: "📊", text: "Dashboard", active: true },
    { symbol: "📄", text: "Documents", hasSubmenu: true },
    { symbol: "💼", text: "Recommended Jobs" },
    { symbol: "🎯", text: "Job Tracker" },
    { symbol: "💬", text: "Interview Prep" },
    { symbol: "💰", text: "Salary Analyzer" },
    { symbol: "🔍", text: "Job Search Method", hasSubmenu: true },
    { symbol: "👥", text: "Coaching" },
    { symbol: "•••", text: "Other", hasSubmenu: true }
  ];

  const steps = [
    {
      title: "Create your first resume",
      description: "Create or edit resumes with our easy-to-use builder. 20+ templates and advanced AI capabilities for customization and job-specific tailoring.",
      completed: false,
      preview: "/api/placeholder/200/150"
    },
    {
      title: "Explore your personalized job recommendations",
      description: "Get tailored job recommendations based on your profile.",
      completed: false
    },
    {
      title: "Save at least 5 jobs to your shortlist",
      description: "Build your job application pipeline.",
      completed: false
    },
    {
      title: "Complete your career growth assessment",
      description: "15 min • 11 questions",
      completed: false
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <img src="/api/placeholder/120/30" alt="Resume.io" className="mb-6" />
          
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
              RJ
            </div>
            <div>
              <h2 className="font-medium">Ravindra Jadhav</h2>
              <p className="text-sm text-gray-500">Set your target role</p>
            </div>
          </div>
        </div>

        <nav className="px-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center justify-between px-3 py-2 rounded-lg mb-1 ${
                item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{item.symbol}</span>
                <span>{item.text}</span>
              </div>
              {item.hasSubmenu && <span className="text-sm">›</span>}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Hi, Ravindra!</h1>
            <p className="text-gray-600">Complete these steps to land your next role</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <span className="text-gray-600">0 of 4</span>
              <span className="text-blue-600 ml-1">Completed</span>
            </div>
            <button className="bg-indigo-700 text-white px-4 py-2 rounded-lg">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="space-y-4 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {step.preview && (
                      <img src={step.preview} alt="Preview" className="rounded-lg" />
                    )}
                  </div>
                </div>
                <span className="text-gray-400 text-xl">›</span>
              </div>
            </div>
          ))}
        </div>

        {/* Documents Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-6">
              <h2 className="text-xl font-semibold">Documents</h2>
              <h2 className="text-xl text-gray-400">Job Tracker</h2>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <span className="text-xl">+</span>
              <span>Create New</span>
            </button>
          </div>

          <div className="flex space-x-6 mb-6">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-2">Resumes</button>
            <button className="text-gray-500 pb-2">Cover Letters</button>
            <button className="text-gray-500 pb-2">Auto Tailored Resumes</button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Existing Resume Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-emerald-800 h-40 rounded-lg mb-4"></div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Untitled</h3>
                  <span className="text-gray-500 text-sm">5 November, 09:51</span>
                </div>
                <div className="bg-pink-100 text-pink-600 text-sm px-2 py-1 rounded w-fit">
                  15% Your resume score
                </div>
                <div className="flex flex-col space-y-2">
                  <button className="text-blue-600 flex items-center space-x-2">
                    <span>🎯</span>
                    <span>Tailor to job listing</span>
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">NEW</span>
                  </button>
                  <button className="text-gray-600 flex items-center space-x-2">
                    <span>⬇️</span>
                    <span>Download PDF</span>
                  </button>
                  <button className="text-gray-600 flex items-center space-x-2">
                    <span>⬆️</span>
                    <span>Export to DOCX</span>
                  </button>
                </div>
              </div>
            </div>

            {/* New Resume Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-gray-400">+</span>
                </div>
                <h3 className="font-medium mb-2">New Resume</h3>
                <p className="text-gray-500 text-sm">
                  Create a tailored resume for each job application. Double your chances of getting hired!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;