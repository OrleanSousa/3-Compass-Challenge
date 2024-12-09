import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import axios from "axios";
import { validateField, formatFieldValue } from "../utils/validators"; // Ajuste o caminho conforme necessário

const CheckoutPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    zipCode: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    email: "",
    companyName: "",
    addOnAddress: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

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

    // Formatar o valor conforme necessário
    const formattedValue = formatFieldValue(name, value);

    // Atualizar o estado do campo
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: formattedValue,
    }));

    // Validar o campo
    const error = validateField(name, formattedValue);
    setErrors((prevErrors) => ({
      ...prevErrors,
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
        <div className="w-[608px] h-[1714px] pl-[75px] pt-[35px] flex flex-col gap-[36px]">
          <h2 className="font-semibold text-3xl">Billing details</h2>

          <div className="flex gap-[31px]">
            <div className="flex flex-col w-[212px] h-[121px] gap-[22px]">
              <label htmlFor="firstName" className="font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formFields.firstName}
                onChange={handleChange}
                className={`w-[211px] h-[75px] rounded-xl border ${
                  errors.firstName ? "border-red-500" : "border-gray50"
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div className="flex flex-col w-[212px] h-[121px] gap-[22px]">
              <label htmlFor="lastName" className="font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formFields.lastName}
                onChange={handleChange}
                className={`w-[211px] h-[75px] rounded-xl border ${
                  errors.lastName ? "border-red-500" : "border-gray50"
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className="flex flex-col w-[453px] h-[121px] gap-[22px]">
            <label htmlFor="zipCode" className="font-medium">ZIP code</label>
            <input
              type="text"
              name="zipCode"
              value={formFields.zipCode}
              onChange={handleZipCodeChange} // Mudança no evento para chamar a função de CEP
              className={`w-[453px] h-[75px] rounded-xl border ${
                errors.zipCode ? "border-red-500" : "border-gray50"
              }`}
            />
            {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
          </div>

          <div className="flex flex-col w-[453px] h-[121px] gap-[22px]">
            <label htmlFor="country" className="font-medium">Country / Region</label>
            <input
              type="text"
              name="country"
              value={formFields.country}
              onChange={handleChange}
              className={`w-[453px] h-[75px] rounded-xl border ${
                errors.country ? "border-red-500" : "border-gray50"
              }`}
            />
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          </div>

          <div className="flex flex-col w-[453px] h-[121px] gap-[22px]">
            <label htmlFor="streetAddress" className="font-medium">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              value={formFields.streetAddress}
              onChange={handleChange}
              className={`w-[453px] h-[75px] rounded-xl border ${
                errors.streetAddress ? "border-red-500" : "border-gray50"
              }`}
            />
            {errors.streetAddress && <p className="text-red-500 text-sm">{errors.streetAddress}</p>}
          </div>

          <div className="flex flex-col w-[453px] h-[121px] gap-[22px]">
            <label htmlFor="city" className="font-medium">Town / City</label>
            <input
              type="text"
              name="city"
              value={formFields.city}
              onChange={handleChange}
              className={`w-[453px] h-[75px] rounded-xl border ${
                errors.city ? "border-red-500" : "border-gray50"
              }`}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>

          <div className="flex flex-col w-[453px] h-[121px] gap-[22px]">
            <label htmlFor="province" className="font-medium">Province</label>
            <input
              type="text"
              name="province"
              value={formFields.province}
              onChange={handleChange}
              className={`w-[453px] h-[75px] rounded-xl border ${
                errors.province ? "border-red-500" : "border-gray50"
              }`}
            />
            {errors.province && <p className="text-red-500 text-sm">{errors.province}</p>}
          </div>

          <div className="flex flex-col w-[453px] h-[121px] gap-[22px]">
            <label htmlFor="companyName" className="font-medium">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formFields.companyName}
              onChange={handleChange}
              className={`w-[453px] h-[75px] rounded-xl border ${
                errors.companyName ? "border-red-500" : "border-gray50"
              }`}
            />
            {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
          </div>

        </div>

        {/* Resumo do carrinho */}
        



<div className="w-full max-w-[608px] h-[789px] flex items-center justify-center">
<div className="w-full max-w-[533px] h-auto flex flex-col justify-between p-[16px]">
  {/* Resumo */}
  <div className="w-full max-w-[608px] h-[789px]  flex items-center justify-center">
<div className="w-full max-w-[533px] h-auto flex flex-col justify-between p-[16px]">
<div>
<div className="flex w-full justify-between">
<p className="font-medium text-2xl">Product</p>
<p className="font-medium text-2xl">Subtotal</p>
</div>
{cartItems.map((item) => (
<div key={item.id} className="flex w-full justify-between mt-[14px]">
<p className="font-light">{item.productName} x {item.quantity}</p>
<p className="font-light">Rs. {(item.price * item.quantity).toLocaleString()}</p>
</div>
))}
<div className="flex w-full justify-between mt-[22px]">
<p>Subtotal</p>
<p className="font-light">Rs. {subtotal.toLocaleString()}</p>
</div>
<div className="flex w-full justify-between mt-[22px]">
<p>Total</p>
<p className="text-2xl font-bold text-textOrange">Rs. {subtotal.toLocaleString()}</p>
</div>
<div className="border border-b-gray50 mt-[33.5px] w-full mx-auto"></div>
</div>

<div className="w-full flex flex-col space-y-[22px] mt-[22px]">
<div className="flex items-center gap-[15px]">
<label className="inline-flex items-center cursor-pointer">
<input type="checkbox" className="opacity-0 peer" />
<span className="w-[14px] h-[14px] border border-black rounded-full peer-checked:bg-black -ml-[12px]"></span>
</label>
<p>Direct Bank Transfer</p>
</div>
<p className="font-light text-gray50">Make your payment directly into our bank account. 
Please use your Order ID as the payment reference. 
Your order will not be shipped until the funds have cleared in our account.</p>

<div className="flex items-center gap-[15px]">
<label className="inline-flex items-center cursor-pointer">
<input type="checkbox" className="opacity-0 peer" />
<span className="w-[14px] h-[14px] border border-black rounded-full peer-checked:bg-black -ml-[12px]"></span>
</label>
<p>Direct Bank Transfer</p>
</div>

<div className="flex items-center gap-[15px]">
<label className="inline-flex items-center cursor-pointer">
<input type="checkbox" className="opacity-0 peer" />
<span className="w-[14px] h-[14px] border border-black rounded-full peer-checked:bg-black -ml-[12px]"></span>
</label>
<p>Cash On Delivery</p>
</div>
<p className="font-light text-gray50">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
</div>

<div className="flex justify-center mt-[22px]">
<button className="w-[318px] h-[64px] text-[20px] rounded-[15px] border border-black mt-[17px] cursor-pointer">Place order</button>
</div>
</div>
</div>
</div>
</div>
      </div>
    </div>
  );
};

export default CheckoutPage;
