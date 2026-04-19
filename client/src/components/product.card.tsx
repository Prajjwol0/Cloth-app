export default function ProductCard() {
  return (
    <>
      <div className="w-64 bg-gray-30 rounded-2xl overflow-hidden  ml-6">
        <div>
          {/* image */}{" "}
          <img
            className="object-cover"
            src="https://i.pinimg.com/1200x/5e/a1/f0/5ea1f0d52736523fd43f90aedd15c260.jpg"
            alt=" clothing"
          />
        </div>

        <div className="py-4 px-3 bg-white text-gray-">
          {/* text */}
          <div>

            <span className="text-xs bg-orange-300 text-orange-900 rounded-full px-1 font-serif">HOT</span>

            <span className=" text-xs bg-red-300  text-red-900 rounded-full ml-3 px-1 font-serif">New</span>

          </div>
          </div>
          <div className="bg-white">
          <h3 className="text-xl text-shadow-black font-stretch-expanded font-serif mt-2"> Nike Sneakers</h3>
          <p className="text-sm text-gray-700">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum neque
            fugiat, animi similique veniam magni odit quia, voluptate minu
          </p>
          
          <p className="font-bold tracking-wide mt-1 text-lg text-teal-800">$100</p>
          <button className="flex justify-between  p-4 px-30 py-1 bg-blue-200 rounded-2xl overflow-hidden text-black-800"> Cart</button>
        </div>
      </div>
    </>
  );
}
