"use client";
import { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image";

// Import your skill icons here (ensure correct paths)
// Example paths, adjust as per your project structure
// --- IMPOR LOGO TEKNOLOGI DI SINI ---
import PythonIcon from "../../../public/python.png";
import HtmlIcon from "../../../public/html.png";
import CssIcon from "../../../public/css.png";
import JavascriptIcon from "../../../public/javascript.png";
import TailwindIcon from "../../../public/tailwind.png";
import NextjsIcon from "../../../public/nextjs.png";

import NodejsIcon from "../../../public/nodejs.png";
import BootstrapIcon from "../../../public/bootstrap.png";
import ReactIcon from "../../../public/react.png";

// Tools Icons
import VscodeIcon from "../../../public/vscode.png";
import GitIcon from "../../../public/git.png";
import FigmaIcon from "../../../public/figma.png";
import PostmanIcon from "../../../public/postman.png";
import TrelloIcon from "../../../public/trello.png";

export default function Skills() {
  const skillRefs = useRef([]);
  const [hoveredSkillId, setHoveredSkillId] = useState(null);
  const [activeSkillDetail, setActiveSkillDetail] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 150 });

    return () => {
      // Cleanup function jika observer tetap ada
      // observer.disconnect();
    };
  }, []);

  const skillIcons = {
    JavaScript: JavascriptIcon,
    HTML5: HtmlIcon,
    CSS: CssIcon,
    Bootstrap: BootstrapIcon,
    TailwindCSS: TailwindIcon,
    NextJS: NextjsIcon,
    NodeJS: NodejsIcon,
    React: ReactIcon,
    Python: PythonIcon,
    // Tools
    "VS Code": VscodeIcon,
    Git: GitIcon,
    Figma: FigmaIcon,
    Postman: PostmanIcon,
    Trello: TrelloIcon,
  };

  const getSkillTier = (level) => {
    const percentage = parseInt(level.replace("%", ""));
    if (percentage >= 90)
      return { text: "Expert", color: "bg-green-600", textColor: "text-white" };
    if (percentage >= 75)
      return {
        text: "Advanced",
        color: "bg-blue-600",
        textColor: "text-white",
      };
    if (percentage >= 50)
      return {
        text: "Intermediate",
        color: "bg-yellow-600",
        textColor: "text-white",
      };
    return { text: "Basic", color: "bg-red-600", textColor: "text-white" };
  };

  const hardSkills = [
    {
      id: "js",
      skill: "JavaScript",
      level: "90%",
      description:
        "Proficient in ES6+, DOM manipulation, and asynchronous programming.",
      category: "Frontend",
      isTopSkill: true,
    },
    {
      id: "html",
      skill: "HTML5",
      level: "95%",
      description:
        "Strong understanding of semantic HTML and accessibility best practices.",
      category: "Frontend",
    },
    {
      id: "css",
      skill: "CSS",
      level: "90%",
      description:
        "Skilled in responsive design, animations, and modern CSS techniques.",
      category: "Frontend",
    },
    {
      id: "bootstrap",
      skill: "Bootstrap",
      level: "85%",
      description:
        "Experienced in rapid UI development with Bootstrap framework.",
      category: "Frontend",
    },
    {
      id: "tailwind",
      skill: "TailwindCSS",
      level: "90%",
      description:
        "Adept at building custom designs efficiently with utility-first CSS.",
      category: "Frontend",
      isTopSkill: true,
    },
    {
      id: "nextjs",
      skill: "NextJS",
      level: "80%",
      description:
        "Building performant and scalable React applications with Next.js features like SSR and SSG.",
      category: "Frontend",
      isTopSkill: true,
    },
    {
      id: "nodejs",
      skill: "NodeJS",
      level: "75%",
      description:
        "Basic understanding of backend development with Node.js and Express.",
      category: "Backend",
    },
    {
      id: "python",
      skill: "Python",
      level: "65%",
      description:
        "Familiar with Python for scripting and data analysis tasks.",
      category: "Backend",
    },
  ];

  const softSkills = [
    {
      skill: "Teamwork",
      icon: "🤝",
      description: "Effective collaboration in agile environments.",
    },
    {
      skill: "Project Management",
      icon: "📈",
      description:
        "Organizing tasks, setting priorities, and meeting deadlines.",
    },
    {
      skill: "Problem Solving",
      icon: "🧩",
      description:
        "Analytical approach to identify and resolve complex issues.",
    },
    {
      skill: "Critical Thinking",
      icon: "🧠",
      description:
        "Evaluating information to make informed decisions and innovative solutions.",
    },
    {
      skill: "Adaptability",
      icon: "🔄",
      description:
        "Quickly learning new technologies and adjusting to changing project requirements.",
    },
    {
      skill: "Communication",
      icon: "🗣️",
      description:
        "Clearly conveying ideas and collaborating with team members.",
    },
  ];

  const tools = [
    { tool: "VS Code", description: "Primary IDE for web development." },
    { tool: "Git", description: "Version control for collaborative projects." },
    { tool: "Figma", description: "UI/UX design and prototyping." },
    { tool: "Postman", description: "API testing and development." },
    { tool: "Trello", description: "Project management and task tracking." },
  ];

  // Fungsi untuk menentukan berapa banyak dot yang harus diisi
  const getFilledDots = (level) => {
    const percentage = parseInt(level.replace("%", ""));
    if (percentage >= 90) return 5; // Expert
    if (percentage >= 75) return 4; // Advanced
    if (percentage >= 50) return 3; // Intermediate
    if (percentage >= 25) return 2; // Basic
    return 1; // Novice
  };

  return (
    <div
      id="skills"
      className="relative min-h-screen py-20 md:py-24 bg-gradient-to-br from-gray-950 to-black text-white flex flex-col items-center overflow-hidden"
    >
      {/* Background radial gradient / blob effect */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#7E57C2] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-animation z-0"></div>
      <div className="absolute top-[60%] right-[10%] w-64 h-64 md:w-80 md:h-80 bg-[#9C27B0] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-animation animation-delay-2000 z-0"></div>
      <div className="absolute bottom-1/4 left-[5%] w-56 h-56 md:w-72 md:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation animation-delay-4000 z-0"></div>
      <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation animation-delay-6000 z-0"></div>
      <div className="absolute bottom-[20%] right-[5%] w-48 h-48 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation animation-delay-8000 z-0"></div>
      <div className="absolute top-[40%] right-[2%] w-32 h-32 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-blob-animation animation-delay-10000 z-0"></div>

      <div className="max-w-6xl w-full px-4 md:px-8 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16
                     bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white
                     drop-shadow-lg"
          data-aos="fade-up"
        >
          My Skills
        </h2>

        {/* Hard Skills Section - REVISED Layout */}
        <div className="mb-16">
          <h3
            className="text-3xl font-bold text-center mb-8
                         bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400
                         drop-shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hard Skills
          </h3>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start justify-center">
            {/* Left Column: Skill Icon Grid - PERBAIKAN STRUKTUR MAP DI SINI */}
            <div className="flex-shrink-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 w-full md:w-1/3 lg:w-1/4">
              {hardSkills.map((item, index) => {
                const isHovered = hoveredSkillId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center cursor-pointer
                                bg-white bg-opacity-[0.08] backdrop-filter backdrop-blur-xl
                                border border-white border-opacity-[0.15] shadow-lg glass-inner-shadow
                                transition-all duration-300
                                ${
                                  isHovered
                                    ? "z-20 border-fuchsia-400 shadow-fuchsia-500/40 animate-pulse-border-fade"
                                    : "z-10"
                                }
                                ${item.isTopSkill ? "shadow-purple-500/50" : ""}`}
                    onMouseEnter={() => {
                      setHoveredSkillId(item.id);
                      setActiveSkillDetail(item);
                    }}
                    onMouseLeave={() => {
                      setHoveredSkillId(null);
                      setActiveSkillDetail(null);
                    }}
                  >
                    {skillIcons[item.skill] && (
                      <Image
                        src={skillIcons[item.skill]}
                        alt={`${item.skill} Icon`}
                        width={48}
                        height={48}
                        className={`transition-all duration-300 transform
                                    ${
                                      isHovered
                                        ? "scale-110 brightness-125 saturate-125"
                                        : "opacity-80"
                                    }`}
                      />
                    )}
                    {/* No skill name here */}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Skill Detail Card (Glassmorphism) */}
            <div className="relative lg:ml-10 flex-grow w-full md:w-2/3 lg:w-3/4 min-h-[300px] md:min-h-[350px] flex items-center justify-center mt-8 md:mt-0">
              {activeSkillDetail ? (
                <div
                  className="absolute inset-0 bg-white bg-opacity-[0.05] backdrop-filter backdrop-blur-xl rounded-3xl
                             border border-white border-opacity-[0.15] shadow-2xl glass-inner-shadow p-6 md:p-8
                             flex flex-col justify-between animate-fade-in-right"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div>
                    <h4 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400 leading-tight">
                      {activeSkillDetail.skill}
                    </h4>
                    <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed">
                      {activeSkillDetail.description}
                    </p>
                  </div>

                  {/* Level Indicator (Dots/Circles) & Tier Badge */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold text-gray-300">
                        Level:
                      </span>
                      <div className="flex gap-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full transition-all duration-500 ease-out
                                        ${
                                          i <
                                          getFilledDots(activeSkillDetail.level)
                                            ? "bg-fuchsia-500 shadow-md shadow-fuchsia-500/50 animate-bounce-dot"
                                            : "bg-gray-700"
                                        }`}
                            style={{ animationDelay: `${i * 0.1}s` }} // Staggered animation
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Tier Badge */}
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold
                                  ${
                                    getSkillTier(activeSkillDetail.level)
                                      .color
                                  } ${
                        getSkillTier(activeSkillDetail.level).textColor
                      }
                                  inline-flex self-start`}
                    >
                      {getSkillTier(activeSkillDetail.level).text}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="absolute inset-0 bg-white bg-opacity-[0.03] backdrop-filter backdrop-blur-xl rounded-3xl
                             border border-white border-opacity-[0.1] shadow-inner glass-inner-shadow p-8
                             flex flex-col justify-center items-center text-gray-400 text-xl md:text-2xl text-center
                             animate-fade-in"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  Hover over an icon to see skill details.
                  <span className="mt-4 text-5xl md:text-6xl text-purple-400">
                    👆
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Soft Skills Section with Bubble-like Cards */}
        <div className="mb-16">
          <h3
            className="text-3xl font-bold text-center mb-8
                         bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400
                         drop-shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((item, index) => (
              <div
                key={index}
                className="relative bg-white bg-opacity-[0.05] backdrop-filter backdrop-blur-xl rounded-full px-6 py-3
                           border border-white border-opacity-[0.1] shadow-xl glass-inner-shadow
                           flex items-center gap-3 transition-all duration-300 transform
                           hover:border-fuchsia-400 hover:shadow-fuchsia-500/30 hover:scale-105 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={`${hardSkills.length * 70 + index * 100}`} // Adjusted delay
                onMouseEnter={() => setHoveredSkillId(`soft-${index}`)}
                onMouseLeave={() => setHoveredSkillId(null)}
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <h4 className="text-lg font-semibold text-gray-100 whitespace-nowrap">
                  {item.skill}
                </h4>

                {/* Tooltip for Soft Skills */}
                {hoveredSkillId === `soft-${index}` && (
                  <div className="absolute bottom-full mb-2 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg z-50 animate-fade-in-up">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tools I Use Section */}
        <div>
          <h3
            className="text-3xl font-bold text-center mb-8
                         bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400
                         drop-shadow-md"
            data-aos="fade-up"
            data-aos-delay={`${
              hardSkills.length * 70 + softSkills.length * 100 + 200
            }`} // Adjusted delay
          >
            Tools I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((item, index) => (
              <div
                key={index}
                className="relative bg-white bg-opacity-[0.05] backdrop-filter backdrop-blur-xl rounded-xl
                           border border-white border-opacity-[0.1] shadow-xl glass-inner-shadow p-4
                           flex flex-col items-center text-center transition-all duration-300
                           hover:border-blue-400 hover:shadow-blue-500/30 transform hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={`${
                  hardSkills.length * 70 +
                  softSkills.length * 100 +
                  index * 100 +
                  300
                }`} // Adjusted delay
                onMouseEnter={() => setHoveredSkillId(`tool-${index}`)}
                onMouseLeave={() => setHoveredSkillId(null)}
              >
                {skillIcons[item.tool] && (
                  <Image
                    src={skillIcons[item.tool]}
                    alt={`${item.tool} Icon`}
                    width={48}
                    height={48}
                    className="mb-2 filter brightness-150 drop-shadow-md"
                  />
                )}
                <h4 className="text-lg font-semibold text-gray-100">
                  {item.tool}
                </h4>

                {/* Tooltip for Tools */}
                {hoveredSkillId === `tool-${index}` && (
                  <div className="absolute top-full mt-2 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg z-50 animate-fade-in-down">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}