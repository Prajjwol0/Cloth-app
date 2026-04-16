import { useState } from "react";
import { ShoppingBag, User, Menu, X } from "lucide-react";

const navLinks = [
  "COLLECTIONS",
  "MENSWEAR",
  "WOMENSWEAR",
  "ATELIER",
  "JOURNAL",
];

export default function Navbar() {
  const [active, setActive] = useState("COLLECTIONS");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-8 py-6 bg-[#E5E5E5] border-b border-gray-300">
        {/* Logo */}
        <div className="text-lg text-sm md:flex tracking-[0.3em] font-medium font-serif">
          THE ARCHIVE
        </div>

        {/* Nav Links  */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`text-sm tracking-[0.2em] transition-all pb-1
                ${
                  active === link
                    ? "border-b border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* icon and haumburger */}
        <div className="flex items-center gap-6 text-gray-700">
            <input type="text" placeholder="search" className="w-[200px] sm:w-[200px]
            group-hover:w-[300px] transition-all duration-300 rounded-full 
            border-black-300 px-2 py-1 focus:outline-double focus:boder-8 focus:border-organge-400 "/>
          <ShoppingBag
            size={18}
            strokeWidth={1}
            className="cursor-pointer hover:text-black"
          />
          <User
            size={18}
            strokeWidth={1}
            className="cursor-pointer hover:text-black"
          />

          {/*  mobile only */}
          <button
            className="md:hidden cursor-pointer hover:text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1} />
            ) : (
              <Menu size={20} strokeWidth={1} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown r */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#E5E5E5] border-b border-gray-300 flex flex-col px-8 py-4 gap-5 z-50">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
              className={`text-sm tracking-[0.2em] text-left transition-all
                ${active === link ? "text-black font-medium" : "text-gray-500 hover:text-black"}`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
