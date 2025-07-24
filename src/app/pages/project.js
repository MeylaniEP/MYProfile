"use client";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image";

// Import project images
import Profile from "../../../public/profile.png";
import Urban from "../../../public/urban.png";
import Indoventure from "../../../public/indoventure.png";
import Watch from "../../../public/watch.png";
import Peduli from "../../../public/peduli.png";

// Import technology icons (contoh, sesuaikan path jika perlu)
import ReactIcon from "../../../public/react.png";
import NextjsIcon from "../../../public/nextjs.png";
import TailwindIcon from "../../../public/tailwind.png";
import JavascriptIcon from "../../../public/javascript.png";
import BootstrapIcon from "../../../public/bootstrap.png";
import NodejsIcon from "../../../public/nodejs.png";

const techIcons = {
  "Next.js": NextjsIcon,
  "Tailwind CSS": TailwindIcon,
  JavaScript: JavascriptIcon,
  React: ReactIcon,
  Bootstrap: BootstrapIcon,
  "Node.js": NodejsIcon,
  Redux: null,
  "TMDB API": null,
};

export default function Project() {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 150 });
  }, []);

  const projects = [
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description:
        "A sleek and responsive portfolio showcasing my skills and projects. Emphasis on modern design and performance.",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
      image: Profile,
      link: "https://meylanieka.vercel.app/",
    },
    {
      id: "urban-walk",
      title: "Company Profile",
      description:
        "A robust e-commerce platform with user-friendly design, optimized for conversions.",
      technologies: ["React", "JavaScript"],
      image: Urban,
      link: "https://urban-walk-kelompok12-dibis.vercel.app/",
    },
    {
      id: "peduli-belajar",
      title: "Online Course",
      description:
        "Collaborative task manager with real-time syncing, perfect for productivity.",
      technologies: ["Bootstrap", "React", "JavaScript"],
      image: Peduli,
      link: "https://peduli-belajar.vercel.app/",
    },
    {
      id: "catalog-movie",
      title: "Catalog Movie",
      description:
        "Dynamic movie catalog built with React and Redux, fetching data from TMDB API.",
      technologies: ["React", "Redux", "Node.js", "TMDB API"],
      image: Watch,
      link: "https://challenge-6-redux-state-management-redux-thunk-movie-list.vercel.app/",
    },
    {
      id: "indoventure",
      title: "Copywriting & Google Analysis",
      description:
        "A dynamic data visualization dashboard for actionable business insights.",
      technologies: ["React", "JavaScript"],
      image: Indoventure,
      link: "https://indo-venture-kelompok12-digital-bisnis.vercel.app/",
    },
  ];

  return (
    <div
      id="projects"
      className="relative min-h-screen py-20 md:py-24 bg-gradient-to-br from-gray-950 to-black text-white flex flex-col items-center overflow-hidden"
    >
      {/* Background radial gradient / blob effect - Consistent with Skills */}
      <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-[#6A0DAD] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-animation z-0 animation-delay-3000"></div>
      <div className="absolute bottom-[20%] right-[15%] w-72 h-72 bg-[#DA70D6] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-animation z-0 animation-delay-7000"></div>
      <div className="absolute top-[50%] left-[5%] w-56 h-56 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation z-0 animation-delay-1000"></div>

      <div className="max-w-6xl w-full px-4 md:px-8 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16
                     bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white
                     drop-shadow-lg"
          data-aos="fade-up"
        >
          My Creative Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-20">
          {projects.map((project) => (
            <div
              key={`aos-wrapper-${project.id}`}
              data-aos="zoom-in"
              data-aos-delay={`${Math.floor(Math.random() * 3) * 100 + 100}`}
              className="w-full flex justify-center items-stretch" 
            >
              <div
                key={project.id}
                className={`group relative rounded-3xl glassmorphism-card shadow-2xl
                            flex flex-col
                            transform transition-all duration-500 ease-out cursor-pointer
                            hover:scale-105 hover:shadow-fuchsia-500/40
                            ${hoveredProjectId === project.id ? 'z-30' : 'z-20'}
                            max-w-[320px] w-full h-[480px] {/* Tambahkan tinggi tetap di sini */}
                            `}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                {/* Project Image with hover effect */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-3xl flex-shrink-0"> {/* Tambahkan flex-shrink-0 */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-transform duration-500 ease-in-out
                                ${hoveredProjectId === project.id ? 'scale-110 brightness-110' : 'scale-100'}`}
                  />
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0
                                transition-opacity duration-300 group-hover:opacity-100
                                ${hoveredProjectId === project.id ? 'opacity-100' : ''}`}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-fuchsia-600 text-white font-bold rounded-full shadow-lg
                                 transform translate-y-4 opacity-0 transition-all duration-300 ease-out
                                 group-hover:translate-y-0 group-hover:opacity-100
                                 hover:bg-fuchsia-700 hover:scale-105"
                    >
                      View Project &rarr;
                    </a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 flex flex-col items-start text-left flex-grow justify-between"> {/* Tambahkan flex-grow justify-between */}
                  <div> {/* Tambahkan div ini untuk mengelompokkan teks atas */}
                    <h3 className="text-2xl font-bold text-gray-100 mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical'}}> {/* Batasi deskripsi hingga 3 baris */}
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies with icons */}
                  <div className="flex flex-wrap gap-2 mb-3 mt-auto"> {/* Tambahkan mt-auto */}
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center bg-white bg-opacity-[0.08] text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded-full border border-purple-400 border-opacity-30
                                   transition-all duration-200 hover:bg-purple-600 hover:text-white hover:border-purple-600"
                      >
                        {techIcons[tech] && (
                          <Image
                            src={techIcons[tech]}
                            alt={`${tech} icon`}
                            width={14}
                            height={14}
                            className="mr-1 opacity-80"
                          />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Learn More link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-fuchsia-400 font-semibold border-b-2 border-fuchsia-400 pb-1
                               hover:border-fuchsia-600 hover:text-fuchsia-600 transition duration-300 text-sm"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}