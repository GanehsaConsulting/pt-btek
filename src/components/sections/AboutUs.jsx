"use client";
import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const imageCarousels = [
    "https://images.pexels.com/photos/8355405/pexels-photo-8355405.jpeg",
    "https://images.pexels.com/photos/3184661/pexels-photo-3184661.jpeg",
    "https://images.pexels.com/photos/3182831/pexels-photo-3182831.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageCarousels.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imageCarousels.length]);

  return (
    <section className="my-30 mx-6 md:mx-10 grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {/* Left */}
      <div className="space-y-2 text-center md:text-left">
        <p className="text-secondary font-semibold uppercase tracking-wide italic">
          Who's PT Bimantara Teknologi Inovation?
        </p>

        <h1 className="font-poppins text-black font-bold text-4xl md:text-6xl leading-tight">
          About{" "}
          <span className="text-primary font-playfair italic">
            Us
          </span>
        </h1>

        <p className="text-base md:text-lg mt-6 md:mt-8 font-medium max-w-xl mx-auto md:mx-0 text-gray-700">
          PT Bimantara Teknologi Inovation established in 2025, is a
          forward-thinking technology company dedicated to delivering innovative
          solutions that empower businesses and communities in the digital era.
          With a strong focus on research, development, and implementation of
          cutting-edge technologies, the company strives to bridge the gap
          between innovation and practical application.
        </p>
      </div>

      {/* Right (Carousel) */}
      <div className="w-full">
        <div className="relative overflow-hidden rounded-3xl aspect-[16/10]">
          {imageCarousels.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`About image ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-4">
          {imageCarousels.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-4"
                  : "bg-black/20 hover:bg-black/40"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
