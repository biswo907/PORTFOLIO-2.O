import React from "react";
import ExternalLink from "../../../Icons/ExternalLink";
import GithubIcon from "../../../Icons/GithubIcon";
import Img from "../../../smallComp/image/Img";
import { useRouter } from "next/router";
import LINKS from "../../../../constants/Links";

const Project2 = () => {
  const router = useRouter();
  return (
    <div
      data-aos="fade-up"
      className="relative md:grid md:grid-cols-12 w-full md:h-96 items-center group"
    >
      {/* Image for Desktop */}
      <div
        className="hidden bg-AAprimary z-10 py-4 
    absolute md:grid grid-cols-12 w-full h-full content-center"
      >
        <div className="relative rounded-xl w-full h-full col-span-7 overflow-hidden border border-AAsecondary/20 shadow-2xl group-hover:border-AAsecondary/50 transition-all duration-500">
          <a
            href={LINKS?.PROJECT_QUICKREVIEW}
            target={"_blank"}
            rel="noreferrer"
          >
            <div
              className="absolute w-full h-full rounded-xl bg-gradient-to-l from-AAprimary/60 to-transparent 
      transition-opacity opacity-40 group-hover:opacity-0 hover:cursor-pointer duration-500 z-10"
            ></div>
          </a>

          <Img
            src={"/quickreview_showcase.jpg"}
            alt={"QuickReview AI Platform Screenshot"}
            className={`w-full rounded-xl h-full object-cover transition-transform duration-700 group-hover:scale-105`}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
        {/* Mobile View Card Background */}
        <div className="absolute w-full h-full bg-AAtertiary/80 backdrop-blur-xl rounded-xl z-0 md:hidden border border-AAsecondary/20 shadow-2xl overflow-hidden">
          <div className="relative w-full h-full opacity-20">
            <Img
              src={"/quickreview_showcase.jpg"}
              alt={"QuickReview AI Screenshot"}
              className={`w-full h-full object-cover`}
            />
          </div>
        </div>

        <div
          className="px-6 py-6 sm:px-8 sm:py-8 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
      col-span-8 flex flex-col items-start md:items-end space-y-3 relative z-10"
        >
          <div className="flex flex-col space-y-1 md:items-end z-10">
            <span className="text-AAsecondary text-xs font-mono tracking-widest uppercase font-semibold">
              Featured AI Web Platform
            </span>
            <a
              href={LINKS?.PROJECT_QUICKREVIEW}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-gray-100 text-xl sm:text-2xl font-bold tracking-wide hover:text-AAsecondary transition-colors duration-300">
                QuickReview AI — Review Platform
              </span>
            </a>
          </div>

          <div className="w-full bg-AAtertiary/90 backdrop-blur-md rounded-lg py-5 px-5 md:p-6 z-10 border border-gray-800/80 shadow-2xl">
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-Header text-left md:text-right">
              AI-powered review platform enabling businesses to generate branded <span className="text-AAsecondary font-semibold">QR codes</span> linked directly to Google Review pages. Integrates <span className="text-AAsecondary font-semibold">LLM APIs</span> to draft personalized, context-aware customer review suggestions based on shop category.
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-1 z-10 md:justify-end">
            {["React.js", "TypeScript", "LLM APIs (AI)", "Vite", "TanStack Query"].map((tech, idx) => (
              <span
                key={idx}
                className="bg-AAprimary/80 border border-AAsecondary/30 text-AAsecondary text-[11px] font-mono px-2.5 py-1 rounded-md shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="z-10 flex flex-row items-center space-x-5 pt-3">
            <GithubIcon link={LINKS?.PROJECT_QUICKREVIEW || "https://github.com/biswo907"} />
            <a
              href={LINKS?.PROJECT_QUICKREVIEW}
              target={"_blank"}
              rel="noreferrer"
              className="flex items-center space-x-1.5 text-xs font-mono text-AAsecondary hover:underline"
            >
              <span>Explore AI Platform</span>
              <ExternalLink url={""} router={router} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
