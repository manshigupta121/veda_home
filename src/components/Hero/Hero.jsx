import React from "react";
import hero_h1 from "../../assets//hero_img/hero_h1.png";
import hero_h2 from "../../assets//hero_img/hero_h2.png";
import hero_h3 from "../../assets//hero_img/hero_h3.png";
import Slider from "react-slick";
import surya_chakra from '../../assets/surya_chakra.png';

const ImageList = [
 
  {
    id: 2,
    img: hero_h3 ,
    title: "Your one-stop shop for all things Vedic",
    description:
      "From gemstones to yantras, explore our curated collection of authentic Vedic products.",
      
  }

  
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>

    <style>
        {`
          @keyframes gradient-animation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>



    <div 
        className="
          relative
          overflow-hidden
          min-h-[550px]
          sm:min-h-[650px]
          bg-gradient-to-r
          from-yellow-300
          via-orange-200
          to-yellow-300
          bg-[length:200%_200%]
          animate-[gradient-animation_10s_ease-in-out_infinite]
          flex justify-center items-center
          dark:bg-gray-950
          dark:text-white
          rounded-xl
        "
      >
      
      {/* background pattern */}
      <div>
        <img
          src='src\assets\surya_chakra.png'
          alt="Mandala pattern with intricate circular designs, radiating a sense of calm and spirituality. The pattern is set against a soft yellow background, creating a peaceful and inviting atmosphere."
          className=" h-[700px] w-[700px] -top-1/2 right-0 rounded-3xl rotate-45 -z-[8] animate-spin [animation-duration:25s] absolute"
        />
      </div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-red-950/85"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-lg text-yellow-800"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-yellow-600 py-2 px-4 rounded-full hover:bg-yellow-400"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px]  sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
    </>
  );
};

export default Hero;