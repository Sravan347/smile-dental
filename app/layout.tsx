import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { clinic } from "@/data/clinic";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(clinic.website),
  title: {
    default: `${clinic.name} | Dental Clinic in Pathanamthitta, Kerala`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "Smile Dental Clinic provides comprehensive dental care in Pathanamthitta, Kerala. Explore treatments, meet the dental team and book an appointment.",
  alternates: { canonical: clinic.website },
  openGraph: {
    title: `${clinic.name} | Dental Clinic in Pathanamthitta, Kerala`,
    description:
      "Smile Dental Clinic provides comprehensive dental care in Pathanamthitta, Kerala. Explore treatments, meet the dental team and book an appointment.",
    url: clinic.website,
    siteName: clinic.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} | Dental Clinic in Pathanamthitta, Kerala`,
    description:
      "Smile Dental Clinic provides comprehensive dental care in Pathanamthitta, Kerala. Explore treatments, meet the dental team and book an appointment.",
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
      className={`${dmSerifDisplay.variable} ${manrope.variable}`}
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
