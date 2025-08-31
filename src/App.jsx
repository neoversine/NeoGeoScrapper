import React, { useEffect, useState } from 'react'
import SiteNavbar from './components/SiteNavbar'
import { motion, AnimatePresence } from "framer-motion";
import ListOfPlaces from './components/api/ListOfPlaces';
import { results } from './constants/data';
import SearchSection from './components/api/SearchSection';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

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
    <div className='relative w-full'>
      <SiteNavbar />

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
                className="text-6xl md:text-7xl text-center font-bold text-black leading-[75px]"

              >
                Map Your Market, <br />
                Master Your Competition
              </h1>
              <img src="underline.png" alt="" className='absolute -bottom-[10px] right-0 md:right-6 w-[400px] md:w-[420px] h-6' />
            </motion.div>
            {/* Paragraph Animation */}
            <motion.p
              className="mt-2 md:mt-1 mx-2 md:mx-20 text-center text-lg text-gray-600"
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
            className="hidden w-full max-w-3xl mx-auto mt-20 bg-white shadow-lg rounded-2xl flex items-center py-[10px] px-5 space-x-4 border-2 border-gray-400/20"
          >
            {/* Location Input */}
            <input
              placeholder="Enter location e.g. Baguiati"
              className="z-10 flex-1 w-[60%] outline-none text-gray-800 placeholder-gray-400 focus:border-orange-400 transition-colors"
            />

            {/* Category Dropdown */}
            <select
              className="max-md:hidden z-10 w-[20%] outline-none text-gray-800 placeholder-gray-400 h-fit border border-gray-400/10 rounded-xl shadow px-3 py-3 focus:border-orange-400 transition-colors bg-white"
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

                onClick={() => {
                  const element = document.getElementById("working-api");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                Find Places
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
            className='flex justify-center mt-10 md:mt-6 w-full '>
            <div className='z-10 p-1 rounded-xl bg-white shadow border border-gray-400/10 w-fit'>

              {/* CTA Button */}
              <button
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500
          text-white font-semibold tracking-wide hover:opacity-95 transition-all duration-200
          hover:shadow-lg hover:shadow-orange-500/50 hover:scale-[102%] active:scale-[98%]"
                onClick={() => {
                  const element = document.getElementById("working-api");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Find Places
              </button>
            </div>
          </motion.div>


        </div>
      </div>

      <div className='flex flex-col w-full pt-36 ' id="working-api">
        ;

        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.6, ease: "easeOut" }}
            className="relative w-fit mx-auto pb-[18px]"
          >
            <h1 className="text-center text-5xl font-bold">
              One Search, Endless Possibilities
            </h1>
            <motion.img
              src="underline.png"
              alt=""
              className="absolute bottom-0 max-md:left-16 md:bottom-0 md:right-0 w-[270px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <SearchSection />
          </motion.div>
        </div>
      </div>
      <LandingPage />
      <Footer />
    </div >
  )
}

export default App