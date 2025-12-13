"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CircleArrowRight } from "lucide-react";

export default function FestivalsComponent() {
  const festivalList = [
    "Aati Amavasye Teerthotsava (Karkaataka Amavasye)",
    "Sona Amavasye Teerthotsava (Simha Maasa)",
    "Shivarathri Jagarana",
    "Nagara Panchami",
    "Ganesha Chaturthi",
  ];

  return (
    <section
      id="festivals"
      className="pb-16 pt-4 bg-black text-white border-t border-white/5"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 inline-block">
          Festivals
        </h2>
        <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            Narahari Parvatha comes alive during sacred occasions. Devotees from
            across the district gather here to perform the holy{" "}
            <span className="text-orange-400">Teerthasnana</span> (Holy Bath) in
            the four ponds, believing it cures ailments and washes away sins.
          </p>

          <ul className="space-y-4">
            {festivalList.map((festival, index) => (
              <li
                key={index}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <CircleArrowRight
                  size={24}
                  className="text-orange-400 mt-1 group-hover:text-yellow-300 transition-colors"
                />
                <span className="text-gray-200 font-medium tracking-wide group-hover:text-white transition-colors">
                  {festival}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Link
              href="/festivals"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white hover:text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200"
            >
              Learn More
              <ArrowRight
                size={16}
                className="group-hover:text-yellow-200 bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200"
              />
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-900 border border-white/10 shadow-2xl cursor-pointer">
          <Image
            src="/images/festival-preview.jpg"
            alt="Festivals at Narahari Parvatha"
            fill
            className="object-cover "
          />
        </div>
      </div>
    </section>
  );
}
