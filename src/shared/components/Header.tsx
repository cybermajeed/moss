import React from "react";

const Header: React.FC = () => (
  <div className="flex items-center gap-2 border-b border-moss-900 pb-3">
    <div className="w-6 h-6 rounded bg-moss-500 flex items-center justify-center">
      <span className="text-moss-950 text-xs font-bold">M</span>
    </div>
    <div>
      <h1 className="text-moss-50 text-sm font-bold tracking-widest">MOSS</h1>
      <p className="text-moss-500 text-[10px] tracking-wide">Modular Override Script System</p>
    </div>
  </div>
);

export default Header;
