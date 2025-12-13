import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://narahariparvatha.vercel.app"),
  title: {
    default: "Narahari Parvatha Sadashiva Temple |Narahari Parvatha ",
    template: "%s | Narahari Parvatha Temple",
  },
  description:
    "Official digital guide to Narahari Parvatha Sadashiva Temple, the 'Kailasa of the Earth' in Bantwal. Famous for its 333 steps, 4 sacred Teerthas, and ancient Mahabharata history.",
  keywords: [
    "Narahari Parvatha",
    "Sadashiva Temple Bantwal",
    "Kailasa of the Earth",
    "Mangalore Pilgrimage Centers",
    "Shiva Temples Dakshina Kannada",
    "Hilltop Temples Karnataka",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://narahariparvatha.vercel.app",
    siteName: "Narahari Parvatha Sadashiva Temple",
    images: [
      {
        url: "/images/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Narahari Parvatha Hill View",
      },
    ],
  },
  icons: {
    icon: "images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
