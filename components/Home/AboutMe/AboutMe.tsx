/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";

// Use forwardRef and explicitly type the ref
const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
  const technologies = [
    ["React", "JavaScript", "Tailwind CSS", "Redux", "Expo"],
    ["Node.js", "MongoDB", "Firebase", "GraphQL/RESTful APIs", "TALLY"]
  ];

  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      ref={ref} // ✅ Now TypeScript knows it's an HTMLDivElement
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
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
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Section */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <p className="font-Header text-justify text-gray-400">
              Hello! My name is <strong>Biswajit Dash</strong>, and I&apos;m a
              passionate software developer specializing in frontend development
              with <span className="text-AAsecondary">React Native</span>. I
              have a strong foundation in{" "}
              <span className="text-AAsecondary">
                JavaScript, Redux, and Expo
              </span>
              , enabling me to build high-performance mobile applications.
            </p>

            <p className="font-Header text-justify text-gray-400">
              Currently, I&apos;m working at{" "}
              <span className="text-AAsecondary">Squbix Digital</span>, where I
              contribute to developing mobile applications using React Native.
              Before that, I worked at{" "}
              <span className="text-AAsecondary">Pairalabs Technologies</span>,
              gaining valuable experience in frontend development. Additionally,
              I have experience working with backend technologies such as{" "}
              <span className="text-AAsecondary">
                Node.js, MongoDB, Firebase
              </span>
              , and API development using{" "}
              <span className="text-AAsecondary">
                GraphQL and RESTful services
              </span>
              . While my primary focus is frontend development, I have a basic
              understanding of backend technologies.
            </p>

            <p className="font-Header tracking-wide text-justify text-gray-400">
              I am always eager to learn new technologies and improve my
              problem-solving skills. Below are some of the technologies I work
              with:
            </p>

            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-16 justify-center lg:justify-start">
              {technologies.map((techList, i) => (
                <div key={i} className="flex flex-row space-x-2 items-center">
                  <div className="flex flex-col space-y-4 sm:text-base text-sm">
                    {techList.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className="h-3 w-3 text-AAsecondary" />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          {/* <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src="/img/Portfolio-portrait-3Copy.jpg"
                className="object-contain rounded-lg"
                alt="Biswajit Dash Portfolio Image"
              />
            </div>
          </div> */}

          {/* Image Section for larger screens (Tablet & Desktop) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src="/img/Portfolio-portrait-3Copy.jpg"
                className="object-contain rounded-lg"
                alt="Biswajit Dash Portfolio Image"
              />
            </div>
          </div>

          {/* Image Section for mobile (100% width) */}
          {/* Simple Image Section for mobile */}
          <div className="w-full h-96 block md:hidden">
            <Img
              src="/img/Portfolio-portrait-3Copy.jpg"
              className="w-full h-full object-contain rounded-lg"
              alt="Biswajit Dash Portfolio Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

// Export the component
export default AboutMe;
