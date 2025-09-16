import React from 'react';
import gemstone from '../../assets/article_img/gemstone.jpg';
import kundali_matching from '../../assets/article_img/kundali_matching.jpg';
import vedic_astro from '../../assets/article_img/vedic_astro.jpg';

// This is a single, self-contained React component that renders
// a blog post layout with a header and a grid of cards.
const Articles = () => {
  // Reusable Card Component
  const Card = ({ imageSrc, category, title, content, time, comments }) => (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <a href="#"></a>
      <div className="relative">
        <a href="#">
          <img className="w-full" src={imageSrc} alt={title} />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!">
          <div className="text-xs absolute top-0 right-0 bg-yellow-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-yellow-500 transition duration-500 ease-in-out">
            {category}
          </div>
        </a>
      </div>
      <div className="px-6 py-4 mb-auto">
        <a href="#" className="font-medium text-lg inline-block text-red-900 hover:text-yellow-500 transition duration-500 ease-in-out mb-2">
          {title}
        </a>
        <p className="text-gray-500 text-sm">
          {content}
        </p>
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          {/* Clock SVG Icon */}
          <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
            <g>
              <g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-1">{time}</span>
        </span>

        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          {/* Comment SVG Icon */}
          <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
          </svg>
          <span className="ml-1">{comments} Comments</span>
        </span>
      </div>
    </div>
  );

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {/* Header Section */}
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-yellow-500 flex items-center pb-2 pr-2 border-b-2 border-yellow-500 uppercase">
          {/* Main Logo SVG Icon */}
          <svg className="h-6 mr-3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455.005 455.005" style={{ enableBackground: 'new 0 0 455.005 455.005' }} xmlSpace="preserve">
            <g>
              <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z"></path>
            </g>
          </svg>
          <a href="#" className="font-semibold inline-block">Spiritual Insights</a>
        </div>
        <a href="#">See All</a>
      </div>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <Card
          imageSrc={vedic_astro}
          category="Vedic Astrology"
          title="Understanding Mangal Dosha: Myths and Facts"
          content="Mangal Dosha, also known as Kuja Dosha, is one of the most talked about and feared astrological conditions in Vedic astrology, particularly when it"
          time="6 mins ago"
          comments="39"
        />
        <Card
          imageSrc={kundali_matching}
          category="Kundali Matching"
          title="The Spiritual Science Behind Kundali Matching"
          content="Kundali Matching is a crucial aspect of Vedic astrology, often used to determine the compatibility between two individuals."
          time="10 days ago"
          comments="0"
        />
        <Card
          imageSrc={gemstone}
          category="Gemstones"
          title="Planetary Gemstones: A Guide to Their Significance and Selection"
          content="Gemstones have been revered for their beauty and mystical properties for centuries. In Vedic astrology, gemstones are believed to harness the energies of planets and can influence various aspects of life."
          time="16 hours ago"
          comments="9"
        />
      </div>
    </div>
  );
};

export default Articles;
