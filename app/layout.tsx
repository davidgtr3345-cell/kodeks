import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tvoj-domen.ba"),
  title: {
    default: "Kodeks Studio | Web stranice i landing page za firme",
    template: "%s | Kodeks Studio",
  },
  description:
    "Kodeks Studio izrađuje moderne web stranice, landing page rješenja i uredne korisničke interfejse za firme i uslužne djelatnosti.",
  keywords: [
    "web stranice",
    "izrada web stranica",
    "landing page",
    "web dizajn",
    "UI dizajn",
    "Kodeks Studio",
    "web stranice za firme",
    "Bosna i Hercegovina",
  ],
  applicationName: "Kodeks Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.tvoj-domen.ba",
    siteName: "Kodeks Studio",
    title: "Kodeks Studio | Web stranice i landing page za firme",
    description:
      "Moderne web stranice, landing page rješenja i profesionalan online nastup za firme i usluge.",
    locale: "bs_BA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodeks Studio | Web stranice i landing page za firme",
    description:
      "Moderne web stranice, landing page rješenja i profesionalan online nastup za firme i usluge.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kodeks Studio",
    url: "https://www.tvoj-domen.ba",
    description:
      "Izrada modernih web stranica, landing page rješenja i UI sistema za firme i uslužne djelatnosti.",
    areaServed: "Bosnia and Herzegovina",
    serviceType: ["Web dizajn", "Landing page", "UI dizajn"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kodeks Studio",
    url: "https://www.tvoj-domen.ba",
    description:
      "Moderne web stranice, landing page rješenja i profesionalan online nastup za firme i usluge.",
    inLanguage: "bs-BA",
  };

  return (
    <html lang="bs">
      <body className="site-shell">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar />

        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}