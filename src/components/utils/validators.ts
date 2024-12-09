// Função para validar campos
export const validateField = (name: string, value: string): string => {
    let error = "";
  
    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[A-Za-zÀ-ÿ\s]*$/.test(value)) {
          error = "This field can only contain letters.";
        }
        break;
      case "zipCode":
        if (!/^\d{5}-\d{3}$/.test(value)) {
          error = "ZIP code must follow the format 00000-000.";
        }
        break;
      default:
        break;
    }
  
    return error;
  };
  
  // Função para formatar valores (como CEP)
  export const formatFieldValue = (name: string, value: string): string => {
    let formattedValue = value;
  
    if (name === "zipCode") {
      formattedValue = value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
    }
  
    return formattedValue;
  };
  