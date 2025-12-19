import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  Heart,
  Briefcase,
  PartyPopper,
  Quote,
  Phone,
  MapPin,
  Copy,
  Instagram,
} from "lucide-react";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const videoRef = useRef(null);

  // Permanently mute video
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
        "April Events arranged everything beautifully and made our big day unforgettable.",
      name: "Ashique Aash",
      event: "Wedding Celebration",
    },
    {
      quote:
        "They handled all last-minute changes smoothly. Everything was perfect.",
      name: "Bhagath Prakash",
      event: "Birthday Celebration",
    },
    {
      quote:
        "The decorations and arrangements were done with great care and detail.",
      name: "Mamatha Krishnakurup",
      event: "Wedding Celebration",
    },
  ];

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className="min-h-screen bg-white select-none"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {/* NAVBAR (ALWAYS SOLID WHITE) */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
        <div className="hidden sm:flex justify-between items-center px-10 py-4">
          <div className="flex items-center space-x-8 text-gray-800">
            {["home", "about", "services", "gallery", "contact"].map((item) => (
              <span
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer hover:text-green-600"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            ))}
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/aprileventslogo.jpeg`}
            alt="April Events Logo"
            className="h-14 object-contain"
          />
        </div>

        {/* Mobile Navbar */}
        <div className="flex sm:hidden justify-between items-center px-6 py-4 bg-white">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={28} />
          </button>
          <img
            src={`${process.env.PUBLIC_URL}/aprileventslogo.jpeg`}
            alt="Logo"
            className="h-12 object-contain"
          />
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden bg-white shadow-md px-6 pb-4 pt-2 fixed top-16 w-full z-40">
            {["home", "about", "services", "gallery", "contact"].map((item) => (
              <span
                key={item}
                onClick={() => scrollToSection(item)}
                className="block py-2 cursor-pointer hover:text-green-600"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="pt-24 flex flex-col justify-center items-center text-center text-white h-screen bg-cover bg-center px-4"
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

      {/* ABOUT */}
      <section id="about" className="py-20 bg-green-50 text-center px-4">
        <h2 className="text-4xl text-green-700 mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          April Events specializes in weddings, corporate events, and private
          celebrations with elegance and precision.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 text-center px-4">
        <h2 className="text-4xl text-green-700 mb-10">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="w-72 p-8 bg-green-50 rounded-xl shadow-lg"
            >
              <div className="mb-4 flex justify-center">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
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
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
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

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-green-50 text-center px-4">
        <h2 className="text-4xl text-green-700 mb-10">Contact Us</h2>

        <div className="max-w-2xl mx-auto space-y-6 text-gray-700">
          {["8089520032", "9645780032"].map((num) => (
            <div key={num} className="flex justify-center items-center gap-3">
              <Phone className="text-green-700" />
              <a href={`tel:${num}`} className="hover:underline">
                {num}
              </a>
              <Copy
                size={18}
                className="cursor-pointer"
                onClick={() => copyText(num)}
              />
            </div>
          ))}

          <div className="flex justify-center items-center gap-3">
            <Instagram className="text-green-700" />
            <a
              href="https://www.instagram.com/april_events_vadakara"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @april_events_vadakara
            </a>
            <Copy
              size={18}
              className="cursor-pointer"
              onClick={() =>
                copyText("https://www.instagram.com/april_events_vadakara")
              }
            />
          </div>

          <div className="flex justify-center items-center gap-3">
            <MapPin className="text-green-700" />
            <a
              href="https://maps.app.goo.gl/iyJjsFs9UHi3cJN16"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              View Location on Google Maps
            </a>
            <Copy
              size={18}
              className="cursor-pointer"
              onClick={() =>
                copyText("https://maps.app.goo.gl/iyJjsFs9UHi3cJN16")
              }
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t">
        © {new Date().getFullYear()} April Events
      </footer>
    </div>
  );
};

export default HomePage;
