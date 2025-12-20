"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="w-auto px-6">
        <div className="px-0 md:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 justify-between">
          {/* COLUMN 1: Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-[0.15em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
                Narahari
              </span>
              <span className="text-2xl font-bold tracking-[0.15em] uppercase text-white ml-2">
                Parvatha
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              A digital initiative to promote the heritage, culture, and divine
              history of the Sadashiva Temple, Bantwal.
            </p>
          </div>

          {/* COLUMN 2: Image Credits */}
          <div className="md:ml-20">
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-6">
              Image Credits
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs text-justify">
              Images courtesy of their respective owners and local news
              channels. This content is used solely for academic and educational
              purposes.
            </p>
          </div>

          {/* COLUMN 3: Quick Links (UPDATED) */}
          <div className="md:text-right">
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 inline-block text-left md:text-right">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/festivals"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Festivals
                </Link>
              </li>
              <li>
                <Link
                  href="/sevalist"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Seva List
                </Link>
              </li>
              <li>
                {/* Points to Home Page anchor so it works from any page */}
                <Link
                  href="/#location"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="px-0 md:px-6 lg:px-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs uppercase tracking-wider">
            © {currentYear} Developer. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs ">
            Designed & Developed with ❤️ as part of Social Outreach Program
          </p>
        </div>
      </div>
    </footer>
  );
}
