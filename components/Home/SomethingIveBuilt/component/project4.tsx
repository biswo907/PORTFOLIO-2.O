import React from "react";
import ExternalLink from "../../../Icons/ExternalLink";
import GithubIcon from "../../../Icons/GithubIcon";
import Img from "../../../smallComp/image/Img";
import { useRouter } from "next/router";
import LINKS from "../../../../constants/Links";

const Project4 = () => {
  const router = useRouter();

  return (
    <div
      data-aos="fade-up"
      className="relative md:grid md:grid-cols-12 w-full md:h-96"
    >
      {/* Left Image Section */}
      <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
        <div className="relative rounded w-full h-full col-span-7">
          <a href={LINKS?.PROJECT_AKSHIFY} target="_blank" rel="noreferrer">
            <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
          </a>
          <Img
            src="/akshify_cover.png"
            alt="Akshify Screenshot"
            className="w-full rounded h-full"
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
        {/* Background image on mobile */}
        <div className="absolute w-full h-full bg-opacity-70 z-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
            <Img
              src="/akshify_cover.png"
              alt="Akshify Screenshot"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
          {/* Title */}
          <div className="flex flex-col space-y-1 md:items-end z-10">
            <span className="text-AAsecondary text-base">Akshify.in</span>
            <a
              href={LINKS?.PROJECT_AKSHIFY}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                Akshify Task Manager
              </span>
            </a>
          </div>

          {/* Description */}
          <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
            <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
              Akshify is a role-based task management platform built using{" "}
              <span className="text-AAsecondary">React Native</span>,{" "}
              <span className="text-AAsecondary">Node.js</span>, and{" "}
              <span className="text-AAsecondary">MongoDB</span>. Companies can
              create employee accounts, assign tasks with visibility rules, and
              track status in real time. JWT authentication, user roles, and
              profile controls ensure a secure and modern experience.
            </p>
          </div>

          {/* Tech Stack */}
          <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
            <span className="pr-4 z-10">React Native</span>
            <span className="pr-4 z-10">Node.js</span>
            <span className="pr-4 z-10">MongoDB</span>
            <span className="pr-4 z-10">JWT</span>
          </ul>

          {/* Links */}
          <div className="z-10 flex flex-row space-x-5">
            <GithubIcon link="https://github.com/your-github-akshify" />
            <a href={LINKS?.PROJECT_AKSHIFY} target="_blank" rel="noreferrer">
              <ExternalLink url="" router={router} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project4;
