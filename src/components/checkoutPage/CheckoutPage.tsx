import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import axios from "axios";
import { validateField, formatFieldValue } from "../utils/validators";
import styles from "./resumeCart.module.css" // Ajuste o caminho conforme necessário
import styles1 from "./BillingDetails.module.css" // Ajuste o caminho conforme necessário

const CheckoutPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    zipCode: '',
    streetAddress: '',
    city: '',
    province: '',
    country: '',
    companyName: '',
    addOnAddress: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    zipCode: '',
    streetAddress: '',
    city: '',
    province: '',
    country: '',
    companyName: '',
    addOnAddress: '',
    email: '',
  });



  // Função para preencher o formulário com base no CEP
  const handleCepChange = async (cep: string) => {
    if (!cep || cep.length !== 8) return; // Garantir que o CEP tenha 8 dígitos

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (data.erro) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          zipCode: "CEP não encontrado",
        }));
      } else {
        setFormFields((prevFields) => ({
          ...prevFields,
          streetAddress: data.logradouro,
          city: data.localidade,
          province: data.uf,
          country: "Brasil", // Definindo o país como Brasil por padrão
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          zipCode: "",
        }));
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        zipCode: "Erro ao buscar o CEP",
      }));
    }
  };

  // Handler para onChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Atualizar o valor do campo e formatá-lo (se necessário)
    const formattedValue = formatFieldValue(name, value);

    setFormFields((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    // Validar o campo assim que o usuário digitar
    const error = validateField(name, formattedValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Handler para o campo CEP
  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      zipCode: value,
    }));

    // Chamar a função para buscar o CEP sempre que o valor mudar
    handleCepChange(value);
  };

  return (
    <div className="w-[1440px] h-[1829px] flex justify-center items-center">
      <div className="w-[1242px] h-[1714px] flex justify-between">
      <div className={styles1.container}>
      <h2 className={styles1.header}>Billing details</h2>

      <div className="flex gap-[31px]">
        <div className={styles1.inputContainer}>
          <label htmlFor="firstName" className={styles1.inputLabel}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formFields.firstName}
            onChange={handleChange}
            className={`${styles1.inputFieldName} ${errors.firstName ? "border-red-500" : "border-gray50"}`}
          />
          {errors.firstName && <p className={styles1.errorText}>{errors.firstName}</p>}
        </div>

        <div className={styles1.inputContainer}>
          <label htmlFor="lastName" className={styles1.inputLabel}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formFields.lastName}
            onChange={handleChange}
            className={`${styles1.inputFieldName} ${errors.lastName ? "border-red-500" : "border-gray50"}`}
          />
          {errors.lastName && <p className={styles1.errorText}>{errors.lastName}</p>}
        </div>
      </div>

      <div className={styles1.inputContainer}>
        <label htmlFor="companyName" className={styles1.optionalLabel}>Company Name (Optional)</label>
        <input
          type="text"
          name="companyName"
          value={formFields.companyName}
          onChange={handleChange}
          className={`${styles1.optionalInput} ${errors.companyName ? "border-red-500" : "border-gray50"}`}
        />
        {errors.companyName && <p className={styles.errorText}>{errors.companyName}</p>}
      </div>

      <div className={styles1.inputContainer}>
        <label htmlFor="zipCode" className={styles1.inputLabel}>ZIP code</label>
        <input
          type="text"
          name="zipCode"
          value={formFields.zipCode}
          onChange={handleZipCodeChange}
          className={`${styles1.inputField} ${errors.zipCode ? "border-red-500" : "border-gray50"}`}
        />
        {errors.zipCode && <p className={styles1.errorText}>{errors.zipCode}</p>}
      </div>

      <div className={styles1.inputContainer}>
        <label htmlFor="country" className={styles1.inputLabel}>Country / Region</label>
        <input
          type="text"
          name="country"
          value={formFields.country}
          onChange={handleChange}
          className={`${styles1.inputField} ${errors.country ? "border-red-500" : "border-gray50"}`}
        />
        {errors.country && <p className={styles1.errorText}>{errors.country}</p>}
      </div>

      <div className={styles1.inputContainer}>
        <label htmlFor="streetAddress" className={styles1.inputLabel}>Street Address</label>
        <input
          type="text"
          name="streetAddress"
          value={formFields.streetAddress}
          onChange={handleChange}
          className={`${styles1.inputField} ${errors.streetAddress ? "border-red-500" : "border-gray50"}`}
        />
        {errors.streetAddress && <p className={styles1.errorText}>{errors.streetAddress}</p>}
      </div>

      <div className={styles1.inputContainer}>
        <label htmlFor="city" className={styles1.inputLabel}>Town / City</label>
        <input
          type="text"
          name="city"
          value={formFields.city}
          onChange={handleChange}
          className={`${styles1.inputField} ${errors.city ? "border-red-500" : "border-gray50"}`}
        />
        {errors.city && <p className={styles1.errorText}>{errors.city}</p>}
      </div>

      <div className={styles1.inputContainer}>
        <label htmlFor="province" className={styles1.inputLabel}>Province</label>
        <input
          type="text"
          name="province"
          value={formFields.province}
          onChange={handleChange}
          className={`${styles1.inputField} ${errors.province ? "border-red-500" : "border-gray50"}`}
        />
        {errors.province && <p className={styles1.errorText}>{errors.province}</p>}
      </div>

      <div className={styles1.inputContainer}>
        <label htmlFor="address" className={styles1.inputLabel}>Add-on address</label>
        <input
          type="text"
          name="address"
          value={formFields.addOnAddress}
          onChange={handleChange}
          className={`${styles1.inputField} ${errors.addOnAddress ? "border-red-500" : "border-gray50"}`}
        />
        {errors.addOnAddress && <p className={styles1.errorText}>{errors.addOnAddress}</p>}
      </div>

      <div className={styles1.inputContainer}>
        <label htmlFor="email" className={styles1.inputLabel}>Email address</label>
        <input
          type="email"
          name="email"
          value={formFields.email}
          onChange={handleChange}
          className={`${styles1.inputField} ${errors.email ? "border-red-500" : "border-gray50"}`}
        />
        {errors.email && <p className={styles1.errorText}>{errors.email}</p>}
      </div>

      <div className={styles1.inputContainer}>
        <input
          type="text"
          name="additionalInfo"
          placeholder="Additional information"
          onChange={handleChange}
          className={styles1.additionalInfoInput}
        />
      </div>
    </div>

        {/* Resumo do carrinho */}
        <div className={styles.container}>
      <div className={styles.card}>
        {/* Resumo */}
        <div>
          <div className="flex w-full justify-between">
            <p className={styles.summaryHeader}>Product</p>
            <p className={styles.summaryHeader}>Subtotal</p>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.productItem}>
              <p className="font-light">{item.productName} x {item.quantity}</p>
              <p className="font-light">Rs. {(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <div className={styles.totalRow}>
            <p>Subtotal</p>
            <p className="font-light">Rs. {subtotal.toLocaleString()}</p>
          </div>
          <div className={styles.totalRow}>
            <p>Total</p>
            <p className={styles.totalAmount}>Rs. {subtotal.toLocaleString()}</p>
          </div>
          <div className={styles.separator}></div>
        </div>

        <div className="w-full flex flex-col space-y-[22px] mt-[22px]">
          <div className={styles.paymentOption}>
            <label className={styles.paymentOptionLabel}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.checkboxIcon}></span>
            </label>
            <p>Direct Bank Transfer</p>
          </div>
          <p className={styles.paymentInfo}>
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>

          <div className={styles.paymentOption}>
            <label className={styles.paymentOptionLabel}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.checkboxIcon}></span>
            </label>
            <p>Direct Bank Transfer</p>
          </div>

          <div className={styles.paymentOption}>
            <label className={styles.paymentOptionLabel}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.checkboxIcon}></span>
            </label>
            <p>Cash On Delivery</p>
          </div>

          <p className={styles.termsText}>
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
          </p>
        </div>

        <div className="flex justify-center mt-[22px]">
          <button className={styles.placeOrderButton}>Place order</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
