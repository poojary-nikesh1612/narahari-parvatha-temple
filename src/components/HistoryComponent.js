"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HistoryComponent() {
  return (
    <section id="history" className="pb-16 pt-4 bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200 inline-block">
          History
        </h2>
        <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-900 border border-white/10 shadow-2xl cursor-pointer">
          <Image
            src="/images/temple-image2.jpg"
            alt="Ancient Narahari Parvatha Temple"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            Narahari Sadashiva Temple is situated on the top of Narahari Hill
            near Melkar which is 30+ Kms from Mangalore city and 4 Kms from BC
            Road, Bantwal. It is on the National Highway connecting Mangalore &
            Bangalore. Narahari Sadashiva Temple is dedicated to Lord Shiva and
            popularly known as “Kailasa of the Earth”. It is located at a height
            of about 1000 Feet above the sea level and one needs to climb 333
            steps to reach this temple at the top of the hill.
          </p>

          <p className="text-gray-500 italic border-l border-orange-500 pl-4">
            "Discover the Sthala Purana, the significance of the 333 steps, and
            the divine intervention of Lord Krishna."
          </p>

          <div className="pt-2">
            <Link
              href="/history"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white hover:text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200"
            >
              Read More
              <ArrowRight
                size={16}
                className="group-hover:text-yellow-200 bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
