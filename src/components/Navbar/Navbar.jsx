import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Logo from '../../assets/logo.png'


const Menu = [
  {
    id: 1,
    title: "Home",
    link: "/"
  },
  {
    id: 2,
    title: "Talk to Astrologer",
    link: "/talk-to-astrologer"
  },
  
  {
    id: 3,
    title: "Contact",
    link: "/contact"
  },
  {
    id: 4,
    title: "Astrology Courses",
    link: "/astrology-courses"
  },
  {
    id: 5,
    title: "Article",
    link: "/article"
  }
];

{/* PUJA-DROPDOWN */}
const DropdownLinks1 = [
  {
    id: 1,
    title: "All Puja",
    link: "/all-puja"
  },
  {
    id: 2,
    title: "Yagya puja",
    link: "/yagya-puja"
  },
  {
    id: 3,
    title: "Homa | Havan",
    link: "/homa-havan"
  },
  {
    id: 4,
    title: "Japa | Chanting",
    link: "/japa-chanting"
  },
  {
    id: 5,
    title: "Path | Recitation",
    link: "/path-recitation"
  },
  {
    id: 6,
    title: "Puja in Kashi (According to Kashi Khand)",
    link: "/puja-in-kashi"
  },
  {
    id: 7,
    title: "Daily puja",
    link: "/daily-puja"
  },
  {
    id: 8,
    title: "Nitya Ati Rudrabhishek",
    link: "/nitya-ati-rudrabhishek"
  },
  {
    id: 9,
    title: "Upcoming Special festival Puja",
    link: "/upcoming-special-festival-puja"
  },
  {
    id: 10,
    title: "Special Puja",
    link: "/special-puja"
  },
  {
    id: 11,
    title: "Puja",
    link: "/puja"
  }
];

{/* ASTRO-REPORT-DROPDOWN */}

const DropdownLinks2 = [
  {
    id: 1,
    title: "Vedic Personalised Kundali",
    link: "/vedic-personalised-kundali"
  },
  {
    id: 2,
    title: "Couple Match Making Kundali",
    link: "/couple-match-making-kundali"
  },
  {
    id: 3,
    title: "Personalised Lal Kitab Report",
    link: "/personalised-lal-kitab-report"
  },
  {
    id: 4,
    title: "Rudraksha Report",
    link: "/rudraksha-report"
  },
  {
    id: 5,
    title: "Pitra Dosh Report",
    link: "/pitra-dosh-report"
  },
  {
    id: 6,
    title: "Kalsarp Dosha Report",
    link: "/kalsarp-dosha-report"
  },
  {
    id: 7,
    title: "Manglik Report",
    link: "/manglik-report"
  },
  {
    id: 8,
    title: "Sade Sati Report",
    link: "/sade-sati-report"
  },
  {
    id: 9,
    title: "Gemstone report",
    link: "/gemstone-report"
  },
  {
    id: 10,
    title: "All Yoga Report",
    link: "/all-yoga-report"
  },
  {
    id: 11,
    title: "Numerology Prediction Report",
    link: "/numerology-prediction-report"
  }
];


{/* VEDA_STORE-DROPDOWN */}
const DropdownLinks3 = [
  {
    id: 1,
    title: "Rudraksha",
    link: "/rudraksha"
  },
  {
    id: 2,
    title: "Gemstone",
    link: "/gemstone"
  },
  {
    id: 3,
    title: "Bracelet",
    link: "/bracelet"
  }
];

const Navbar = () => {
  return (

      
    
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>

      <div className='text-white px-4 bg-yellow-400 w-[100%]'>
        <h5 className='text-center text-xsm text-bold'>LIMITED TIME OFFER: 30% OFF. Use RABBIT30 at checkout <span><time dateTime="hh:mm:ss"></time></span></h5>
      </div>

      {/*upperNav*/} 
      <div className='bg-white py-2'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className="font-bold text-3xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-55" />
              
            </a>
          </div>
          <div className='flex items-center justify-between '>
          {/* search Bar */}
          <div className='flex '>
            <div className='relative group hidden sm:block mr-100'>
            <input type="text" placeholder="Search..." className='bg-[#f3bd10]/20 w-[200px] sm:w-[200px]  group-hover:w-[300px] transition-all duration-300 rounded-full border-2 border-yellow-500/50 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400' />
            <IoMdSearch 
            className='text-yellow-500/60 group-hover:text-white absolute top-1/2 -translate-y-1/2 right-3 '
            />
            </div>
            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-[#f3bd10] to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
          </div>
        </div>
      </div>
      {/*lowerNav*/} 
      <div className='flex justify-center bg-[#f3bd10] text-white'>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menu.map(data=>(
            <li key={data.id}>
              <a href={data.link}
              className='inline-block px-4 hover:text-yellow-700 duration-200'
              ><h1>{data.title}</h1>
              </a>
            </li>
          ))}
          {/*DROP-DOWN AND LINKS*/ }

          {/*PUJA-DROPDOWN*/}

          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2 hover:text-yellow-700'>Puja
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
              {DropdownLinks1.map(data=>(
                <li key={data.id}>
                  <a href={data.link}
                  className='inline-block w-full rounded-md p-2 hover:bg-[#f3bd10]/10 hover:text-[#f3bd10]'
                  >{data.title}</a>
                </li>
              ))}
              </ul>
              </div>
          </li>

          {/*ASTRO_REPORT-DROPDOWN*/}

          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2 hover:text-yellow-700'>Astro Report
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
              {DropdownLinks2.map(data=>(
                <li key={data.id}>
                  <a href={data.link}
                  className='inline-block w-full rounded-md p-2 hover:bg-[#f3bd10]/10 hover:text-[#f3bd10]'
                  >{data.title}</a>
                </li>
              ))}
              </ul>
              </div>
          </li>


           {/*VEDA_STORE-DROPDOWN*/}  

          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2 hover:text-yellow-700'>Veda Store
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
              {DropdownLinks3.map(data=>(
                <li key={data.id}>
                  <a href={data.link}
                  className='inline-block w-full rounded-md p-2 hover:bg-[#f3bd10]/10 hover:text-[#f3bd10]'
                  >{data.title}</a>
                </li>
              ))}
              </ul>
              </div>
          </li>
        </ul>
      </div>
    </div>
      )
}

export default Navbar;