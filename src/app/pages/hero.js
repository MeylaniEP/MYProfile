"use client";

import { useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Hero() {
  const heroRef = useRef(null);
  const panelRef = useRef(null);
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const [typedName, setTypedName] = useState("");
  const fullName = "Meylani Eka Pertiwi";
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });

    // Typewriter effect for the name
    let nameIndex = 0;
    const typingInterval = setInterval(() => {
      if (nameIndex < fullName.length) {
        setTypedName(fullName.substring(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70); // Kecepatan ketik (milidetik per karakter)

    const handleMouseMove = (event) => {
      if (heroRef.current && panelRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const panelRect = panelRef.current.getBoundingClientRect();

        setLightPosition({
          x: event.clientX - heroRect.left,
          y: event.clientY - heroRect.top,
        });

        const panelX = event.clientX - panelRect.left - panelRect.width / 2;
        const panelY = event.clientY - panelRect.top - panelRect.height / 2;
        setMouseTilt({
          x: -panelY / (panelRect.height / 2) * 3, // Intensitas tilt X (vertikal)
          y: panelX / (panelRect.width / 2) * 3,  // Intensitas tilt Y (horizontal)
        });
      }
    };

    const handleMouseEnter = () => setIsHoveringHero(true);
    const handleMouseLeave = () => {
      setIsHoveringHero(false);
      setMouseTilt({ x: 0, y: 0 }); // Reset tilt saat mouse keluar
    };

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      currentHeroRef.addEventListener("mousemove", handleMouseMove);
      currentHeroRef.addEventListener("mouseenter", handleMouseEnter);
      currentHeroRef.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      clearInterval(typingInterval);
      if (currentHeroRef) {
        currentHeroRef.removeEventListener("mousemove", handleMouseMove);
        currentHeroRef.removeEventListener("mouseenter", handleMouseEnter);
        currentHeroRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [fullName]);

  return (
    <div
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden p-4 md:p-8 lg:p-16"
      style={{
        backgroundImage: "url('/mey.png')", // Gambar latar belakang personal
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay Gelap Transparan di atas Gambar Latar Belakang */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Efek Cahaya Kursor yang Mengikuti */}
      {isHoveringHero && (
        <div
          className="pointer-events-none absolute w-96 h-96 rounded-full bg-[#7E57C2] opacity-20 blur-3xl transition-opacity duration-300 ease-out"
          style={{
            left: lightPosition.x,
            top: lightPosition.y,
            transform: "translate(-50%, -50%) scale(1.1)",
            willChange: 'transform, opacity'
          }}
        ></div>
      )}

      {/* Panel Morphglass Utama */}
      <div
        ref={panelRef}
        className="relative mt-10 z-10 flex flex-col items-center justify-center text-center
                   p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20
                   bg-white bg-opacity-[0.03] backdrop-filter backdrop-blur-3xl rounded-3xl
                   border border-white border-opacity-[0.08] shadow-2xl
                   max-w-screen-lg w-full h-auto min-h-[500px] sm:min-h-[550px] md:min-h-[650px]
                   transform transition-all duration-300 ease-out will-change-transform"
        style={{
            transform: `perspective(1000px) rotateX(${mouseTilt.x}deg) rotateY(${mouseTilt.y}deg)`,
            // Efek gradien internal pada panel (opsional, bisa dihilangkan jika terlalu ramai dengan gambar latar)
            background: `
                linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 100%)
            `,
            backgroundBlendMode: 'overlay', // Cara blending background gradient dengan warna dasar
        }}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {/* Kilauan Tepi Panel Morphglass */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none z-0">
          <div className="absolute inset-0 rounded-3xl animate-edge-glow-alt"></div>
        </div>

        {/* Konten Teks */}
        <p
          className="text-white text-3xl md:text-4xl font-light mb-4 tracking-wide opacity-90"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hello, I am
        </p>
        <h1
          className="text-white text-6xl md:text-8xl lg:text-9xl font-black leading-tight drop-shadow-lg text-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Meylani */}
          <span className="text-[#7E57C2]">{typedName.substring(0, Math.min(typedName.length, 7))}</span>
          {/* Cursor setelah Meylani selesai diketik */}
          {typedName.length === 7 && typedName.length < fullName.length && (
            <span className="animate-blink font-light opacity-70">|</span>
          )}
        </h1>
        <h1
          className="text-white text-6xl md:text-8xl lg:text-9xl font-black leading-tight drop-shadow-lg text-shadow-lg -mt-4 md:-mt-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* Eka Pertiwi - dimulai dari spasi setelah 'Meylani' */}
          {typedName.length > 7 && typedName.substring(7)}
          {/* Cursor setelah Eka Pertiwi selesai diketik */}
          {typedName.length > 7 && typedName.length < fullName.length && (
             <span className="animate-blink font-light opacity-70">|</span>
          )}
        </h1>

        <p
          className="text-white text-lg md:text-xl mt-8 max-w-3xl italic font-serif opacity-80 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          "Crafting digital realms where elegance meets function, transforming every click into a delightful journey."
        </p>

        <a
          href="/path/to/cv_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 py-4 px-12 rounded-full inline-block text-center text-lg font-bold
                     bg-gradient-to-r from-[#7E57C2] to-[#9C27B0] text-white
                     hover:from-[#6a4aa8] hover:to-[#822096]
                     transition duration-300 ease-in-out transform hover:scale-105
                     shadow-xl border border-white border-opacity-20
                     relative z-10 group/button"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-offset="0" // Penting: Memastikan animasi AOS terpicu segera setelah elemen terlihat
        >
          Explore My Work
          {/* Efek Glitch Halus pada Tombol */}
          <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-blue-500/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-100 ease-in-out after:absolute after:inset-0 after:bg-gradient-to-r after:from-red-500/20 after:to-blue-500/20 after:opacity-0 after:animate-glitch-after"></span>
        </a>
      </div>
    </div>
  );
}