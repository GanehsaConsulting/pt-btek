import React from "react";

export const Consultancy = () => {
  return (
    <section className="my-20 md:my-30 px-5 md:px-10">
      {/* Header */}
      <header className="text-start space-y-5 md:space-y-7 mb-10">
        <h1 className="font-poppins max-w-xl text-black font-bold text-3xl sm:text-4xl md:text-6xl leading-tight">
          Consultancy and{" "}
          <span className="text-primary font-playfair italic">Managed</span>{" "}
          Services
        </h1>
        <p className="text-darkColor/80 text-sm sm:text-base leading-relaxed max-w-3xl">
          Consultancy and Managed services offerings are IT or business
          functions outsourced to Bimantara who proactively manages and monitors
          them on a subscription basis, providing ongoing support and
          maintenance for functions like network management, cybersecurity,
          cloud services, and data backup. This allows businesses to focus on
          their core competencies, gain access to specialized expertise, benefit
          from cost savings, and improve IT reliability and performance.
        </p>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Left: Cards */}
        <div className="grid grid-rows-2 gap-5 order-2 md:order-1">
          <div className="bg-gradient-to-tr from-primary to-secondary text-white hover:scale-[1.03] transition-transform duration-300 rounded-3xl md:rounded-4xl p-5 md:p-7 shadow-lg">
            <h1 className="font-semibold text-xl sm:text-2xl mb-3 font-montserrat">
              Consultancy
            </h1>
            <p className="text-sm sm:text-base leading-relaxed">
              Offer a comprehensive lifecycle of services to optimize your
              network infrastructure, including strategic planning and
              assessment, design and implementation, performance optimization,
              and disaster recovery.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary text-white hover:scale-[1.03] transition-transform duration-300 rounded-3xl md:rounded-4xl p-5 md:p-7 shadow-lg">
            <h1 className="font-semibold text-xl sm:text-2xl mb-3 font-montserrat">
              Managed Service
            </h1>
            <p className="text-sm sm:text-base leading-relaxed">
              Offer ongoing network management, monitoring, and maintenance. This
              ensures a network stays optimized, secure, and available with
              minimal interruption.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative overflow-hidden rounded-3xl md:rounded-4xl order-1 md:order-2 h-[280px] sm:h-[360px] md:h-[500px]">
          <img
            className="object-cover w-full h-full scale-105 md:scale-100 transition-transform duration-500 hover:scale-105"
            src="https://images.pexels.com/photos/8866726/pexels-photo-8866726.jpeg"
            alt="Consultancy and Managed Services"
          />
        </div>
      </div>
    </section>
  );
};
