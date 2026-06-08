import React from "react";

const Header: React.FC = () => (
  <div className="bg-moss-100 flex items-center gap-2 border-b border-moss-900 pb-3">
    <div className="w-6 h-6 rounded bg-transparent flex items-center justify-center">
      <img className=" rounded-lg" src="/icons/icon48.png" alt="logo" />
    </div>
    <div>
      <h1 className="text-moss-900 text-sm font-bold tracking-widest">MOSS</h1>
      <p className="text-moss-600 text-[10px] tracking-wide">Modular Override Script System</p>
    </div>
  </div>
);

export default Header;
