"use client";
import { MapPin, Phone, Bus, Train, Plane } from "lucide-react";

export default function LocationComponent() {
  return (
    <section
      id="location"
      className="py-20 bg-black text-white border-t border-white/5"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 inline-block">
          Location
        </h2>
        <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="w-full h-125 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.097901634502!2d75.05593429999999!3d12.852198200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a6a177e39c65%3A0xd2ea454573ace32a!2sNarahari%20Guddada%20Sri%20Sadashiva%20Gudi!5e1!3m2!1sen!2sin!4v1765546055892!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=" opacity-100 "
          ></iframe>
        </div>
        <div className="space-y-8">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white border-l-4 border-orange-500 pl-4">
              How to Reach?
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20">
                  <Bus className="text-orange-400" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    Nearest Bus Station
                  </p>
                  <p className="text-lg font-medium text-white">
                    B.C Road / Bantwal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20">
                  <Train className="text-orange-400" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    Nearest Railway Station
                  </p>
                  <p className="text-lg font-medium text-white">
                    B.C Road (Bantwal)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20">
                  <Plane className="text-orange-400" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    Nearest Airport
                  </p>
                  <p className="text-lg font-medium text-white">
                    Mangalore International Airport (IXE)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white border-l-4 border-orange-500 pl-4">
              Contact Details
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-400 mt-1 shrink-0" size={24} />
                <p className="text-gray-300 leading-relaxed">
                  Shree Narahari Parvata Sadashiva Temple,
                  <br />
                  Panemangalore, Dakshina Kannada District,
                  <br />
                  Karnataka State, INDIA.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-orange-400 mt-1 shrink-0" size={24} />
                <div className="space-y-1">
                  <a
                    href="tel:08255280604"
                    className="block text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Tel: +91 08255 280 604
                  </a>
                  <a
                    href="tel:9481391204"
                    className="block text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Mob: +91 8277125877
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
