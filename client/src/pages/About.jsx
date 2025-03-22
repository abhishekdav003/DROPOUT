import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import WhatsAppIcon from "../components/WhatsAppIcon";

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-900 text-white overflow-hidden">
        {/* Section 1 - Hero with Asymmetrical Layout */}
        <section className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-12 bg-gradient-to-tl from-indigo-900 via-blue-800 to-gray-900">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/hero-pattern.png')] opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-slide-in-left">
                Dropout Engineers
              </h1>
              <p className="text-xl md:text-2xl font-light text-indigo-200 mb-8 animate-slide-in-left delay-200">
                Pioneering apparel with vision, craft, and soul.
              </p>
              <a
                href="/contact"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 hover:shadow-indigo-500/50 animate-slide-in-left delay-300"
              >
                Discover Our Story
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <img
                src="/path/to/team-image.jpg"
                alt="Our Team"
                className="w-full max-w-md rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* Section 2 - Our Journey (Timeline Style) */}
        <section className="py-24 px-6 md:px-12 bg-white text-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
              Our Journey
            </h2>
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-300 hidden md:block"></div>
              {[
                {
                  year: "2018",
                  title: "The Spark",
                  desc: "Born from a vision to disrupt apparel with bold ideas.",
                  side: "left",
                },
                {
                  year: "2020",
                  title: "First Threads",
                  desc: "Launched our debut collection, blending style and ethics.",
                  side: "right",
                },
                {
                  year: "2025",
                  title: "Global Reach",
                  desc: "Expanding worldwide with sustainable innovation.",
                  side: "left",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center mb-16 animate-fade-in-up ${
                    milestone.side === "left" ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="md:w-5/12 text-center md:text-left">
                    <span className="block text-2xl font-bold text-indigo-600 mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mx-6 hidden md:flex">
                    {index + 1}
                  </div>
                  <div className="md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - Core Pillars (Glassmorphism Cards) */}
        <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-800 to-indigo-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in">
              What Defines Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Craftsmanship",
                  desc: "Every stitch reflects our obsession with perfection.",
                  icon: "🛠️",
                },
                {
                  title: "Sustainability",
                  desc: "Green practices for a future we believe in.",
                  icon: "🌍",
                },
                {
                  title: "Vision",
                  desc: "Designing tomorrow’s classics, today.",
                  icon: "✨",
                },
              ].map((pillar, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-200">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 - Meet the Makers (Image Grid) */}
        <section className="py-24 px-6 md:px-12 bg-white text-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in">
              Meet the Makers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Alex", role: "Designer", img: "/path/to/alex.jpg" },
                { name: "Maya", role: "Craftsman", img: "/path/to/maya.jpg" },
                { name: "Ravi", role: "Innovator", img: "/path/to/ravi.jpg" },
                { name: "Luna", role: "Sustainability Lead", img: "/path/to/luna.jpg" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - CTA with Overlap */}
        <section className="relative py-24 px-6 md:px-12 bg-indigo-800 text-white">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Shape the Future with Us
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in delay-200">
              Let’s craft something extraordinary together. Reach out and join the movement.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-indigo-800 font-semibold py-4 px-10 rounded-full shadow-2xl hover:bg-indigo-100 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-300"
            >
              Get Started
            </a>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        </section>
      </div>
      <ScrollToTopButton />
      <WhatsAppIcon />
      <Footer />
    </>
  );
};

export default About;