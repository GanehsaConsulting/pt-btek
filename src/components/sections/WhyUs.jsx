import React from "react";
import { FaCheckDouble } from "react-icons/fa6";

export const WhyUs = () => {
  const data = [
    {
      title: "Expert in Innovation Tech",
      desc: "The ability to anticipate future market trends, customer needs, and technological advancements. This allows them to identify and seize new opportunities for growth before others do.",
    },
    {
      title: "Data-Driven Results",
      desc: "Outcomes achieved or decisions made by using objective data and analytics for guidance, rather than relying on intuition or assumptions.",
    },
    {
      title: "Tailored Strategies",
      desc: "Customized approach or plan designed to meet the unique needs, characteristics, and goals of a specific individual, group, or situation, rather than using a generic, one-size-fits-all method.",
    },
    {
      title: "Cost-Effective Solutions",
      desc: "Achieving the greatest benefit or value for the amount of money spent. It doesn’t necessarily mean the lowest cost, but rather the most efficient use of resources to get the best possible results or advantage.",
    },
  ];

  return (
    <section className="my-20 md:my-30 py-10 px-5 sm:px-8 md:px-10 lg:px-20 bg-gray-100">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left Section */}
        <div className="space-y-5">
          <p className="text-secondary font-semibold uppercase tracking-wide italic">
            Why Us?
          </p>
          <h1 className="font-poppins text-black font-bold text-3xl sm:text-4xl md:text-6xl leading-tight max-w-lg">
            Why You Should{" "}
            <span className="text-primary font-playfair italic">Choose Us</span>?
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
            We bring together innovation, data insights, and tailored strategies
            to help your business stay ahead in the fast-evolving digital era.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 gap-7">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 pb-6 border-b border-gray-200 hover:border-primary/60 transition-colors duration-300"
            >
              <FaCheckDouble className="text-2xl text-primary shrink-0 mt-1" />
              <div className="space-y-2">
                <h2 className="font-bold font-montserrat text-lg sm:text-xl md:text-2xl">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
