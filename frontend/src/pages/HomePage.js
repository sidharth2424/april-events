import React, { useState, useEffect } from "react";
import { Menu, Heart, Briefcase, PartyPopper, Quote, Phone, MapPin } from "lucide-react";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load fonts dynamically
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
    { title: "Wedding Planning", desc: "From engagement to your big day, we take care of every detail.", icon: <Heart className="text-green-700" size={36} /> },
    { title: "Corporate Events", desc: "Professional events that reflect your brand image perfectly.", icon: <Briefcase className="text-green-700" size={36} /> },
    { title: "Private Parties", desc: "Birthdays to grand celebrations — we make it unforgettable.", icon: <PartyPopper className="text-green-700" size={36} /> },
  ];

  const testimonials = [
    { quote: "I had a really great experience with April events, they have arranged and organised the event so well which made my big day look beautiful. A hearty thanks to the organiser for the trust, approach and hardwork behind it. Loved it so much", name: "Ashique Aash", event: "Wedding Celebration" },
    { quote: "They handled all the last-minute changes for the birthday party so smoothly. They were super welcoming, listened to exactly what we wanted, and just made it happen. It was amazing to see all our ideas come to life.", name: "Bhagath Prakash", event: "Birthday Celebration" },
    { quote: "The groom’s people were also very happy with the decoration and all the other arrangements made with such care", name: "Mamatha Krishnakurup", event: "Wedding Celebration" },
  ];

  // Smooth scroll with custom duration
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1000ms = 1 second
    let startTime = null;

    const easeInOutCubic = (t) => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(timeElapsed / duration) * distance + startPosition;
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
    setMobileMenuOpen(false); // close mobile menu after clicking
  };

  return (
    <div className="min-h-screen bg-white select-none" style={{ fontFamily: "Playfair Display, serif" }}>
      {/* Navbar */}
      <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${navScrolled ? "backdrop-blur-md bg-white/80 shadow" : "bg-white"}`}>
        <div className="hidden sm:flex justify-between items-center px-10 py-4">
          <div className="flex items-center space-x-8">
            <span onClick={() => scrollToSection("home")} className="hover:text-green-600 text-gray-800 cursor-pointer">Home</span>
            <span onClick={() => scrollToSection("about")} className="hover:text-green-600 text-gray-800 cursor-pointer">About</span>
            <span onClick={() => scrollToSection("services")} className="hover:text-green-600 text-gray-800 cursor-pointer">Services</span>
            <span onClick={() => scrollToSection("gallery")} className="hover:text-green-600 text-gray-800 cursor-pointer">Gallery</span>
            <span onClick={() => scrollToSection("contact")} className="hover:text-green-600 text-gray-800 cursor-pointer">Contact</span>
          </div>
          <img src={`${process.env.PUBLIC_URL}/aprileventslogo.jpeg`} alt="April Events Logo" className="h-14 object-contain" />
        </div>

        {/* Mobile Navbar */}
        <div className="flex sm:hidden justify-between items-center px-6 py-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800 focus:outline-none">
            <Menu size={28} />
          </button>
          <img src={`${process.env.PUBLIC_URL}/aprileventslogo.jpeg`} alt="Logo" className="h-12 object-contain" />
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden bg-white shadow-md px-6 pb-4 pt-2 fixed top-16 w-full z-40">
            <span onClick={() => scrollToSection("home")} className="block py-2 text-gray-800 hover:text-green-600 cursor-pointer">Home</span>
            <span onClick={() => scrollToSection("about")} className="block py-2 text-gray-800 hover:text-green-600 cursor-pointer">About</span>
            <span onClick={() => scrollToSection("services")} className="block py-2 text-gray-800 hover:text-green-600 cursor-pointer">Services</span>
            <span onClick={() => scrollToSection("gallery")} className="block py-2 text-gray-800 hover:text-green-600 cursor-pointer">Gallery</span>
            <span onClick={() => scrollToSection("contact")} className="block py-2 text-gray-800 hover:text-green-600 cursor-pointer">Contact</span>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col justify-center items-center text-center text-white h-screen bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)`, fontFamily: "Festive, cursive" }}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl mb-4 animate-fadeIn">Welcome to <span style={{ fontFamily: "Monoton, cursive" }}>April Events</span></h1>
        <p className="text-2xl sm:text-3xl md:text-4xl mb-8 font-light animate-fadeIn">Crafting Memorable Celebrations</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-green-50 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-700">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          At April Events, we believe every event deserves to be unforgettable. With years of experience in organizing weddings, corporate functions, and private parties, our team works closely with clients to bring their dreams to life. From elegant decorations to seamless management, we handle it all with passion and precision.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-green-700">Our Services</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="w-full md:w-72 p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Video */}
      <section id="gallery" className="py-20 bg-green-50 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-green-700">Our Memorable Moments</h2>
        <div className="max-w-4xl mx-auto rounded-lg shadow-md overflow-hidden">
          <video src={`${process.env.PUBLIC_URL}/gallery/celebration.mp4`} className="w-full h-full object-cover" autoPlay loop controls />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-green-700">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md text-left relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <Quote className="absolute top-4 left-4 text-green-200" size={36} />
              <p className="text-gray-600 italic mb-4 mt-6">"{testimonial.quote}"</p>
              <p className="font-bold text-green-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-50 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-green-700">Contact Us</h2>
        <div className="max-w-2xl mx-auto space-y-6 text-gray-700">
          <p className="flex items-center justify-center gap-3"><Phone size={24} className="text-green-700" /> 8089520032</p>
          <p className="flex items-center justify-center gap-3"><Phone size={24} className="text-green-700" /> 9645780032</p>
          <p className="flex items-center justify-center gap-3"><Phone size={24} className="text-green-700" /> 9072200045</p>
          <p className="flex items-center justify-center gap-3"><MapPin size={24} className="text-green-700" /> Near Govt Hospital, Vadakara</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-gray-700 text-sm border-t border-green-100">
        © {new Date().getFullYear()} April Events | Crafted with ❤️ for your celebrations
      </footer>
    </div>
  );
};

export default HomePage;
