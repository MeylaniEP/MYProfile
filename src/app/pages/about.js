"use client";
import React, { useState, useEffect, useCallback } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image";
import Head from 'next/head';

// Impor Embla Carousel hooks
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Pastikan path gambar sudah benar
import Amikom from "../../../public/amikom.png";
import Binar from "../../../public/binar.png";
import MeyPhoto from "../../../public/meyphot.jpeg";

// --- IMPOR LOGO TEKNOLOGI DI SINI ---
import PythonIcon from '../../../public/python.png';
import HtmlIcon from '../../../public/html.png';
import CssIcon from '../../../public/css.png';
import JavascriptIcon from '../../../public/javascript.png';
import TailwindIcon from '../../../public/tailwind.png';
import NextjsIcon from '../../../public/nextjs.png';

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const techIconMap = {
    "Python": PythonIcon,
    "HTML": HtmlIcon,
    "CSS": CssIcon,
    "JavaScript": JavascriptIcon,
    "Tailwind CSS": TailwindIcon,
    "Next.js": NextjsIcon,
  };

  const timelineItems = [
    {
      category: "Education",
      entries: [
        {
          title: "Amikom University",
          description: "Specialized in front-end fundamentals and design.",
          logo: Amikom,
          location: {
            text: "Yogyakarta, Indonesia",
            mapLink: "https://maps.app.goo.gl/YfL4M79LpXg2eW6c6"
          },
        },
        {
          title: "Binar Academy",
          description: "Focused on advanced web development techniques.",
          logo: Binar,
          location: {
            text: "Online/Remote",
            mapLink: "https://www.binaracademy.com/contact"
          },
        },
      ],
    },
    {
      category: "First Project",
      entries: [
        {
          title: "Personal Portfolio Website",
          description: "Built my first website using HTML, CSS, and JavaScript. It was a simple portfolio site but sparked my passion for web development.",
          technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Next.js"],
        },
      ],
    },
    {
      category: "Web Development Journey",
      entries: [
        {
          title: "2021 - Now",
          description: "Started with HTML, CSS, and JavaScript, and expanded to Tailwind CSS and Next.js. I'm passionate about crafting responsive, user-friendly web experiences.",
          technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Next.js"],
        },
      ],
    },
    {
      category: "Freelancing",
      entries: [
        {
          title: "Open for Hiring",
          description: "Started freelancing in 2024, focusing on front-end development to deliver engaging and visually appealing user interfaces.",
          technologies: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS"],
        },
      ],
    },
    {
      category: "Current Projects",
      entries: [
        {
          title: "Data Analyst Project",
          description: "I'm currently working on a data analysis project to predict student performance using Multilayer Perceptron (MLP) with Python.",
          technologies: ["Python"],
        },
      ],
    },
    {
      category: "Current Engagements",
      entries: [
        {
          title: "Part-time Tutor (2021 - Now)",
          description: "I am currently working part-time as a tutor, teaching elementary and middle school students in core subjects, and guiding students in foundational programming concepts. This role allows me to share my passion for education and technology with younger learners while honing my teaching and mentoring skills.",
        },
      ],
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback((emblaApiInstance) => {
    setSelectedIndex(emblaApiInstance.selectedScrollSnap());
  }, []);

  const onInit = useCallback((emblaApiInstance) => {
    setScrollSnaps(emblaApiInstance.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onInit);
    };
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback((index) => {
    emblaApi && emblaApi.scrollTo(index);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    
    <div
      id="about"
      className="relative min-h-screen py-20 md:py-24 bg-gradient-to-br from-gray-950 to-black text-white flex flex-col items-center overflow-hidden"
    >
       <Head>
        <title>Judul Halaman Utama Terbaik | Nama Website Anda</title>
        <meta name="description" content="Deskripsi singkat dan menarik tentang halaman utama website Anda." />
        {/* Kamu juga bisa menambahkan meta tag lain di sini, seperti: */}
        {/* <meta property="og:title" content="Judul Halaman Utama untuk Share Medsos" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* Background radial gradient / blob effect (main page) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#7E57C2] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-animation z-0"></div>
      <div className="absolute top-[60%] right-[10%] w-64 h-64 md:w-80 md:h-80 bg-[#9C27B0] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-animation animation-delay-2000 z-0"></div>
      <div className="absolute bottom-1/4 left-[5%] w-56 h-56 md:w-72 md:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation animation-delay-4000 z-0"></div>

      {/* Tambahan Blob Ungu Bergerak di Sekitar Carousel / Timeline Section */}
      {/* Blob 1 (atas kiri timeline) */}
      <div className="absolute top-[45%] left-[5%] w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation animation-delay-6000 z-0"></div>
      {/* Blob 2 (bawah kanan timeline) */}
      <div className="absolute bottom-[20%] right-[8%] w-52 h-52 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation animation-delay-8000 z-0"></div>
      {/* Blob 3 (tengah bawah timeline) */}
      <div className="absolute bottom-[5%] left-[30%] w-40 h-40 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation animation-delay-10000 z-0"></div>


      <div className="max-w-6xl w-full px-4 md:px-8 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16
                     bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white
                     drop-shadow-lg"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Bagian Profil Singkat dan Gambar */}
        <div
          className="bg-white bg-opacity-[0.05] backdrop-filter backdrop-blur-xl rounded-3xl
                     border border-white border-opacity-[0.1] shadow-2xl glass-inner-shadow p-8 mb-16
                     flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-500
                     hover:scale-[1.01] hover:shadow-3xl transform hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
            <Image
              src={MeyPhoto}
              alt="Meylani Eka Pertiwi"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-gray-400 shadow-xl animate-border-glow-white" 
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100 drop-shadow-md"> 
              Meylani Eka Pertiwi
            </h3>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
              Halo! Saya Meylani Eka Pertiwi, seorang <span className="font-semibold text-white">Front-End Developer</span> dengan pengalaman dalam membangun antarmuka pengguna yang responsif dan menarik. Saya memiliki hasrat besar dalam menciptakan pengalaman web yang mulus dan interaktif. Dari dasar HTML, CSS, JavaScript, hingga kerangka kerja modern seperti Next.js dan Tailwind CSS, saya selalu bersemangat untuk belajar dan mengimplementasikan teknologi terbaru.
              <br /><br />
              Di luar dunia koding, saya juga memiliki ketertarikan pada <span className="font-semibold text-white">Data Analysis</span>, bahkan sedang mengerjakan proyek prediksi performa siswa menggunakan Python. Perpaduan antara seni visual di <span className="font-semibold text-white">Front-End</span> dan logika analitis di <span className="font-semibold text-white">Data Analysis</span> adalah passion saya!
            </p>
          </div>
        </div>

        {/* --- TIMELINE SEBAGAI CAROUSEL --- */}
        {/* Kontainer Embla Carousel */}
        <div className="embla relative w-full overflow-hidden" ref={emblaRef}>
          {/* Kontainer slide yang digulir */}
          <div className="embla__container flex">
            {timelineItems.map((categoryItem, categoryIndex) => (
              // Setiap slide carousel
              <div
                key={categoryIndex}
                className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-2 md:px-4"
              >
                {/* Struktur kartu dengan border estetika dan konten */}
                <div
                  className="p-[1px] rounded-2xl bg-gradient-to-br from-white/[0.1] to-white/[0.05] transition-all duration-500
                             hover:scale-[1.03] hover:shadow-3xl transform hover:-translate-y-2 relative h-full flex flex-col"
                >
                  <div
                    className="bg-white bg-opacity-[0.05] backdrop-filter backdrop-blur-xl rounded-2xl
                               border border-transparent shadow-2xl glass-inner-shadow p-6 h-full flex flex-col justify-between"
                  >
                    <div>
                      {/* Kategori Judul */}
                      <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md border-b border-white border-opacity-[0.05] pb-3"> 
                        {categoryItem.category}
                      </h3>

                      {categoryItem.entries.map((entry, entryIndex) => (
                        <div key={entryIndex} className={`mb-4 last:mb-0 ${entryIndex > 0 ? 'mt-6 pt-4 border-t border-white border-opacity-[0.05]' : ''}`}>
                          {entry.logo && (
                            <Image
                              src={entry.logo}
                              alt={`${entry.title} Logo`}
                              width={64}
                              height={64}
                              className="rounded-full mb-3 mx-auto"
                            />
                          )}
                          <p className="text-xl font-semibold text-white mb-1">
                            {entry.title}
                          </p>
                          <p className="text-gray-300 text-base leading-relaxed mb-3 font-light">
                            {entry.description}
                          </p>

                          
                          {entry.technologies && entry.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-white border-opacity-[0.05]">
                              {entry.technologies.map((tech, techIdx) => (
                                techIconMap[tech] && (
                                  <div key={techIdx} className="flex items-center gap-1 bg-white bg-opacity-[0.08] rounded-full px-3 py-1 text-xs text-gray-200 border border-white border-opacity-[0.1] transition-all duration-200 hover:bg-opacity-[0.15] cursor-pointer">
                                    <Image
                                      src={techIconMap[tech]}
                                      alt={tech}
                                      width={20}
                                      height={20}
                                      className="filter brightness-150 saturate-150"
                                    />
                                    <span>{tech}</span>
                                  </div>
                                )
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    
                    {categoryItem.entries.some(entry => entry.location) && (
                      <div className="mt-auto pt-4 border-t border-white border-opacity-[0.05] text-center">
                        {categoryItem.entries.map((entry, entryIndex) => (
                          entry.location && (
                            <a
                              key={`location-${entryIndex}`}
                              href={entry.location.mapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-gray-400 hover:text-white underline text-sm font-medium transition-colors duration-200"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                              </svg>
                              {entry.location.text || "View Location"}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="flex justify-between items-center mt-8 px-4">
            
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white bg-opacity-[0.1] hover:bg-opacity-[0.2] transition-colors duration-200 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400" 
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Dot Pagination */}
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? 'bg-gray-400 scale-125' : 'bg-gray-500 bg-opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white bg-opacity-[0.1] hover:bg-opacity-[0.2] transition-colors duration-200 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400" 
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}