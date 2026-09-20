import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.website),
  title: {
    default: `${clinic.name} | Dental & Orthodontic Care in Adoor`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "Plavilayil Dental Clinic & Orthodontic Speciality Centre provides thoughtful dental care in Adoor, Kerala.",
  alternates: { canonical: clinic.website },
  openGraph: {
    title: `${clinic.name} | Dental & Orthodontic Care in Adoor`,
    description:
      "Plavilayil Dental Clinic & Orthodontic Speciality Centre provides thoughtful dental care in Adoor, Kerala.",
    url: clinic.website,
    siteName: clinic.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} | Dental & Orthodontic Care in Adoor`,
    description:
      "Plavilayil Dental Clinic & Orthodontic Speciality Centre provides thoughtful dental care in Adoor, Kerala.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className=""
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
