import React from 'react';
import AboutImg from '../assets/about.jpg';
import { ABOUT_ME } from '../assets/constant.js';
import { motion } from 'framer-motion';

function About() {
    const motionConfig = (value) => ({
        hidden: { x: value, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 }
        }
    });

    return (
        <div id="about" className="bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300">
            <h2 className="mb-10 text-center text-4xl pt-10 text-light-primary">About Me</h2>
            <div className="flex flex-wrap">
                <motion.div
                    className="w-full lg:w-1/2 lg:p-8"
                    variants={motionConfig(-100)}
                    initial="hidden"
                    animate="visible"
                >
                    <p className="my-2 max-w-xl py-6 text-white">{ABOUT_ME}</p>
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2"
                    variants={motionConfig(100)} // Apply opposite direction for image
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex justify-center lg:justify-center">
                        <img className="rounded-3xl my-6 h-64 w-80" src={AboutImg} alt="about" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
