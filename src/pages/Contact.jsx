import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center glass rounded-3xl shadow-2xl p-4 sm:p-8 md:p-14">
      <div className="max-w-2xl w-full glass-card rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-2 flex items-center gap-2">
          Let's Talk <span role="img" aria-label="wave">👋</span>
        </h1>
        <p className="text-gray-300 mb-6 text-base sm:text-lg">
          Got a project idea, collaboration offer, or just want to connect? I'd love to hear from you. Fill out the form below or reach out via any platform.
        </p>
        {/* Contact Methods */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Contact Methods</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors hover-glow">
              <FaEnvelope className="text-blue-400 text-xl" />
              <a href="mailto:wizzdev@example.com" className="hover:underline">wizzdev@example.com</a>
            </li>
            <li className="flex items-center gap-3 text-gray-200 hover:text-gray-100 transition-colors hover-glow">
              <FaGithub className="text-gray-300 text-xl" />
              <a href="https://github.com/wizz" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/wizz</a>
            </li>
            <li className="flex items-center gap-3 text-gray-200 hover:text-blue-300 transition-colors hover-glow">
              <FaLinkedin className="text-blue-500 text-xl" />
              <a href="https://linkedin.com/in/wizz" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/wizz</a>
            </li>
          </ul>
        </div>
        {/* Contact Form */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Contact Form</h2>
          {submitted && (
            <div className="mb-4 p-3 rounded glass-card text-green-300 border border-green-600 text-center hover-glow">
              Thank you for reaching out! I'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg glass-card text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition hover-border-glow"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg glass-card text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition hover-border-glow"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg glass-card text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition resize-none hover-border-glow"
            />
            <button
              type="submit"
              className="w-full neumorphism-button text-white font-bold py-3 rounded-lg text-lg hover-glow"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Professional Call to Action */}
        <div className=" rounded-xl p-5 mt-6 text-center hover-lift">
          <h3 className="text-lg font-bold text-white mb-1">Let's Build Something Awesome</h3>
          <p className="text-gray-300 text-sm">
            Whether it's a website, a UI fix, or a full front-end project — I'm here to help. Just drop a message or connect via your favorite platform!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 