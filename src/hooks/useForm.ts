// useForm.ts
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useForm = (initialState: any) => {
  const [formFields, setFormFields] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Função de validação de campos individuais
  const validateField = (name: string, value: string) => {
    if (name === "firstName") {
      if (!value.trim()) {
        return "Name is required";
      }
      const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(value)) {
        return "Name must contain only letters";
      }
    }
    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value.trim()) {
        return "Email is required";
      }
      if (!emailRegex.test(value)) {
        return "Invalid email format";
      }
    }
    return "";
  };

  // Função de alteração dos campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));

    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  // Função para validar todos os campos
  const validateAllFields = () => {
    const formErrors: Record<string, string> = {};
    Object.keys(formFields).forEach((key) => {
      const error = validateField(key, formFields[key]);
      if (error) {
        formErrors[key] = error;
      }
    });
    return formErrors;
  };

  return { formFields, errors, handleChange, validateAllFields, setFormFields };
};

export { useForm };
