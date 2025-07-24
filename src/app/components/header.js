"use client";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa'; // Import ikon FaGlobe dari react-icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Effect untuk mendapatkan tinggi header secara dinamis
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isScrolled, menuOpen]);

  // Toggle menu untuk hamburger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Menutup hamburger menu setelah item diklik atau rute berubah
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Update state isScrolled berdasarkan posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update section aktif berdasarkan posisi scroll
  useEffect(() => {
    const handleScrollForActiveSection = () => {
      const sections = document.querySelectorAll('section, div[id]');
      let currentActive = '';

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentActive = `#${section.id}`;
        }
      });

      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    let scrollTimeout;
    const debouncedScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScrollForActiveSection, 50);
    };

    window.addEventListener("scroll", debouncedScroll);
    handleScrollForActiveSection();

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [activeSection, headerHeight]);

  // Data item navigasi utama
  const navItems = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Skills", hash: "#skills" },
    { name: "Projects", hash: "#projects" },
    { name: "Contact", hash: "#contact" },
  ];

  // FUNGSI BARU: Scroll manual dengan offset header
  const scrollToSection = (e, hash) => {
    e.preventDefault();
    closeMenu();

    const targetId = hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = headerHeight + 20;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        window.location.hash = hash;
      }
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 md:py-6 px-4 md:px-8 lg:px-16 xl:px-24 rounded-b-3xl transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-[0.05] backdrop-blur-xl border-b border-white border-opacity-[0.1] shadow-xl"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      {/* Kiri: Logo */}
      <div className="flex-shrink-0">
        <Link
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-white flex gap-2 text-3xl md:text-4xl font-black drop-shadow-sm transition-colors duration-200 hover:text-white/90"
        >
          <div>
            <span className="text-[#7E57C2]">M</span>eylani
          </div>
        </Link>
      </div>

      {/* Tengah: Menu Navigasi Utama (Tersembunyi di Mobile) */}
      <nav className="hidden lg:flex flex-grow justify-center">
        <ul className="flex space-x-8 text-white text-lg">
          {navItems.map((item) => (
            <li key={item.hash}>
              <Link
                href={item.hash}
                onClick={(e) => scrollToSection(e, item.hash)}
                className={`block py-2 relative group text-center
                            font-semibold transition-colors duration-200 ease-in-out
                            ${activeSection === item.hash
                                ? "text-[#7E57C2]"
                                : "text-white hover:text-white/80"
                            }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#7E57C2] transition-all duration-300 ease-out transform -translate-x-1/2
                                  ${activeSection === item.hash ? 'w-full' : 'group-hover:w-full'}`}></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Kanan: Beyond Code & Multi Language (Tersembunyi di Mobile) */}
      <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
        {/* Tombol Beyond Code */}
        <Link
          href="#hobbies"
          onClick={(e) => scrollToSection(e, '#hobbies')}
          className="relative inline-flex items-center justify-center px-6 py-2.5 text-base font-bold rounded-full overflow-hidden
                     bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg
                     transition-all duration-300 ease-out
                     hover:scale-105 hover:shadow-fuchsia-500/50
                     group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10">Beyond Code</span>
          <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-white group-hover:border-opacity-30 transition-all duration-300"></span>
        </Link>

        {/* Multi Language Dropdown */}
        {/* <div className="relative">
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-opacity-[0.08] text-white text-lg
                       border border-white border-opacity-[0.15] shadow-md
                       hover:bg-opacity-[0.15] hover:border-fuchsia-400 transition duration-300"
          >
            <FaGlobe size={20} />
            ID
            <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {langDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white bg-opacity-[0.15] backdrop-blur-xl rounded-lg shadow-xl overflow-hidden border border-white border-opacity-[0.1] z-50">
              <ul className="py-1">
                <li>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-[0.1] transition-colors" onClick={() => { setLangDropdownOpen(false); }}>Bahasa Indonesia</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-[0.1] transition-colors" onClick={() => { setLangDropdownOpen(false); }}>English</a>
                </li>
              </ul>
            </div>
          )}
        </div> */}
      </div>

      {/* Tombol Hamburger (Mobile Only) */}
      <button
        onClick={toggleMenu}
        className="block lg:hidden text-white text-3xl p-2 relative z-50 focus:outline-none"
        aria-label="Toggle Navigation"
      >
        <div className={`relative w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`relative w-6 h-0.5 bg-white rounded mt-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`relative w-6 h-0.5 bg-white rounded mt-1 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* Mobile Overlay (Layar gelap saat menu terbuka) */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu Navigasi (Hamburger Menu Content) */}
      <nav
        className={`fixed top-0 right-0 h-full w-64
                   flex flex-col items-center justify-start pt-20
                   bg-black bg-opacity-[0.7] backdrop-blur-3xl {/* <--- KUNCI PERBAIKAN DI SINI */}
                   transform transition-transform duration-300 ease-in-out shadow-2xl
                   ${menuOpen ? "translate-x-0" : "translate-x-full"}
                   z-40 border-l border-white border-opacity-[0.1]
                   lg:hidden`}
      >
        <ul className="flex flex-col space-y-8 p-8 bg-black text-white text-xl w-full">
          {navItems.map((item) => (
            <li key={item.hash} className="w-full">
              <Link
                href={item.hash}
                onClick={(e) => scrollToSection(e, item.hash)}
                className={`block py-2 relative group text-center
                            font-semibold transition-colors duration-200 ease-in-out
                            ${activeSection === item.hash
                                ? "text-[#7E57C2]"
                                : "text-white hover:text-white/80"
                            }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#7E57C2] transition-all duration-300 ease-out transform -translate-x-1/2
                                  ${activeSection === item.hash ? 'w-full' : 'group-hover:w-full'}`}></span>
              </Link>
            </li>
          ))}
          {/* Tambahkan menu Beyond Code dan Multi Language di mobile menu */}
          <li className="w-full pt-4 border-t border-white border-opacity-10 mt-4">
            <Link
              href="#hobbies"
              onClick={(e) => scrollToSection(e, '#hobbies')}
              className="block py-2 relative group text-center
                         font-semibold text-white hover:text-white/80 transition-colors duration-200 ease-in-out"
            >
              Beyond Code
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#7E57C2] transition-all duration-300 ease-out transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
          </li>
          {/* <li className="w-full mt-4">
            <div className="relative text-center">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white bg-opacity-[0.08] text-white text-lg w-full
                           border border-white border-opacity-[0.15] shadow-md
                           hover:bg-opacity-[0.15] hover:border-fuchsia-400 transition duration-300"
              >
                <FaGlobe size={20} />
                ID
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {langDropdownOpen && (
                <div className="mt-2 bg-white bg-opacity-[0.15] backdrop-blur-xl rounded-lg shadow-xl overflow-hidden border border-white border-opacity-[0.1] z-50">
                  <ul className="py-1">
                    <li>
                      <a href="#" className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-[0.1] transition-colors" onClick={() => { setLangDropdownOpen(false); }}>Bahasa Indonesia</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-[0.1] transition-colors" onClick={() => { setLangDropdownOpen(false); }}>English</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
