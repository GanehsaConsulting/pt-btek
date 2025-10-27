import React from "react";

export const VisionMission = () => {
  return (
    <section className="mb-30">
      <header className="text-center my-7">
        <p className="text-secondary font-semibold uppercase tracking-wide italic">
          PT Bimantara Teknologi Inovation Values
        </p>

        <h1 className="font-poppins text-black font-bold text-4xl md:text-6xl leading-tight">
          Our <span className="text-primary font-playfair italic">Vision</span>{" "}
          and <span className="text-primary font-playfair italic">Mission</span>
        </h1>
      </header>

      <div className="grid grid-cols-2 mx-10 gap-5">
        {/* vision */}
        <div className="relative overflow-hidden h-100 rounded-3xl">
          <img
            className="absolute inset-0 object-cover"
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
            alt=""
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="absolute bottom-5 right-5 left-5">
            <h1 className="text-white font-semibold text-4xl font-montserrat mb-3">
              Vision
            </h1>
            <div className="bg-white/10 backdrop-blur-md shadow-md rounded-2xl p-5 text-white">
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
        {/* mission */}
        <div className="relative overflow-hidden h-100 rounded-3xl">
          <img
            className="absolute inset-0 object-cover object-center"
            src="https://images.pexels.com/photos/7792845/pexels-photo-7792845.jpeg"
            alt=""
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="absolute bottom-5 right-5 left-5">
            <h1 className="text-white font-semibold text-4xl font-montserrat mb-3">
              Mission
            </h1>

            <div className="bg-white/10 backdrop-blur-md shadow-md rounded-2xl p-5 text-white">
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
        {/* <div className="grid grid-rows-3 gap-5">
          <div  className="flex justify-center items-center">
            <h1 className="font-poppins text-black font-bold text-4xl text-center leading-tight">
              Core
              <span className="text-primary font-playfair italic">Values</span>
            </h1>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              className="absolute inset-0 object-cover object-center"
              src="https://images.pexels.com/photos/7792845/pexels-photo-7792845.jpeg"
              alt=""
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              className="absolute inset-0 object-cover object-center"
              src="https://images.pexels.com/photos/7792845/pexels-photo-7792845.jpeg"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};
