import React from "react";

export const Consultancy = () => {
  return (
    <section className="my-30">
      <header className="text-start space-y-7 mx-10 mb-10">
        {/* <p className="text-secondary font-semibold uppercase tracking-wide italic">
          PT Bimantara Teknologi Inovation Products
        </p> */}

        <h1 className="font-poppins max-w-lg text-black font-bold text-4xl md:text-6xl leading-tight">
          Consultancy and{" "}
          <span className="text-primary font-playfair italic">Managed</span>{" "}
          Services
        </h1>
        <p>
          Consultancy and Managed services offerings are IT or business
          functions outsourced to a Bimantara who proactively manages and
          monitors them on a subscription basis, providing ongoing support and
          maintenance for functions like network management, cybersecurity,
          cloud services, and data backup. This allows businesses to focus on
          their core competencies, gain access to specialized expertise, benefit
          from cost savings, and improve IT reliability and performance.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-7 mx-10">
        <div className="grid grid-rows-2 gap-5">
          <div className=" bg-linear-to-tr from-primary to-secondary text-white hover:scale-103 transition-all rounded-4xl p-4">
            <h1 className="font-semibold text-2xl mb-4 font-montserrat">
              Consultancy
            </h1>
            <p>
              Offer a comprehensive lifecycle of services to optimize your
              network infrastructure, including Strategic planning and
              assessment, Design and implementation, Performance optimization
              and Disaster recovery.
            </p>
          </div>
          <div className="bg-linear-to-br from-primary to-secondary text-white hover:scale-103 transition-all rounded-4xl p-4">
            <h1 className="font-semibold text-2xl mb-4 font-montserrat">
              Managed Service
            </h1>
            <p>
              Offer ongoing network management, monitoring, and maintenance.
              This ensures a network stays optimized, secure, and available with
              minimal interruption.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-4xl">
          <img
            className="object-cover"
            src="https://images.pexels.com/photos/8866726/pexels-photo-8866726.jpeg"
            alt="consultacy image"
          />
        </div>
      </div>
    </section>
  );
};
