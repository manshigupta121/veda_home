import React, { useState, useRef, useEffect } from 'react';
import V_thumb from '../../assets/About_vedio/V_thumb.png';
import welcome from '../../assets/About_vedio/welcome.mp4';

// This is a single, self-contained React component that renders
// a section with a video thumbnail that opens a video in a modal.
const AboutV = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (modalOpen) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  }, [modalOpen]);

  return (
    <>
      {/* Custom Styles for animations and video effects */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes grow {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
          .animate-grow { animation: grow 0.6s ease-out forwards; transform-origin: center; }
          .animate-float { animation: float 6s ease-in-out infinite; }
          
          .primary { color: #eab308; }
          .primary-light { color: #facc15; }

          .video-thumbnail-container {
            perspective: 1200px;
            max-width: 900px;
            margin: 0 auto;
          }
          .video-thumbnail-wrapper {
            position: relative;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
          }
          .video-thumbnail {
            border-radius: 1.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            backface-visibility: hidden;
            width: 100%;
            height: auto;
            aspect-ratio: 16/9;
            object-fit: cover;
          }
          .video-thumbnail-container:hover .video-thumbnail-wrapper {
            transform: rotateY(10deg) rotateX(3deg) scale(1.02);
          }
          .video-thumbnail-container:hover .video-thumbnail {
            box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.2);
          }
          .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(4px);
          }
          .play-button svg {
            width: 30px;
            height: 30px;
            margin-left: 4px;
          }
          .video-thumbnail-container:hover .play-button {
            transform: translate(-50%, -50%) scale(1.1) translateZ(30px);
            background: rgba(255, 255, 255, 1);
          }
          .video-thumbnail-container::before {
            content: '';
            position: absolute;
            inset: -10px;
            background: linear-gradient(45deg, #ca8a04, #eab308, #facc15);
            z-index: -1;
            filter: blur(20px);
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 1.5rem;
          }
          .video-thumbnail-container:hover::before {
            opacity: 0.4;
          }
          @media (max-width: 768px) {
            .video-thumbnail-container { perspective: 800px; }
            .play-button { width: 60px; height: 60px; }
            .play-button svg { width: 24px; height: 24px; }
          }
        `}
      </style>

      <section id="about" className="relative isolate overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-gray-200/50 sm:right-1/2 sm:skew-x-0 md:right-2/3"></div>
          <div className="absolute left-0 top-0 -z-20 h-1/3 w-full rounded-b-full bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 -z-20 h-1/3 w-full rounded-t-full bg-gradient-to-l from-yellow-400/10 to-yellow-500/10 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in [animation-fill-mode:both] [animation-delay:200ms]">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbec4b] to-[#dccb1a]">Veda Structure</span> 
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#ebc622] to-[#e5c638] mx-auto mb-6 rounded-full animate-grow [animation-fill-mode:both] [animation-delay:400ms]"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-fill-mode:both] [animation-delay:600ms]">
              Veda Structure is your one-stop shop for all astrology needs. Established in 2022, we are a team of highly qualified astrologers, pundits, and experts dedicated to providing a safe, efficient, pleasant, and personalized experience in the field of astrology, numerology, horoscope prediction, Vedic Puja and various related products.
            </p>
          </div>

          {/* Video Component */}
          <div className="relative" data-video-modal>
            <div className="video-thumbnail-container px-4 sm:px-0 animate-float [animation-fill-mode:both] [animation-delay:800ms]">
              <button
                className="video-thumbnail-wrapper w-full h-full focus:outline-none"
                onClick={() => setModalOpen(true)}
                aria-controls="modal"
                aria-label="About VedaStructure"
              >
                <img
                  className="video-thumbnail bg-white"
                  src={V_thumb}
                  alt="About VedaStucture"
                />
                <div className="play-button">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="#eab308" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Modal Overlay and Content */}
          {modalOpen && (
            <div
              className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
              role="dialog"
              aria-modal="true"
              onClick={() => setModalOpen(false)}
            >
              <div className="max-w-6xl mx-auto h-full flex items-center w-full" onClick={(e) => e.stopPropagation()}>
                <div className="w-full max-h-full rounded-2xl shadow-2xl aspect-video bg-black overflow-hidden relative">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                    aria-label="Fermer la vidéo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <video
                    ref={videoRef}
                    width="1920"
                    height="1080"
                    loop
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={welcome} type="video/mp4" />
                    About Vedastructure
                  </video>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
    </>
  );
};

export default AboutV;
