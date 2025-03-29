import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Pairalabs() {
  const tasks = [
    {
      text: "Developed responsive and high-performance web applications using React, Next.js, and Remix.js, ensuring seamless user experiences across multiple devices.",
      keywords: [
        "React",
        "Next.js",
        "Remix.js",
        "responsive design",
        "performance"
      ]
    },
    {
      text: "Built and optimized mobile applications using Expo and React Native, improving UI responsiveness and accessibility.",
      keywords: ["Expo", "React Native", "mobile app", "UI optimization"]
    },
    {
      text: "Implemented complex form validations and multi-use case handling across web and mobile platforms, enhancing data accuracy and user interactions.",
      keywords: [
        "form validation",
        "multi-use cases",
        "data accuracy",
        "user interaction"
      ]
    },
    {
      text: "Collaborated with designers to transform Figma prototypes into fully interactive user interfaces, ensuring design consistency and performance optimization.",
      keywords: ["Figma", "UI development", "design consistency", "performance"]
    }
  ];

  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Frontend Developer{" "}
          <span className="text-AAsecondary">@ Pairalabs</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">
          April 2023 - Oct 2024 (1.5 years)
        </span>
        <span
          className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
          style={{ fontSize: "0.6rem" }}
          onClick={() => window.open("https://www.pairalabs.com/", "_blank")}
        >
          www.pairalabs.com
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {/* Tasks Description */}
        {tasks.map((item, index) => (
          <div key={index} className="flex flex-row space-x-1">
            <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
            <span
              className="text-gray-500 sm:text-sm text-xs"
              dangerouslySetInnerHTML={{
                __html: getTasksTextWithHighlightedKeyword(
                  item.text,
                  item.keywords
                )
              }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}
