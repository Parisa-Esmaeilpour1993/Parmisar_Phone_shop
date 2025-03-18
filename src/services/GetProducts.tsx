"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Loading from "@/components/Loading/Loading";
import { API_KEY, BASE_URL } from "./Api";
import ProductCard, {
  IProductCard,
} from "@/components/products/productCard/productCard";
import { useEffect, useState } from "react";
import axios from "axios";

const GetProducts = () => {
  const [products, setProducts] = useState<IProductCard[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const filter = searchParams.get("brand") || "all"; // مقدار پارامتر از URL
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.productType === filter);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/api/records/products`, {
        headers: { api_key: API_KEY },
      });

      console.log("API Response:", response.data);

      if (response.data?.records && Array.isArray(response.data.records)) {
        setProducts(response.data.records);
      } else {
        console.error("Unexpected API response format:", response.data);
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-10 mt-8">
      {loading ? (
        <Loading />
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))
      ) : (
        <p className="absolute text-center">محصولی یافت نشد</p>
      )}
    </div>
  );
};

export default GetProducts;
