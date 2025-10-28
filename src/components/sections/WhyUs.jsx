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
      desc: "Customized approach or plan designed to meet the unique needs, characteristics, and goals of a specific individual, group, or situation, rather than using a generic, 'one-size-fits-all' method.",
    },
    {
      title: "Cost-Effective Solutions",
      desc: "Achieving the greatest benefit or value for the amount of money spent. It doesn’t necessarily mean the lowest cost, but rather the most efficient use of resources to get the best possible results or advantage.",
    },
  ];

  return (
    <section className="my-20 py-10 px-10 grid grid-cols-2 gap-10 bg-gray-100">
      <div>
        <p className="text-secondary font-semibold uppercase tracking-wide italic">
          Why Us?
        </p>
        <h1 className="font-poppins text-black font-bold text-4xl md:text-6xl leading-tight">
          Why You Should{" "}
          <span className="text-primary font-playfair italic">Choose Us</span>?
        </h1>
      </div>

      <div className="grid grid-rows-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-5 pb-5 border-b-2 border-gray-200"
          >
            <FaCheckDouble className="text-2xl text-primary shrink-0" />
            <div className="space-y-3">
              <h1 className="font-bold font-montserrat text-2xl">
                {item.title}
              </h1>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
