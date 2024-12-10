import { useState } from "react";

const useProductSort = (products) => {
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSortChange = (value) => {
    const sortedItems = [...products]; // Cria uma cópia para evitar mutação

    switch (value) {
      case "price":
        sortedItems.sort((a, b) => a.price - b.price); // Ordena por preço do menor ao maior
        break;
      case "newest":
        sortedItems.sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordena pelos mais novos
        break;
      case "cheapest":
        sortedItems.sort((a, b) => a.price - b.price); // Mais baratos
        break;
      case "mostExpensive":
        sortedItems.sort((a, b) => b.price - a.price); // Mais caros
        break;
      default:
        setSortedProducts(products); // Reseta para a lista original
        return;
    }

    setSortedProducts(sortedItems);
  };

  return { sortedProducts, handleSortChange };
};

export default useProductSort;
