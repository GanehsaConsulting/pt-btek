"use client";
import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

export const Products = () => {
  const products = [
    {
      title: "AI Based Inovation",
      desc: "Our AI-based innovations enhance business automation, streamline workflows, and provide intelligent insights using advanced machine learning and natural language processing technologies.",
      img: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg",
    },
    {
      title: "Network Device Inovation",
      desc: "We design and optimize modern network infrastructures — routers, SDWAN, and secure cloud connectivity — to help businesses stay connected and efficient.",
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
    {
      title: "Green Energy Inovation",
      desc: "Committed to sustainability, our green energy solutions promote renewable technologies and smart systems that reduce carbon footprints for industries.",
      img: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg",
    },
    {
      title: "IoT Inovation",
      desc: "Our IoT systems connect devices seamlessly to provide real-time monitoring and automation across industries, improving productivity and decision-making.",
      img: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
    },
    {
      title: "Online Payment Inovation",
      desc: "We build secure and scalable online payment solutions integrated with various gateways, enabling seamless digital transactions for businesses and customers.",
      img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section id="products" className="my-30 px-6 md:px-10">
      <header className="text-center mb-10">
        <p className="text-secondary font-semibold uppercase tracking-wide italic">
          PT Bimantara Teknologi Inovation Products
        </p>

        <h1 className="font-poppins text-black font-bold text-4xl md:text-6xl leading-tight">
          <span className="text-primary font-playfair italic">Our</span> Products
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item)}
            className="cursor-pointer group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.03] p-5 flex flex-col justify-between drop-shadow-2xl"
          >
            {/* Text content */}
            <div>
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-bold text-gray-900 font-poppins">
                  {item.title}
                </h2>
                <div className="text-primary border border-primary group-hover:bg-primary group-hover:text-white p-1 rounded-full transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="mt-5 rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 relative animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 font-poppins">
                {selected.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{selected.desc}</p>

              <div className="rounded-2xl overflow-hidden mt-4">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="object-cover w-full h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
