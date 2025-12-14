import HistoryComponent from "@/components/HistoryComponent";
import Hero from "../components/Hero";
import FestivalsComponent from "@/components/FestivalsComponent";
import LocationComponent from "@/components/LocationComponent";

export const metadata = {
  title: "Narahari Parvatha Sadashiva Temple | Narahari Parvatha",
  description:
    "Narahari Parvatha Sadashiva Temple is a historic pilgrimage center located 1,000 feet above sea level in Bantwal, Dakshina Kannada. Known as the 'Kailasa of the Earth,' the hill features 333 stone steps and four sacred Teertha ponds—Shanka, Chakra, Gadha, and Padma—created by Lord Krishna and Arjuna during the Mahabharata era. It is a primary location for the holy Aati Amavasye Teerthasnana and Shivarathri worship.",
  keywords: [
    "Narahari Parvatha",
    "Sadashiva Temple Bantwal",
    "Kailasa of the Earth",
    "Mangalore Pilgrimage Centers",
    "Shiva Temples Dakshina Kannada",
    "Hilltop Temples Karnataka",
    "Narahari Hill",
    "Bantwal Tourism",
    "333 Steps Temple",
    "Melkar Temple",
    "Dakshina Kannada Trekking",
  ],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <HistoryComponent />
      <FestivalsComponent />
      <LocationComponent />
    </main>
  );
}
