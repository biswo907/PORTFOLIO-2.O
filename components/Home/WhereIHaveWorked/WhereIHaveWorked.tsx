import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function WhereIHaveWorked() {
  const experiences = [
    {
      company: "CPS Pvt. Ltd.",
      role: "React Native Developer",
      period: "Sep 2025 – Present",
      location: "Bhubaneswar, Odisha",
      status: "Present Role",
      bullets: [
        "Leading development of a multi-vendor marketplace platform with dedicated Admin, Vendor, and Customer mobile applications.",
        "Built scalable onboarding, booking, pricing, payment gateway, and location-based service workflows.",
        "Managed Expo EAS deployments, Google Play Store releases, and application performance optimizations."
      ],
      tech: ["React Native", "Expo EAS", "Multi-Vendor Marketplace", "REST APIs", "Play Store"]
    },
    {
      company: "Squbix Digital",
      role: "React Native Developer",
      period: "Nov 2024 – Aug 2025",
      location: "Bhubaneswar, Odisha",
      status: "Completed",
      bullets: [
        "Developed telemedicine applications and healthcare platforms for patients and healthcare providers.",
        "Integrated real-time video consultations and communication systems using Zego Cloud SDK.",
        "Implemented authentication, appointment scheduling, instant notifications, and payment workflows."
      ],
      tech: ["React Native", "Zego Cloud Video", "Telemedicine", "Firebase", "Redux"]
    },
    {
      company: "PairaLabs Pvt. Ltd.",
      role: "Frontend Developer",
      period: "Apr 2023 – Oct 2024",
      location: "Bhubaneswar, Odisha",
      status: "Completed",
      bullets: [
        "Built SEO-optimized web applications using React.js, Next.js, Remix.js, and TypeScript.",
        "Developed responsive user interfaces and integrated REST APIs across multiple client projects.",
        "Improved application performance, web accessibility (a11y), and overall user experience."
      ],
      tech: ["React.js", "Next.js", "Remix.js", "TypeScript", "Tailwind CSS"]
    }
  ];

  return (
    <div
      id="WhereIhaveWorkedSection"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-16 bg-transparent px-4 sm:px-8 relative z-20"
    >
      {/* Title Section */}
      <section className="flex flex-row items-center w-full max-w-4xl">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-mono text-sm sm:text-xl">
            02.
          </span>
        </div>
        <span className="text-gray-100 font-bold tracking-wider text-xl md:text-3xl px-3 opacity-90">
          Where I&apos;ve Worked — Career Roadmap
        </span>
        <div className="bg-gradient-to-r from-AAsecondary/40 to-transparent h-[1px] flex-grow"></div>
      </section>

      {/* Roadmap Vertical Timeline Container */}
      <div className="relative w-full max-w-4xl">
        {/* Central Vertical Glowing Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-AAsecondary via-cyan-500/40 to-gray-800 -translate-x-1/2 pointer-events-none" />

        <div className="flex flex-col space-y-12">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-AAprimary border-2 border-AAsecondary shadow-lg shadow-AAsecondary/50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-AAsecondary animate-ping" />
                  </div>
                </div>

                {/* Content Card Box */}
                <div className="pl-12 sm:pl-0 sm:w-1/2 w-full px-0 sm:px-8">
                  <div className="bg-AAtertiary/80 backdrop-blur-xl border border-gray-800/80 hover:border-AAsecondary/40 rounded-2xl p-6 transition-all duration-300 shadow-xl shadow-black/30 group hover:-translate-y-1">
                    {/* Header: Role & Company */}
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-mono text-AAsecondary bg-AAsecondary/10 border border-AAsecondary/20 px-2.5 py-0.5 rounded-full font-semibold">
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-mono text-gray-500">
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-gray-100 font-bold text-lg sm:text-xl pt-2 group-hover:text-AAsecondary transition-colors">
                        {exp.role}{" "}
                        <span className="text-AAsecondary">@ {exp.company}</span>
                      </h3>
                    </div>

                    {/* Bullets */}
                    <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-gray-400 font-Header">
                      {exp.bullets.map((item, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2">
                          <ArrowIcon className="h-4 w-4 text-AAsecondary flex-none mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-AAprimary/90 border border-gray-800 text-gray-300 text-[11px] font-mono px-2.5 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
