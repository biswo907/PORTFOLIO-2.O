import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import ExternalLink from "../../Icons/ExternalLink";
import GithubIcon from "../../Icons/GithubIcon";
import Img from "../../smallComp/image/Img";
import LINKS from "../../../constants/Links";
import { useRouter } from "next/router";

export default function SomethingIveBuilt() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "wisbox",
      category: "Mobile & Web Ecosystem",
      title: "Wisbox — Food & Restaurant Platform",
      image: "/wisbox_showcase.jpg",
      description:
        "Multi-role food marketplace ecosystem (Customer, Vendor, Admin) supporting takeaway, dine-in, table reservations, and pre-booked meals. Built with Socket.IO real-time order tracking, Mapbox geofencing, store check-in/out, and Razorpay payments.",
      tech: ["React Native", "Socket.IO", "Mapbox", "Firebase", "Razorpay"],
      github: LINKS?.PROJECT_WISBOX || "https://github.com/biswo907",
      link: LINKS?.PROJECT_WISBOX || "https://github.com/biswo907",
      type: "mobile",
    },
    {
      id: "quickreview",
      category: "AI Web Platform",
      title: "QuickReview AI — Review Management",
      image: "/quickreview_showcase.jpg",
      description:
        "AI-powered review platform enabling businesses to generate branded QR codes linked directly to Google Review pages. Integrates LLM APIs to draft personalized, context-aware customer review suggestions based on shop category.",
      tech: ["React.js", "TypeScript", "LLM APIs (AI)", "Vite", "TanStack Query"],
      github: LINKS?.PROJECT_QUICKREVIEW || "https://github.com/biswo907",
      link: LINKS?.PROJECT_QUICKREVIEW || "https://github.com/biswo907",
      type: "ai",
    },
    {
      id: "radiants",
      category: "Enterprise Infrastructure App",
      title: "Radiants MMG — Material Management",
      image: "/radiants_showcase.jpg",
      description:
        "Material lifecycle management application built for electricity infrastructure projects covering GRN, allocation, installation, verification, and transfer workflows. Includes barcode scanning, GPS-tagged installation proof, and store audit history.",
      tech: ["React Native (Expo)", "TypeScript", "TanStack Query", "GPS Tagging", "Axios"],
      github: LINKS?.PROJECT_RADIANTS_MMG || "https://github.com/biswo907",
      link: LINKS?.PROJECT_RADIANTS_MMG || "https://github.com/biswo907",
      type: "enterprise",
    },
    {
      id: "akshify",
      category: "Full Stack Task Engine",
      title: "Akshify — Task Management System",
      image: "/akshify_cover.png",
      description:
        "Role-based task management platform built using React Native, Node.js, and MongoDB. Enables companies to create employee accounts, assign tasks with visibility rules, and track real-time status with JWT authentication.",
      tech: ["React Native", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      github: LINKS?.PROJECT_AKSHIFY || "https://github.com/biswo907",
      link: LINKS?.PROJECT_AKSHIFY || "https://github.com/biswo907",
      type: "mobile",
    },
  ];

  const filterButtons = [
    { label: "All Projects", key: "all" },
    { label: "Mobile Apps", key: "mobile" },
    { label: "AI Platforms", key: "ai" },
    { label: "Enterprise", key: "enterprise" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col space-y-16 bg-transparent w-full 
     2xl:px-72 lg:px-24 md:px-16 sm:px-8 py-24 px-4 relative z-20"
    >
      {/* Title Section */}
      <div data-aos="fade-up" className="flex flex-col space-y-4">
        <div className="flex flex-row items-center md:px-0">
          <ArrowIcon
            className={"flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary"}
          />
          <div className="flex-none flex-row space-x-2 items-center pr-2">
            <span className="text-AAsecondary font-mono text-sm sm:text-xl">
              03.
            </span>
            <span className="font-bold tracking-wider text-gray-100 text-xl md:text-3xl opacity-90">
              Some Things I&apos;ve Built
            </span>
          </div>
          <div className="bg-gradient-to-r from-AAsecondary/40 to-transparent h-[1px] w-full"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <p className="text-gray-400 text-sm font-Header max-w-xl">
            Featured mobile applications, AI platforms, and enterprise solutions built with production-grade engineering.
          </p>

          <div className="flex flex-wrap gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setActiveFilter(btn.key)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border ${
                  activeFilter === btn.key
                    ? "bg-AAsecondary/15 text-AAsecondary border-AAsecondary font-semibold shadow-md shadow-AAsecondary/10"
                    : "bg-AAtertiary/40 text-gray-400 border-gray-800 hover:text-gray-200 hover:border-gray-700"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid: Top Image, Details Below */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up"
            className="flex flex-col bg-AAtertiary/60 backdrop-blur-xl border border-gray-800 hover:border-AAsecondary/40 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1.5 group"
          >
            {/* Image ON TOP */}
            <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b border-gray-800/80">
              <a href={project.link} target="_blank" rel="noreferrer">
                <div className="absolute inset-0 bg-AAprimary/20 group-hover:bg-transparent z-10 transition-colors duration-300" />
                <Img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </a>
            </div>

            {/* Content UNDER Image */}
            <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
              <div className="space-y-2">
                {/* Category Badge */}
                <span className="text-[11px] font-mono text-AAsecondary bg-AAsecondary/10 border border-AAsecondary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Title */}
                <a href={project.link} target="_blank" rel="noreferrer" className="block pt-1">
                  <h3 className="text-gray-100 font-bold text-lg sm:text-xl group-hover:text-AAsecondary transition-colors duration-300">
                    {project.title}
                  </h3>
                </a>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm font-Header leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>

              {/* Footer: Tech Badges & Links */}
              <div className="pt-4 border-t border-gray-800/60 flex flex-col space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-AAprimary/90 border border-gray-800 text-gray-300 text-[11px] font-mono px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-mono text-AAsecondary bg-AAsecondary/10 border border-AAsecondary/30 px-4 py-2 rounded-md hover:bg-AAsecondary/20 transition-all duration-300 shadow-md"
                  >
                    <span>View Project Details</span>
                    <ExternalLink url={""} router={router} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
