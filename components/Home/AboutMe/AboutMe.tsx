/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";

const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
  const technologies = [
    [
      "React Native & Expo",
      "React.js & Next.js",
      "TypeScript & JavaScript (ES6+)",
      "Expo Router & Tailwind CSS"
    ],
    [
      "Redux Toolkit & RTK Query",
      "TanStack Query & Zustand",
      "Node.js & Express APIs",
      "Socket.IO & WebSockets"
    ],
    [
      "LLM APIs & AI Integration",
      "Mapbox & Geofencing",
      "Firebase & Zego Cloud",
      "Razorpay & Paytm Gateways"
    ]
  ];

  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      ref={ref}
      className="snap-start flex flex-col items-center py-20 bg-transparent relative z-20"
    >
      <div className="flex flex-col space-y-12 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        {/* Header Section */}
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gradient-to-r from-AAsecondary/40 to-transparent h-[1px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <p className="font-Header text-justify text-gray-400 leading-relaxed">
              Hello! My name is <strong className="text-gray-200">Biswajit Dash</strong>, a 
              <span className="text-AAsecondary font-semibold"> React Native & Full-Stack Mobile Developer</span> based in Bhubaneswar, Odisha, India. 
              I have <span className="text-AAsecondary font-semibold">3+ years of experience</span> designing, developing, and deploying high-performance mobile and web applications.
            </p>

            <p className="font-Header text-justify text-gray-400 leading-relaxed">
              Currently, I am a <span className="text-AAsecondary font-semibold">React Native Developer at CPS Pvt. Ltd.</span>, leading the development of a scalable multi-vendor marketplace platform encompassing Admin, Vendor, and Customer applications. 
              Previously, I worked at <span className="text-AAsecondary font-semibold">Squbix Digital</span> developing healthcare platforms with Zego Cloud video consultations, and at <span className="text-AAsecondary font-semibold">PairaLabs Pvt. Ltd.</span> crafting SEO-optimized web apps with Next.js and TypeScript.
            </p>

            <p className="font-Header text-justify text-gray-400 leading-relaxed">
              I hold a <span className="text-gray-200 font-semibold">Master of Computer Applications (MCA)</span> from BPUT (2023–2025) and a <span className="text-gray-200 font-semibold">B.Sc. ITM</span> from Bhadrak Autonomous College (2019–2022).
            </p>

            <p className="font-Header tracking-wide text-justify text-gray-300 font-semibold pt-2">
              Core Technologies & Tools I work with daily:
            </p>

            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-col sm:flex-row gap-6 justify-between pt-1">
              {technologies.map((techList, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  {techList.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center space-x-2"
                    >
                      <ArrowIcon className="h-3 w-3 text-AAsecondary flex-none" />
                      <span className="text-gray-400 sm:text-sm text-xs font-mono">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 3D Globe & Photo Orb Showcase */}
          <div className="relative flex justify-center items-center py-6">
            {/* Outer Spinning 3D Wireframe Globe Ring */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-AAsecondary/50 animate-spin duration-[20s] absolute pointer-events-none" />
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-cyan-400/30 animate-[spin_35s_linear_infinite_reverse] absolute pointer-events-none" />
            
            {/* Blooming Aura Glow */}
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-AAsecondary/30 via-cyan-400/20 to-purple-600/20 blur-2xl absolute pointer-events-none animate-pulse" />

            {/* Inner Globe Photo Orb Container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-AAsecondary shadow-[0_0_30px_rgba(100,255,218,0.3)] group cursor-pointer transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-AAprimary/20 group-hover:bg-transparent z-10 transition-colors duration-300" />
              <Img
                src="/img/Portfolio-portrait-3Copy.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Biswajit Dash Portfolio Image inside 3D Globe"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
