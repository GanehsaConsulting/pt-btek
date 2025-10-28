"use client";
import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";

export const Products = () => {
  const products = [
    {
      title: "AI Based Inovation",
      // desc: "Our AI-based innovations enhance business automation, streamline workflows, and provide intelligent insights using advanced machine learning and natural language processing technologies.",
      thumbnail: "https://cdn.pixabay.com/photo/2024/01/25/00/25/brain-8530786_1280.jpg",
      image: "/ai.png",
    },
    {
      title: "Network Device Inovation",
      desc: "PT Bimantara Teknologi Inovation provides services to merge different technology components, like hardware, software, and networks, into a single, cohesive system for businesses.",
      thumbnail: "https://cdn.pixabay.com/photo/2019/08/08/16/51/network-4393368_1280.jpg",
      image: "/network.png",
    },
    {
      title: "Green Energy Inovation",
      desc: "Leading green energy companies which focus on various renewable technologies like solar, wind, and hydroelectric power. We pioneered driving the transition to clean energy through innovative technologies.",
      thumbnail: "https://cdn.pixabay.com/photo/2023/03/14/20/22/ai-generated-7853110_1280.jpg",
      image: "/green.png",
    },
    {
      title: "IoT Inovation",
      desc: "Creates and provides technologies to connect physical devices to the internet, enabling them to collect, exchange, and act on data. This technology drives automation, efficiency, and data-driven insights across various industries.",
      thumbnail: "https://cdn.pixabay.com/photo/2023/06/10/07/18/computer-8053370_1280.jpg",
      image: "https://cdn.pixabay.com/photo/2016/01/08/15/03/arduino-1128227_1280.jpg",
    },
    {
      title: "Online Payment Inovation",
      desc: "Provide services that allow individuals and businesses to send and receive payments over the internet. These companies offer various solutions, including payment gateways for online stores, e-wallets for consumers, and platforms for global business transactions.",
      thumbnail: "https://cdn.pixabay.com/photo/2019/10/25/19/06/credit-card-machine-4577768_1280.jpg",
      image: "https://cdn.pixabay.com/photo/2017/08/07/19/45/ecommerce-2607114_1280.jpg",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section id="products" className="my-30 px-6 md:px-10">
      {/* Header */}
      <header className="text-center mb-10">
        <p className="text-secondary font-semibold uppercase tracking-wide italic">
          PT Bimantara Teknologi Inovation Products
        </p>
        <h1 className="font-poppins text-black font-bold text-4xl md:text-6xl leading-tight">
          <span className="text-primary font-playfair italic">Our</span> Products
        </h1>
      </header>

      {/* GRID PRODUCT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item)}
            className="cursor-pointer group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.03] p-5 flex flex-col justify-between drop-shadow-2xl"
          >
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

            {/* Thumbnail */}
            <div className="mt-5 rounded-2xl overflow-hidden aspect-[4/3] relative">
              <Image
                src={item.thumbnail}
                alt={`${item.title} thumbnail`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 relative animate-fadeIn">
            {/* Tombol Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              <X size={24} />
            </button>

            {/* Konten Modal */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 font-poppins">
                {selected.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">{selected.desc}</p>

              {/* Image pakai Next.js */}
              <div className="relative rounded-2xl overflow-hidden mt-4 w-full h-fit">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  width={1000}
                  height={700}
                  className="object-contain w-full h-fit"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
