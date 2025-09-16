import React from 'react';
import m_app from '../../assets/phone_app/m_app.png';
import G_play from '../../assets/phone_app/G_play.png';
import App_store from '../../assets/phone_app/App_store.png';

const Get_app = () => {
  return (
    <>
      {/* This style block is used to define the custom keyframe animation.
        Tailwind's utility classes can handle the gradient, but the animation 
        itself needs a custom definition.
      */}
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

      {/* The main container for the animated background.
        It uses a mix of Tailwind's built-in classes and arbitrary values
        for background size and animation.
      */}
      <div 
        className=" container mx-auto mt-10 mb-10
          h-[200px]
          w-[60%]
          bg-gradient-to-r 
          from-yellow-400 
          via-orange-300 
          to-yellow-400 
          bg-[length:200%_200%] 
          animate-[gradient-animation_10s_ease-in-out_infinite]
          flex items-center justify-center 
          text-white 
          text-5xl 
          font-extrabold 
          rounded-xl
        "
      >
        <div className='flex items-center gap-10 flex-row justify-between'>
            <div>
                <img src={m_app} alt="" className='w-30 h-50 align-left mt-[-40px] transform transition duration-300 ease-in-out hover:rotate-5' />
            </div>
            <div className='text-center mt-[-40px]'>
              <h1 className='text-3xl font-bold text-red-900'>Download Our Mobile App</h1>
              <p className='text-lg text-white mt-2'>Get access to exclusive offers and a seamless shopping experience.</p>
              <div className='flex gap-4 justify-center mt-4'>
                <img src={G_play} alt="Google Play Store" className='w-32 h-10 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105' />
                <img src={App_store} alt="Apple App Store" className='w-32 h-10 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105' />
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Get_app;
