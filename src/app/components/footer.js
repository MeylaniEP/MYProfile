"use client";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

// Import ikon dari react-icons
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 150 });

    const handleScroll = () => {
      if (window.scrollY > 300) { // Tampilkan tombol setelah scroll 300px
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    {
      id: 'instagram',
      icon: FaInstagram,
      title: "Instagram", // Tambahkan title untuk label teks
      link: "https://www.instagram.com/meypi__/profilecard/?igsh=MTJya3J4Y2x0enUxOA==",
      color: "text-pink-500", // Warna default Instagram
      hoverColor: "hover:text-pink-400",
      shadowColor: "shadow-pink-500/30",
      aosDelay: 100
    },
    {
      id: 'facebook',
      icon: FaFacebookF,
      title: "Facebook",
      link: "https://www.facebook.com/meylani.meylani.56679015?mibextid=JRoKGi",
      color: "text-blue-600", // Warna default Facebook
      hoverColor: "hover:text-blue-500",
      shadowColor: "shadow-blue-500/30",
      aosDelay: 200
    },
    {
      id: 'linkedin',
      icon: FaLinkedinIn,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/meylani-eka-pertiwi-6a494b31a",
      color: "text-blue-800", // Warna default LinkedIn
      hoverColor: "hover:text-blue-700",
      shadowColor: "shadow-blue-800/30",
      aosDelay: 300
    },
    {
      id: 'github',
      icon: FaGithub,
      title: "GitHub",
      link: "https://github.com/MeylaniEP",
      color: "text-gray-400", // Warna default GitHub
      hoverColor: "hover:text-gray-300",
      shadowColor: "shadow-gray-500/30",
      aosDelay: 400
    },
  ];

  return (
    <div className="relative py-12 md:py-16 bg-gradient-to-br from-gray-950 to-black text-white flex flex-col items-center overflow-hidden"> {/* py-16 md:py-20 -> py-12 md:py-16 */}
      {/* Background radial gradient / blob effect - Consistent with other sections */}
      <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation z-0 animation-delay-2000"></div> {/* w-48 h-48 -> w-40 h-40 */}
      <div className="absolute bottom-[10%] right-[5%] w-48 h-48 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation z-0 animation-delay-7000"></div> {/* w-56 h-56 -> w-48 h-48 */}

      {/* Grainy overlay for subtle texture */}
      <div className="absolute inset-0 z-0 opacity-5 grainy-overlay"></div>

      <div className="max-w-6xl w-full px-4 md:px-8 relative z-10 text-center">
        {/* Your Name with Gradient */}
        <p
          className="text-3xl md:text-4xl font-extrabold mb-4
                     bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400
                     drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Meylani Eka Pertiwi
        </p>

        {/* Catchphrase / Final Statement */}
        <p
          className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" 
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Terima kasih telah menjelajahi portofolio saya. Mari kita wujudkan ide-ide hebat menjadi kenyataan!
        </p>

        {/* Social Media Icons - Enhanced */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"> {/* gap-6 md:gap-8 -> gap-4 md:gap-6, mb-10 -> mb-8 */}
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-12 h-12 rounded-full flex items-center justify-center
                         bg-white bg-opacity-[0.08] backdrop-filter backdrop-blur-xl
                         border border-white border-opacity-[0.15] shadow-lg
                         transition-all duration-300 transform
                         hover:scale-110 hover:shadow-xl ${item.shadowColor}
                         social-icon-wrapper`} 
              data-aos="zoom-in"
              data-aos-delay={item.aosDelay + 200}
            >
              <item.icon size={24} className={`${item.color} transition-all duration-300 group-hover:scale-110 ${item.hoverColor} z-10`} /> {/* size={28} -> size={24} */}
              {/* Text label that appears on hover */}
              <span className="absolute left-full ml-2 px-2.5 py-0.5 bg-white bg-opacity-[0.15] rounded-full text-xs font-medium whitespace-nowrap {/* ml-3 -> ml-2, px-3 py-1 -> px-2.5 py-0.5, text-sm -> text-xs */}
                               opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 {/* translate-x-[-10px] -> translate-x-[-8px] */}
                               transition-all duration-300 pointer-events-none z-20
                               hidden md:block">
                {item.title}
              </span>
            </a>
          ))}
        </div>

        {/* Copyright & Quick Links (Optional) */}
        <div className="border-t border-gray-700 border-opacity-30 pt-6 mt-6"> {/* pt-8 mt-8 -> pt-6 mt-6 */}
          <p className="text-xs text-gray-400 mb-1" data-aos="fade-up" data-aos-delay="500"> {/* text-sm -> text-xs, mb-2 -> mb-1 */}
            &copy; {new Date().getFullYear()} Meylani Eka Pertiwi. All rights reserved.
          </p>
          <p className="text-xs text-gray-500" data-aos="fade-up" data-aos-delay="600">
            Didesain & Dikembangkan dengan ❤️
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-5 right-24 z-50 p-3 rounded-full bg-fuchsia-600 text-white shadow-lg
                     hover:bg-fuchsia-700 transition-all duration-300 transform hover:scale-110
                     animate-bounce-subtle"
          aria-label="Back to top"
        >
          <FaArrowUp size={20} /> 
        </button>
      )}
    </div>
  );
}
