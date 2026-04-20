import {  useGetAllProductApi } from "../hooks/clothhooks";



export default function ProductCard() {
  const { data: products, isLoading, error } = useGetAllProductApi();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <>
      <div className="flex flex-wrap">
        {products?.map((item) => (
          <div
            key={item.id}
            className="w-64 bg-gray-30 rounded-2xl overflow-hidden m-10"
          >
            <div>
              <img className="object-cover" src={item.image} alt={item.title} />
            </div>

            <div className="py-4 px-3 bg-white">
              <div>
                <span className="text-xs bg-orange-300 text-orange-900 rounded-full px-1 font-serif">
                  {item.category}
                </span>

                <span className="text-xs bg-red-300 text-red-900 rounded-full ml-3 px-1 font-serif">
                  New
                </span>
              </div>
            </div>

            <div className="bg-white px-3 pb-3">
              <h3 className="text-xl font-serif mt-2">{item.title}</h3>

              <p className="text-sm text-gray-700">{item.discription}</p>

              <p className="font-bold tracking-wide mt-1 text-lg text-teal-800">
                ${item.price}
              </p>

              <button className="flex justify-center w-full py-1 bg-blue-200 rounded-2xl">
                <p className="font-serif font-stretch-extra-condensed ">AddToCart</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
