import { IoLocationSharp } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

// Função de validação
const validateField = (name: string, value: string) => {
  if (name === "firstName") {
    if (!value.trim()) {
      return "Name is required";
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

const Contacts = () => {
  const [formFields, setFormFields] = useState({
    key: "",
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Função de alteração de campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Atualiza o valor do campo
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));

    // Validar o campo
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar todos os campos antes de enviar o formulário
    const formErrors: Record<string, string> = {};
    Object.keys(formFields).forEach((key) => {
      const error = validateField(key, formFields[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    // Se houver erros, não envia o formulário
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Enviar o formulário (simulado aqui)
      alert("Form submitted!");
    }
  };

  return (
    <>
      <div className="w-full h-[1144px] flex flex-col items-center mt-[98px]">
        <h2 className="text-[36px] font-semibold mb-[7px]">Get In Touch With Us</h2>
        <p className="text-gray50 mb-[14px] w-[644px] text-center">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        <div className="w-[1058px] h-[923px] flex justify-between">
          <div className="w-[393px] h-[537px] flex flex-col justify-center items-center gap-y-[45px] mt-[68px]">
            <div className="w-[254px] h-[120px] flex justify-between">
              <IoLocationSharp className="w-[22px] h-[27.59px]" />
              <div>
                <h2 className="text-[24px] font-medium mt-[11.88px]">Address</h2>
                <p className="w-[212px] text-[16px]">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="w-[254px] h-[120px] flex justify-between">
              <FaPhoneAlt className="w-[22px] h-[27.59px]" />
              <div>
                <h2 className="text-[24px] font-medium mt-[11.88px]">Phone</h2>
                <p className="w-[212px] text-[16px]">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="w-[254px] h-[120px] flex justify-between">
              <BsFillClockFill className="w-[22px] h-[27.59px]" />
              <div>
                <h2 className="text-[24px] font-medium mt-[11.88px]">Working Time</h2>
                <p className="w-[212px] text-[16px]">
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[635px] h-[923px]">
            <form onSubmit={handleSubmit} className="w-[532px] h-[741px] mx-auto mt-[119px] flex flex-col justify-between">
              <div className="w-[530px] h-[121px] flex flex-col ">
                <label htmlFor="firstName" className="mb-[22px]">Your name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Name"
                  value={formFields.firstName}
                  onChange={handleChange}
                  className={`border border-gray50 h-[75px] rounded-xl pl-[31px] ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div className="w-[530px] h-[121px] flex flex-col ">
                <label htmlFor="email" className="mb-[22px]">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formFields.email}
                  onChange={handleChange}
                  className={`border border-gray50 min-h-[75px] rounded-xl pl-[31px] ${
                    errors.email ? "border-red-500" : ""
                  } `}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="w-[530px] h-[121px] flex flex-col ">
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
              <div className="w-[530px] h-[166px] flex flex-col ">
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
                className="bg-textOrange w-[237px] h-[55px] text-white rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
