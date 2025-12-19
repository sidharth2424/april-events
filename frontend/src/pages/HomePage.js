import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  Heart,
  Briefcase,
  PartyPopper,
  Quote,
  Phone,
  MapPin,
} from "lucide-react";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const videoRef = useRef(null);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enforce permanent mute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    }
  }, []);

  // Load fonts
  useEffect(() => {
    const fonts = [
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap",
      "https://fonts.googleapis.com/css2?family=Festive&display=swap",
      "https://fonts.googleapis.com/css2?family=Monoton&display=swap",
    ];
    fonts.forEach((href) => {
      const link = document.createElement("link");
      link.href = href;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    });
  }, []);

  const services = [
    {
      title: "Wedding Planning",
      desc: "From engagement to your big day, we take care of every detail.",
      icon: <Heart className="text-green-700" size={36} />,
    },
    {
      title: "Corporate Events",
      desc: "Professional events that reflect your brand image perfectly.",
      icon: <Briefcase className="text-green-700" size={36} />,
    },
    {
      title: "Private Parties",
      desc: "Birthdays to grand celebrations — we make it unforgettable.",
      icon: <PartyPopper className="text-green-700" size={36} />,
    },
  ];

  const testimonials = [
    {
      quote:
        "I had a really great experience with April Events, they have arranged and organised the event so well which made my big day look beautiful.",
      name: "Ashique Aash",
      event: "Wedding Celebration",
    },
    {
      quote:
        "They handled all the last-minute changes for the birthday party so smoothly. Everything was perfect.",
      name: "Bhagath Prakash",
      event: "Birthday Celebration",
    },
    {
      quote:
        "The groom’s people were also very happy with the decoration and arrangements.",
      name: "Mamatha Krishnakurup",
      event: "Wedding Celebration",
    },
  ];

  // Smooth scroll
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run =
        easeInOutCubic(timeElapsed / duration) * distance + startPosition;
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-white select-none"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          navScrolled
            ? "backdrop-blur-md bg-white/80 shadow"
            : "bg-white"
        }`}
      >
        <div className="hidden sm:flex justify-between items-center px-10 py-4">
          <div className="flex items-center space-x-8">
            <span onClick={() => scrollToSection("home")} className="cursor-pointer">
              Home
            </span>
            <span onClick={() => scrollToSection("about")} className="cursor-pointer">
              About
            </span>
            <span
              onClick={() => scrollToSection("services")}
              className="cursor-pointer"
            >
              Services
            </span>
            <span
              onClick={() => scrollToSection("gallery")}
              className="cursor-pointer"
            >
              Gallery
            </span>
            <span
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer"
            >
              Contact
            </span>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/aprileventslogo.jpeg`}
            alt="April Events Logo"
            className="h-14"
          />
        </div>

        {/* Mobile Navbar */}
        <div className="flex sm:hidden justify-between items-center px-6 py-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={28} />
          </button>
          <img
            src={`${process.env.PUBLIC_URL}/aprileventslogo.jpeg`}
            alt="Logo"
            className="h-12"
          />
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden bg-white shadow-md px-6 pb-4 pt-2 fixed top-16 w-full z-40">
            {["home", "about", "services", "gallery", "contact"].map((item) => (
              <span
                key={item}
                onClick={() => scrollToSection(item)}
                className="block py-2 cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center text-white h-screen bg-cover bg-center px-4"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)`,
          fontFamily: "Festive, cursive",
        }}
      >
        <h1 className="text-5xl sm:text-7xl mb-4">
          Welcome to{" "}
          <span style={{ fontFamily: "Monoton, cursive" }}>April Events</span>
        </h1>
        <p className="text-3xl">Crafting Memorable Celebrations</p>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-green-50 text-center px-4">
        <h2 className="text-4xl text-green-700 mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          We specialize in weddings, corporate events, and private celebrations
          with passion and precision.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-20 text-center px-4">
        <h2 className="text-4xl text-green-700 mb-10">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {services.map((s, i) => (
            <div key={i} className="w-72 p-8 bg-green-50 rounded-xl shadow-lg">
              <div className="mb-4 flex justify-center">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery – PERMANENTLY SILENT VIDEO */}
      <section id="gallery" className="py-20 bg-green-50 text-center px-4">
        <h2 className="text-4xl text-green-700 mb-10">
          Our Memorable Moments
        </h2>
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            src={`${process.env.PUBLIC_URL}/gallery/celebration.mp4`}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate nofullscreen"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 text-center px-4">
        <h2 className="text-4xl text-green-700 mb-10">Testimonials</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Quote className="text-green-300 mb-4" />
              <p className="italic mb-4">"{t.quote}"</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-green-50 text-center px-4">
        <h2 className="text-4xl text-green-700 mb-10">Contact Us</h2>
        <div className="space-y-4">
          <p className="flex justify-center gap-3">
            <Phone /> 8089520032
          </p>
          <p className="flex justify-center gap-3">
            <MapPin /> Near Govt Hospital, Vadakara
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t">
        © {new Date().getFullYear()} April Events
      </footer>
    </div>
  );
};

export default HomePage;
