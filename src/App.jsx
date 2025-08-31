import React, { useEffect, useState } from 'react'
import SiteNavbar from './components/SiteNavbar'
import { motion, AnimatePresence } from "framer-motion";
import ListOfPlaces from './components/api/ListOfPlaces';
import { results } from './constants/data';
import SearchSection from './components/api/SearchSection';

const App = () => {
  const words = ["Market", "Competitors", "Opportunities"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, []);




  return (
    <div>
      <SiteNavbar />
      {/* <div className='flex items-center min-h-[650px] '>
        <div className="flex flex-col max-w-7xl w-full mx-auto py-10 px-4 text-gray-900">

          <div className="flex flex-col max-w-4xl w-full py-24 rounded-xl">
            <h1 className="leading-[90%] text-6xl font-bold text-black">
              Know Your{" "}
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="inline-block relative bg-orange-400 px-3 py-2 rounded-md overflow-hidden text-white"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="block text-center"
                  >
                    {words[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </motion.span>

              <br /> Grow Your Business
            </h1>
          </div>

          Scrape Input Box
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl flex items-center py-3 px-4 space-x-4 border-2 border-gray-400/20">
            <span className="text-gray-400">https://</span>
            <input
              placeholder="www.example.com"
              className="z-10 flex-1 outline-none text-gray-800"
            />


            <div className="z-10 p-1 rounded-xl bg-white shadow border border-gray-400/10">
              <button
                className="px-4 py-2 rounded-lg bg-gradient-to-br from-lime-400/50 via-teal-500/50 to-cyan-400/50
 text-teal-900 font-medium hover:opacity-90 disabled:opacity-60 hover:shadow hover:shadow-green-800 hover:scale-[101%] active:shadow-none active:scale-[100%]"
              >
                Start scraping
              </button>
            </div>
          </div>

        </div>
      </div> */}
      <div className='flex'>
        <div className="flex flex-col max-w-7xl w-full mx-auto py-10 px-4 text-gray-900">
          <div className="flex flex-col max-w-4xl w-full mx-auto pt-[170px] rounded-xl">
            {/* Title Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
              className='relative pb-3'>
              <h1
                className="text-7xl text-center font-bold text-black leading-[75px]"

              >
                Map Your Market, <br />
                Master Your Competition
              </h1>
              <img src="underline.png" alt="" className='absolute -bottom-[10px] right-6 w-[420px] h-6' />
            </motion.div>
            {/* Paragraph Animation */}
            <motion.p
              className="mt-1 mx-20 text-center text-lg text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.8, ease: "easeOut" }}
            >
              Get instant insights into businesses in your vicinity to evaluate competitors,
              franchise potential, and sales opportunities.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl mx-auto mt-20 bg-white shadow-lg rounded-2xl flex items-center py-[10px] px-5 space-x-4 border-2 border-gray-400/20"
          >
            {/* Location Input */}
            <input
              placeholder="Enter location e.g. Baguiati"
              className="z-10 flex-1 w-[60%] outline-none text-gray-800 placeholder-gray-400 focus:border-orange-400 transition-colors"
            />

            {/* Category Dropdown */}
            <select
              className="z-10 w-[20%] outline-none text-gray-800 placeholder-gray-400 h-fit border border-gray-400/10 rounded-xl shadow px-3 py-3 focus:border-orange-400 transition-colors bg-white"
              defaultValue=""
            >
              <option value="" >
                Restaurants
              </option>
              <option value="restaurants">Restaurants</option>
              <option value="cafes">Cafes</option>
              <option value="salons">Salons</option>
              <option value="gyms">Gyms</option>
              <option value="shops">Shops</option>
            </select>

            {/* CTA Button */}
            <div className="z-10 p-1 rounded-xl bg-white shadow border border-gray-400/10">
              <button
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500
          text-white font-semibold tracking-wide hover:opacity-95 transition-all duration-200
          hover:shadow-lg hover:shadow-orange-500/50 hover:scale-[102%] active:scale-[98%]"
              >
                Find Places
              </button>
            </div>
          </motion.div>


        </div>
      </div>

      <div className='h-screen'></div>

      <div className='flex flex-col w-full'>
        <div className='w-full max-w-7xl mx-auto'>
          <div className='relative w-fit mx-auto pb-[18px]'>
            <h1 className=' text-center text-5xl font-bold'>One Search, Endless Possibilities</h1>
            <img src="underline.png" alt="" className='absolute bottom-0 right-0 w-[270px]' />
          </div>
          <SearchSection />
        </div>
      </div>
    </div>
  )
}

export default App