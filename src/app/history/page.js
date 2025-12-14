import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "History & Mythology",
  description:
    "Discover the Mahabharata legend of Narahari Parvatha. Learn how Lord Krishna (Hari) and Arjuna (Nara) created the 4 sacred Teerthas: Shanka, Chakra, Gadha, and Padma.",
  keywords: [
    "Nara Hari Legend",
    "Pandavas Mangalore",
    "Shanka Teertha",
    "Chakra Teertha",
    "Mahabharata Temples Karnataka",
    "Temple History Bantwal",
    "4 Teerthas of narahari parvatha",
  ],
};

export default function HistoryPage() {
  const ponds = [
    {
      name: "Shanka Teertha (The Conch)",
      desc: "This pond is shaped like a Shanka (Conch Shell), symbolizing the divine sound of Omkara and purity. It is believed that Lord Krishna created this Teertha to wash away the sins of the devotees. A dip in this water is said to bring peace of mind and clarity.",
      image: "/images/shanka.jpg",
    },
    {
      name: "Chakra Teertha (The Wheel)",
      desc: "Resembling the Sudarshana Chakra, this pond represents the wheel of time and Dharma. Legend says that Krishna used his Chakra to carve this water body out of the hard rock. Devotees believe that bathing here protects them from evil forces and restores cosmic balance in their lives.",
      image: "/images/chakra.jpg",
    },
    {
      name: "Gadha Teertha (The Mace)",
      desc: "Shaped like the mighty Mace (Gadha) of Lord Vishnu, this Teertha symbolizes strength and power. It is traditionally believed that this water has medicinal properties, curing physical ailments and granting vitality to those who bathe in it with devotion.",
      image: "/images/gadha.jpg",
    },
    {
      name: "Padma Teertha (The Lotus)",
      desc: "The final pond is in the shape of a Padma (Lotus), representing spiritual unfolding and purity. It marks the completion of the purification ritual. After visiting the other three ponds, devotees take a final dip here before proceeding to the main temple for Darshan.",
      image: "/images/padma.jpg",
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white pt-0 pb-12">
      <div className="w-full h-[60vh] relative">
        <Image
          src="/images/temple-image.png"
          alt="Narahari Parvatha"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-10 left-0 w-full text-center px-4">
          <Link href="/history">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 drop-shadow-lg">
              History & Mythology
            </h1>
          </Link>
        </div>
      </div>
      <section className="max-w-5xl mx-auto px-6 pb-16 space-y-8 text-lg md:text-xl leading-relaxed text-gray-300 text-justify">
        <p>
          Narahari Sadashiva Temple is situated on the top of Narahari Hill near
          Melkar, which is about 28 Kms from Mangalore city and 4 Kms from BC
          Road, Bantwal. It stands majestically at a height of 1000 feet above
          sea level. Popularly known as the{" "}
          <span className="text-orange-400 font-semibold">
            "Kailasa of the Earth"
          </span>
          , this ancient hill is not just a geological marvel but a sanctuary of
          immense spiritual power.
        </p>

        <p>
          The history of this sacred place dates back to the age of the
          Mahabharata. Legend has it that after the Great War of Kurukshetra,{" "}
          <span className="text-white font-bold">Arjuna (Nara)</span> and{" "}
          <span className="text-white font-bold">Lord Krishna (Hari)</span>{" "}
          visited this place to perform penance. They sought to cleanse
          themselves of the sins and heavy emotions incurred during the war.
          Finding this hill suitable for their meditation, they stayed here for
          a significant period. Since both Nara (Arjuna) and Hari (Krishna)
          resided here, the hill came to be known as{" "}
          <strong>Narahari Parvatha</strong>.
        </p>

        <p>
          To reach the summit, devotees must climb{" "}
          <span className="text-orange-400 font-bold">333 steps</span>. This
          climb is considered a part of the pilgrimage itself. As you ascend,
          you will see "Shiva Shiva" painted on the railings and steps, turning
          the physical effort into a chanting meditation. Recently, a road has
          also been constructed for elderly devotees, but the traditional stone
          steps remain the path of choice for those seeking the full spiritual
          experience.
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-10 space-y-24">
        {ponds.map((pond, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 relative h-[350px] rounded-xl overflow-hidden border border-white/20 shadow-2xl cursor-pointer">
              <Image
                src={pond.image}
                alt={pond.name}
                fill
                className="object-cover "
              />
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
                {pond.name}
              </h3>
              <div className="h-1 w-20 bg-orange-600 rounded-full"></div>
              <p className="text-lg text-gray-300 leading-loose text-justify">
                {pond.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      <div className="max-w-6xl mx-auto px-6 italic py-10 text-xl md:text-2xl font-light leading-relaxed text-gray-300 text-justify">
        <p>
          “ Today, Narahari Parvatha stands as a testament to this divine
          intervention. It is a place where nature meets divinity, where the
          hard rock yields to faith, and where the silence of the hill speaks
          the ancient stories of the Mahabharata to every devotee who climbs its
          steps. ”
        </p>
      </div>
    </main>
  );
}
