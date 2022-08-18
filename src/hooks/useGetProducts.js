import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
		const response = await axios.get(API);
		setProducts(response.data);
	}

	useEffect(() => {
		getProducts();
	}, []);

  return products;
};

export default useGetProducts;