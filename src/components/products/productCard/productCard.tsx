import { productslocalization } from "@/constants/localization/Localization";
import Link from "next/link";

export interface IProductCard {
  productName: string;
  productPrice: string;
  productStock: string;
  productType: string;
  productStatus: string;
  productImage: string;
  id: string;
}

export default function ProductCard({ data }: { data: IProductCard }) {
  return (
    <Link href={`/singleProduct/${data.id}`}>
      <div className="flex flex-col gap-5 justify-center items-center w-52 h-80 rounded-lg bg-gray-300 hover:shadow-xl hover:-m-1.5">
        <img
          className=" w-28 h-32 rounded-md"
          src={data.productImage}
          alt={data.productName}
        />
        <h1 className="font-bold text-xl number">{data.productName}</h1>
        <div className="flex justify-center items-center gap-1">
          <p className="text-md flex items-center font-semibold number">
            {data.productPrice}
          </p>
          <p className="vazir-thin text-sm">{productslocalization["price"]}</p>
        </div>
      </div>
    </Link>
  );
}
