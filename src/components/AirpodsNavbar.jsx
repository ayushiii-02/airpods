import React from "react";

const navItems = [
  { label: "AirPods", icon: "src/assets/logo1.svg" },
  { label: "AirPods Pro", icon: "src/assets/logo2.svg" },
  { label: "AirPods Max", icon: "src/assets/logo3.svg" },
  { label: "Compare", icon: "src/assets/logo4.svg" },
  { label: "Apple Music", icon: "src/assets/logo5.svg" },
];


const AirpodsNavbar = () => {
  return (
    <div className="flex justify-center gap-12 py-6 bg-[#f9f9fb]">
      {navItems.map((item) => (
        <div key={item.label} className="flex flex-col items-center text-sm font-medium text-gray-800 hover:text-black cursor-pointer">
          <img src={item.icon} alt={item.label} className="w-8 h-8 mb-1" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default AirpodsNavbar;