"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hybrid Logic: Scrolls on Home, Redirects on other pages
  const handleLocationClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.getElementById("location");
      if (element) {
        const offset = 96;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      router.push("/#location");
    }
  };

  // Helper to determine if a link is "Active"
  const isActive = (path) => pathname === path;

  // Primary Navigation Pages
  const navItems = [
    { name: "Home", href: "/" },
    { name: "History", href: "/history" },
    { name: "Festivals", href: "/festivals" },
    { name: "Seva List", href: "/sevalist" },
  ];

  // Shared Style Logic
  // Pages get active states. Location (Utility) only gets the inactive style.
  const getLinkStyle = (path, isMobile = false) => {
    const baseStyle =
      "font-semibold transition-colors uppercase tracking-widest cursor-pointer ";
    const mobileStyle = isMobile ? "text-2xl py-4 " : "text-xs lg:text-sm ";

    // Active State (Gradient + Underline)
    const activeStyle =
      "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 underline underline-offset-4 decoration-orange-500";

    // Inactive/Standard State (White -> Gradient Hover)
    const inactiveStyle =
      "text-white/90 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200";

    return (
      baseStyle + mobileStyle + (isActive(path) ? activeStyle : inactiveStyle)
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 pt-8 pb-4 md:pb-6 transition-all duration-300 h-24 ${
          isScrolled ? "backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent h-24 md:h-32 -z-10 pointer-events-none transition-opacity duration-500 opacity-100" />

        <div className="mx-auto px-6 md:px-8 lg:px-16 flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="text-white font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase drop-shadow-lg text-lg sm:text-2xl md:text-xl lg:text-3xl shrink-0"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 font-extrabold">
              Narahari
            </span>{" "}
            Parvatha
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs lg:text-sm">
            {/* Render Pages (With Active States) */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={getLinkStyle(item.href)}
              >
                {item.name}
              </Link>
            ))}

            {/* Render Location (Utility - No Active State) */}
            <a
              href="#location"
              onClick={handleLocationClick}
              className={`font-semibold transition-colors uppercase tracking-widest cursor-pointer text-xs lg:text-sm text-white/90 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200`}
            >
              Location
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white hover:text-orange-500 transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/95 z-60 flex flex-col items-center justify-center transition-transform duration-500 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={getLinkStyle(item.href, true)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Location Link */}
          <a
            href="#location"
            onClick={handleLocationClick}
            className="font-semibold transition-colors uppercase tracking-widest cursor-pointer text-2xl py-4 text-white/90 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200"
          >
            Location
          </a>
        </div>
      </div>
    </>
  );
}
