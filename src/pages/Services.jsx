import React from "react";
import { FaCode, FaRedo, FaRocket, FaFileAlt, FaCheckCircle, FaComments } from "react-icons/fa";
import { MdWeb, MdOutlineDesignServices } from "react-icons/md";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaCode className="text-blue-400 text-3xl mx-auto" />,
    title: "UI Development",
    desc: "Clean, maintainable React components with Tailwind CSS – performance optimized and responsive on all devices.",
  },
  {
    icon: <FaRedo className="text-indigo-400 text-3xl mx-auto" />,
    title: "Website Redesigns",
    desc: "Modernize outdated sites into sleek, fast and accessible experiences that convert better and load faster.",
  },
  {
    icon: <MdWeb className="text-purple-400 text-3xl mx-auto" />,
    title: "Landing Pages / Funnels",
    desc: "Conversion-focused pages with smooth animations, lead forms, and mobile-first UX for any campaign or launch.",
  },
];

const steps = [
  {
    title: "Understand Your Vision",
    desc: "I start with a short call or clear brief to understand your goals, target audience, and preferred style.",
  },
  {
    title: "Build With Precision",
    desc: "I design and develop your UI using modern tools like React, Tailwind, Figma, and Git. Every detail matters.",
  },
  {
    title: "Test & Launch",
    desc: "You get a responsive, optimized product with smooth animations and clean performance — ready for real users.",
  },
  {
    title: "Post-Launch Support",
    desc: "I'm here to help with updates, improvements, and ongoing support after launch.",
  },
];

const Services = () => (
  <section className="w-full h-full flex flex-col flex-1 min-h-full glass rounded-3xl shadow-2xl p-4 sm:p-8 md:p-14 m-0">
    {/* What I Offer */}
    <div className="max-w-4xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">What I Offer</h1>
          <p className="text-gray-200 text-base sm:text-lg mb-2">Crafting fast, responsive, and modern web experiences using React, Tailwind, and clean code.</p>
          <p className="text-gray-300 text-base sm:text-lg">Whether you're launching a startup or need your site rebuilt, I turn your ideas into pixel-perfect products.</p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <MdOutlineDesignServices className="text-[120px] text-blue-200/60 hidden md:block float" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {services.map((service, i) => (
          <div key={i} className="neumorphism rounded-2xl p-7 flex flex-col items-center text-center hover-lift interactive-card">
            {service.icon}
            <h2 className="text-lg font-bold text-white mt-3 mb-2">{service.title}</h2>
            <p className="text-gray-300 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
    {/* How I Work */}
    <div className="max-w-2xl  w-full mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-10 text-center">How I Work</h2>
      <div className="flex flex-col gap-6">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-row items-center w-full">
            {/* Step circle */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-300 text-white text-2xl font-bold shadow-lg border-4 border-gray-900 mr-6 neumorphism-button hover-glow">
              {i + 1}
            </div>
            {/* Card */}
            <div className="glass-card rounded-2xl w-full p-6 text-left hover-border-glow">
              <div className="text-white font-bold text-lg mb-1">{step.title}</div>
              <div className="text-gray-300 text-sm">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/contact" className="inline-block neumorphism-button text-white font-bold py-3 px-8 rounded-full text-lg hover-glow">Get in Touch</Link>
      </div>
    </div>
  </section>
);

export default Services; 