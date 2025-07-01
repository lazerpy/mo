import React from "react";
import { FaRegLightbulb, FaFigma, FaBolt, FaLaptopCode, FaYoutube, FaGlobeAfrica } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPaletteFill } from "react-icons/bs";
import ScrollAnimation from "../components/ScrollAnimation";

const aboutCards = [
  {
    icon: <BsFillPaletteFill className="text-blue-400 text-2xl sm:text-3xl mx-auto" />, // UI/UX
    title: "I solve real problems with clean UI/UX — minimal in design, meaningful in impact. Every decision is intentional, built to guide, connect, and inspire.",
  },
  {
    icon: <FaFigma className="text-yellow-400 text-2xl sm:text-3xl mx-auto" />, // Figma
    title: "I turn Figma designs into real code — translating visual ideas into clean, responsive interfaces with React and Tailwind. Every detail matters, from pixels to performance.",
  },
  {
    icon: <FaBolt className="text-yellow-300 text-2xl sm:text-3xl mx-auto" />, // Fast/SEO
    title: "I craft high-performance websites that feel fast, load faster, and adapt to every screen. They're responsive, SEO-optimized, and built with best practices from the ground up.",
  },
];

const whatIDo = [
  {
    icon: <FaLaptopCode className="text-xl sm:text-2xl text-blue-400" />,
    text: " 40+ mini projects — real practice solving UI & UX challenges and javascript Logic",
  },
  {
    icon: <FaYoutube className="text-xl sm:text-2xl text-red-500" />,
    text: " 3+ years deep in front-end — from design systems to deployment",
  },
  {
    icon: <FaRegLightbulb className="text-xl sm:text-2xl text-yellow-400" />,
    text: "Built interactive and responsive components & layouts using React & Tailwind",
  },
  {
    icon: <FaGlobeAfrica className="text-xl sm:text-2xl text-green-400" />,
    text: "Based in Somalia, collaborating globally with a builder's mindset",
  },
];

const timeline = [
  { year: "2022", text: "Learned HTML and  CSS" },
  { year: "2023", text: "Built mini projects into Javascript" },
  { year: "2024", text: "Learned React + Tailwind" },
  { year: "2025", text: "Building real UIs & freelancing" },
];

const About = () => (
  <section id="about" className="w-full h-full flex flex-col flex-1 min-h-full glass rounded-3xl shadow-2xl p-4 sm:p-6 md:p-14 m-0">
    <ScrollAnimation>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 sm:mb-4 md:mb-6">About Me</h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-2 flex items-start gap-2">
        <span className="text-xl sm:text-2xl mt-1">👋</span>
        <span>Hi, I'm Mohamet — a creative Front-End Developer focused on crafting clean, responsive user interfaces using React and Tailwind CSS. I enjoy turning ideas into interactive experiences that not only look great but also perform smoothly across all devices</span>
      </p>
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
      I specialize in building dynamic front-ends that feel fast, intuitive, and alive — with a deep focus on user experience, micro-animations, and professional layouts. I turn raw ideas into pixel-perfect, responsive experiences. Every element I write serves a purpose — it's functional, beautiful, and built to engage.
       I'm not just coding interfaces; I'm crafting stories users can feel, interact with, and remember.
      </p>
    </ScrollAnimation>

    {/* Cards - Grid layout for small screens */}
    <ScrollAnimation delay={200}>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 mt-3">
        {aboutCards.map((card, i) => (
          <ScrollAnimation key={i} delay={i * 100} direction="up">
            <div className="neumorphism rounded-xl p-3 sm:p-4 md:p-6 flex flex-col items-center text-center hover-lift interactive-card">
              {card.icon}
              <p className="text-gray-200 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium">{card.title}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </ScrollAnimation>
    
    {/* What I do - Row layout for small screens */}
    <ScrollAnimation delay={400}>
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 mt-4 sm:mt-6">What I did</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10">
        {whatIDo.map((item, i) => (
          <ScrollAnimation key={i} delay={i * 50} direction="left">
            <div className="flex items-start gap-2 sm:gap-3 glass-card rounded-lg p-2 sm:p-3 md:p-4 hover-border-glow">
              {item.icon}
              <span className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">{item.text}</span>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </ScrollAnimation>
    
    {/* Timeline - Horizontal progress bar for professional look */}
    <ScrollAnimation delay={600}>
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 mt-4 sm:mt-6">Timeline</h2>
      <div className="relative mb-6 sm:mb-8 md:mb-10">
        {/* Progress bar line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 rounded-full transform -translate-y-1/2"></div>
        
        {/* Timeline items */}
        <div className="relative flex justify-between items-center">
          {timeline.map((t, i) => (
            <ScrollAnimation key={t.year} delay={i * 100} direction="up">
              <div className="flex flex-col items-center relative z-10">
                {/* Progress dot */}
                <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-full shadow-lg mb-2 sm:mb-3"></div>
                {/* Timeline item with background */}
                <div className="neumorphism rounded-xl p-2 sm:p-3 md:p-4 hover-lift interactive-card text-center">
                  {/* Year */}
                  <div className="text-gray-200 text-sm sm:text-base md:text-lg font-bold mb-1">{t.year}</div>
                  {/* Description */}
                  <div className="text-gray-400 text-xs sm:text-xs md:text-sm max-w-[80px] sm:max-w-[100px] md:max-w-[120px] leading-tight">{t.text}</div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </ScrollAnimation>
    
    {/* Collaboration & Links */}
    <ScrollAnimation delay={800}>
      <div className="text-gray-200 text-xs sm:text-sm md:text-base mt-4 sm:mt-6 md:mt-8 glass-card rounded-xl p-4 sm:p-6">
        <span className="inline-block mr-2">🎨</span>
        I'm open to freelance projects or collaborations. Check out my{' '}
        <a href="#projects" className="text-blue-400 hover:underline font-semibold hover-glow">Projects</a>
        {' '}or{' '}
        <a href="#contact" className="text-blue-400 hover:underline font-semibold flex items-center inline-flex hover-glow"><HiOutlineMail className="mr-1" />Contact Me</a>
        {' '}to chat!
      </div>
    </ScrollAnimation>
  </section>
);

export default About; 