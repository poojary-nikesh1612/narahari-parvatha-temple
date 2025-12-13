"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronLeft } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSectionRef = useRef("hero");

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();

    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const offset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
      activeSectionRef.current = id;
      window.history.pushState(null, null, `#${id}`);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      const sections = ["hero", "history", "festivals", "location"];
      let current = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      if (current !== activeSectionRef.current) {
        activeSectionRef.current = current;
        setActiveSection(current);

        if (typeof window !== "undefined") {
          window.history.replaceState(null, null, `#${current}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (id, isMobile = false) => {
    const baseStyle =
      "font-semibold transition-colors uppercase tracking-widest cursor-pointer ";
    const mobileStyle = isMobile ? "text-2xl py-4 " : "text-xs md:text-sm ";

    return activeSection === id
      ? baseStyle +
          mobileStyle +
          "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 underline underline-offset-4 decoration-orange-500"
      : baseStyle +
          mobileStyle +
          "text-white/90 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 pt-8 pb-4 md:pb-6 transition-all duration-300 h-24 ${
          isScrolled ? "backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/50 to-transparent h-24 md:h-32 -z-10 pointer-events-none transition-opacity duration-500 opacity-100" />

        <div className="mx-auto px-6 md:px-16 flex justify-between items-center">
          <Link
            href="/"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className="text-white font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase drop-shadow-lg text-lg sm:text-2xl md:text-3xl"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200 font-extrabold">
              Narahari
            </span>{" "}
            Parvatha
          </Link>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          {isHomePage ? (
            <div className="hidden md:flex items-center space-x-8 px-8 py-3">
              <Link
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, "hero")}
                className={getLinkClass("hero")}
              >
                Home
              </Link>
              <Link
                href="#history"
                onClick={(e) => handleSmoothScroll(e, "history")}
                className={getLinkClass("history")}
              >
                History
              </Link>

              <Link
                href="#festivals"
                onClick={(e) => handleSmoothScroll(e, "festivals")}
                className={getLinkClass("festivals")}
              >
                Festivals
              </Link>
              <Link
                href="#location"
                onClick={(e) => handleSmoothScroll(e, "location")}
                className={getLinkClass("location")}
              >
                Location
              </Link>
            </div>
          ) : (
            <Link
              href="/"
              className="flex  items-center gap-2 font-bold text-gray-300 hover:text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200 group"
            >
              <ChevronLeft
                size={20}
                className="group-hover:text-yellow-200 transition-transform"
              />
              <span className="hidden font-medium text-sm md:text-base md:inline-block">
                Back to Home
              </span>
            </Link>
          )}

          {/* MOBILE HAMBURGER BUTTON (Visible only on Mobile) */}

          {isHomePage && (
            <button
              className="md:hidden text-white hover:text-orange-500 transition-colors z-50"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </nav>
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
          <Link
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className={getLinkClass("hero", true)}
          >
            Home
          </Link>
          <Link
            href="#history"
            onClick={(e) => handleSmoothScroll(e, "history")}
            className={getLinkClass("history", true)}
          >
            History
          </Link>
          <Link
            href="#festivals"
            onClick={(e) => handleSmoothScroll(e, "festivals")}
            className={getLinkClass("festivals", true)}
          >
            Festivals
          </Link>
          <Link
            href="#location"
            onClick={(e) => handleSmoothScroll(e, "location")}
            className={getLinkClass("location", true)}
          >
            Location
          </Link>
        </div>
      </div>
    </>
  );
}
