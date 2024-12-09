// Function to validate fields
export const validateField = (name: string, value: string) => {
  let error = "";

  switch (name) {
    case "firstName":
    case "lastName":
      // Validation to accept letters only
      if (!/^[A-Za-zÀ-ÿ\s]*$/.test(value)) {
        error = "This field can only contain letters.";
      }
      break;
    
    case "zipCode":
      // Validation for zip code format
      if (!/^\d{5}-\d{3}$/.test(value)) {
        error = "ZIP code must follow the format 00000-000.";
      }
      break;

    case "email":
      // Validation for email format
      if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Please enter a valid email address.";
      }
      break;

    default:
      break;
  }

  return error;
};

// Function to format values such as ZIP code
export const formatFieldValue = (name: string, value: string) => {
  let formattedValue = value;

  // Format the zip code field to the format 00000-000
  if (name === "zipCode") {
    formattedValue = value.replace(/\D/g, "") // Remove non-numeric characters
                          .replace(/(\d{5})(\d)/, "$1-$2"); // Add the hyphen
  }

  return formattedValue;
};
