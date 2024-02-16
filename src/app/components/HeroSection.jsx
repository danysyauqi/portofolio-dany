"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-blue-600">
               Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Dany Syauqi',
                1000,
                'IoT Enthusiast',
                1000,
                'Data Engineer',
                1000,
                'Data Science',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            North Jakarta, DKI Jakarta
          </p>
          <div>
            <Link href="https://www.linkedin.com/in/danysyauqi/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#0077b5] hover:bg-[#00A0DC] text-white"
              >
              Connect Me
            </Link>
            <Link href="https://github.com/danysyauqi"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-bl from-transparent via-gray-800 to-gray-800 hover:bg-slate-800 text-white border border-gray-800 mt-3"
              >
              GitHub
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative mt-10">
            <Image
              src="/images/pas-foto.png"
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
