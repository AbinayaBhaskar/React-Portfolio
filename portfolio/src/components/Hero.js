import React from 'react';
import Profile from '../assets/profile.jpg';
import Banner from '../assets/Banner.jpg';
import resume from '../assets/Resume.pdf';
import { PROFILE } from '../assets/constant.js';
import { motion } from "framer-motion";
import { AiFillInstagram, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

function Hero() {
    const motionConfig = (value) => ({
        hidden: { x: value, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 }
        }
    });

    return (
        <div
            style={{ backgroundImage: `url(${Banner})` }}
            className="bg-cover bg-center min-h-screen w-full"
        >
            <section
                id="hero"
                className="flex justify-center items-center min-h-screen px-0 pt-0"
            >
                <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg max-w-4xl flex flex-col md:flex-row items-center text-center md:text-left">
                    <motion.img
                        variants={motionConfig(-100)}
                        initial="hidden"
                        animate="visible"
                        className="w-72 h-72 rounded-full border-4 border-dark-primary mr-0 md:mr-12 mb-8 md:mb-0"
                        src={Profile}
                        alt="Profile image"
                    />

                    <motion.div
                        variants={motionConfig(100)}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center md:items-start"
                    >
                        <h1 className="text-3xl">
                            {PROFILE.GREET}
                            <br />
                            <span className="w-1/2 text-5xl mt-3.5">{PROFILE.NAME}</span>
                        </h1>
                        <p className="text-3xl mt-3.5">{PROFILE.ROLE}</p>
                        <div className="flex py-10 space-x-5">
                            <a className="hover:text-dark-secondary" target='_blank' href="https://www.linkedin.com/in/abinaya-b-330094224/">
                                <AiOutlineLinkedin size={30} />
                            </a>
                            <a className="hover:text-dark-secondary" href="mailto:abinayabhaskar14@gmail.com">
                                <AiOutlineMail size={30} />
                            </a>
                            <a className="hover:text-dark-secondary" target='_blank' href="https://www.instagram.com/">
                                <AiFillInstagram size={30} />
                            </a>
                        </div>
                        <div>
                            <button className="bg-dark-secondary text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:border-2 border-dark-secondary">
                                <a href={resume} download="abinaya-resume.pdf">
                                    Download
                                </a>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
