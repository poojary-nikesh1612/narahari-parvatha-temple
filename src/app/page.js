import HistoryComponent from "@/components/HistoryComponent";
import Hero from "../components/Hero";
import FestivalsComponent from "@/components/FestivalsComponent";
import LocationComponent from "@/components/LocationComponent";

export const metadata = {
  title: "Narahari Parvatha - The Kailasa of the Earth",
  description:
    "Visit Narahari Parvatha in Bantwal. Climb 333 steps to reach Lord Sadashiva. A historic spot where Arjuna and Krishna performed penance.",
  keywords: [
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
