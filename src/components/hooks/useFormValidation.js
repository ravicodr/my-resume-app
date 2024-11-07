import { useState, useCallback } from 'react';

export const useFormValidation = (initialState, validateFn) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((field, value) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  }, [errors]);

  const handleBlur = useCallback((field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));

    if (validateFn) {
      const fieldError = validateFn({ [field]: values[field] });
      if (fieldError[field]) {
        setErrors(prev => ({
          ...prev,
          [field]: fieldError[field]
        }));
      }
    }
  }, [values, validateFn]);

  const validateForm = useCallback(() => {
    if (!validateFn) return true;
    const validationErrors = validateFn(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [values, validateFn]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    validateForm,
    setValues,
    setErrors,
    setIsSubmitting
  };
};

export default useFormValidation;