export const formFieldFormat = (fieldNames: string[]): Record<string, boolean> => {
    const allFields = ['name', 'email', 'people', 'date', 'phone', 'message'];
  
    // Create an object with all fields set to false
    const formFields: Record<string, boolean> = {};
    allFields.forEach((field) => {
      formFields[field] = false;
    });
  
    // Set the fields to true if they appear in the received array
    fieldNames.forEach((field) => {
      if (allFields.includes(field)) {
        formFields[field] = true;
      }
    });
  
    return formFields;
  };