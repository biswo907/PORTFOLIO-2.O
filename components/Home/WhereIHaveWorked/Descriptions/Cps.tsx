import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Cps() {
  const tasks = [
    {
      text: "Leading development of a multi-vendor marketplace platform with dedicated Admin, Vendor, and Customer applications.",
      keywords: ["multi-vendor marketplace", "Admin", "Vendor", "Customer applications"]
    },
    {
      text: "Built scalable onboarding, booking, pricing, payment, and location-based service workflows.",
      keywords: ["onboarding", "booking", "pricing", "payment", "location-based service"]
    },
    {
      text: "Managed Expo EAS deployments, Play Store releases, and application performance optimization.",
      keywords: ["Expo EAS", "Play Store releases", "performance optimization"]
    }
  ];

  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col space-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide font-semibold">
          React Native Developer{" "}
          <span className="text-AAsecondary">@ CPS Pvt. Ltd.</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">
          Sep 2025 – Present | Bhubaneswar, Odisha
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
