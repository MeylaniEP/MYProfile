"use client";
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";

// Import ikon dari react-icons
import { FaMailBulk, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [touchedFields, setTouchedFields] = useState({}); // State untuk melacak input yang sudah disentuh

  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 150 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Reset status submit jika pengguna mulai mengetik lagi
    if (submitStatus) setSubmitStatus(null);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields(prev => ({ ...prev, [name]: true }));
  };

  const validateField = (name) => {
    if (!touchedFields[name]) return null; // Belum disentuh, tidak ada validasi visual
    if (name === 'email' && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      return 'invalid';
    }
    if (formData[name].trim() === '') {
      return 'invalid';
    }
    return 'valid';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi dasar sebelum submit
    const formIsValid = Object.keys(formData).every(key => {
      if (key === 'email') return /\S+@\S+\.\S+/.test(formData.email);
      return formData[key].trim() !== '';
    });

    if (!formIsValid) {
      setSubmitStatus('error');
      // Set all fields as touched to show validation errors
      const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
      setTouchedFields(allTouched);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const formspreeUrl = "https://formspree.io/f/mnnzpyog"; // Ganti dengan ID Formspree Anda
    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        setTouchedFields({}); // Clear touched fields
      } else {
        setSubmitStatus('error');
        console.error("Form submission error:", response.status, await response.text());
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      id: 'phone',
      icon: FaPhoneAlt,
      title: "Phone",
      value: "+62812-1747-8861",
      link: "tel:+6281217478861",
      aosDelay: 100
    },
    {
      id: 'email',
      icon: FaMailBulk,
      title: "Email",
      value: "meylaniekap1105@gmail.com",
      link: "mailto:meylaniekap1105@gmail.com",
      aosDelay: 200
    },
    {
      id: 'address',
      icon: FaMapMarkerAlt,
      title: "Address",
      value: "Kutu Asem, Sinduadi, Mlati, Sleman, DI Yogyakarta",
      link: "https://maps.app.goo.gl/2ZJ25KKB1JzRekkf9",
      aosDelay: 300
    },
  ];

  const socialLinks = [
    {
      id: 'linkedin',
      icon: FaLinkedinIn,
      title: "LinkedIn",
      value: "View Profile",
      link: "https://www.linkedin.com/in/meylani-eka-pertiwi-6a494b31a",
      aosDelay: 400
    },
    {
      id: 'github',
      icon: FaGithub,
      title: "GitHub",
      value: "View Profile",
      link: "https://github.com/MeylaniEP",
      aosDelay: 500
    },
  ];

  return (
    <div
      id="contact"
      className="relative min-h-screen py-20 md:py-24 bg-gradient-to-br from-gray-950 to-black text-white flex flex-col items-center overflow-hidden"
    >
      {/* Background radial gradient / blob effect - Consistent with other sections */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-animation z-0 animation-delay-1000"></div>
      <div className="absolute bottom-[25%] right-[10%] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-animation z-0 animation-delay-5000"></div>
      <div className="absolute top-[70%] left-[30%] w-56 h-56 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-animation z-0 animation-delay-9000"></div>

      {/* Grainy overlay for subtle texture */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' stroke=\'none\' fill=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        backgroundSize: '100px 100px'
      }}></div>

      <div className="max-w-6xl w-full px-4 md:px-8 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16
                     bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white
                     drop-shadow-lg"
          data-aos="fade-up"
        >
          Get In Touch
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-stretch">
          {/* Left Column: Contact Form */}
          <div
            className="w-full lg:w-2/3 glassmorphism-card p-8 rounded-3xl shadow-2xl flex flex-col"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3 className="text-3xl font-bold text-gray-100 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
              {['name', 'email', 'subject'].map((fieldName) => {
                const isValid = validateField(fieldName);
                const inputType = fieldName === 'email' ? 'email' : 'text';
                return (
                  <div className="relative" key={fieldName}>
                    <input
                      type={inputType}
                      id={fieldName}
                      name={fieldName}
                      value={formData[fieldName]}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      required
                      className={`w-full p-3 bg-white bg-opacity-[0.05] border rounded-lg text-gray-100 placeholder-transparent focus:outline-none focus:ring-2 transition duration-300 peer
                                  ${isValid === 'invalid' ? 'border-red-500 focus:ring-red-500' :
                                    isValid === 'valid' ? 'border-green-500 focus:ring-green-500' :
                                    'border-white border-opacity-[0.15] focus:ring-fuchsia-500'}`}
                    />
                    <label
                      htmlFor={fieldName}
                      className={`absolute left-3 -top-3.5 text-sm transition-all duration-300
                                 peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                                 peer-focus:-top-3.5 peer-focus:text-sm
                                 ${isValid === 'invalid' ? 'text-red-400 peer-focus:text-red-400' :
                                   isValid === 'valid' ? 'text-green-400 peer-focus:text-green-400' :
                                   'text-gray-400 peer-focus:text-fuchsia-400'}`}
                    >
                      {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace('email', 'Email')}
                    </label>
                  </div>
                );
              })}

              <div className="relative flex-grow">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder=" "
                  rows="5"
                  required
                  className={`w-full p-3 bg-white bg-opacity-[0.05] border rounded-lg text-gray-100 placeholder-transparent focus:outline-none focus:ring-2 transition duration-300 peer resize-y h-full
                              ${validateField('message') === 'invalid' ? 'border-red-500 focus:ring-red-500' :
                                validateField('message') === 'valid' ? 'border-green-500 focus:ring-green-500' :
                                'border-white border-opacity-[0.15] focus:ring-fuchsia-500'}`}
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-3 -top-3.5 text-sm transition-all duration-300
                             peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                             peer-focus:-top-3.5 peer-focus:text-sm
                             ${validateField('message') === 'invalid' ? 'text-red-400 peer-focus:text-red-400' :
                               validateField('message') === 'valid' ? 'text-green-400 peer-focus:text-green-400' :
                               'text-gray-400 peer-focus:text-fuchsia-400'}`}
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-lg shadow-lg
                           hover:from-purple-700 hover:to-fuchsia-700 transition duration-300 flex items-center justify-center gap-2
                           disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan <FaPaperPlane size={18} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center mt-4 animate-fade-in-up">
                  Pesan berhasil dikirim! Saya akan segera menghubungi Anda.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center mt-4 animate-fade-in-up">
                  Gagal mengirim pesan. Silakan coba lagi nanti atau hubungi langsung.
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Contact Info & Social Links */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {/* Contact Info Cards */}
            <div
              className="glassmorphism-card p-6 rounded-3xl shadow-2xl flex flex-col gap-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold text-gray-100 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400">
                Kontak Langsung
              </h3>
              {contactInfo.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target={item.id === 'address' ? "_blank" : "_self"}
                  rel={item.id === 'address' ? "noopener noreferrer" : ""}
                  className="group flex items-center gap-4 p-4 bg-white bg-opacity-[0.05] rounded-xl
                             border border-white border-opacity-[0.1] hover:border-fuchsia-400
                             transition duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-fuchsia-500/20"
                  data-aos="fade-up"
                  data-aos-delay={item.aosDelay + 100}
                >
                  {/* Ikon dengan efek hover */}
                  <item.icon size={28} className="text-fuchsia-400 flex-shrink-0 transition-all duration-300 group-hover:text-fuchsia-300 group-hover:scale-110" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links Cards */}
            <div
              className="glassmorphism-card p-6 rounded-3xl shadow-2xl flex flex-col gap-4"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-bold text-gray-100 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400">
                Terhubung Online
              </h3>
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white bg-opacity-[0.05] rounded-xl
                             border border-white border-opacity-[0.1] hover:border-blue-400
                             transition duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
                  data-aos="fade-up"
                  data-aos-delay={item.aosDelay + 100}
                >
                  {/* Ikon dengan efek hover */}
                  <item.icon size={28} className="text-blue-400 flex-shrink-0 transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Call to Action */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-gray-300 text-xl font-medium mb-4">
            Siap memulai proyek atau hanya ingin mengobrol?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-lg rounded-full shadow-xl
                       hover:from-purple-700 hover:to-fuchsia-700 transition duration-300 transform hover:scale-105"
          >
            Mari Terhubung!
          </a>
        </div>
      </div>
    </div>
  );
}