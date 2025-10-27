import React from "react";
import { Button } from "../ui/button";

export const Banner = () => {
  return (
    <>
      <section className="min-h-svh bg-white grid grid-cols-1 md:grid-cols-10 p-10 gap-6 ">
        {/* Left */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <h1 className="text-black font-bold text-4xl md:text-6xl font-nunito">
              Empowering Innovation Through{" "}
              <span className="text-primary font-playfair italic">
                Technology
              </span>{" "}
              Solutions
            </h1>
          </div>

          <div className="relative overflow-hidden rounded-4xl md:rounded-[3rem] mt-6 md:mt-8 w-full aspect-[16/9] md:aspect-auto h-80">
            <img
              src="https://i.pinimg.com/736x/50/53/48/505348fd3437bf48d8ac61ed19c113de.jpg"
              alt="banner-image-1"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-3 h-full flex flex-col justify-between mt-10 md:mt-0">
          <div className="text-left md:text-right space-y-5">
            <p className="text-xl font-medium text-darkColor/80">
              Dedicated to delivering innovative solutions that empower
              businesses and communities in the digital era.
            </p>
            <div className="flex md:justify-end">
              <Button className="bg-primary rounded-full">Get In Touch</Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl md:rounded-[3rem] mt-8 w-full aspect-[16/9] md:aspect-auto h-80">
            <img
              src="https://i.pinimg.com/1200x/bd/08/23/bd082339c19d176818c1f62d2c799b87.jpg"
              alt="banner-image-2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};
