import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const SiteNavbar = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 768); // md breakpoint
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div className='fixed top-5 z-50 flex w-full'>
            <div className="flex gap-3 md:gap-5 w-full max-w-7xl px-2 mx-auto rounded-full relative overflow-visible">

                {/* Left item */}
                <motion.div
                    initial={{ width: 100 }}
                    animate={{ width: isDesktop ? "92%" : "80%" }} // 👈 responsive animation
                    transition={{
                        delay: 1,
                        type: "spring",
                        stiffness: 120,
                        damping: 10,
                        duration: 1,
                    }}
                    className="flex items-center h-[70px] md:h-20 my-auto bg-orange-400 rounded-full overflow-hidden"
                >
                    {/* Logo */}
                    <div className="h-14 w-14 rounded-full flex-shrink-0 ml-6">
                        <img src="/Neo-Geo-Logo-White.png" alt="logo" className='object-cover rounded-full' />
                    </div>
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
                    whileTap={{ scale: 0.95 }}
                    className="h-[70px] w-[70px] md:h-20 md:w-20 p-1 my-auto rounded-full bg-white border border-gray-400/40 shadow"
                >
                    <div
                        className="bg-orange-400 h-full w-full p-4 rounded-full cursor-pointer"
                        onClick={() => {
                            const element = document.getElementById("working-api");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        <img src="/cursor-click.svg" alt="" className="object-cover" />
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default SiteNavbar;
