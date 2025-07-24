// src/components/BeyondCodeSection.js (bagian data)
"use client";

import React, { useState, useEffect, useRef } from 'react'; // Tambahkan useRef
import Image from 'next/image';
import { FaGamepad, FaMusic, FaHeartbeat, FaUtensils, FaGraduationCap, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import ikon panah untuk carousel

const beyondCodeData = [
  {
    id: "hoby",
    label: "Hoby",
    subCategories: [
      {
        id: "game",
        label: "Game",
        icon: FaGamepad,
        items: [
          {
            id: "catur",
            name: "Catur",
            profileImage: "/chess.png", // Gambar untuk badge
            galleryImages: [ // Gambar untuk carousel
              "/chess1.jpg",
              "/chess2.jpg",
            ],
            details: {
              tier: "Grandmaster",
              role: "Strategist",
              idPlayer: "MeyChessMaster",
              motto: "Think 7 steps ahead.",
            },
          },
          {
            id: "mobile-legend",
            name: "Mobile Legend",
            profileImage: "/ml.jpg",
            galleryImages: [
              "/ml1.jpeg",
              "/ml2.jpeg",
            ],
            details: {
              tier: "Mythic Glory",
              role: "Mid Laner",
              idPlayer: "MeyMLBB",
              motto: "Never surrender.",
            },
          },
          {
            id: "free-fire",
            name: "Free Fire",
            profileImage: "/ff.jpg",
            galleryImages: [
              "/ff1.jpeg",
              "/ff2.jpeg",
             
            ],
            details: {
              tier: "Heroic",
              role: "Rusher",
              idPlayer: "MeyFF",
              motto: "Booyah!",
            },
          },
          {
            id: "plants-zombies-fusion",
            name: "PVZ Fusion",
            profileImage: "/pvz.jpg",
            galleryImages: [
              "/pvz1.jpg",
              "/pvz2.jpg",
            ],
            details: {
              tier: "Strategist",
              role: "Defense Planner",
              idPlayer: "MeyPvZ",
              motto: "Brains over brawn.",
            },
          },
        ],
      },
      {
        id: "music",
        label: "Music",
        icon: FaMusic,
        items: [
          {
            id: "piano",
            name: "Piano",
            profileImage: "/images/music/piano_profile.png",
            galleryImages: [
              "/images/music/piano_gallery1.png",
              "https://placehold.co/600x400/DA70D6/FFFFFF?text=Piano+Slide+2",
            ],
            details: {
              genre: "Classical",
              experience: "10 Years",
              favoritePiece: "Moonlight Sonata",
              motto: "Music is the soul's language.",
            },
          },
          {
            id: "gitar",
            name: "Gitar",
            profileImage: "/images/music/gitar_profile.png",
            galleryImages: [
              "/images/music/gitar_gallery1.png",
              "https://placehold.co/600x400/FF69B4/FFFFFF?text=Gitar+Slide+2",
            ],
            details: {
              genre: "Acoustic Pop",
              experience: "5 Years",
              favoriteSong: "Shape of You (Ed Sheeran)",
              motto: "Strumming my worries away.",
            },
          },
        ],
      },
      {
        id: "olah-raga",
        label: "Olah Raga",
        icon: FaHeartbeat,
        items: [
          {
            id: "tradisional",
            name: "Tari Tradisional",
            profileImage: "/images/dance/tradisional_profile.png",
            galleryImages: [
              "/images/dance/tradisional_gallery1.png",
              "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Tari+Tradisional+Slide+2",
            ],
            details: {
              style: "Jaipongan",
              experience: "8 Years",
              origin: "West Java",
              motto: "Express through movement.",
            },
          },
          {
            id: "modern",
            name: "Tari Modern",
            profileImage: "/images/dance/modern_profile.png",
            galleryImages: [
              "/images/dance/modern_gallery1.png",
              "https://placehold.co/600x400/DA70D6/FFFFFF?text=Tari+Modern+Slide+2",
            ],
            details: {
              style: "Hip-Hop",
              experience: "3 Years",
              favoriteChoreographer: "Keone Madrid",
              motto: "Dance like no one's watching.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "business",
    label: "Business",
    subCategories: [
      {
        id: "kuliner",
        label: "Kuliner",
        icon: FaUtensils,
        items: [
          {
            id: "cafe-design",
            name: "Cafe Design",
            profileImage: "/images/business/cafe_design_profile.png",
            galleryImages: [
              "/images/business/cafe_design_gallery1.png",
              "https://placehold.co/600x400/FF69B4/FFFFFF?text=Cafe+Design+Slide+2",
            ],
            details: {
              role: "Consultant",
              projects: "3 Cafes",
              specialty: "Minimalist & Cozy",
              motto: "Creating inviting spaces.",
            },
          },
          {
            id: "food-blog",
            name: "Food Blogging",
            profileImage: "/images/business/food_blog_profile.png",
            galleryImages: [
              "/images/business/food_blog_gallery1.png",
              "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Food+Blog+Slide+2",
            ],
            details: {
              platform: "Instagram & Blog",
              focus: "Local Delicacies",
              followers: "10K+",
              motto: "Taste the world, one bite at a time.",
            },
          },
        ],
      },
      {
        id: "bimbel",
        label: "Bimbel",
        icon: FaGraduationCap,
        items: [
          {
            id: "math-tutor",
            name: "Math Tutor",
            profileImage: "/images/business/math_tutor_profile.png",
            galleryImages: [
              "/images/business/math_tutor_gallery1.png",
              "https://placehold.co/600x400/DA70D6/FFFFFF?text=Math+Tutor+Slide+2",
            ],
            details: {
              subject: "Mathematics",
              level: "High School",
              experience: "5 Years",
              motto: "Making math fun.",
            },
          },
          {
            id: "english-tutor",
            name: "English Tutor",
            profileImage: "/images/business/english_tutor_profile.png",
            galleryImages: [
              "/images/business/english_tutor_gallery1.png",
              "https://placehold.co/600x400/FF69B4/FFFFFF?text=English+Tutor+Slide+2",
            ],
            details: {
              subject: "English Language",
              level: "All Levels",
              experience: "3 Years",
              motto: "Unlock your potential through language.",
            },
          },
        ],
      },
    ],
  },
];

// --- Akhir Data Struktur ---


const BeyondCodeSection = () => {
  const [activeCategory, setActiveCategory] = useState(beyondCodeData[0].id);
  const [activeSubCategory, setActiveSubCategory] = useState(beyondCodeData[0].subCategories[0].id);
  const [activeDetailItem, setActiveDetailItem] = useState(null);

  // --- State dan Ref untuk Carousel ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef(null); // Ref untuk elemen carousel untuk swipe
  const touchStartX = useRef(0); // Untuk melacak posisi awal sentuhan

  // Reset sub-kategori saat kategori utama berubah
  useEffect(() => {
    const currentCategory = beyondCodeData.find(cat => cat.id === activeCategory);
    if (currentCategory && currentCategory.subCategories.length > 0) {
      setActiveSubCategory(currentCategory.subCategories[0].id);
    } else {
      setActiveSubCategory(null);
    }
    setActiveDetailItem(null); // Reset detail view
  }, [activeCategory]);

  // Reset carousel index saat item detail berubah
  useEffect(() => {
    setCurrentImageIndex(0); // Selalu mulai dari gambar pertama saat detail item baru dibuka
    // Auto-slide logic
    let slideInterval;
    if (activeDetailItem) {
      const item = getActiveItemDetail();
      if (item && item.galleryImages && item.galleryImages.length > 1) {
        slideInterval = setInterval(() => {
          setCurrentImageIndex(prevIndex =>
            (prevIndex + 1) % item.galleryImages.length
          );
        }, 5000); // Ganti gambar setiap 5 detik
      }
    }
    return () => clearInterval(slideInterval); // Bersihkan interval saat komponen unmount atau item berubah
  }, [activeDetailItem]); // Dependensi activeDetailItem


  // Helper untuk mendapatkan data sub-kategori dari kategori aktif
  const getCurrentSubCategories = () => {
    const category = beyondCodeData.find(cat => cat.id === activeCategory);
    return category ? category.subCategories : [];
  };

  // Helper untuk mendapatkan item (badge) dari sub-kategori aktif
  const getCurrentItems = () => {
    const subCategory = getCurrentSubCategories().find(subCat => subCat.id === activeSubCategory);
    return subCategory ? subCategory.items : [];
  };

  // Helper untuk mendapatkan detail item yang aktif
  const getActiveItemDetail = () => {
    if (!activeDetailItem) return null;
    const items = getCurrentItems();
    return items.find(item => item.id === activeDetailItem);
  };

  // Handler saat kategori utama diklik (Hoby/Business)
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Handler saat sub-kategori diklik (Game/Music/Kuliner dll)
  const handleSubCategoryClick = (subCategoryId) => {
    setActiveSubCategory(subCategoryId);
    setActiveDetailItem(null); // Reset detail view
  };

  // Handler saat badge item diklik (Catur/Mobile Legend dll)
  const handleBadgeClick = (itemId) => {
    setActiveDetailItem(itemId); // Tampilkan detail penuh
  };

  // Handler saat tombol kembali diklik di tampilan detail
  const handleBackButtonClick = () => {
    setActiveDetailItem(null); // Kembali ke daftar badge
  };

  // --- Fungsi Navigasi Carousel ---
  const navigateCarousel = (direction) => {
    const item = getActiveItemDetail();
    if (!item || !item.galleryImages || item.galleryImages.length === 0) return;

    let newIndex = currentImageIndex;
    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + item.galleryImages.length) % item.galleryImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % item.galleryImages.length;
    }
    setCurrentImageIndex(newIndex);
  };

  // --- Fungsi Swipe Carousel ---
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchEndX - touchStartX.current;

    if (swipeDistance > 50) { // Swipe right
      navigateCarousel('prev');
    } else if (swipeDistance < -50) { // Swipe left
      navigateCarousel('next');
    }
  };


  return (
    <section id="hobbies" className="relative py-16 md:py-20 bg-gradient-to-br from-gray-950 to-black text-white min-h-screen overflow-hidden">
      {/* Background radial gradient / blob effect - Consistent with other sections */}
      <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-animation z-0 animation-delay-1000"></div>
      <div className="absolute bottom-[20%] right-[15%] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-animation z-0 animation-delay-5000"></div>
      <div className="absolute top-[50%] left-[5%] w-56 h-56 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation z-0 animation-delay-9000"></div>

      {/* Grainy overlay for subtle texture */}
      <div className="absolute inset-0 z-0 opacity-5 grainy-overlay"></div>

      <div className="max-w-6xl w-full mx-auto px-4 md:px-8 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12
                     bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white
                     drop-shadow-lg"
          data-aos="fade-up"
        >
          My Passions & Ventures
        </h2>

        {/* Tab Kategori Utama (Hoby, Business) */}
        <div className="flex justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="100">
          {beyondCodeData.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300
                          ${activeCategory === category.id
                            ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg transform scale-105'
                            : 'bg-white bg-opacity-[0.08] text-gray-300 hover:bg-opacity-[0.15] hover:text-white border border-white border-opacity-[0.1]'}
                          `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Badge Sub-Kategori (Game, Music, Tari, Kuliner, Bimbel) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up" data-aos-delay="200">
          {getCurrentSubCategories().map(subCat => (
            <button
              key={subCat.id}
              onClick={() => handleSubCategoryClick(subCat.id)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                          ${activeSubCategory === subCat.id
                            ? 'bg-fuchsia-700 text-white border border-fuchsia-400 shadow-md'
                            : 'bg-white bg-opacity-[0.05] text-gray-400 hover:bg-opacity-[0.1] hover:text-white border border-white border-opacity-[0.08]'}
                          `}
            >
              <subCat.icon size={16} /> {subCat.label}
            </button>
          ))}
        </div>

        {/* Area Konten Dinamis */}
        <div
          className="glassmorphism-card p-6 md:p-8 rounded-3xl shadow-2xl min-h-[400px] flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {activeDetailItem ? (
            // Tampilan Detail Penuh Item dengan Carousel
            <div className="w-full h-full flex flex-col items-center text-center animate-fade-in-up">
              <button
                onClick={handleBackButtonClick}
                className="self-start text-gray-300 hover:text-white transition-colors flex items-center gap-2 mb-6 text-sm md:text-base"
              >
                <FaArrowLeft className="text-lg" /> Kembali ke Daftar
              </button>
              {getActiveItemDetail() && (
                <div className="w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {getActiveItemDetail().name}
                  </h3>
                  {/* --- Carousel Gambar --- */}
                  <div
                    ref={carouselRef}
                    className="relative w-full max-w-lg mx-auto h-56 md:h-72 mb-6 rounded-xl overflow-hidden shadow-xl"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    {getActiveItemDetail().galleryImages && getActiveItemDetail().galleryImages.length > 0 ? (
                      <>
                        <Image
                          src={getActiveItemDetail().galleryImages[currentImageIndex]}
                          alt={`${getActiveItemDetail().name} - Slide ${currentImageIndex + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="transition-opacity duration-500 ease-in-out" // Animasi fade
                          key={currentImageIndex} // Kunci unik untuk memicu re-render dan transisi
                          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/333/FFF?text=Image+Error"; }}
                        />
                        {/* Navigasi Kiri/Kanan */}
                        {getActiveItemDetail().galleryImages.length > 1 && (
                          <>
                            <button
                              onClick={() => navigateCarousel('prev')}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors z-30"
                              aria-label="Previous image"
                            >
                              <FaChevronLeft size={20} />
                            </button>
                            <button
                              onClick={() => navigateCarousel('next')}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors z-30"
                              aria-label="Next image"
                            >
                              <FaChevronRight size={20} />
                            </button>
                            {/* Dots Indikator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                              {getActiveItemDetail().galleryImages.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-2.5 h-2.5 rounded-full bg-white transition-opacity duration-300
                                              ${currentImageIndex === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                                  aria-label={`Go to slide ${index + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-gray-700 text-gray-400">
                        Tidak ada gambar galeri.
                      </div>
                    )}
                  </div>
                  {/* --- Akhir Carousel --- */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-gray-300 text-sm md:text-base text-left max-w-lg mx-auto">
                    {Object.entries(getActiveItemDetail().details).map(([key, value]) => (
                      <p key={key}>
                        <span className="font-semibold capitalize text-purple-300">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Tampilan Daftar Badge Item
            <div className="w-full h-full animate-fade-in-up">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
                Pilih {getCurrentSubCategories().find(sc => sc.id === activeSubCategory)?.label}:
              </h3>
              {getCurrentItems().length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                  {getCurrentItems().map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleBadgeClick(item.id)}
                      className="group w-full max-w-[180px] h-[120px] md:h-[140px] flex flex-col items-center justify-center p-3 rounded-xl
                                 bg-white bg-opacity-[0.05] border border-white border-opacity-[0.1] shadow-md
                                 hover:bg-opacity-[0.1] hover:border-fuchsia-400 transition-all duration-300 transform hover:scale-105"
                    >
                      {item.profileImage && ( // Menggunakan profileImage untuk badge
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 border border-white border-opacity-[0.2] flex-shrink-0">
                          <Image
                            src={item.profileImage} // Menggunakan profileImage
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/333/FFF?text=Error"; }} // Fallback error image
                          />
                        </div>
                      )}
                      <span className="text-white text-base md:text-lg font-medium text-center leading-tight">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8 text-lg">
                  Tidak ada item untuk {getCurrentSubCategories().find(sc => sc.id === activeSubCategory)?.label}.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;