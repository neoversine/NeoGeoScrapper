import React from 'react'
import { motion } from "framer-motion";

const SiteNavbar = () => {
    return (
        <div className='fixed top-5 z-50 flex w-full '>
            <div className="flex gap-5 w-full max-w-7xl mx-auto rounded-full relative overflow-visible">
                {/* Left item */}
                <motion.div
                    initial={{ width: 100 }} // enough for logo
                    animate={{ width: '92%' }}
                    transition={{
                        delay: 1,
                        type: "spring",
                        stiffness: 120,
                        damping: 10,
                        duration: 1,
                    }}
                    className="flex items-center h-20 my-auto bg-orange-400 rounded-full overflow-hidden"
                >
                    {/* Logo on the left */}
                    <div className="h-14 w-14 rounded-full flex-shrink-0 ml-6">
                        <img src="/Neo-Geo-Logo-White.png" alt="logo" className='object-cover rounded-full' />
                    </div>
                    {/* Company Name / Links can go here */}
                </motion.div>



                {/* Animated blob */}
                <motion.div
                    initial={{ x: -50, scale: 0.5, opacity: 0 }}
                    animate={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 10,
                        duration: 2,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }} // optional: nice press effect
                    className="h-20 w-20 p-1 my-auto rounded-full bg-white border border-gray-400/40 shadow"
                >

                    <div className='bg-orange-400 h-full w-full p-4 rounded-full'>
                        <img src="/cursor-click.svg" alt="" className='object-cover' />
                    </div>

                </motion.div>
            </div>
        </div >
    )
}

export default SiteNavbar