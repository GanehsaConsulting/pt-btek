import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const WALink = "https://wa.me/6285658607360";

export const CTA = () => {

  return (
    <section className="relative mx-6 md:mx-10 my-20 md:my-30 rounded-2xl overflow-hidden">
      {/* Background Image */}
      <img
        src="https://i.pinimg.com/1200x/fa/d7/7d/fad77d7e44e7ae88dd6e0a1ff93ce693.jpg"
        alt="bg-cta"
        className="w-full h-[300px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold mb-6 max-w-2xl leading-snug font-montserrat">
          Transfrom your business with our end-to-end technology consulting
          services
        </h1>
        <Link href={WALink} target="_blank" >
          <Button className="bg-white text-primary font-semibold rounded-full text-lg hover:bg-gray-100 transition-all">
            Get In Touch
          </Button>
        </Link>
      </div>
    </section>
  );
};
