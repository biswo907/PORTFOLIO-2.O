import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Squbix() {
  const tasks = [
    {
      text: "Developed and maintained the Akhil Patient mobile app using React Native, ensuring a smooth user experience and robust performance.",
      keywords: ["React Native", "Akhil Patient", "mobile app", "performance"]
    },
    {
      text: "Integrated Firebase for authentication and real-time data synchronization, improving app security and user engagement.",
      keywords: ["Firebase", "authentication", "real-time sync", "security"]
    },
    {
      text: "Optimized Redux state management and async storage to persist user sessions, enhancing usability and app efficiency.",
      keywords: ["Redux", "async storage", "state management", "efficiency"]
    },
    {
      text: "Collaborated with designers and backend developers to refine the app’s UI/UX and API integrations, ensuring seamless functionality.",
      keywords: ["UI/UX", "API integration", "team collaboration"]
    }
  ];

  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          React Native Developer{" "}
          <span className="text-AAsecondary">@ Squbix</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">
          Oct 2023 - Present
        </span>
        <span
          className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
          style={{ fontSize: "0.6rem" }}
          onClick={() => window.open("https://www.squbix.com/", "_blank")}
        >
          www.squbix.com
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {/* Tasks Description 1 */}
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
