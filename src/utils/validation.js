export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const validatePhone = (phone) => {
    const regex = /^\+?[\d\s-]{10,}$/;
    return regex.test(phone);
  };
  
  export const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  
  export const validateDate = (date) => {
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    return regex.test(date);
  };
  
  export const validatePersonalDetails = (details) => {
    const errors = {};
    
    if (!details.firstName?.trim()) errors.firstName = 'First name is required';
    if (!details.lastName?.trim()) errors.lastName = 'Last name is required';
    if (!details.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(details.email)) {
      errors.email = 'Invalid email format';
    }
    if (!details.phone?.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!validatePhone(details.phone)) {
      errors.phone = 'Invalid phone format';
    }
  
    return errors;
  };
  
  export const validateEmployment = (employment) => {
    const errors = {};
    
    if (!employment.title?.trim()) errors.title = 'Job title is required';
    if (!employment.company?.trim()) errors.company = 'Company name is required';
    if (!employment.startDate) errors.startDate = 'Start date is required';
    if (!validateDate(employment.startDate)) errors.startDate = 'Invalid date format';
    if (employment.endDate && !validateDate(employment.endDate)) {
      errors.endDate = 'Invalid date format';
    }
  
    return errors;
  };
  
  export const validateEducation = (education) => {
    const errors = {};
    
    if (!education.degree?.trim()) errors.degree = 'Degree is required';
    if (!education.institution?.trim()) errors.institution = 'Institution is required';
    if (!education.startDate) errors.startDate = 'Start date is required';
    if (!validateDate(education.startDate)) errors.startDate = 'Invalid date format';
    if (education.endDate && !validateDate(education.endDate)) {
      errors.endDate = 'Invalid date format';
    }
  
    return errors;
  };
  
  export const validateWebsiteLink = (link) => {
    const errors = {};
    
    if (!link.label?.trim()) errors.label = 'Label is required';
    if (!link.url?.trim()) {
      errors.url = 'URL is required';
    } else if (!validateUrl(link.url)) {
      errors.url = 'Invalid URL format';
    }
  
    return errors;
  };