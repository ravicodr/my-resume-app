import { useState, useCallback } from 'react';

export const useFieldArray = (initialState = []) => {
  const [fields, setFields] = useState(initialState);
  
  const append = useCallback((value) => {
    setFields(prev => [...prev, value]);
  }, []);

  const remove = useCallback((index) => {
    setFields(prev => prev.filter((_, i) => i !== index));
  }, []);

  const update = useCallback((index, value) => {
    setFields(prev => prev.map((item, i) => i === index ? value : item));
  }, []);

  const move = useCallback((from, to) => {
    setFields(prev => {
      const newFields = [...prev];
      const [removed] = newFields.splice(from, 1);
      newFields.splice(to, 0, removed);
      return newFields;
    });
  }, []);

  return {
    fields,
    append,
    remove,
    update,
    move,
    setFields
  };
};

export default useFieldArray;