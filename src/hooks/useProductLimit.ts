// src/hooks/useProductLimit.ts

import { useState } from 'react';

const useProductLimit = (initialValue: number) => {
  const [productLimit, setProductLimit] = useState<number>(initialValue);

  // Função para lidar com mudanças no input
  const handleProductLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Verifica se o valor é um número válido e se é maior ou igual a zero
    const parsedValue = Number(value);

    // Garantir que o valor seja um número e não seja negativo
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setProductLimit(parsedValue); // Atualiza o estado com o valor digitado
    }
  };

  return {
    productLimit,
    handleProductLimitChange,
  };
};

export default useProductLimit;
