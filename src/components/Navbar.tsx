import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "../data/content";
import { cn } from "../utils/cn";
import trustLogo from "../assets/trust_logo.jpg";

export const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty('--header-height', `${navRef.current.offsetHeight}px`);
      }
    };

    // Update on mount and when nav layout might change
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [scrolled, isOpen]);

  return (
    <nav ref={navRef} className={cn(
      "fixed w-full z-[70] transition-all duration-300 top-12 md:top-8",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full shadow-lg border-2 border-saffron/30 bg-white">
              <img 
                src={trustLogo} 
                alt="SRGF Sri Jagannath Trust Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className={cn(
              "font-bold text-xl tracking-tight transition-colors",
              scrolled ? "text-maroon" : "text-white drop-shadow-md"
            )}>
              SRGF Sri Jagannath Trust
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber",
                  scrolled ? "text-slate-dark" : "text-white"
                )}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#donate"
              className="bg-maroon text-ivory px-5 py-2 rounded-full text-sm font-semibold hover:bg-vermilion transition-all shadow-lg hover:shadow-maroon/20"
            >
              Donate
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                scrolled ? "text-maroon" : "text-white"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-screen border-t border-slate-100" : "max-h-0"
      )}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-dark hover:bg-ivory hover:text-maroon rounded-lg transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="#donate"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-maroon text-ivory px-4 py-3 rounded-xl font-semibold hover:bg-vermilion transition-colors shadow-lg"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
