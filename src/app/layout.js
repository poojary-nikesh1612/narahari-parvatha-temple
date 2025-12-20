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
  alternates: {
    canonical: "/",
  },
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HinduTemple",
    name: "Narahari Parvatha Sadashiva Temple",
    description:
      "Ancient Hindu temple located in Bantwal, known as the Kailasa of the Earth. Famous for Aati Amavasye Teerthasnana, 333 steps and 4 Teertha ponds.",
    image: "https://narahariparvatha.vercel.app/images/preview-image.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shree Narahari Parvata Sadashiva Temple, Panemangalore",
      addressLocality: "Bantwal",
      addressRegion: "Karnataka",
      postalCode: "574222",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.852521525324299",
      longitude: "75.05583060695318",
    },
    url: "https://narahariparvatha.vercel.app",
    telephone: "+91-08277125877",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
