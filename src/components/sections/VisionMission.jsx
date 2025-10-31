import React from "react";

export const VisionMission = () => {
  return (
    <section className="my-20 md:my-30 px-5 md:px-10">
      {/* Header */}
      <header className="text-center mb-10">
        <p className="text-secondary font-semibold uppercase tracking-wide italic">
          PT Bimantara Teknologi Inovation Values
        </p>

        <h1 className="font-poppins text-black font-bold text-3xl sm:text-4xl md:text-6xl leading-tight">
          Our{" "}
          <span className="text-primary font-playfair italic">Vision</span> and{" "}
          <span className="text-primary font-playfair italic">Mission</span>
        </h1>
      </header>

      {/* Grid Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* === Vision === */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl h-[420px] sm:h-[500px] md:h-[550px]">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
            alt="Vision"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="absolute bottom-5 md:bottom-8 right-5 left-5">
            <h1 className="text-white font-semibold text-3xl md:text-4xl font-montserrat mb-3">
              Vision
            </h1>
            <div className="bg-white/10 backdrop-blur-md shadow-md rounded-2xl p-4 md:p-5 text-white text-sm md:text-base leading-relaxed">
              <p>
                PT Bimantara Teknologi Inovation is a forward-thinking
                technology company dedicated to delivering innovative solutions
                that empower businesses and communities in the digital era. With
                a strong focus on research, development, and implementation of
                cutting-edge technologies, the company strives to bridge the gap
                between innovation and practical application.
              </p>
            </div>
          </div>
        </div>

        {/* === Mission === */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl h-[420px] sm:h-[500px] md:h-[550px]">
          <img
            className="absolute inset-0 object-cover object-center w-full h-full"
            src="https://images.pexels.com/photos/7792845/pexels-photo-7792845.jpeg"
            alt="Mission"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="absolute bottom-5 md:bottom-8 right-5 left-5">
            <h1 className="text-white font-semibold text-3xl md:text-4xl font-montserrat mb-3">
              Mission
            </h1>
            <div className="bg-white/10 backdrop-blur-md shadow-md rounded-2xl p-4 md:p-5 text-white text-sm md:text-base leading-relaxed">
              <p>
                Deliver high-quality, reliable, and scalable technology
                solutions. Foster innovation through continuous research and
                development. Empower businesses with digital tools that enhance
                productivity and competitiveness. Build long-term partnerships
                based on trust, integrity, and excellence. Contribute to
                sustainable growth through responsible and ethical innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
