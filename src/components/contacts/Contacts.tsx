import { IoLocationSharp } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import styles from './Contacts.module.css'; // Importando o módulo CSS



// Função de validação
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
  if (name === "message" && !value.trim()) {
    return "Message is required";
  }
  return "";
};

const Contacts = () => {
  const [formFields, setFormFields] = useState({
    key: "",
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors: Record<string, string> = {};
    Object.keys(formFields).forEach((key) => {
      const error = validateField(key, formFields[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      alert("Form submitted!");
      // Limpa os campos após o envio
      setFormFields({
        key: "",
        firstName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Get In Touch With Us</h2>
      <p className={styles.description}>
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
        Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>
      <div className="w-[1058px] h-[923px] flex justify-between">
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <IoLocationSharp className="w-[22px] h-[27.59px]" />
            <div>
              <h2 className="text-[24px] font-medium mt-[11.88px]">Address</h2>
              <p className="w-[212px] text-[16px]">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FaPhoneAlt className="w-[22px] h-[27.59px]" />
            <div>
              <h2 className="text-[24px] font-medium mt-[11.88px]">Phone</h2>
              <p className="w-[212px] text-[16px]">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <BsFillClockFill className="w-[22px] h-[27.59px]" />
            <div>
              <h2 className="text-[24px] font-medium mt-[11.88px]">Working Time</h2>
              <p className="w-[212px] text-[16px]">
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="firstName" className="mb-[22px]">Your name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Name"
                value={formFields.firstName}
                onChange={handleChange}
                className={`${styles.input} ${errors.firstName ? styles.inputError : ""}`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email" className="mb-[22px]">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formFields.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="subject" className="mb-[22px]">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="This is optional"
                value={formFields.subject}
                onChange={handleChange}
                className="border border-gray50 h-[75px] rounded-xl pl-[31px]"
              />
            </div>
            <div className={styles.messageContainer}>
              <label htmlFor="message" className="mb-[22px]">Message</label>
              <input
                type="text"
                name="message"
                placeholder="Hi! I’d like to ask about"
                value={formFields.message}
                onChange={handleChange}
                className="border border-gray50 h-[120px] rounded-xl pl-[31px]"
              />
            </div>
            <button
              type="submit"
              className={styles.submitButton}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;