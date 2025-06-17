import React from "react";

const airpodsData = [
  {
    title: "AirPods 4",
    description: "The next evolution of sound and comfort.",
    price: "$129",
    image: "shop1.png",
  },
  {
    title: "AirPods 4 (ANC)",
    description: "The next evolution of sound, comfort, and noise control.",
    price: "$179",
    image: "shop2.png",
  },
  {
    title: "AirPods Pro 2",
    description:
      "Pro-level Active Noise Cancellation and a breakthrough in hearing health.",
    price: "$249",
    image: "shop3.png",
  },
  {
    title: "AirPods Max",
    description: "The ultimate over-ear listening experience.",
    price: "$549",
    image: "h5.png",
  },
];

const AirPodsComparison = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <div className="mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Which AirPods are<br />right for you?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {airpodsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center h-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-36 h-36 object-contain mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1 mb-3 px-2">{item.description}</p>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              {item.price}
            </p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
              Buy
            </button>
            <a
              href="#"
              className="mt-2 text-blue-600 text-sm font-medium hover:underline"
            >
              Learn more &rsaquo;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AirPodsComparison;
