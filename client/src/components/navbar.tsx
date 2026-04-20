import { useState } from "react";
import { ShoppingBag, User, Menu, X, } from "lucide-react";

// Updated navLinks to include href paths for routing
const navLinks = [
  { name: "COLLECTIONS", href: "/collections" },
  { name: "MENSWEAR", href: "/menswear" },
  { name: "WOMENSWEAR", href: "/womenswear" },
  { name: "ATELIER", href: "/atelier" },
  { name: "JOURNAL", href: "/journal" },
];

export default function Navbar() {
  const [active, setActive] = useState("COLLECTIONS");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-8 py-6 bg-[#E5E5E5] border-b border-gray-300">
       
        <a
          href="/"
          className="text-lg md:flex tracking-[0.3em] font-medium font-serif"
        >
          THE ARCHIVE
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`text-sm tracking-[0.2em] transition-all pb-1 border-b-2
                ${
                  active === link.name
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons and Search */}
        <div className="flex items-center gap-6 text-gray-700">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-150px focus:w-200px transition-all duration-300 rounded-full border border-gray-300 px-4 py-1 text-sm focus:outline-none focus:border-orange-400 bg-transparent"
            />
          </div>

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

          {/* Mobile Hamburger */}
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

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#E5E5E5] border-b border-gray-300 flex flex-col px-8 py-4 gap-5 z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.name);
                setMenuOpen(false);
              }}
              className={`text-sm tracking-[0.2em] transition-all
                ${active === link.name ? "text-black font-medium" : "text-gray-500 hover:text-black"}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
