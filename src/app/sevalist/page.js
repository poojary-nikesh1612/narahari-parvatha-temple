import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Seva List & Prices",
  description:
    "Complete list of Sevas at Narahari Sadashiva Temple. Check prices for Rudrabhisheka, Alankara, and Naga Tambila. Plan your offerings.",
  keywords: [
    "Narahari Temple Seva List",
    "Rudrabhisheka Cost",
    "Naga Tambila Bantwal",
    "Temple Donations",
    "Pooja Timings Narahari",
  ],
};

export default function SevaPage() {
  const sevas = [
    { name: "Rudrabhisheka", price: "₹ 100" },
    { name: "Panchakajjaya", price: "₹ 50" },
    { name: "Bilvarchana", price: "₹ 20" },
    { name: "Karthika Pooja", price: "₹ 30" },
    { name: "Naga Tambila", price: "₹ 150" },
    { name: "Hoovina Pooje", price: "₹ 50" },
    { name: "Visesha Alankara", price: "₹ 500" },
    { name: "Annadana Seva", price: "Any Amount" },
  ];

  return (
    <main className="bg-black min-h-screen text-white pt-0 pb-20">
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <Image
          src="/images/temple-image.png"
          alt="Seva List"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <div className="absolute bottom-10 left-0 w-full text-center px-4">
          <Link href="/sevalist">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 drop-shadow-lg">
              Seva List
            </h1>
          </Link>
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center text-gray-300 text-lg md:text-xl leading-relaxed">
        <p>
          Devotees can perform various Sevas to seek the blessings of the Lord.
          Below is the list of daily and special Sevas available at the temple
          counter.
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-4 md:px-6 mb-20">
        <div className="overflow-hidden rounded-lg border border-gray-800 shadow-xl bg-gray-900/30">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 text-orange-400 border-b border-gray-700 text-lg">
                <th className="p-5 md:p-6 font-bold uppercase tracking-wide w-[70%]">
                  Seva Name
                </th>
                <th className="p-5 md:p-6 font-bold uppercase tracking-wide w-[30%] text-right">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300">
              {sevas.map((seva, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-800/50 transition-colors duration-200"
                >
                  <td className="p-5 md:p-6 font-semibold text-white text-lg">
                    {seva.name}
                  </td>
                  <td className="p-5 md:p-6 font-bold text-orange-200 text-right text-lg">
                    {seva.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-6 text-center italic">
          * Prices are subject to change. Please verify at the temple counter.
        </p>
      </section>
    </main>
  );
}
