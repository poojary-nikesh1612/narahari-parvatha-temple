import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Aati Amavasye Teerthasnana & Festivals",
  description:
    "Experience the divine Aati Amavasye Teerthasnana at Narahari Parvatha. Information on Sona Amavasye, Jagarana, Nagara Panchami, and Ganesh Chaturthi celebrations.",
  keywords: [
    "Aati Amavasye Narahari Parvatha",
    "Teerthasnana Mangalore",
    "Sona Amavasye",
    "Shivarathri Bantwal",
    "Temple Fests Karnataka",
  ],
  openGraph: {
    images: ["/images/festival-preview.jpg"],
  },
};

export default function FestivalsPage() {
  const festivals = [
    {
      name: "Aati Amavasye Teerthotsava",
      subtitle: "Karkaataka Amavasye (Usually July/August)",
      desc: "This is perhaps the most significant and crowded festival at Narahari Parvatha. Occurring during the heavy monsoon, it is widely believed that on this specific day, the waters of the ponds acquire potent medicinal properties due to divine grace and the mixing of various herbs washed down by the rains. Thousands of devotees brave the weather to take a holy dip (Teerthasnana) in the chilling waters before dawn to ward off diseases and sins.",
      image: "/images/x.jpg",
    },
    {
      name: "Sona Amavasye Teerthotsava",
      subtitle: "Simha Maasa (Usually August/September)",
      desc: "Following Aati, this is another highly auspicious New Moon day occurring in the holy month of Shravana (Sona). Devotees gather again for the sacred Teerthasnana in the four ponds. Special prayers and offerings are made at the Sadashiva Temple on the summit. It is a day dedicated to spiritual purification and seeking the blessings of Lord Shiva and Lord Vishnu.",
      image: "/images/y.jpg",
    },
    {
      name: "Shivarathri Jagarana",
      subtitle: "The Great Night of Shiva (Usually February/March)",
      desc: "As a temple dedicated to Lord Sadashiva, Maha Shivarathri is celebrated with immense devotion. Devotees observe strict fasting and many undertake the climb to spend the entire night atop the hill in 'Jagarana' (vigil). The atmosphere is filled with the continuous chanting of 'Om Namah Shivaya', bhajans, and special Abhishekas performed to the deity throughout the night.",
      image: "/images/shivarathri.jpg",
    },
    {
      name: "Nagara Panchami",
      subtitle: "Worship of Snake Deities (Usually July/August)",
      desc: "Given the hill's ancient, natural setting, Nagara Panchami holds special importance. This day is dedicated to the worship of Naga Devata (Serpent Gods). Devotees offer milk, gejjevastra (cotton garland), and prayers to the Naga stones located in the temple precincts, seeking protection for their families and freedom from Naga Dosha.",
      image: "/images/nagarapanchami.jpg",
    },
    {
      name: "Ganesha Chaturthi",
      subtitle: "Birthday of Lord Ganesha (Usually August/September)",
      desc: "Before any major undertaking, Lord Ganesha is worshipped first. On the occasion of Ganesha Chaturthi, special rituals are conducted at the hill temple to invoke the blessings of Vighnaharta, the remover of obstacles. The festival is marked by special decorations, Ganahoma (fire ritual), and distributing Prasadam to the visiting pilgrims.",
      image: "/images/z.jpg",
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white pt-0 pb-20">
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <Image
          src="/images/temple-image.png"
          alt="Narahari Parvatha Festivals"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <div className="absolute bottom-10 left-0 w-full text-center px-4">
          <Link href="/festivals">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 drop-shadow-lg">
              Sacred Celebrations
            </h1>
          </Link>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-6 pb-16 text-lg md:text-xl leading-relaxed text-gray-300 text-justify">
        <p>
          Narahari Parvatha comes alive during sacred occasions. Devotees from
          across the district gather here to perform the holy{" "}
          <span className="text-orange-400 font-semibold">Teerthasnana</span>{" "}
          (Holy Bath) in the four ponds, believing it cures ailments and washes
          away sins. The hill resonates with chants and devotion during these
          auspicious times.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 space-y-24 pb-10">
        {festivals.map((fest, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-orange-500/20 shadow-2xl">
              <Image
                src={fest.image}
                alt={fest.name}
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-100 inline-block">
                  {fest.name}
                </h2>
                <p className="text-orange-300/80 text-sm md:text-base font-medium tracking-wide uppercase mt-1">
                  {fest.subtitle}
                </p>
              </div>

              <div className="h-1 w-24 bg-gradient-to-r from-orange-800 to-orange-500 rounded-full my-4"></div>

              <p className="text-lg text-gray-300 leading-loose text-justify">
                {fest.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
