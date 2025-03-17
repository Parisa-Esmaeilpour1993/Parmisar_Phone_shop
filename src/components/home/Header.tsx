"use client";
import logo from "@/assets/images/logo.png";
import { headerLocalization } from "@/constants/localization/Localization";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import Navbar from "./Navbar";
import { ProductsProps } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { API_KEY, BASE_URL } from "@/services/Api";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsProps[]>([]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/records/products`, {
      headers: {
        api_key: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.records);
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.productName?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]);

  const handleProductClick = (id: string) => {
    router.push(`/singleProduct/${id}`);
    setSearchQuery("");
    setFilteredProducts([]);
  };

  return (
    <header className="flex justify-between items-center py-6 px-20 shadow-sm">
      <div className="flex gap-2">
        <Image src={logo} alt="Parmisar_Logo" className="size-11" />
        <p className="text-4xl font-extrabold">{headerLocalization.parmisar}</p>
      </div>
      <Navbar />
      <div className="flex items-center justify-center gap-2">
        <div
          className="border-[1px] rounded-xl border-gray-500 p-2 w-10 h-10 flex items-center justify-center active:scale-95 hover:border-gray-700 hover:border-[2px]"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <RiSearch2Line className="size-5" />
        </div>

        {searchOpen && (
          <div className="relative flex flex-col w-72 bg-white ">
            <input
              ref={searchInputRef}
              type="text"
              placeholder={headerLocalization.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 rounded-md outline-none focus:border-2"
            />

            {filteredProducts.length > 0 && (
              <div
                ref={dropdownRef}
                className="absolute mt-12 w-full bg-white border rounded-md shadow-lg z-50"
              >
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-100"
                    onClick={() => handleProductClick(product.id)}
                  >
                    {product.productName}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="border-[1px] rounded-xl border-gray-500 p-2 w-10 h-10 flex items-center justify-center active:scale-95 hover:border-gray-700 hover:border-[2px]">
          <FaRegUser className="size-5" />
        </div>
      </div>
    </header>
  );
}
