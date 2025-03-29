import React from "react";
import ExternalLink from "../../../Icons/ExternalLink";
import GithubIcon from "../../../Icons/GithubIcon";
import Img from "../../../smallComp/image/Img";
import { useRouter } from "next/router";

const Project2 = () => {
  const router = useRouter();
  return (
    <div
      data-aos="fade-up"
      className="relative md:grid md:grid-cols-12 w-full md:h-96 "
    >
      {/* Left image */}
      <div
        className="hidden bg-AAprimary z-10  py-4 
    absolute md:grid grid-cols-12 w-full h-full  content-center"
      >
        <div className="relative rounded w-full h-full col-span-7 ">
          {/* <Link href={"/typing"}>
          <div
            // onClick={}
            className="absolute w-full h-full rounded bg-AAsecondary 
     transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
          ></div>
        </Link> */}

          <a href="project-link" target={"_blank"} rel="noreferrer">
            <div
              // onClick={}
              className="absolute w-full h-full rounded bg-AAprimary 
     transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
            ></div>
          </a>

          <Img
            src={"/currency_Converter.png"}
            alt={"Project Screen shot"}
            className={`w-full rounded h-full `}
          />
        </div>
      </div>

      {/* right Content */}
      <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
        {/* background for text in mobile responsive */}
        <div className="absolute w-full h-full bg-opacity-70 z-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
            <Img
              src={"/currency_Converter.jpg"}
              alt={"Project Screen shot"}
              className={`w-full h-full `}
            />
          </div>
        </div>

        <div
          className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
      col-span-8 flex flex-col items-start md:items-end space-y-3"
        >
          <div className="flex flex-col space-y-1 md:items-end z-10">
            <span className="text-AAsecondary text-base">Currency.in</span>
            <a
              href="https://ubiquitous-bublanina-da84ec.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                Currency Converter
              </span>
            </a>
          </div>
          <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
            <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
              Built a dynamic currency converter using{" "}
              <span className="text-AAsecondary">React</span> and{" "}
              <span className="text-AAsecondary">TanStack Query</span>,
              integrated with the{" "}
              <span className="text-AAsecondary">Frankfurter API</span> for
              real-time exchange rates. Optimized data fetching, caching, and
              synchronization for a seamless user experience.
            </p>
          </div>
          <ul
            className="flex flex-wrap w-full text-gray-300 md:text-gray-400
         text-sm font-Text2 md:justify-end"
          >
            <span className="pr-4 z-10">React</span>
            <span className="pr-4 z-10">Tanstack Query</span>
            <span className="pr-4 z-10">Frankfurter-API</span>
          </ul>
          <div className="z-10 flex fle-row space-x-5 ">
            <div className="z-10 flex fle-row space-x-5 ">
              <GithubIcon link="https://github.com/hktitof/Ypredict" />
              <a
                href="https://ubiquitous-bublanina-da84ec.netlify.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <ExternalLink url={""} router={router} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
