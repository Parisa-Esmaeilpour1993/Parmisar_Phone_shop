import RouterBack from "@/components/singleProduct/router";
import ColorSelector from "@/components/singleProduct/selectColor";
import { singleProductLoclization } from "@/constants/localization/Localization";
import { API_KEY, BASE_URL } from "@/services/Api";

async function getData(id: number | string) {
  const response = await fetch(`${BASE_URL}/api/records/products/${id}`, {
    headers: { api_key: API_KEY },
  });
  const result = await response.json();
  console.log(result);
  return result;
}

export default async function SingleProduct({
  params,
}: {
  params: Promise<{ id: number | string }>;
}) {
  const { id } = await params;
  const product = await getData(id);
  return (
    <div className="flex gap-8 number vazir">
      <section className="w-full text-center flex justify-center items-center bg-gray-100 p-10">
        <img
          src={`${BASE_URL}${product.productImage}`}
          alt={product.productName}
          className="max-h-[500px]"
        />
      </section>
      <section className="px-10 py-8 w-full flex flex-col justify-between gap-5 relative">
        <RouterBack />
        <div className="w-full">
          <h1 className="text-3xl font-semibold">{product.productName}</h1>
          <div>
            <ColorSelector />
          </div>
          <div className="">
            <p>{singleProductLoclization.details} :</p>
            <div className="flex justify-between px-20 py-3 hover:bg-blue-100 rounded-2xl">
              <h2>{singleProductLoclization.color}</h2>
              <div className="flex gap-10">
                <h2>{singleProductLoclization.black}</h2>
                <h2>{singleProductLoclization.white}</h2>
              </div>
            </div>
            <div className="flex justify-between px-20 py-3 hover:bg-blue-100 rounded-2xl">
              <h2>{singleProductLoclization.os}</h2>
              <h2>IOS</h2>
            </div>
            <div className="flex justify-between px-20 py-3 hover:bg-blue-100 rounded-2xl">
              <h2>{singleProductLoclization.screen}</h2>
              <h2>{singleProductLoclization.inch} 6.67</h2>
            </div>
            <div className="flex justify-between px-20 py-3 hover:bg-blue-100 rounded-2xl">
              <h2>{singleProductLoclization["5g"]}</h2>
              <h2>{singleProductLoclization.have}</h2>
            </div>
            <div className="flex justify-between px-20 py-3 hover:bg-blue-100 rounded-2xl">
              <h2>{singleProductLoclization.ramAndSd}</h2>
              <div>
                {" "}
                <div className="flex gap-10">
                  <h2>512{singleProductLoclization.GB}</h2>/<h2>8</h2>
                </div>
                <div className="flex gap-10">
                  <h2>512{singleProductLoclization.GB}</h2>/<h2>12</h2>
                </div>
                <div className="flex gap-10">
                  <h2>512{singleProductLoclization.GB}</h2>/<h2>16</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className=" text-[25px] font-semibold">
            {" "}
            {product.productStock <= 10 ? (
              <div className="text-red-500 font-semibold text-xl mb-5">
                {product.productStock}
                {singleProductLoclization.inStock}
              </div>
            ) : null}
            {singleProductLoclization.price}
            {product.productPrice}
          </div>
          <button className="bg-blue-500 text-white px-5 py-3 self-end active:scale-95 cursor-pointer rounded-full text-[15px]">
            {singleProductLoclization.addToCard}
          </button>
        </div>
      </section>
    </div>
  );
}
