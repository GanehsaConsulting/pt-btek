import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { WALink } from "./CTA";
import clsx from "clsx";

export const Banner = () => {
  const titleStyle =
    "text-black font-bold text-3xl sm:text-4xl md:text-5xl font-nunito leading-tight";

  return (
    <>
      <section className="margin bg-white grid grid-cols-1 md:grid-cols-10 py-6 gap-6 md:gap-8"
      style={{ height: "calc(100vh - 5.35rem)" }}>
        {/* Left */}
        <div className="md:col-span-7 flex flex-col justify-between gap-6 md:gap-0">
          <div className="">
            <h1 className={titleStyle}>Empowering Innovation</h1>
            <h1 className={titleStyle}>
              Through
              <span className="text-primary font-playfair italic">
                Technology
              </span>{" "}
            </h1>
            <h1 className={clsx(titleStyle,"")}>Solutions</h1>
          </div>

          {/* banner 1 */}
          <div className="relative overflow-hidden rounded-3xl md:rounded-[3rem] w-full h-fit sm:mt-10">
            <img
              src="/banner-1.png"
              alt="banner-image-1"
              className="object-cover w-full h-full scale-110"
            />
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-3 h-full flex flex-col justify-between gap-6 md:gap-0">
          <div className="text-left md:text-right space-y-4 md:space-y-5">
            <p className="text-base sm:text-lg font-medium text-darkColor/80 leading-relaxed">
              Dedicated to delivering innovative solutions that empower
              businesses and communities in the digital era.
            </p>
            <Link
              href={WALink}
              target="_blank"
              className="inline-block md:flex md:justify-end"
            >
              <Button className="bg-linear-to-br from-primary to-secondary rounded-full px-6 py-2 text-sm md:text-base">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* banner 2 */}
          <div className="relative overflow-hidden rounded-3xl md:rounded-[3rem] w-full h-fit ">
            <img
              src="/banner-2.png"
              alt="banner-image-2"
              className="object-cover w-full h-full scale-110 md:scale-110"
            />
          </div>
        </div>
      </section>
    </>
  );
};
