import { useState } from 'react';

const useProductLimit = (initialValue: number) => {
  const [productLimit, setProductLimit] = useState<number>(initialValue);

  // Function to handle changes in input
  const handleProductLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Checks whether the value is a valid number and whether it is greater than or equal to zero
    const parsedValue = Number(value);

    // Ensure the value is a number and is not negative
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setProductLimit(parsedValue); // Updates the state with the entered value
    }
  };

  return {
    productLimit,
    handleProductLimitChange,
  };
};

export default useProductLimit;
