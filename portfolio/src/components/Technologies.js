import React from 'react'
import { FaJava, FaNodeJs } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiMysql, SiAngular } from 'react-icons/si';
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
function Technologies() {
    return (
        <div id="technology" className='pb-7'>
            <h2 className='mb-10 text-center text-4xl pt-10'>Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-4' >
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl p-4 bg-gradient-to-b from-black to-gray-600 shadow-lg">
                    <FaJava className='text-7xl text-white' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl p-4 bg-gradient-to-b from-black to-gray-600 shadow-lg">
                    <FaNodeJs className='text-7xl text-green-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl p-4 bg-gradient-to-b from-black to-gray-600 shadow-lg">
                    <SiJavascript className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl p-4 bg-gradient-to-b from-black to-gray-600 shadow-lg">
                    <SiHtml5 className='text-7xl text-orange-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl p-4 bg-gradient-to-b from-black to-gray-600 shadow-lg">
                    <SiCss3 className='text-7xl text-sky-300' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl p-4 bg-gradient-to-b from-black to-gray-600 shadow-lg">
                    <SiAngular className='text-7xl text-red-700' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl p-4 bg-gradient-to-b from-black to-gray-600 shadow-lg">
                    <SiMysql className='text-7xl text-sky-700' />
                </motion.div>

            </div>
        </div>
    )
}

export default Technologies
