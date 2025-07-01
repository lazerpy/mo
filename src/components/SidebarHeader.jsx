import React from "react";
import avatar from "../assets/profile.jpg";

const SidebarHeader = () => {
  return (
    <div className="neumorphism p-4 sm:p-6 rounded-2xl hover-lift interactive-card">
      <div className="flex flex-row items-center gap-4 sm:gap-6">
        <div className="relative">
          <img
            src={avatar} // Replace with your image
            alt="Profile"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full border-4 border-gray-700 shadow-lg object-cover hover-glow float"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1 tracking-wide">Mohamet</h1>
          <h2 className="text-sm  sm:text-base md:text-lg font-semilight text-gray-400 tracking-widest uppercase">Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader; 