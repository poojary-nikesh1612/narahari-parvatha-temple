import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Seva List & Prices | Narahari Parvatha Temple",
  description:
    "Complete list of Sevas at Narahari Sadashiva Temple. Check prices for Rudrabhisheka, Gana Homa, and special offerings.",
  keywords: [
    "Narahari Temple Seva List",
    "Rudrabhisheka Cost",
    "Gana Homa Price",
    "Temple Donations",
    "Pooja Timings Narahari",
  ],
};

export default function SevaPage() {
  // Data separated into sections
  const ganeshaSevas = [
    { name: "1 Kayi Gana Homa", price: "₹ 301.00" },
    { name: "Panchakajjaya", price: "₹ 15.00" },
    { name: "Pavamana Suktha Abhisheka Pooje", price: "₹ 80.00" },
    { name: "Ganapathi Atharvashirsha Parayana", price: "₹ 60.00" },
    { name: "Astottara Shatanama- Dhoorvaarchane", price: "₹ 60.00" },
    { name: "Sarva Seve", price: "₹ 300.00" },
  ];

  const shivaSevas = [
    { name: "Hoovina Pooje", price: "₹ 80.00" },
    { name: "Karthika Pooje", price: "₹ 80.00" },
    { name: "Rudrabhisheka", price: "₹ 60.00" },
    { name: "Shiva Pooje", price: "₹ 60.00" },
    { name: "Karpurarathi", price: "₹ 15.00" },
    { name: "kumkumarchane", price: "₹ 60.00" },
    { name: "Bilvapatra Archane", price: "₹ 60.00" },
    { name: "Shiva Sahasranamarchane", price: "₹ 80.00" },
    { name: "Hagga Seve Kanike", price: "₹ 25.00" },
    { name: "Kalasha Snana", price: "₹ 40.00" },
    { name: "Naga Tambila", price: "₹ 150.00" },
    { name: "Sarva Seve", price: "₹ 300.00" },
    { name: "Ekadasha Rudrabhisheka", price: "Enquire" },
    { name: "Ranga Pooje", price: "Enquire" },
  ];

  const otherSevas = [
    { name: "Shri Kshetra Parichaya (Book)", price: "₹ 50.00" },
    { name: "Theertha Bottle", price: "₹ 20.00" },
    { name: "Shashwatha Pooje", price: "₹ 1005.00" },
  ];

  // Reusable Table Component to keep code simple
  const SevaTable = ({ title, data }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-orange-400 mb-4 px-2 uppercase tracking-wide border-l-4 border-orange-500">
        {title}
      </h2>
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
          <tbody className="divide-y divide-gray-800 text-gray-300 cursor-pointer">
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-800/50 transition-colors duration-200"
              >
                <td className="p-5 md:p-6 font-semibold text-white text-lg">
                  {item.name}
                </td>
                <td className="p-5 md:p-6 font-bold text-orange-200 text-right text-lg">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <main className="bg-black min-h-screen text-white pt-0 pb-20">
      {/* 1. HERO SECTION (Unchanged) */}
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

      {/* 2. INTRO TEXT */}
      <section className="max-w-4xl mx-auto px-6 pb-12 text-center text-gray-300 text-lg md:text-xl leading-relaxed">
        <p>
          Devotees can perform various Sevas to seek the blessings of the Lord.
          Below is the categorized list of daily and special Sevas.
        </p>
      </section>

      {/* 3. SEVA TABLES (Split into Sections) */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 mb-20">
        <SevaTable title="Sri Mahaganapati Sannidhi" data={ganeshaSevas} />
        <SevaTable title="Sri Sadashiva Sannidhi" data={shivaSevas} />
        <SevaTable title="Special Offerings & Books" data={otherSevas} />

        <p className="text-sm text-gray-500 mt-6 text-center italic">
          * Prices are subject to change. Please verify at the temple counter.
        </p>
      </section>
    </main>
  );
}
