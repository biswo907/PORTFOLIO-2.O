import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Squbix() {
  const tasks = [
    {
      text: "Developed telemedicine applications and healthcare platforms for patients and healthcare providers.",
      keywords: ["telemedicine", "healthcare platforms", "patients", "providers"]
    },
    {
      text: "Integrated real-time video consultations and communication systems using Zego Cloud.",
      keywords: ["real-time video consultations", "Zego Cloud", "communication systems"]
    },
    {
      text: "Implemented authentication, appointment scheduling, instant notifications, and payment workflows.",
      keywords: ["authentication", "appointment scheduling", "notifications", "payment workflows"]
    }
  ];

  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col space-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide font-semibold">
          React Native Developer{" "}
          <span className="text-AAsecondary">@ Squbix Digital</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">
          Nov 2024 – Aug 2025 | Bhubaneswar, Odisha
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {/* Tasks Description */}
        {tasks.map((item, index) => (
          <div key={index} className="flex flex-row space-x-2 items-start">
            <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none mt-0.5"} />
            <span
              className="text-gray-400 sm:text-sm text-xs leading-relaxed"
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
