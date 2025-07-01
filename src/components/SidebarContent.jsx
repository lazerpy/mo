import React, { useEffect, useState } from "react";

const skills = [
  { name: "HTML", percent: 98 },
  { name: "CSS", percent: 95 },
  { name: "JavaScript", percent: 92 },
  { name: "React", percent: 90 },
  { name: "Tailwind CSS", percent: 88 },
  { name: "Git", percent: 85 },
  { name: "UI/UX Design", percent: 80 },
];

const SidebarContent = () => {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    let animationFrame;
    const startTimestamps = Array(skills.length).fill(null);
    const duration = 1200; // ms for full animation

    function animate(now) {
      setProgress((prev) => {
        return prev.map((val, idx) => {
          if (val >= skills[idx].percent) return skills[idx].percent;
          if (!startTimestamps[idx]) startTimestamps[idx] = now;
          const elapsed = now - startTimestamps[idx];
          const next = Math.min(
            Math.round((elapsed / duration) * skills[idx].percent),
            skills[idx].percent
          );
          return next;
        });
      });
      if (progress.some((val, idx) => val < skills[idx].percent)) {
        animationFrame = requestAnimationFrame(animate);
      }
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-4 sm:p-6 neumorphism">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 tracking-wide">Skills</h3>
        <ul className="space-y-3 sm:space-y-4 md:space-y-5">
          {skills.map((skill, i) => (
            <li key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                <span className="text-gray-400 text-xs sm:text-sm">{progress[i]}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 sm:h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress[i]}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarContent; 