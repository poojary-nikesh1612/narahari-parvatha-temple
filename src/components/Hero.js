"use client";
import { ArrowUpRight, BellRing, Clock, Dot, MapPinned } from "lucide-react";

export default function Hero() {
  const handleScrollToHistory = () => {
    const element = document.getElementById("history");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/temple-imagex.png"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-100 opacity-100"
      >
        <source src="/temple-cinematic3.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-black via-black/50 to-black/30 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 drop-shadow-2xl leading-tight">
          Sri Narahari Parvatha Sadashiva Temple
        </h1>

        <p className="text-base font-bold md:text-xl lg:text-2xl mb-10 max-w-3xl drop-shadow-md text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200">
          Bantwal Taluk, Dakshina Kannada District
        </p>

        <div className="flex flex-col w-[80%] md:w-auto md:flex-row gap-4 md:gap-6 ">
          <button
            onClick={handleScrollToHistory}
            className="group  relative flex items-center justify-center gap-2 px-8 py-4 overflow-hidden rounded-full cursor-pointer transition-all transform hover:scale-105
            bg-linear-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500
            "
          >
            <span className="relative z-10 font-bold tracking-wide uppercase text-white text-sm md:text-base">
              Explore
            </span>
            <ArrowUpRight className="text-white relative z-10" />
          </button>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Sri+Narahari+Parvatha+Sadashiva+Temple+Bantwal"
            target="_blank"
            rel="noopener noreferrer"
            className="group  relative flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all transform hover:scale-105
            bg-white hover:bg-gray-100 border-2 border-transparent hover:border-yellow-400"
          >
            <MapPinned size={24} className="text-orange-600" />

            <span className="relative z-10 font-bold tracking-wide uppercase text-sm md:text-base text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-yellow-600">
              Visit
            </span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-20 gap-8 md:gap-16 w-full animate-fade-in-up">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="text-orange-400" size={18} />
              <span className="font-bold uppercase tracking-[0.15em] text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
                Open Hours
              </span>
            </div>
            <p className="text-white/90 font-medium tracking-wide text-sm md:text-base">
              07:00 AM - 07:00 PM
            </p>
          </div>

          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-50"></div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 mb-1">
              <BellRing className="text-orange-400" size={18} />
              <span className="font-bold uppercase tracking-[0.15em] text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
                Pooja Timings
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/90 font-medium tracking-wide text-sm md:text-base">
              <span>08:30 AM</span>
              <Dot size={20} className="text-yellow-400" />
              <span>12:30 PM</span>
              <Dot size={20} className="text-yellow-400" />
              <span>06:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
