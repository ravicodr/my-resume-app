export const calculateResumeScore = ({
    personalDetails,
    professionalSummary,
    profileImage,
    selectedSkills,
    employmentHistory,
    education
  }) => {
    let score = 0;
    
    // Personal details (25%)
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    const personalDetailsScore = requiredFields.reduce((acc, field) => {
      return acc + (personalDetails[field] ? 6.25 : 0);
    }, 0);
    score += personalDetailsScore;
  
    // Professional Summary (15%)
    const summaryLength = professionalSummary?.length || 0;
    const summaryScore = Math.min((summaryLength / 200) * 15, 15);
    score += summaryScore;
  
    // Profile Image (5%)
    if (profileImage) {
      score += 5;
    }
  
    // Skills (15%)
    const skillsScore = Math.min((selectedSkills.length / 5) * 15, 15);
    score += skillsScore;
  
    // Employment History (25%)
    const employmentScore = Math.min((employmentHistory.length / 2) * 25, 25);
    score += employmentScore;
  
    // Education (15%)
    const educationScore = Math.min((education.length / 1) * 15, 15);
    score += educationScore;
  
    return Math.round(score);
  };