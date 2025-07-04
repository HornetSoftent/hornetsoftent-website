import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hornet SoftEnt.",
  description: "L'art de créer des expériences exceptionnelles, renforcé par notre passion pour l'excellence, est au cœur de Hornet Softent. Nous sommes guidés par la volonté de concevoir des applications et prochainment des jeux.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
    <head>
      <meta name="apple-mobile-web-app-title" content="Hornet SoftEnt." />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
