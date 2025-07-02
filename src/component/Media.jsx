import React from "react";

const Media = () => {
  const images = [
    { name: "img1", image: "./m8.jpeg" },
    { name: "img2", image: "./m2.jpg" },
    { name: "img3", image: "./m3.png" },
    { name: "img4", image: "./m4.png" },
    { name: "img5", image: "./m5.heic" },
    { name: "img6", image: "./m6.png" },
    { name: "img7", image: "./m7.jpg" },
    { name: "img8", image: "./m1.jpg" },
    { name: "img9", image: "./m9.heic" },
    { name: "img10", image: "./m10.heic" },
    { name: "img11", image: "./m11.heic" },
    { name: "img12", image: "./m12.heic" },
    { name: "img13", image: "./m13.heic" },
    { name: "img14", image: "./m14.heic" },
    { name: "img15", image: "./m15.heic" },
    { name: "img16", image: "./m16.jpg" },
  ];

  return (
    <div className="relative px-4 md:px-10 py-8 md:py-16">
      {/* Light background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
        style={{ backgroundImage: "url('./img5.jpg')" }}
      ></div>

      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <span className="text-3xl">❤️</span>
        <h2 className="text-3xl font-medium text-orange-500 sevillana-regular">
          Our Media
        </h2>
      </div>

      <p className="text-2xl md:text-5xl font-medium prata-regular text-center md:text-left mb-10 md:ml-20">
        Stories of Change and Impact
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:px-10">
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img.image}
              alt={img.name}
              className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
