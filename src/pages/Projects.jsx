import React from "react";
import { FaReact, FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";
import portfolio from "../assets/2.png";
import ecommerce from "../assets/1.png";

const projects = [
  {
    title: "Cyber Security Website",
    subtitle: "Cyber Security Website built with React & Tailwind",
    image: portfolio,
    tech: ["React", "TailwindCSS", "Vite"],
    techIcons: [<FaReact />, <SiTailwindcss />, <FaJs />],
    badges: ["Responsive", "Fast", "Modern UI"],
    role: "Frontend Developer",
    overview: "A Cyber Security Website built with React & Tailwind. It is a website that allows you to scan your website for vulnerabilities and security issues.",
    highlights: [
      "⚡ Blazing fast load times with Vite",
      "📱 Fully responsive for all devices",
      "🎨 Deep custom design with animations",
      "🌙 Scan simulator support",
    ],
    github: "https://github.com/lazerpy/cyber",
    live: "https://csguard.vercel.app/",
  },
  {
    title: "E-Commerce Store",
    subtitle: "Full-featured online shop UI",
    image: ecommerce,
    tech: ["React", "Redux", "TailwindCSS"],
    techIcons: [<FaReact />, <SiRedux />, <SiTailwindcss />],
    badges: ["Cart", "Animations", "Filter"],
    role: "Frontend Developer",
    overview: "A modern e-commerce UI with product filtering, cart, and smooth animations.",
    highlights: [
      "🛒 Cart & checkout flow",
      "🔍 Product filtering & search",
      "💡 Animated transitions",
      "⚙️ Modular component structure",
    ],
    github: "https://github.com/lazerpy/foreverSite",
    live: "https://forever-site-ruby.vercel.app/",
  },
  {
    title: "Task Manager ",
    subtitle: "Sleek Ul Task Manager for Freelancers , managers , Studens, etc",
    image: "https://pin.it/1sQA1RMkT",
    tech: ["Html", "Css", "JavaScrip"],
    techIcons: [<FaCss />, <FaHtml />, <FaJavascript />, <SiTailwindcss />],
    badges: ["Markdown", "Auth", "SEO"],
    role: "Frontend Developer",
    overview: "A web app to create, organize, and track tasks efficiently. Helps users manage daily goals, deadlines, and productivity..",
    highlights: [
    

"🧠 Smart Task Sorting",

"📦 CRUD Functional",

"🔔 Deadline Reminders"

"💾 Local/Cloud Storage",
    ],
    github: "https://github.com/lazerpy/Task-manager-",
    live: "https://lazerpy.github.io/Task-manager-/",
  },
];

const Projects = () => (
  <section id="projects" className="w-full h-full flex flex-col flex-1 min-h-full glass rounded-3xl shadow-2xl p-4 sm:p-8 md:p-14 m-0">
    <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-10">Projects</h1>
    <div className="flex flex-col gap-16">
      {projects.map((project, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row neumorphism rounded-3xl overflow-hidden hover-lift interactive-card p-4 md:p-8 gap-6 md:gap-10 mb-2 md:mb-0"
          style={{ minHeight: '340px' }}
        >
          {/* Image/Mockup */}
          <div className="md:w-2/5 flex items-center justify-center glass-card rounded-2xl p-4 md:p-6 hover-glow group-hover:scale-105 transition-transform duration-300">
            <img src={project.image} alt={project.title + ' mockup'} className="rounded-xl w-full h-auto max-h-72 object-cover shadow-xl" />
          </div>
          
          {/* Content */}
          <div className="flex-1 flex flex-col gap-4 p-2 md:p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm hover-glow">{t}</span>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
            <h3 className="text-lg text-blue-300 font-semibold mb-2">{project.subtitle}</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.badges.map((badge, idx) => (
                <span key={idx} className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded shadow hover-border-glow">{badge}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <div className="flex-1">
                <div className="text-gray-400 text-sm mb-1"><strong>Role:</strong> {project.role}</div>
                <div className="text-gray-300 text-base mb-2">{project.overview}</div>
                <ul className="list-disc list-inside text-gray-300 text-sm mb-2 pl-4">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="mb-1 last:mb-0">{h}</li>
                  ))}
                </ul>
                <div className="flex gap-3 text-2xl text-blue-400 mb-2 mt-2">
                  {project.techIcons.map((icon, idx) => (
                    <span key={idx} className="hover-glow">{icon}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:underline font-semibold hover-glow"><FaExternalLinkAlt /> Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-300 hover:text-white font-semibold hover-glow"><FaGithub /> GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Call to Action */}
    <div className="mt-20 neumorphism rounded-xl p-8 text-center hover-lift">
      <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">Want to work with me?</h2>
      <p className="text-gray-200 mb-4">I'm open to freelance projects, collaborations, or full-time roles. Let's build something amazing together!</p>
      <Link to="/contact" className="inline-block neumorphism-button text-white font-bold py-3 px-8 rounded-full text-lg hover-glow">Get in Touch</Link>
    </div>
  </section>
);

export default Projects; 
