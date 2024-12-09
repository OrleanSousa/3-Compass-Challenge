export const validateField = (name: string, value: string) => {
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
    if (name === "message" && !value.trim()) {
      return "Message is required";
    }
    return "";
  };