// Função para validar campos
export const validateField = (name: string, value: string) => {
  let error = "";

  switch (name) {
    case "firstName":
    case "lastName":
      // Validação para aceitar apenas letras
      if (!/^[A-Za-zÀ-ÿ\s]*$/.test(value)) {
        error = "This field can only contain letters.";
      }
      break;
    
    case "zipCode":
      // Validação para o formato do CEP
      if (!/^\d{5}-\d{3}$/.test(value)) {
        error = "ZIP code must follow the format 00000-000.";
      }
      break;

    case "email":
      // Validação para o formato de email
      if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Please enter a valid email address.";
      }
      break;

    default:
      break;
  }

  return error;
};

// Função para formatar valores (como CEP)
export const formatFieldValue = (name: string, value: string) => {
  let formattedValue = value;

  // Formatar o campo de CEP para o formato 00000-000
  if (name === "zipCode") {
    formattedValue = value.replace(/\D/g, "") // Remove caracteres não numéricos
                          .replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o hífen
  }

  return formattedValue;
};
