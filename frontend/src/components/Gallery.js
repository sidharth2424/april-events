// src/components/Gallery.js
import React from "react";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-20 bg-green-50 text-center px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-green-700">
        Our Gallery
      </h2>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
        <img
          src={`${process.env.PUBLIC_URL}/img1.png`}   // ✅ Updated image name
          alt="April Events Gallery"
          className="w-full h-[500px] object-cover"
        />
      </div>

      <p className="mt-6 text-gray-700 text-lg italic">
        Every moment, beautifully captured by April Events.
      </p>
    </section>
  );
};

export default Gallery;
