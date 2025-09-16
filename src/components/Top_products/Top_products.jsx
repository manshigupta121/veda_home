import React from 'react';
import rudraks from '../../assets/tp_img/rudraks.jpg';
import yantra from '../../assets/tp_img/yantra.jpg';
import gemstone from '../../assets/tp_img/gemstone.jpg';
import seven_c from '../../assets/tp_img/seven_c.jpg';

const Top_products = () => {
  // Array of image data for a more dynamic and maintainable component
  const images = [
    {
      src: rudraks,
      alt: "Woman with a dog",
      rotation: "rotate-6",
    },
    {
      src: yantra,
      alt: "Man taking a photo",
      rotation: "-rotate-12",
    },
    {
      src: gemstone,
      alt: "Cityscape at dusk",
      rotation: "rotate-6",
    },
    {
      src: seven_c,
      alt: "Person sitting with a laptop",
      rotation: "-rotate-12",
    },
  ];

  return (
    <section className="bg-zinc-50 overflow-hidden">
      <div>
        <div className="pt-10">
          <h1 className="text-4xl font-bold text-center text-red-800">Top Products</h1>
        </div>

        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 h-svh flex flex-col justify-center">
          {/* Animated image cards component */}
          <div className="flex flex-col sm:flex-row sm:mt-200 sm:mb-200 mx-auto">
            {images.map((image, index) => (
              <a key={index} href="#">
                <img
                  src={image.src}
                  className={`rounded-xl ${image.rotation} hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
                  alt={image.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top_products;
